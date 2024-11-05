import BaseAPIService from '~/components/api/BaseAPIService'

class API extends BaseAPIService {

    //verify email and token
    async verifyTokenAndEmailNoAUTH(params: object, token: any): Promise<any>
    {
        return await this.request(`/NoAUTH/VerifyVerification/${token}`, 'POST', params)
    }

    //here
    async verifyEmailNoAUTH(params: object, token: any): Promise<any>
    {
        alert(params.email)
        return await this.request(`/NoAUTH/checkEmail`, 'GET', params)
    }

    //check if the user is authenticate
    async checkUserAuthentication(params: object): Promise<any> {
        return await this.request(`/USER_AUTH`, `PATCH`, params)
    }

    //requirement api route
    async getRequirements(params: object): Promise<any> {
        return await this.request(`/REQUIREMENTS`, 'GET', params)
    }

    async getRequirementsNoAUTH(params: object): Promise<any> {
        return await this.request(`/REQUIREMENTS/NoAUTH`, 'GET', params)
    }

    async getActiveRequirements(params: object): Promise<any> {
        return await this.request(`/REQUIREMENTS/Active`, 'GET', params)
    }

    async getActiveRequirementsNoAUTH(params: object): Promise<any> {
        return await this.request(`/REQUIREMENTS/NoAUTH/Active`, 'GET', params)
    }

    //post

    async createRequirements(params: object): Promise<any> {
        return await this.request(`/REQUIREMENTS`, 'POST', params)
    }

    //put

    async updateRequirements(params: object, id: number): Promise<any> {
        return await this.request(`/REQUIREMENTS/${id}`, 'GET', params)
    }

    //customer_requirement route
    async getCustomerRequirements(params: object): Promise<any> {
        return await this.request(`/CUSTOMER_REQUIREMENTS`, 'GET', params);
    }

    async getCustomerRequirementsNoAUTH(params: object): Promise<any> {
        return await this.request(`/CUSTOMER_REQUIREMENTS/NoAUTH`, 'GET', params);
    }

    async getNotExpiredCustomerRequirements(params: object): Promise<any> {
        return await this.request(`/CUSTOMER_REQUIREMENTS/NotEXPIRED`, 'GET', params);
    }

    async getNotExpiredCustomerRequirementsNoAUTH(params: object): Promise<any> {
        return await this.request(`/CUSTOMER_REQUIREMENTS/NoAUTH/NotEXPIRED`, 'GET', params);
    }

    async getNotExpiredCustomerRequirementById(params: object, id: number): Promise<any> {
        return await this.request(`/CUSTOMER_REQUIREMENTS/NotEXPIRED/${id}`, 'GET', params);
    }

    async getNotExpiredCustomerRequirementByIdNoAUTH(params: object, id: number): Promise<any> {
        return await this.request(`/CUSTOMER_REQUIREMENTS/NoAUTH/NotEXPIRED/${id}`, 'GET', params);
    }

    //post
    async createCustomerRequirements(params: object): Promise<any> {
        return await this.request(`/CUSTOMER_REQUIREMENTS`, 'POST', params);
    }

    //put
    async updateCustomerRequirements(params: object, id: number): Promise<any> {
        return await this.request(`/CUSTOMER_REQUIREMENTS/${id}`, 'PUT', params);
    }


    //this is the employee API route
    async getEmployees(params: object): Promise<any> {
        return await this.request(`/EMPLOYEES`, 'GET', params)
    }

    async getEmployeesNoAuth(params: object): Promise<any> {
        return await this.request(`/EMPLOYEES/findMany/`, 'GET', params)
    }

    async getNoUserEmployees(params: object): Promise<any> {
        return await this.request(`/EMPLOYEES/NoUser`, 'GET', params)
    }

    async getNoUserEmployeesNoAuth(params: object): Promise<any> {
        return await this.request(`/EMPLOYEES/NoAUTH/findMany/findNoUser`, 'GET', params)
    }

