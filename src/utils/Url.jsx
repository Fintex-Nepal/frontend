
// export const baseurl = process.env.REACT_APP_BASE_URL || 'http://localhost/'

//superlogin

export const superAdminLoginUrl = "/api/SuperAdmin/login"
export const getUsersUrl = "/api/superadmin/getallusers"

//fintex

export const fintexLoginUrl = "/api/FinanceCompany/login"

export const createAdminUrl = "/api/superadmin/createadmin";
export const updatePasswordUrl = "/api/superadmin/updatepassword";

export const userActivateDeactivateUrl = "/api/superadmin/activateDeactivateUser";

export const updatePasswordMicrofinance = "/api/FinanceCompany/updateUserPassword";

export const createEmployeeLoginUrl = "/api/FinanceCompany/createLoginCredential";
export const getAllEmployeeUrl = "/api/financecompany/getAllEmployees";

export const editUserProfile = "/api/financecompany/updateEmployeeProfile"



//Ledger



export const getallSubLedger = "/api/accountsetup/getAllsubLedgers"

export const getAllLedger = "/api/accountsetup/ledgers"

export const getLedgerByGroupType = "/api/accountsetup/ledgers/groupType"

export const getUniqueGlCode = "/api/accountsetup/unique-ledgerId"

export const updateLedgerUrl = "/api/AccountSetup/updateLedger"


export const updateSubLedger = "/api/AccountSetup/updateSubLedger"

//Account Setup
export const getallGroupTypes = "AccountSetup/getAllGrouptypes"

export const accountTypesUrl = "/api/accountsetup/accounttypes"


export const createGroupUrl = "/api/accountsetup/createGrouptype"
export const updateGroupDataUrl = "/api/AccountSetup/update-grouptype"
export const accoutTypeByIdUrl = "/api/AccountSetup/grouptypes/accounttype?accountTypeId"

export const ledgerDetailByAccountTypeUrl = "/api/accountsetup/grouptypes/accounttype?accountTypeId"


export const allLedgerDataUrl = "/api/accountsetup/ledgers"
export const createLedgerUrl = "/api/accountsetup/createledger"

export const groupByAccountIdUrl = "/api/accountsetup/grouptypes/accounttype?accountTypeId"

export const getLedgerByGroupId = "/api/accountsetup/ledgers/grouptype?groupTypeId"


export const createSubLedgerUrl = "/api/accountsetup/createSubledger"

export const getSubLedgerByLedger = "/api/accountSetup/subledgers/ledger?ledgerId="



export const createBankUrl = "/api/accountsetup/creatBankSetup"

export const getAllBanks = "/api/accountSetup/getAllBankSetup"

export const updateBankUrl = "/api/AccountSetup/updateBankSetup"



//Employee

export const createEmployeeUrl = "/api/financecompany/createEmployee"

export const getEmployeeById = "/api/FinanceCompany/getemployeeById?id="

export const getUserByUserName = "/api/FinanceCompany/getuser/username?userName="





//Company Profile

export const getAllBranches = "/api/CompanyProfile/getAllBranch"

export const createBranchUrl = "/api/CompanyProfile/createbranch"

export const updateBranchUrl = "/api/CompanyProfile/updateBranch"


export const createCompanyProfile = "/api/CompanyProfile/createCompanyProfile"
export const updatecompanyprofile = "/api/CompanyProfile/updateCompanyProfile"

export const getCompanyProfile = "/api/CompanyProfile/getCompanyProfile"


// Calander

export const createCalander = "/api/CompanyProfile/createCalendars"

export const getallCalenders = "/api/CompanyProfile/getAllCalendars"
export const updateCalander = "/api/CompanyProfile/updateCalendar"



//Clinet

export const createClient = "/api/ClientSetup/createNewClient"




//Deposit

export const createDepositSchemeUrl = "/api/DepositScheme/createDepositScheme"
export const updatedepositSchemeUrl = "/api/DepositScheme/updateDepositScheme"
export const getallClientsUrl = "/api/ClientSetup/getAllClients"
export const getAllDepositSchemeUrl = "/api/DepositScheme/getAllDepositScheme"


export const createDepositAccountUrl = "/api/DepositAccount/createDepositAccount"

export const getAllEmployeesByBranch = "/api/FinanceCompany/getAllEmployeeFromUserBranch"


export const getAllNonClosedDepostAccount = "/api/DepositAccount/getAllNonClosedDepositAccount"



