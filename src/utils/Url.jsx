
export const baseurl = 'http://localhost/'

//superlogin

export const superAdminLoginUrl = baseurl+"SuperAdmin/login"
export const getUsersUrl = baseurl+"superadmin/getallusers"

//fintex

export const fintexLoginUrl = baseurl+"FinanceCompany/login"

export const createAdminUrl = baseurl+"superadmin/createadmin";
export const updatePasswordUrl = baseurl+"superadmin/updatepassword";

export const userActivateDeactivateUrl = baseurl+"superadmin/activateDeactivateUser";

export const updatePasswordMicrofinance = baseurl+"FinanceCompany/updateUserPassword";

export const createEmployeeLoginUrl = baseurl+"FinanceCompany/createLoginCredential";
export const getAllEmployeeUrl = baseurl+"financecompany/getAllEmployees";

export const editUserProfile = baseurl+"financecompany/updateEmployeeProfile"



//Ledger



export const getallSubLedger = baseurl+"accountsetup/getAllsubLedgers"

export const getAllLedger = baseurl+"accountsetup/ledgers"

export const getLedgerByGroupType = baseurl+"accountsetup/ledgers/groupType"

export const getUniqueGlCode = baseurl+"accountsetup/unique-ledgerId"

export const updateLedgerUrl = baseurl+"AccountSetup/updateLedger"


export const updateSubLedger = baseurl+"AccountSetup/updateSubLedger"

//Account Setup
export const getallGroupTypes = "AccountSetup/getAllGrouptypes"

export const accountTypesUrl = baseurl+"accountsetup/accounttypes"


export const createGroupUrl = baseurl+"accountsetup/createGrouptype"
export const updateGroupDataUrl = baseurl+"AccountSetup/update-grouptype"
export const accoutTypeByIdUrl = baseurl+"AccountSetup/grouptypes/accounttype?accountTypeId"

export const ledgerDetailByAccountTypeUrl = baseurl+"accountsetup/grouptypes/accounttype?accountTypeId"


export const allLedgerDataUrl = baseurl+"accountsetup/ledgers"
export const createLedgerUrl = baseurl+"accountsetup/createledger"
export const getAllLedgers=baseurl+"AccountSetup/getAllLedgers"

export const groupByAccountIdUrl = baseurl+"accountsetup/grouptypes/accounttype?accountTypeId"

export const getLedgerByGroupId = baseurl+"accountsetup/ledgers/grouptype?groupTypeId"


export const createSubLedgerUrl = baseurl+"accountsetup/createSubledger"

export const getSubLedgerByLedger = baseurl+"accountSetup/subledgers/ledger?ledgerId="



export const createBankUrl = baseurl+"accountsetup/creatBankSetup"

export const getAllBanks = baseurl+"accountSetup/getAllBankSetup"

export const updateBankUrl = baseurl+"AccountSetup/updateBankSetup"



//Employee

export const createEmployeeUrl = baseurl+"financecompany/createEmployee"

export const getEmployeeById = baseurl+"FinanceCompany/getemployeeById?id="

export const getUserByUserName = baseurl+"FinanceCompany/getuser/username?userName="





//Company Profile

export const getAllBranches = baseurl+"CompanyProfile/getAllBranch"

export const createBranchUrl = baseurl+"CompanyProfile/createbranch"

export const updateBranchUrl = baseurl+"CompanyProfile/updateBranch"


export const createCompanyProfile = baseurl+"CompanyProfile/createCompanyProfile"
export const updatecompanyprofile = baseurl+"CompanyProfile/updateCompanyProfile"

export const getCompanyProfile = baseurl+"CompanyProfile/getCompanyProfile"


// Calander

export const createCalander = baseurl+"CompanyProfile/createCalendars"

export const getallCalenders = baseurl+"CompanyProfile/getAllCalendars"
export const updateCalander = baseurl+"CompanyProfile/updateCalendar"



//Clinet

export const createClient = baseurl+"ClientSetup/createNewClient"

export const getAllClients=baseurl+"ClientSetup/getAllClients"




//Deposit

export const createDepositSchemeUrl = baseurl+"DepositScheme/create"
export const updatedepositSchemeUrl = baseurl+"DepositScheme/updateDepositScheme"
export const getallClientsUrl = baseurl+"ClientSetup/getAllClients"
export const getAllDepositSchemeUrl = baseurl+"DepositScheme/all" 
export const getAllDepositAccount=baseurl+"DepositAccount/all"


export const createDepositAccountUrl = baseurl+"DepositAccount/create"

export const getAllEmployeesByBranch = baseurl+"FinanceCompany/getAllEmployeeFromUserBranch"


export const getAllNonClosedDepostAccount = baseurl+"DepositAccount/all"



//Transaction

export const makeDepositUrl=baseurl+"Transaction/makeDeposit"
export const withdrawalUrl=baseurl+"Transaction/makeWithDrawal"


//Set Share price

export const sharePriceUrl=baseurl+"Share/shareKitta"

export const shareTransaction=baseurl+"Transaction/share"

export const getAllShareByClientId=baseurl+"Share?clientMemberId="



// Report

export const getLedgerReport=baseurl+"TransactionReport/ledger?"