    async getEmployeeById(params: object, id: number): Promise<any> {
        return await this.request(`/EMPLOYEES/${id}`, 'GET', params)
    }

    async getEmployeeByIdNoAuth(params: object, id: number): Promise<any> {
        return await this.request(`/EMPLOYEES/findOne/${id}`, 'GET', params)
    }

    async createEmployee(params: object): Promise<any> {
        return await this.request(`/EMPLOYEES`, 'POST', params)
    }

    async updateEmployee(params: object, id: number): Promise<any> {
        return await this.request(`/EMPLOYEES/${id}`, 'PUT', params)
    }

    async deleteEmployee(params: object, id: number): Promise<any> {
        return await this.request(`/EMPLOYEES`, 'DELETE', params)
    }

    async getEmplooyeIDnotInUser(params: object): Promise<any> {
        return await this.request(`/EMPLOYEESID`, 'GET', params)
    }

    //this is the customer API route
    async getCustomers(params: object): Promise<any> {
        return await this.request(`/CUSTOMERS`, 'GET', params)
    }

    async getCustomerByIdNoAuth(params: object, id: number): Promise<any> {
        return await this.request(`/CUSTOMERS/NoAUTH/${id}`, 'GET', params)
    }

    async getCustomersNoAuth(params: object): Promise<any> {
        return await this.request(`/CUSTOMERS/NoAUTH`, 'GET', params)
    }

    async getApproveCustomersNoAuth(params: object): Promise<any> {
        return await this.request(`/CUSTOMERS/NoAUTH/CustomerAPPROVE`, 'GET', params)
    }

    async getCustomerById(params: object, id: number): Promise<any> {
        return await this.request(`/CUSTOMERS/${id}`, 'GET', params)
    }

    async createCustomer(params: object): Promise<any> {
        return await this.request(`/CUSTOMERS`, 'POST', params)
    }

    async updateCustomer(params: object, id: number): Promise<any> {
        return await this.request(`/CUSTOMERS/${id}`, 'PUT', params)
    }

    async deleteCustomer(params: object, id: number): Promise<any> {
        return await this.request(`/CUSTOMERS/${id}`, 'DELETE', params)
    }

    //Loan Count
    async getLoanCount(params: object): Promise<any> {
        return await this.request(`/LOAN_COUNTS`, 'GET', params);
    }

    async getLoanCountNoAuth(params: object): Promise<any> {
        return await this.request(`/LOAN_COUNTS/NoAUTH`, 'GET', params);
    }

    async getLoanCountById(params: object, id: any): Promise<any> {
        return await this.request(`/LOAN_COUNTS/${id}`, 'GET', params);
    }

    async createLoanCount(params: object): Promise<any> {
        return await this.request(`/LOAN_COUNTS`, 'POST', params);
    }

    async updateLoanCount(params: object, id: any): Promise<any> {
        return await this.request(`/LOAN_COUNTS/${id}`, 'PUT', params);
    }

    // Example API call
    async get(params: object, modeltype: string): Promise<any> {
    return await this.request(`/LIBRARIES/${modeltype}`, 'GET', params);
    }
    async getNoAuth(params: object, modeltype: string): Promise<any>{
        return await this.request(`/LIBRARIES/NoAUTH/${modeltype}`, 'GET', params);
    }
    async getOne(params: object, id: number): Promise<any> {
    return await this.request(`/LIBRARIES/findOne/${id}`, 'POST', params);
    }
    async create(params: object): Promise<any> {
    return await this.request(`/LIBRARIES`, 'POST', params);
    }
    async update(params: object, id: number): Promise<any> {
    return await this.request(`/LIBRARIES/${id}`, 'PUT', params);
    }
    async delete(params: object, id: number): Promise<any> {
    return await this.request(`/LIBRARIES/${id}`, 'DELETE', params);
    }

