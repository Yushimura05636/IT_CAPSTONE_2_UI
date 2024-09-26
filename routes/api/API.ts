import BaseAPIService from '~/components/api/BaseAPIService'

class API extends BaseAPIService {

    //this is the employee API route
    async getEmployees(params: object): Promise<any> {
        return await this.request(`/EMPLOYEES`, 'GET', params)
    }

    async getEmployeeById(params: object, id: number): Promise<any> {
        return await this.request(`/EMPLOYEES/${id}`, 'GET', params)
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

        async createUser(params: object): Promise<any> {
            return await this.request(`/USERS`, 'POST', params)
        }

    async updateUser(params: object, id: number): Promise<any> {
        return await this.request(`/USERS/${id}`, 'PUT', params)
    }

    async deleteUser(params: object, id: number): Promise<any> {
        return await this.request(`/USERS/${id}`, 'DELETE', params)
    }

    //payment_frequency
    async getPaymentFrequency(params: object): Promise<any> {
        return await this.request(`/PAYMENT_FREQUENCIES`, 'GET', params)
    }

    async getPaymentFrequencyById(params: object, id: number): Promise<any> {
        return await this.request(`/PAYMENT_FREQUENCIES/${id}`, 'GET', params)
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

    async getPaymentdurationById(params: object, id: number): Promise<any> {
        return await this.request(`/PAYMENT_DURATIONS/${id}`, 'GET', params)
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

    async createFactorRate(params: object): Promise<any> {
        return await this.request(`/FACTOR_RATES`, 'POST', params)
    }

    async updateFactorRate(params: object, id: number): Promise<any> {
        return await this.request(`/FACTOR_RATES/${id}`, 'PUT', params)
    }

    async deleteFactorRate(params: object, id: number): Promise<any> {
        return await this.request(`/FACTOR_RATES/${id}`, 'DELETE', params)
    }

    //customer group
    async getCustomerGroup(params: object): Promise<any> {
        return await this.request(`/LIBRARIES/customer_group`, 'GET', params)
    }

    async getCustomerGroup1(params: object): Promise<any> {
        return await this.request(`/CUSTOMER_GROUPS`, 'GET', params)
    }

    async getCustomerGroupById(params: object, id: number): Promise<any> {
        return await this.request(`/CUSTOMER_GROUPS/${id}`, 'GET', params)
    }

    async createCustomerGroup(params: object): Promise<any> {
        return await this.request(`/CUSTOMER_GROUPS`, 'POST', params)
    }

    async updateCustomerGroup(params: object, id: number): Promise<any> {
        return await this.request(`/CUSTOMER_GROUPS/${id}`, 'PUT', params)
    }

    async deleteCustomerGroup(params: object, id: number): Promise<any> {
        return await this.request(`/CUSTOMER_GROUPS/${id}`, 'DELETE', params)
    }

    //fee
    async getFee(params: object): Promise<any> {
        return await this.request(`/FEES`, 'GET', params)
    }
    async getFeeById(params: object, id: number): Promise<any> {
        return await this.request(`/FEES/${id}`, 'GET', params)
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


}

export const apiService = new API()