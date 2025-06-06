package profile

import (
	"fmt"
	auditlog "github.com/teamhanko/hanko/backend/audit_log"
	"github.com/teamhanko/hanko/backend/flow_api/flow/shared"
	"github.com/teamhanko/hanko/backend/flow_api/services"
	"github.com/teamhanko/hanko/backend/flowpilot"
	"github.com/teamhanko/hanko/backend/persistence/models"
	"github.com/teamhanko/hanko/backend/webhooks/events"
	"github.com/teamhanko/hanko/backend/webhooks/utils"
)

type UsernameCreate struct {
	shared.Action
}

func (a UsernameCreate) GetName() flowpilot.ActionName {
	return shared.ActionUsernameCreate
}

func (a UsernameCreate) GetDescription() string {
	return "Create a new username."
}

func (a UsernameCreate) Initialize(c flowpilot.InitializationContext) {
	deps := a.GetDeps(c)

	userModel, ok := c.Get("session_user").(*models.User)
	if !ok {
		c.SuspendAction()
		return
	}

	if !deps.Cfg.Username.Enabled || userModel.Username != nil {
		c.SuspendAction()
		return
	}

	c.AddInputs(flowpilot.StringInput("username").
		Preserve(true).
		Required(true).
		MinLength(deps.Cfg.Username.MinLength).
		MaxLength(deps.Cfg.Username.MaxLength).
		TrimSpace(true).
		LowerCase(true))
}

func (a UsernameCreate) Execute(c flowpilot.ExecutionContext) error {
	deps := a.GetDeps(c)

	if valid := c.ValidateInputData(); !valid {
		return c.Error(flowpilot.ErrorFormDataInvalid)
	}

	userModel, ok := c.Get("session_user").(*models.User)
	if !ok {
		return c.Error(flowpilot.ErrorOperationNotPermitted)
	}

	username := c.Input().Get("username").String()

	if !services.ValidateUsername(username) {
		c.Input().SetError("username", shared.ErrorInvalidUsername)
		return c.Error(flowpilot.ErrorFormDataInvalid)
	}

	duplicateUsername, err := deps.Persister.GetUsernamePersisterWithConnection(deps.Tx).GetByName(username)
	if err != nil {
		return fmt.Errorf("failed to get user from db: %w", err)
	}

	if duplicateUsername != nil && duplicateUsername.ID.String() != userModel.ID.String() {
		c.Input().SetError("username", shared.ErrorUsernameAlreadyExists)
		return c.Error(flowpilot.ErrorFormDataInvalid)
	}

	usernameModel := models.NewUsername(userModel.ID, username)
	err = deps.Persister.GetUsernamePersisterWithConnection(deps.Tx).Create(*usernameModel)
	if err != nil {
		return fmt.Errorf("failed to create username: %w", err)
	}
	userModel.SetUsername(usernameModel)

	err = deps.AuditLogger.CreateWithConnection(
		deps.Tx,
		deps.HttpContext,
		models.AuditLogUsernameChanged,
		&models.User{ID: userModel.ID},
		nil,
		auditlog.Detail("username", usernameModel.Username),
		auditlog.Detail("flow_id", c.GetFlowID()))

	if err != nil {
		return fmt.Errorf("could not create audit log: %w", err)
	}

	utils.NotifyUserChange(deps.HttpContext, deps.Tx, deps.Persister, events.UserUsernameCreate, userModel.ID)

	return c.Continue(shared.StateProfileInit)
}