     //permission
     async getPermission(params: object): Promise<any> {
        return await this.request(`/DOCUMENT_MAP_PERMISSIONS`, 'GET', params)
    }


    async getPermissionById(params: object, id: number): Promise<any> {
        return await this.request(`/DOCUMENT_MAP_PERMISSIONS/${id}`, 'GET', params)
    }

    async getPermissionByDescription(params: object, description: string): Promise<any> {
        return await this.request(`/DOCUMENT_MAP_PERMISSIONS/description/${description}`, 'GET', params)
    }

    async createPermission(params: object): Promise<any> {
        return await this.request(`/DOCUMENT_MAP_PERMISSIONS`, 'POST', params)
    }

    async updatePermission(params: object, id: number): Promise<any> {
        return await this.request(`/DOCUMENT_MAP_PERMISSIONS/${id}`, 'PUT', params)
    }

    async deletePermission(params: object, id: number): Promise<any> {
        return await this.request(`/DOCUMENT_MAP_PERMISSIONS/${id}`, 'DELETE', params)
    }

    //DOCUMENT PERMISSION
    async getUserPermission(params: object, id: number): Promise<any> {
        return await this.request(`/DOCUMENT_PERMISSIONS/${id}`, 'GET', params)
    }

    //documents
    async getDocumentMap(params: object): Promise<any> {
        return await this.request(`/DOCUMENT_MAPS`, 'GET', params)
    }

    async getDocumentMapById(params: object, id: number): Promise<any> {
        return await this.request(`/DOCUMENT_MAPS/${id}`, 'GET', params)
    }

    async getDocumentMapByDescription(params: object, description: string): Promise<any> {
        return await this.request(`/DOCUMENT_MAPS/description/${description}`, 'GET', params)
    }

    async createDocumentMap(params: object): Promise<any> {
        return await this.request(`/DOCUMENT_MAPS`, 'POST', params)
    }

    async updateDocumentMap(params: object, id: number): Promise<any> {
        return await this.request(`/DOCUMENT_MAPS/${id}`, 'PUT', params)
    }

    async deleteDocumentMap(params: object, id: number): Promise<any> {
        return await this.request(`/DOCUMENT_MAPS/${id}`, 'DELETE', params)
    }

    //documentpermission
    async createDocumentPermission(params: object): Promise<any> {
        return await this.request(`/DOCUMENT_PERMISSIONS`, 'POST', params)
    }

    async updateDocumentPermission(params: object, id: number): Promise<any> {
        return await this.request(`/DOCUMENT_PERMISSIONS/${id}`, 'PUT', params)
    }

    async deleteDocumentPermission(params: object, id: number): Promise<any> {
        return await this.request(`/DOCUMENT_PERMISSIONS/${id}`, 'DELETE', params)
    }

    //users
    async getUser(params: object): Promise<any> {
        return await this.request(`/USERS`, 'GET', params)
    }

    async getUserById(params: object, id: number): Promise<any> {
        return await this.request(`/USERS/${id}`, 'GET', params)
    }

    async getOwnUserDetailsdNoAUTH(params: object): Promise<any> {
        return await this.request(`/USERS/NoAUTH`, 'GET', params)
    }

        async createUser(params: object): Promise<any> {
            return await this.request(`/USERS`, 'POST', params)
        }

    async updateUser(params: object, id: number): Promise<any> {
        return await this.request(`/USERS/${id}`, 'PUT', params)
    }

    async updateUserPasswordNoAUTH(params: object, id: number): Promise<any> {
        return await this.request(`/NoAUTH/ChangePassword/${id}`, 'PUT', params)
    }

    async deleteUser(params: object, id: number): Promise<any> {
        return await this.request(`/USERS/${id}`, 'DELETE', params)
    }

    //payment_frequency
    async getPayment(params: object): Promise<any> {
        return await this.request(`/PAYMENTS/NoAUTH`, 'GET', params)
    }

