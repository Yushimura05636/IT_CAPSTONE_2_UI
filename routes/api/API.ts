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

    // Example API call
    async libraryCreate(params: object): Promise<any> {
    return await this.request(`/libraries`, 'POST', params);
    }
    async libraryUpdate(params: object, id: number): Promise<any> {
    return await this.request(`/libraries/${id}`, 'PUT', params);
    }
    async libraryDelete(params: object, id: number): Promise<any> {
    return await this.request(`/libraries/${id}`, 'DELETE', params);
    }
}

export const apiService = new API()