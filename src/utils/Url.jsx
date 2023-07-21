export const baseurl='http://127.0.0.1:51543/'

//superlogin

export const superAdminLoginUrl=baseurl+"SuperAdmin/login"
export const getUsersUrl=baseurl+"superadmin/getallusers"



//fintex

export const fintexLoginUrl=baseurl+"FinanceCompany/login"




export const createAdminUrl=baseurl+"superadmin/createadmin";
export const updatePasswordUrl = baseurl+"superadmin/updatepassword";

export const userActivateDeactivateUrl=baseurl+"superadmin/activateDeactivateUser";

export const updatePasswordMicrofinance=baseurl+"financecompany/update-password";

export const createEmployeeLoginUrl=baseurl+"FinanceCompany/createLoginCredential";
export const getAllEmployeeUrl=baseurl+"financecompany/getAllEmployees";

export const editUserProfile=baseurl+"financecompany/updateEmployeeProfile"



//Ledger



export const getallSubLedger=baseurl+"accountsetup/getAllsubLedgers"

export const getAllLedger=baseurl+"accountsetup/ledgers"

export const getLedgerByGroupType=baseurl+"accountsetup/ledgers/groupType"

export const getUniqueGlCode=baseurl+"accountsetup/unique-ledgerId"

//Account Setup
export const getallGroupTypes="AccountSetup/getAllGrouptypes"

export const accountTypesUrl=baseurl+"accountsetup/accounttypes"


export const createGroupUrl=baseurl+"accountsetup/createGrouptype"
export const accoutTypeByIdUrl=baseurl+"AccountSetup/grouptypes/accounttype?accountTypeId"

export const ledgerDetailByAccountTypeUrl=baseurl+"accountsetup/grouptypes/accounttype?accountTypeId"


export const allLedgerDataUrl=baseurl+"accountsetup/ledgers"
export const createLedgerUrl=baseurl+"accountsetup/createledger"

export const groupByAccountIdUrl=baseurl+"accountsetup/grouptypes/accounttype?accountTypeId"

export const getLedgerByGroupId=baseurl+"accountsetup/ledgers/grouptype?groupTypeId"


export const createSubLedgerUrl=baseurl+"accountsetup/createSubledger"

export const getSubLedgerByLedger=baseurl+"accountSetup/subledgers/ledger?ledgerId="



export const createBankUrl=baseurl+"accountsetup/creatBankSetup"

export const getAllBanks=baseurl+"accountSetup/getAllBankSetup"



//Employee

export const createEmployeeUrl=baseurl+"financecompany/createEmployee"

export const getEmployeeById=baseurl+"FinanceCompany/getemployeeById?id="

export const getUserByUserName=baseurl+"FinanceCompany/getuser/username?userName="





//Company Profile

export const getAllBranches=baseurl+"CompanyProfile/getAllBranch"

export const createBranchUrl=baseurl+"CompanyProfile/createbranch"

export const updateBranchUrl=baseurl+"CompanyProfile/updateBranch"


export const createCompanyProfile=baseurl+"CompanyProfile/createCompanyProfile"

export const getCompanyProfile=baseurl+"CompanyProfile/getCompanyProfile"

