import BaseAPIService from '~/components/api/BaseAPIService'

class AuthService extends BaseAPIService {
    async login(params: object): Promise<any> {
        return await this.request(`/login`, 'POST', params)
    }

    async logout(): Promise<any> {
        return await this.request(`/logout`, 'POST')
    }

    async sendVerification(params: object): Promise<any> {
        return await this.request(`/NoAUTH/SendVerification`, 'POST', params)
    }

    async verifyVerification(params: object, code: number): Promise<any> {
        return await this.request(`/NoAUTH/VerifyVerification/${code}`, 'POST', params)
    }

}

export const authService = new AuthService()