    async getPaymentNoAuth(params: object): Promise<any> {
        return await this.request(`/PAYMENTS/NoAUTH`, 'GET', params)
    }

    async getPaymentById(params: object, id: number): Promise<any> {
        return await this.request(`/PAYMENTS/${id}`, 'GET', params)
    }

    async getPaymentByIdNoAuth(params: object, id: number): Promise<any> {
        return await this.request(`/PAYMENTS/NoAUTH/${id}`, 'GET', params)
    }

    async getPaymentByLoanNONoAuth(params: object, id: string): Promise<any> {
        return await this.request(`/PAYMENTS/NoAUTH/PaymentInLoanNO/${id}`, 'GET', params)
    }

    async createPayment(params: object): Promise<any> {
        return await this.request(`/PAYMENTS`, 'POST', params)
    }

    async updatePayment(params: object, id: number): Promise<any> {
        return await this.request(`/PAYMENTS/${id}`, 'PUT', params)
    }

    async approvePayment(params: object, id: number): Promise<any> {
        return await this.request(`/PAYMENTS/PaymentAPPROVE/${id}`, 'PUT', params)
    }

    async deletePayment(params: object, id: number): Promise<any> {
        return await this.request(`/PAYMENTS/${id}`, 'DELETE', params)
    }

    //payment
    async getPaymentSchedule(params: object): Promise<any> {
        return await this.request(`/PAYMENT_SCHEDULES`, 'GET', params)
    }

    async getPaymentScheduleNoAuth(params: object): Promise<any> {
        return await this.request(`/PAYMENT_SCHEDULES/NoAUTH`, 'GET', params)
    }

    async getPaymentScheduleAll(params: object): Promise<any> {
        return await this.request(`/PAYMENT_SCHEDULES/all`, 'GET', params);
    }

    async getPaymentScheduleById(params: object, id: number): Promise<any> {
        return await this.request(`/PAYMENT_SCHEDULES/${id}`, 'GET', params)
    }

    async getPaymentScheduleByIdNoAuth(params: object, id: number): Promise<any> {
        return await this.request(`/PAYMENT_SCHEDULES/NoAUTH/${id}`, 'GET', params)
    }

    async createPaymentSchedule(params: object): Promise<any> {
        return await this.request(`/PAYMENT_SCHEDULES`, 'POST', params)
    }

    async updatePaymentSchedule(params: object, id: number): Promise<any> {
        return await this.request(`/PAYMENT_SCHEDULES/${id}`, 'PUT', params)
    }

    async deletePaymentSchedule(params: object, id: number): Promise<any> {
        return await this.request(`/PAYMENT_SCHEDULES/${id}`, 'DELETE', params)
    }

    //payment line
    async getPaymentLine(params: object): Promise<any> {
        return await this.request(`/PAYMENT_LINES`, 'GET', params)
    }

    //payment line
    async getPaymentLineNoAUTH(params: object): Promise<any> {
        return await this.request(`/PAYMENT_LINES/NoAUTH`, 'GET', params)
    }

    //payment_frequency
    async getPaymentFrequency(params: object): Promise<any> {
        return await this.request(`/PAYMENT_FREQUENCIES`, 'GET', params)
    }

    async getPaymentFrequencyNoAuth(params: object): Promise<any> {
        return await this.request(`/PAYMENT_FREQUENCIES/NoAUTH`, 'GET', params)
    }

    async getPaymentFrequencyById(params: object, id: number): Promise<any> {
        return await this.request(`/PAYMENT_FREQUENCIES/${id}`, 'GET', params)
    }

    async getPaymentFrequencyByIdNoAuth(params: object, id: number): Promise<any> {
        return await this.request(`/PAYMENT_FREQUENCIES/NoAUTH/${id}`, 'GET', params)
    }

    async createPaymentFrequency(params: object): Promise<any> {
        return await this.request(`/PAYMENT_FREQUENCIES`, 'POST', params)
    }

