export const baseurl='https://fintexfinanceservice.azurewebsites.net/'

//superlogin

export const superAdminLoginUrl=baseurl+"SuperAdmin/login"
export const getUsersUrl=baseurl+"superadmin/getusers"



//fintex

export const fintexLoginUrl=baseurl+"FinanceCompany/login"




export const createAdminUrl=baseurl+"superadmin/create-admin";
export const updatePasswordUrl = baseurl+"superadmin/update-password";

export const userActivateDeactivateUrl=baseurl+"superadmin/activate-deactivate";

export const updatePasswordMicrofinance=baseurl+"financecompany/update-password";

export const createEmployeeLoginUrl=baseurl+"financecompany/register";
export const getAllEmployeeUrl=baseurl+"financecompany/getemployees";

export const editUserProfile=baseurl+"financecompany/edit-profile"



//Ledger


export const getallSubLedger=baseurl+"accountsetup/subLedgers"

export const getAllLedger=baseurl+"accountsetup/ledgers"

//Account Setup


export const accountTypesUrl=baseurl+"accountsetup/accounttypes"


export const createGroupUrl=baseurl+"accountsetup/grouptype"
export const accoutTypeByIdUrl=baseurl+"accountsetup/grouptypes/accounttype?accountTypeId"

export const ledgerDetailByAccountTypeUrl=baseurl+"accountsetup/grouptypes/accounttype?accountTypeId"


export const allLedgerDataUrl=baseurl+"accountsetup/ledgers"
export const createLedgerUrl=baseurl+"accountsetup/ledger"

export const groupByAccountIdUrl=baseurl+"accountsetup/grouptypes/accounttype?accountTypeId"

export const getLedgerByGroupId=baseurl+"accountsetup/ledgers/grouptype?groupTypeId"


export const createSubLedgerUrl=baseurl+"accountsetup/subledger"



//Employee

export const createEmployeeUrl=baseurl+"financecompany/create-employee"

export const getEmployeeById=baseurl+"financecompany/getemployee/username?username="