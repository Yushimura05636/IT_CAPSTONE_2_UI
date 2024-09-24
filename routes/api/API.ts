import BaseAPIService from '~/components/api/BaseAPIService'

class API extends BaseAPIService {

    //this is the employee API route
    async getEmployees(params: object): Promise<any> {
        return await this.request(`/employees`, 'GET', params)
    }

    async getEmployeeById(params: object, id: number): Promise<any> {
        return await this.request(`/employees/${id}`, 'GET', params)
    }

    async createEmployee(params: object): Promise<any> {
        return await this.request(`/employees`, 'POST', params)
    }

    async updateEmployee(params: object, id: number): Promise<any> {
        return await this.request(`/employees/${id}`, 'PUT', params)
    }
    
    async deleteEmployee(params: object, id: number): Promise<any> {
        return await this.request(`/employees`, 'DELETE', params)
    }

            async getEmplooyeIDnotInUser(params: object): Promise<any> {
                return await this.request(`/emplooyeid`, 'GET', params)
            }

    //this is the customer API route
    async getCustomers(params: object): Promise<any> {
        return await this.request(`/customers`, 'GET', params)
    }

    async getCustomerById(params: object, id: number): Promise<any> {
        return await this.request(`/customers/${id}`, 'GET', params)
    }

    async createCustomer(params: object): Promise<any> {
        return await this.request(`/customers`, 'POST', params)
    }

    async updateCustomer(params: object, id: number): Promise<any> {
        return await this.request(`/customers/${id}`, 'PUT', params)
    }

    async deleteCustomer(params: object, id: number): Promise<any> {
        return await this.request(`/customers/${id}`, 'DELETE', params)
    }

    //Loan Count
    async getLoanCount(params: object): Promise<any> {
        return await this.request(`/loancount`, 'POST', params);
    }

    // Example API call
    async get(params: object, modeltype: string): Promise<any> {
    return await this.request(`/libraries/${modeltype}`, 'GET', params);
    }
    async getOne(params: object, id: number): Promise<any> {
    return await this.request(`/libraries/findOne/${id}`, 'POST', params);
    }
    async create(params: object): Promise<any> {
    return await this.request(`/libraries`, 'POST', params);
    }
    async update(params: object, id: number): Promise<any> {
    return await this.request(`/libraries/${id}`, 'PUT', params);
    }
    async delete(params: object, id: number): Promise<any> {
    return await this.request(`/libraries/${id}`, 'DELETE', params);
    }

     //permission
     async getPermission(params: object): Promise<any> {
        return await this.request(`/permission`, 'GET', params)
    }
    async getUserPermission(params: object, id: number): Promise<any> {
        return await this.request(`/documentpermission/${id}`, 'GET', params)
    }

    async getPermissionById(params: object, id: number): Promise<any> {
        return await this.request(`/permission/${id}`, 'GET', params)
    }

    async createPermission(params: object): Promise<any> {
        return await this.request(`/permission`, 'POST', params)
    }

    async updatePermission(params: object, id: number): Promise<any> {
        return await this.request(`/permission/${id}`, 'PUT', params)
    }

    async deletePermission(params: object, id: number): Promise<any> {
        return await this.request(`/permission/${id}`, 'DELETE', params)
    }

    //documents
    async getDocumentMap(params: object): Promise<any> {
        return await this.request(`/documentMap`, 'GET', params)
    }

    async getDocumentMapById(params: object, id: number): Promise<any> {
        return await this.request(`/documentMap/${id}`, 'GET', params)
    }

    async createDocumentMap(params: object): Promise<any> {
        return await this.request(`/documentMap`, 'POST', params)
    }

    async updateDocumentMap(params: object, id: number): Promise<any> {
        return await this.request(`/documentMap/${id}`, 'PUT', params)
    }

    async deleteDocumentMap(params: object, id: number): Promise<any> {
        return await this.request(`/documentMap/${id}`, 'DELETE', params)
    }