    async updatePaymentFrequency(params: object, id: number): Promise<any> {
        return await this.request(`/PAYMENT_FREQUENCIES/${id}`, 'PUT', params)
    }

    async deletePaymentFrequency(params: object, id: number): Promise<any> {
        return await this.request(`/PAYMENT_FREQUENCIES/${id}`, 'DELETE', params)
    }

     //payment_duration
    async getPaymentduration(params: object): Promise<any> {
        return await this.request(`/PAYMENT_DURATIONS`, 'GET', params)
    }

    async getPaymentdurationNoAuth(params: object): Promise<any> {
        return await this.request(`/PAYMENT_DURATIONS/NoAUTH`, 'GET', params)
    }

    async getPaymentdurationById(params: object, id: number): Promise<any> {
        return await this.request(`/PAYMENT_DURATIONS/${id}`, 'GET', params)
    }

    async getPaymentdurationByIdNoAuth(params: object, id: number): Promise<any> {
        return await this.request(`/PAYMENT_DURATIONS/NoAUTH/${id}`, 'GET', params)
    }

    async createPaymentduration(params: object): Promise<any> {
        return await this.request(`/PAYMENT_DURATIONS`, 'POST', params)
    }

    async updatePaymentduration(params: object, id: number): Promise<any> {
        return await this.request(`/PAYMENT_DURATIONS/${id}`, 'PUT', params)
    }

    async deletePaymentduration(params: object, id: number): Promise<any> {
        return await this.request(`/PAYMENT_DURATIONS/${id}`, 'DELETE', params)
    }

    //auth
    async authCreate(params: object): Promise<any> {
        return await this.request(`/USER_AUTH`, 'POST', params)
    }

    async authUpdate(params: object): Promise<any> {
        return await this.request(`/USER_AUTH`, 'PUT', params)
    }

    //factor rate

     //payment_duration
    async getFactorRate(params: object): Promise<any> {
        return await this.request(`/FACTOR_RATES`, 'GET', params)
    }

    async getFactorRateById(params: object, id: number): Promise<any> {
        return await this.request(`/FACTOR_RATES/${id}`, 'GET', params)
    }

    async getFactorRateNoAuth(params: object): Promise<any> {
        return await this.request(`/FACTOR_RATES/NoAUTH`, 'GET', params)
    }

    async getFactorRateByIdNoAuth(params: object, id: number): Promise<any> {
        return await this.request(`/FACTOR_RATES/NoAUTH/${id}`, 'GET', params)
    }

    async createFactorRate(params: object): Promise<any> {
        return await this.request(`/FACTOR_RATES`, 'POST', params)
    }

    async updateFactorRate(params: object, id: number): Promise<any> {
        return await this.request(`/FACTOR_RATES/${id}`, 'PUT', params)
    }

    async deleteFactorRate(params: object, id: number): Promise<any> {
        return await this.request(`/FACTOR_RATES/${id}`, 'DELETE', params)
    }

    //fee
    async getFee(params: object): Promise<any> {
        return await this.request(`/FEES`, 'GET', params)
    }
    async getFeeNoAuth(params: object): Promise<any>{
        return await this.request(`/FEES/NoAUTH`, 'GET', params);
    }
    async getFeeById(params: object, id: number): Promise<any> {
        return await this.request(`/FEES/${id}`, 'GET', params)
    }
    async getFeeByIdNoAUTH(params: object, id: number): Promise<any> {
        return await this.request(`/FEES/NoAUTH/${id}`, 'GET', params)
    }
    async createFee(params: object): Promise<any> {
        return await this.request(`/FEES`, 'POST', params)
    }
    async updateFee(params: object, id: number): Promise<any> {
        return await this.request(`/FEES/${id}`, 'PUT', params)
    }
    async deleteFee(params: object, id: number): Promise<any> {
        return await this.request(`/FEES/${id}`, 'DELETE', params)
    }

