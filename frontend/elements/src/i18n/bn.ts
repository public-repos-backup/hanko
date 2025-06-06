import { Translation } from "./translations";

export const bn: Translation = {
  headlines: {
    error: "একটি ত্রুটি উৎপন্ন হয়েছে",
    loginEmail: "সাইন ইন করুন অথবা নিবন্ধন করুন",
    loginEmailNoSignup: "সাইন ইন",
    loginFinished: "সফল লগইন",
    loginPasscode: "পাসকোড দিন",
    loginPassword: "পাসওয়ার্ড লিখুন",
    registerAuthenticator: "একটি পাসকি তৈরি করুন",
    registerConfirm: "অ্যাকাউন্ট তৈরি করুন",
    registerPassword: "নতুন পাসওয়ার্ড সেট করুন",
    otpSetUp: "প্রমাণীকরণ অ্যাপ সেট আপ করুন",
    profileEmails: "ইমেইল",
    profilePassword: "পাসওয়ার্ড",
    profilePasskeys: "পাসকি",
    isPrimaryEmail: "প্রাথমিক ইমেইল",
    setPrimaryEmail: "প্রাথমিক ইমেল সেট করুন",
    createEmail: "নতুন ইমেইল লিখুন",
    createUsername: "নতুন ব্যবহারকারী নাম লিখুন",
    emailVerified: "যাচাইকৃত ",
    emailUnverified: "অযাচাইকৃত",
    emailDelete: "মুছে ফেলা",
    renamePasskey: "পাসকির নাম পরিবর্তন করুন",
    deletePasskey: "পাসকি মুছুন",
    lastUsedAt: "শেষবার ব্যবহার করা হয়েছে",
    createdAt: "এ নির্মিত",
    connectedAccounts: "সংযুক্ত অ্যাকাউন্ট",
    deleteAccount: "অ্যাকাউন্ট মুছে ফেলুন",
    accountNotFound: "অ্যাকাউন্ট পাওয়া যাচ্ছে না",
    signIn: "সাইন ইন",
    signUp: "নিবন্ধন করুন",
    selectLoginMethod: "লগইন পদ্ধতি নির্বাচন করুন",
    setupLoginMethod: "লগইন পদ্ধতি সেটআপ করুন",
    lastUsed: "সর্বশেষ দেখা হয়েছে",
    ipAddress: "আইপি ঠিকানা",
    revokeSession: "সেশন বাতিল করুন",
    profileSessions: "সেশন",
    mfaSetUp: "MFA সেট আপ করুন",
    securityKeySetUp: "সিকিউরিটি কি যোগ করুন",
    securityKeyLogin: "সিকিউরিটি কি",
    otpLogin: "প্রমাণীকরণ কোড",
    renameSecurityKey: "সিকিউরিটি কি এর নামকরণ করুন",
    deleteSecurityKey: "সিকিউরিটি কি মুছুন",
    securityKeys: "সিকিউরিটি কিগুলি",
    authenticatorApp: "প্রমাণীকরণ অ্যাপ",
    authenticatorAppAlreadySetUp: "প্রমাণীকরণ অ্যাপ সেট আপ করা হয়েছে",
    authenticatorAppNotSetUp: "প্রমাণীকরণ অ্যাপ সেট আপ করুন",
    trustDevice: "এই ব্রাউজারটি বিশ্বাস করবেন?",
  },
  texts: {
    enterPasscode: 'যে পাসকোডটি পাঠানো হয়েছিল "{emailAddress}" এ তা লিখুন.',
    enterPasscodeNoEmail:
      "আপনার প্রাথমিক ইমেল ঠিকানায় প্রেরিত পাসকোডটি লিখুন।",
    setupPasskey:
      "একটি পাসকি দিয়ে সহজে এবং নিরাপদে আপনার অ্যাকাউন্টে সাইন ইন করুন। দ্রষ্টব্য: আপনার বায়োমেট্রিক ডেটা শুধুমাত্র আপনার ডিভাইসে সংরক্ষিত থাকে এবং কখনই কারো সাথে শেয়ার করা হবে না।",
    createAccount:
      '"{emailAddress}"-এর জন্য কোনো অ্যাকাউন্ট বিদ্যমান নেই। আপনি একটি নতুন অ্যাকাউন্ট তৈরি করতে চান?',
    otpEnterVerificationCode:
      "আপনার প্রমাণীকরণ অ্যাপ থেকে প্রাপ্ত একবারের পাসওয়ার্ড (OTP) নিচে লিখুন:",
    otpScanQRCode:
      "আপনার প্রমাণীকরণ অ্যাপ দিয়ে QR কোড স্ক্যান করুন (যেমন Google Authenticator বা অন্য কোনো TOTP অ্যাপ)। বিকল্পভাবে, আপনি অ্যাপে OTP গোপন কী ম্যানুয়ালি লিখতে পারেন।",
    otpSecretKey: "OTP গোপন কী",
    passwordFormatHint: "{minLength} এবং {maxLength} অক্ষরের মধ্যে হতে হবে।",
    setPrimaryEmail:
      "এই ইমেইল ঠিকানা আপনার সাথে যোগাযোগ করার জন্য নির্ধারণ করুন।",
    isPrimaryEmail:
      "প্রয়োজন হলে এই ইমেল ঠিকানা ব্যবহার করা হবে আপনার সাথে যোগাযোগ করার জন্য।",
    emailVerified: "এই ইমেল ঠিকানা যাচাই করা হয়েছে.",
    emailUnverified: "এই ইমেল ঠিকানা যাচাই করা হয়নি.",
    emailDelete:
      "আপনি এই ইমেল ঠিকানা মুছে ফেললে, এটি আর সাইন ইন করতে ব্যবহার করা যাবে না.",
    renamePasskey: "পাসকির জন্য একটি নাম সেট করুন।",
    deletePasskey: "আপনার অ্যাকাউন্ট থেকে এই পাসকি মুছুন.",
    deleteAccount:
      "আপনি কি এই অ্যাকাউন্টটি মুছে ফেলার বিষয়ে নিশ্চিত? সমস্ত ডেটা অবিলম্বে মুছে ফেলা হবে এবং পুনরুদ্ধার করা যাবে না।",
    noAccountExists: '"{emailAddress}"-এর জন্য কোনো অ্যাকাউন্ট বিদ্যমান নেই।',
    selectLoginMethodForFutureLogins:
      "ভবিষ্যতে লগইনের জন্য একটি প্রয়োজনীয় লগইন পদ্ধতি নির্বাচন করুন।",
    howDoYouWantToLogin: "আপনি কিভাবে লগইন করতে চান?",
    mfaSetUp:
      "মাল্টি-ফ্যাক্টর প্রমাণীকরণের (MFA) মাধ্যমে আপনার অ্যাকাউন্ট সুরক্ষিত করুন। MFA আপনার লগইন প্রক্রিয়ায় একটি অতিরিক্ত পদক্ষেপ যোগ করে, নিশ্চিত করে যে আপনার পাসওয়ার্ড বা ইমেইল অ্যাকাউন্ট ক্ষতিগ্রস্ত হলে আপনার অ্যাকাউন্ট সুরক্ষিত থাকে।",
    securityKeyLogin:
      "আপনার নিরাপত্তা কী সংযুক্ত বা সক্রিয় করুন, তারপর নীচের বোতামটিতে ক্লিক করুন। প্রস্তুত হলে, USB, NFC, আপনার মোবাইল ফোনের মাধ্যমে এটি ব্যবহার করুন। লগইন প্রক্রিয়া সম্পূর্ণ করতে নির্দেশাবলীর অনুসরণ করুন।",
    otpLogin:
      "এককালীন পাসওয়ার্ড (OTP) প্রাপ্ত করতে আপনার প্রমাণীকরণ অ্যাপ খুলুন। আপনার লগইন সম্পূর্ণ করতে নীচের ক্ষেত্রে কোড প্রবেশ করুন।",
    renameSecurityKey: "নিরাপত্তা কী জন্য একটি নাম সেট করুন।",
    deleteSecurityKey: "এই নিরাপত্তা কীটি আপনার অ্যাকাউন্ট থেকে মুছে ফেলুন।",
    authenticatorAppAlreadySetUp:
      "আপনার অ্যাকাউন্ট একটি প্রমাণীকরণ অ্যাপ দ্বারা সুরক্ষিত যা মাল্টি-ফ্যাক্টর প্রমাণীকরণের জন্য সময়-ভিত্তিক এককালীন পাসওয়ার্ড (TOTP) তৈরি করে।",
    authenticatorAppNotSetUp:
      "মাল্টি-ফ্যাক্টর প্রমাণীকরণের জন্য সময়-ভিত্তিক এককালীন পাসওয়ার্ড (TOTP) তৈরি করার জন্য একটি প্রমাণীকরণ অ্যাপ দ্বারা আপনার অ্যাকাউন্টটি সুরক্ষিত করুন।",
    securityKeySetUp: "নিরাপত্তা কী যুক্ত করুন",
    trustDevice:
      "যদি আপনি এই ব্রাউজারটিকে বিশ্বাস করেন, তবে পরেরবার লগইন করার সময় আপনাকে আপনার OTP (ওয়ান-টাইম-পাসওয়ার্ড) প্রবেশ করাতে হবে না বা মাল্টি-ফ্যাক্টর অথেনটিকেশন (MFA) এর জন্য আপনার সিকিউরিটি কী ব্যবহার করতে হবে না।",
  },
  labels: {
    or: "বা",
    no: "না",
    yes: "হ্যাঁ",
    email: "ইমেইল",
    continue: "চালিয়ে যান",
    copied: "নকল করা হয়েছে",
    skip: "এড়িয়ে যান",
    save: "সংরক্ষণ",
    passkey: "পাসওয়ার্ড",
    passcode: "পাসকোড",
    password: "পাসওয়ার্ড",
    signInPassword: "একটি পাসওয়ার্ড দিয়ে সাইন ইন",
    signInPasscode: "একটি পাসকোড দিয়ে সাইন ইন করুন",
    forgotYourPassword: "আপনি কি পাসওয়ার্ড ভুলে গেছেন?",
    back: "পেছনে",
    signInPasskey: "একটি পাসকি দিয়ে সাইন ইন করুন",
    registerAuthenticator: "একটি পাসকি তৈরি করুন",
    signIn: "সাইন ইন করুন",
    signUp: "সাইন আপ",
    sendNewPasscode: "নতুন কোড পাঠান",
    passwordRetryAfter: "{passwordRetryAfter} এ আবার চেষ্টা করুন",
    passcodeResendAfter: "{passcodeResendAfter} এ একটি নতুন কোডের অনুরোধ করুন",
    unverifiedEmail: "অযাচাইকৃত",
    primaryEmail: "প্রাথমিক",
    setAsPrimaryEmail: "প্রাথমিক হিসাবে সেট করুন",
    verify: "যাচাই করুন",
    delete: "মুছুন",
    newEmailAddress: "নতুন ইমেইল ঠিকানা",
    newPassword: "নতুন পাসওয়ার্ড",
    rename: "নাম পরিবর্তন করুন",
    newPasskeyName: "নতুন পাসকি নাম",
    addEmail: "ইমেল যোগ করুন",
    createPasskey: "একটি পাসকি তৈরি করুন",
    webauthnUnsupported: "পাসকিগুলি আপনার ব্রাউজার দ্বারা সমর্থিত নয়৷",
    signInWith: "{provider} দিয়ে সাইন ইন করুন",
    deleteAccount: "হ্যাঁ, এই অ্যাকাউন্টটি মুছুন.",
    emailOrUsername: "ইমেল বা ব্যবহারকারীর নাম",
    username: "ব্যবহারকারীর নাম",
    optional: "ঐচ্ছিক",
    dontHaveAnAccount: "একটি অ্যাকাউন্ট নেই?",
    alreadyHaveAnAccount: "ইতিমধ্যে অ্যাকাউন্ট আছে?",
    changeUsername: "ব্যবহারকারীর নাম পরিবর্তন করুন",
    setUsername: "ব্যবহারকারীর নাম সেট করুন",
    changePassword: "পাসওয়ার্ড পরিবর্তন করুন",
    setPassword: "পাসওয়ার্ড সেট করুন",
    revoke: "বাতিল করুন",
    currentSession: "বর্তমান সেশন",
    authenticatorApp: "প্রমাণীকরণ অ্যাপ",
    securityKey: "নিরাপত্তা কী",
    securityKeyUse: "নিরাপত্তা কী ব্যবহার করুন",
    newSecurityKeyName: "নতুন নিরাপত্তা কী নাম",
    createSecurityKey: "নিরাপত্তা কী যোগ করুন",
    authenticatorAppManage: "প্রমাণীকরণ অ্যাপ পরিচালনা করুন",
    authenticatorAppAdd: "সেট আপ করুন",
    configured: "কনফিগার করা হয়েছে",
    useAnotherMethod: "আরেকটি পদ্ধতি ব্যবহার করুন",
    lastUsed: "সর্বশেষ ব্যবহৃত",
    trustDevice: "এই ব্রাউজারটি বিশ্বাস করবেন",
    staySignedIn: "সাইন ইন থাকা চালিয়ে যান",
  },
  errors: {
    somethingWentWrong:
      "একটি প্রযুক্তিগত ত্রুটি ঘটেছে. অনুগ্রহ করে একটু পরে আবার চেষ্টা করুন.",
    requestTimeout: "অনুরোধ সময় শেষ হয়েছে.",
    invalidPassword: "ভুল ইমেইল বা পাসওয়ার্ড।",
    invalidPasscode: "দেওয়া পাসকোড সঠিক ছিল না।",
    passcodeAttemptsReached:
      "পাসকোডটি অনেকবার ভুলভাবে প্রবেশ করানো হয়েছে৷ একটি নতুন কোড অনুরোধ করুন.",
    tooManyRequests:
      "অনেক অনুরোধ করা হয়েছে. অনুগ্রহ করে অনুরোধকৃত অপারেশন পুনরাবৃত্তি করার জন্য অপেক্ষা করুন।",
    unauthorized:
      "আপনার সেশনের মেয়াদ শেষ হয়ে গেছে। অনুগ্রহ পূর্বক আরো একবার প্রবেশ করুন.",
    invalidWebauthnCredential: "এই পাসকি আর ব্যবহার করা যাবে না।",
    passcodeExpired: "পাসকোড মেয়াদ শেষ হয়েছে. একটি নতুন অনুরোধ করুন.",
    userVerification:
      "ব্যবহারকারী যাচাইকরণ প্রয়োজন. অনুগ্রহ করে নিশ্চিত করুন যে আপনার প্রমাণীকরণকারী ডিভাইসটি একটি পিন বা বায়োমেট্রিক দ্বারা সুরক্ষিত।",
    emailAddressAlreadyExistsError: "ইমেল ঠিকানাটি ইতিমধ্যেই বিদ্যমান।",
    maxNumOfEmailAddressesReached: "আর কোন ইমেল ঠিকানা যোগ করা যাবে না.",
    thirdPartyAccessDenied:
      "অ্যাক্সেস অস্বীকার করা হয়েছে৷ অনুরোধটি ব্যবহারকারীর দ্বারা বাতিল করা হয়েছে বা প্রদানকারী অন্যান্য কারণে অ্যাক্সেস অস্বীকার করেছে৷",
    thirdPartyMultipleAccounts:
      "অ্যাকাউন্ট শনাক্ত করতে পারে না। ইমেল ঠিকানা একাধিক অ্যাকাউন্ট দ্বারা ব্যবহৃত হয়।",
    thirdPartyUnverifiedEmail:
      "ইমেল যাচাইকরণ প্রয়োজন. অনুগ্রহ করে আপনার প্রদানকারীর সাথে ব্যবহৃত ইমেল ঠিকানা যাচাই করুন।",
    signupDisabled: "অ্যাকাউন্ট নিবন্ধন নিষ্ক্রিয় করা হয়েছে",
    handlerNotFoundError: "কার্যকরী পদক্ষেপ পাওয়া যায়নি",
  },
  flowErrors: {
    technical_error:
      "একটি প্রযুক্তিগত ত্রুটি ঘটেছে. অনুগ্রহ করে একটু পরে আবার চেষ্টা করুন.",
    flow_expired_error:
      "সেশনটি মেয়াদ উত্তীর্ণ হয়েছে, দয়া করে পুনরায় শুরু করতে বাটনটি ক্লিক করুন।",
    value_invalid_error: "প্রবেশিত মান অবৈধ।",
    passcode_invalid: "প্রদত্ত পাসকোড সঠিক নয়।",
    passkey_invalid: "এই পাসকী আর ব্যবহার করা যাবে না",
    passcode_max_attempts_reached:
      "পাসকোডটি অনেকবার ভুল ভাবে প্রবেশ করা হয়েছে। দয়া করে নতুন কোড অনুরোধ করুন।",
    rate_limit_exceeded:
      "অনেকগুলি অনুরোধ করা হয়েছে। অনুরোধকৃত অপারেশন পুনরায় প্রয়াত করতে অপেক্ষা করুন।",
    unknown_username_error: "ব্যবহারকারীর নাম অজানা।",
    unknown_email_error: "ইমেইল ঠিকানাটি অজানা।",
    username_already_exists: "ব্যবহারকারীর নাম ইতিমধ্যে নেওয়া হয়েছে।",
    invalid_username_error:
      "ব্যবহারকারীর নাম শুধুমাত্র অক্ষর, সংখ্যা এবং আন্ডারস্কোর থাকতে পারে।",
    email_already_exists: "ইমেলটি ইতিমধ্যে নেওয়া হয়েছে।",
    not_found: "অনুরোধ করা রিসোর্সটি পাওয়া যায়নি।",
    operation_not_permitted_error: "অপারেশন অনুমোদিত নয়।",
    flow_discontinuity_error:
      "ব্যবহারকারীর সেটিংস বা প্রদানকারীর কনফিগারেশনের কারণে প্রক্রিয়াটি চালিয়ে যাওয়া সম্ভব নয়।",
    form_data_invalid_error: "জমা দেওয়া ফর্ম ডেটাতে ত্রুটি রয়েছে।",
    unauthorized:
      "আপনার সেশনের মেয়াদ শেষ হয়ে গেছে। অনুগ্রহ পূর্বক আরো একবার প্রবেশ করুন.",
    value_missing_error: "মান অনুপস্থিত।",
    value_too_long_error: "মানটি খুব দীর্ঘ।",
    value_too_short_error: "মানটি খুব ছোট।",
    webauthn_credential_invalid_mfa_only:
      "এই প্রমাণপত্রটি কেবল দ্বিতীয় ফ্যাক্টর নিরাপত্তা কী হিসাবে ব্যবহার করা যেতে পারে।",
    webauthn_credential_already_exists:
      "অনুরোধটি সময়সীমা শেষ হয়ে গেছে, বাতিল হয়েছে অথবা ডিভাইসটি ইতিমধ্যে নিবন্ধিত। পুনরায় চেষ্টা করুন অথবা অন্য একটি ডিভাইস ব্যবহার করে চেষ্টা করুন।",
    platform_authenticator_required:
      "আপনার অ্যাকাউন্ট প্ল্যাটফর্ম প্রমাণীকরণকারীদের ব্যবহার করতে কনফিগার করা হয়েছে, তবে আপনার বর্তমান ডিভাইস বা ব্রাউজার এই বৈশিষ্ট্য সমর্থন করে না। দয়া করে একটি সামঞ্জস্যপূর্ণ ডিভাইস বা ব্রাউজার ব্যবহার করে আবার চেষ্টা করুন।",
    third_party_access_denied:
      "অ্যাক্সেস অস্বীকার করা হয়েছে৷ অনুরোধটি ব্যবহারকারীর দ্বারা বাতিল করা হয়েছে বা প্রদানকারী অন্যান্য কারণে অ্যাক্সেস অস্বীকার করেছে৷",
  },
};