    //documentpermission
    async createDocumentPermission(params: object): Promise<any> {
        return await this.request(`/documentpermission`, 'POST', params)
    }

    async updateDocumentPermission(params: object, id: number): Promise<any> {
        return await this.request(`/documentpermission/${id}`, 'PUT', params)
    }
    
    async deleteDocumentPermission(params: object, id: number): Promise<any> {
        return await this.request(`/documentpermission/${id}`, 'DELETE', params)
    }

    //users
    async getUser(params: object): Promise<any> {
        return await this.request(`/users`, 'GET', params)
    }

    async getUserById(params: object, id: number): Promise<any> {
        return await this.request(`/users/${id}`, 'GET', params)
    }

        async createUser(params: object): Promise<any> {
            return await this.request(`/users`, 'POST', params)
        }

    async updateUser(params: object, id: number): Promise<any> {
        return await this.request(`/users/${id}`, 'PUT', params)
    }

    async deleteUser(params: object, id: number): Promise<any> {
        return await this.request(`/users/${id}`, 'DELETE', params)
    }

    //payment_frequency
    async getPaymentFrequency(params: object): Promise<any> {
        return await this.request(`/frequency`, 'GET', params)
    }

    async getPaymentFrequencyById(params: object, id: number): Promise<any> {
        return await this.request(`/frequency/${id}`, 'GET', params)
    }

        async createPaymentFrequency(params: object): Promise<any> {
            return await this.request(`/frequency`, 'POST', params)
        }

    async updatePaymentFrequency(params: object, id: number): Promise<any> {
        return await this.request(`/frequency/${id}`, 'PUT', params)
    }

    async deletePaymentFrequency(params: object, id: number): Promise<any> {
        return await this.request(`/frequency/${id}`, 'DELETE', params)
    }

     //payment_duration
    async getPaymentduration(params: object): Promise<any> {
        return await this.request(`/duration`, 'GET', params)
    }

    async getPaymentdurationById(params: object, id: number): Promise<any> {
        return await this.request(`/duration/${id}`, 'GET', params)
    }

        async createPaymentduration(params: object): Promise<any> {
            return await this.request(`/duration`, 'POST', params)
        }

    async updatePaymentduration(params: object, id: number): Promise<any> {
        return await this.request(`/duration/${id}`, 'PUT', params)
    }

    async deletePaymentduration(params: object, id: number): Promise<any> {
        return await this.request(`/duration/${id}`, 'DELETE', params)
    }

    //auth
    async auth(params: object): Promise<any> {
        return await this.request(`/auth`, 'POST', params)
    }

    //factor rate

     //payment_duration
    async getFactorRate(params: object): Promise<any> {
        return await this.request(`/factorRate`, 'GET', params)
    }

    async getFactorRateById(params: object, id: number): Promise<any> {
        return await this.request(`/factorRate/${id}`, 'GET', params)
    }

    async createFactorRate(params: object): Promise<any> {
        return await this.request(`/factorRate`, 'POST', params)
    }

    async updateFactorRate(params: object, id: number): Promise<any> {
        return await this.request(`/factorRate/${id}`, 'PUT', params)
    }

    async deleteFactorRate(params: object, id: number): Promise<any> {
        return await this.request(`/factorRate/${id}`, 'DELETE', params)
    }

    //customer group
    async getCustomerGroup(params: object): Promise<any> {
        return await this.request(`/libraries/customer_group`, 'GET', params)
    }

    async getCustomerGroupById(params: object, id: number): Promise<any> {
        return await this.request(`/group/${id}`, 'GET', params)
    }

    async createCustomerGroup(params: object): Promise<any> {
        return await this.request(`/group`, 'POST', params)
    }

    async updateCustomerGroup(params: object, id: number): Promise<any> {
        return await this.request(`/group/${id}`, 'PUT', params)
    }

    async deleteCustomerGroup(params: object, id: number): Promise<any> {
        return await this.request(`/group/${id}`, 'DELETE', params)
    }

}

export const apiService = new API()