    //Loan Applications
    async getLoanApplication(params: object): Promise<any> {
        return await this.request(`/LOAN_APPLICATIONS`, 'GET', params)
    }
    async getLoanApplicationNoAUTH(params: object): Promise<any>{
        return await this.request(`/LOAN_APPLICATIONS/NoAUTH`, 'GET', params);
    }
    async getLoanApplicationById(params: object, id: number): Promise<any> {
        return await this.request(`/LOAN_APPLICATIONS/${id}`, 'GET', params)
    }
    async getLoanApplicationByLoanNo(params: object, id: string): Promise<any> {
        return await this.request(`/LOAN_APPLICATIONS/loanno/${id}`, 'GET', params)
    }
    async getLoanApplicationByLoanNoNoAUTH(params: object, id: string): Promise<any> {
        return await this.request(`/LOAN_APPLICATIONS/loanno/NoAUTH/${id}`, 'GET', params)
    }
    async getLoanApplicationByCustomerId(params: object, id: number): Promise<any> {
        return await this.request(`/LOAN_APPLICATIONS/customer/${id}`, 'GET', params)
    }
    async getLoanApplicationByCustomerIdNoAUTH(params: object, id: number): Promise<any> {
        return await this.request(`/LOAN_APPLICATIONS/customer/NoAUTH/${id}`, 'GET', params)
    }
    async createLoanApplication(params: object): Promise<any> {
        return await this.request(`/LOAN_APPLICATIONS`, 'POST', params)
    }
    async updateLoanApplication(params: object, id: number): Promise<any> {
        return await this.request(`/LOAN_APPLICATIONS/${id}`, 'PUT', params)
    }
    async deleteLoanApplication(params: object, id: number): Promise<any> {
        return await this.request(`/LOAN_APPLICATIONS/${id}`, 'DELETE', params)
    }

    //Loan Applications
    async getLoanApplicationCoMaker(params: object): Promise<any> {
        return await this.request(`/LOAN_APPLICATION_COMAKERS`, 'GET', params)
    }
    async getLoanApplicationCoMakerNoAUTH(params: object): Promise<any>{
        return await this.request(`/LOAN_APPLICATION_COMAKERS/NoAUTH`, 'GET', params);
    }
    async getLoanApplicationCoMakerById(params: object, id: number): Promise<any> {
        return await this.request(`/LOAN_APPLICATION_COMAKERS/${id}`, 'GET', params)
    }
    async getLoanApplicationCoMakerByIdNoAUTH(params: object, id: number): Promise<any> {
        return await this.request(`/LOAN_APPLICATION_COMAKERS/NoAUTH/${id}`, 'GET', params)
    }
    async createLoanApplicationCoMaker(params: object): Promise<any> {
        return await this.request(`/LOAN_APPLICATION_COMAKERS`, 'POST', params)
    }
    async updateLoanApplicationCoMaker(params: object, id: number): Promise<any> {
        return await this.request(`/LOAN_APPLICATION_COMAKERS/${id}`, 'PUT', params)
    }
    async deleteLoanApplicationCoMaker(params: object, id: number): Promise<any> {
        return await this.request(`/LOAN_APPLICATION_COMAKERS/${id}`, 'DELETE', params)
    }


    //perm with empty return

