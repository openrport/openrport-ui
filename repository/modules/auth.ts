import {HttpFactory, ApiResponse } from "~/repository/factory";
import type {ApiLoginResponse, ILoginInput, ILoginResponse} from '~/types'
import type {FetchOptions} from "ofetch";
import {FetchError} from "ofetch";


class AuthModule extends HttpFactory{
    private RESOURCE = '/api/v1/login';

    async login (credentials: ILoginInput): Promise<ApiLoginResponse> {
        const token = btoa(`${credentials.username}:${credentials.password}`);
        const fetchOptions: FetchOptions<'json'> = {
            headers: {
                'Authorization': `Basic ${token}`,
                'Content-Type': 'application/json'
            },
        }
        return this.call<ApiLoginResponse>(
            'GET',
            `${this.RESOURCE}?token-lifetime=${credentials.remember_me}`,
            undefined,
            fetchOptions
        )
    }

    async provider(): Promise<any> {
        return this.call<any>(
            'GET',
            'api/v1/provider',
            undefined
            );
    }

    async logout(): Promise<any> {
        const fetchOptions: FetchOptions<'json'> = {
            headers: {
                'Authorization': `Basic ${token}`,
                'Content-Type': 'application/json'
            },
        }
        return this.call<any>(
            'DELETE',
            'api/v1/logout',
            undefined,
            fetchOptions
        );
    }

    async verify2fa(credentials: ILoginInput, token: string, twofaToken: string): Promise<ApiLoginResponse> {
        const fetchOptions: FetchOptions<'json'> = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        }
        return this.call<ApiLoginResponse>(
            'POST',
            `api/v1/verify-2fa?token-lifetime=${credentials.remember_me}`,
            {
                username: credentials.username,
                token: twofaToken
            },
            fetchOptions
        );
    }
}

export default AuthModule;