    // User Authentication
async authUserAuthCreate(params: object): Promise<any> {
    return await this.request(`/USER_AUTH/create`, 'PATCH', params);
}

async authUserAuthUpdate(params: object): Promise<any> {
    return await this.request(`/USER_AUTH/update`, 'PATCH', params);
}

// Users
async authUsersCreate(params: object): Promise<any> {
    return await this.request(`/USERS/create`, 'PATCH', params);
}

async authUsersUpdate(params: object): Promise<any> {
    return await this.request(`/USERS/update`, 'PATCH', params);
}

// Libraries
async authLibrariesCreate(params: object): Promise<any> {
    return await this.request(`/LIBRARIES/create`, 'PATCH', params);
}

async authLibrariesUpdate(params: object): Promise<any> {
    return await this.request(`/LIBRARIES/update`, 'PATCH', params);
}

// Customers
async authCustomersCreate(params: object): Promise<any> {
    return await this.request(`/CUSTOMERS/create`, 'PATCH', params);
}

async authCustomersUpdate(params: object): Promise<any> {
    return await this.request(`/CUSTOMERS/update`, 'PATCH', params);
}

// Customer Groups
async authCustomerGroupsCreate(params: object): Promise<any> {
    return await this.request(`/CUSTOMER_GROUPS/create`, 'PATCH', params);
}

async authCustomerGroupsUpdate(params: object): Promise<any> {
    return await this.request(`/CUSTOMER_GROUPS/update`, 'PATCH', params);
}

// Employees
async authEmployeesCreate(params: object): Promise<any> {
    return await this.request(`/EMPLOYEES/create`, 'PATCH', params);
}

async authEmployeesUpdate(params: object): Promise<any> {
    return await this.request(`/EMPLOYEES/update`, 'PATCH', params);
}

// Factor Rates
async authFactorRatesCreate(params: object): Promise<any> {
    return await this.request(`/FACTOR_RATES/create`, 'PATCH', params);
}

async authFactorRatesUpdate(params: object): Promise<any> {
    return await this.request(`/FACTOR_RATES/update`, 'PATCH', params);
}

// Payment Durations
async authPaymentDurationsCreate(params: object): Promise<any> {
    return await this.request(`/PAYMENT_DURATIONS/create`, 'PATCH', params);
}

async authPaymentDurationsUpdate(params: object): Promise<any> {
    return await this.request(`/PAYMENT_DURATIONS/update`, 'PATCH', params);
}

// Payment Frequencies
async authPaymentFrequenciesCreate(params: object): Promise<any> {
    return await this.request(`/PAYMENT_FREQUENCIES/create`, 'PATCH', params);
}

async authPaymentFrequenciesUpdate(params: object): Promise<any> {
    return await this.request(`/PAYMENT_FREQUENCIES/update`, 'PATCH', params);
}

// Document Permissions
async authDocumentPermissionsCreate(params: object): Promise<any> {
    return await this.request(`/DOCUMENT_PERMISSIONS/create`, 'PATCH', params);
}

async authDocumentPermissionsUpdate(params: object): Promise<any> {
    return await this.request(`/DOCUMENT_PERMISSIONS/update`, 'PATCH', params);
}

// Document Maps
async authDocumentMapsCreate(params: object): Promise<any> {
    return await this.request(`/DOCUMENT_MAPS/create`, 'PATCH', params);
}

async authDocumentMapsUpdate(params: object): Promise<any> {
    return await this.request(`/DOCUMENT_MAPS/update`, 'PATCH', params);
}

// Document Map Permissions
async authDocumentMapPermissionsCreate(params: object): Promise<any> {
    return await this.request(`/DOCUMENT_MAP_PERMISSIONS/create`, 'PATCH', params);
}

async authDocumentMapPermissionsUpdate(params: object): Promise<any> {
    return await this.request(`/DOCUMENT_MAP_PERMISSIONS/update`, 'PATCH', params);
}

// Loan Counts
async authLoanCountsCreate(params: object): Promise<any> {
    return await this.request(`/LOAN_COUNTS/create`, 'PATCH', params);
}

async authLoanCountsUpdate(params: object): Promise<any> {
    return await this.request(`/LOAN_COUNTS/update`, 'PATCH', params);
}

// Fees
async authFeesCreate(params: object): Promise<any> {
    return await this.request(`/FEES/create`, 'PATCH', params);
}

async authFeesUpdate(params: object): Promise<any> {
    return await this.request(`/FEES/update`, 'PATCH', params);
}

// Personalities
async authPersonalitiesCreate(params: object): Promise<any> {
    return await this.request(`/PERSONALITIES/create`, 'PATCH', params);
}

async authPersonalitiesUpdate(params: object): Promise<any> {
    return await this.request(`/PERSONALITIES/update`, 'PATCH', params);
}

// Loan Applications
async authLoanApplicationsCreate(params: object): Promise<any> {
    return await this.request(`/LOAN_APPLICATIONS/create`, 'PATCH', params);
}

async authLoanApplicationsUpdate(params: object): Promise<any> {
    return await this.request(`/LOAN_APPLICATIONS/update`, 'PATCH', params);
}

async authLoanApplicationsApprove(params: object, id: number): Promise<any> {
    return await this.request(`/LOAN_APPLICATIONS/approve/${id}`, 'PATCH', params);
}

async authLoanReleaseUpdate(params: object): Promise<any> {
    return await this.request(`/LOAN_RELEASES/update`, 'PATCH', params);
}
// Payment
async authPaymentUpdate(params: object): Promise<any> {
    return await this.request(`/PAYMENTS/update`, 'PATCH', params);
}

// Requirement
async authRequirementsCreate(params: object): Promise<any> {
    return await this.request(`/REQUIREMENTS/create`, 'PATCH', params);
}

async authRequirementsUpdate(params: object): Promise<any> {
    return await this.request(`/REQUIREMENTS/update`, 'PATCH', params);
}



    //loan release
    async getLoanRelease(params: object): Promise<any> {
        return await this.request(`/LOAN_RELEASES`, 'GET', params)
    }
    async getLoanReleaseNoAuth(params: object): Promise<any> {
        return await this.request(`/LOAN_RELEASES/NoAUTH`, 'GET', params)
    }
    async getLoanReleaseById(params: object, id: number): Promise<any> {
        return await this.request(`/LOAN_RELEASES/${id}`, 'GET', params)
    }
    async getLoanReleaseByIdNoAuth(params: object, id: number): Promise<any> {
        return await this.request(`/LOAN_RELEASES/NoAUTH/${id}`, 'GET', params)
    }
    async createLoanRelease(params: object): Promise<any> {
        return await this.request(`/LOAN_RELEASES`, 'POST', params)
    }
    async updateLoanRelease(params: object, id: number): Promise<any> {
        return await this.request(`/LOAN_RELEASES/${id}`, 'PUT', params)
    }
    async deleteLoanRelease(params: object, id: number): Promise<any> {
        return await this.request(`/LOAN_RELEASES/${id}`, 'DELETE', params)
    }

    // async getLoanRelease(params: object): Promise<any> {
    //     return await this.request(`/LOAN_RELEASE`, 'GET', params)
    // }
    // async updateLoanRelease(params: object): Promise<any> {
    //     return await this.request(`/LOAN_RELEASE`, 'PUT', params)
    // }

    async getCustomerByGroupId(params: object, id: number): Promise<any> {
        return await this.request(`/CUSTOMERS/NoAUTH/GroupAPPROVE/${id}`, 'GET', params)
    }


    async getLoanSchedulebyCustomerID(params: object, id: number): Promise<any> {
    return await this.request(`/loan-test/${id}`, 'GET', params)
    }

    async getUserLogged(params: object): Promise<any> {
        return await this.request(`/USER_LOGGED`, 'GET', params)
    }

        //for registration
        async getRegisterLibraries(params: object, modeltype: string): Promise<any>{
            return await this.request(`/REGISTER_LIBRARIES/NoAUTH/${modeltype}`, 'GET', params);
        }

        async getRegisterLoanCount(params: object): Promise<any> {
            return await this.request(`/REGISTER_LIBRARIES/NoAUTH`, 'GET', params);
        }
        async createRegisterCustomer(params: object): Promise<any> {
            return await this.request(`/REGISTER_LIBRARIES`, 'POST', params)
        }


}

export const apiService = new API()
