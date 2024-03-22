import { Injectable } from '@nestjs/common';
import axios, { type AxiosError } from 'axios';
import { URLSearchParams } from 'url';
import * as process from 'process';
import { InjectModel } from '@nestjs/sequelize';
import { Service } from 'auth/service.model';
import { type CreateServiceDto } from 'auth/dto/create-service.dto';
import { LoggerService } from 'logger/logger.service';

@Injectable()
export class SsoService {
    private readonly itmoIdAuthUrl = process.env.ITMOIDURL_AUTH ?? 'NULL_AUTH';
    private readonly itmoIdTokenUrl = process.env.ITMOIDURL_TOKEN ?? 'NULL_AUTH';
    private readonly itmoIdUserinfoUrl = process.env.ITMOIDURL_USERINFO ?? 'NULL_AUTH';
    private readonly itmoIdLogoutUrl = process.env.ITMOIDURL_LOGOUT ?? 'NULL_AUTH';
    private readonly itmoIdPublicUrl = process.env.ITMOIDURL_PUBLIC ?? 'NULL_AUTH';
    private readonly clientId = process.env.CLIENT_ID ?? 'NULL_AUTH';
    private readonly clientSecret = process.env.CLIENT_SECRET ?? 'NULL_AUTH';
    private readonly redirectUri = process.env.REDIRECT_URI ?? 'NULL_AUTH';
    private readonly logoutUri = process.env.LOGOUT_URI ?? 'NULL_AUTH';

    constructor (@InjectModel(Service) private readonly serviceRepository: typeof Service) { }

    // ---------- Работа с ссылками логина/выхода ----------

    getAuthorizationUrl (): string {
        const scope = 'openid%20profile%20edu%20work';
        return `${this.itmoIdAuthUrl}?client_id=${this.clientId}&response_type=code&redirect_uri=${this.redirectUri}&scope=${scope}`;
    }

    getLogoutUrl (): string {
        return `${this.itmoIdLogoutUrl}?client_id=${this.clientId}&post_logout_redirect_uri=${this.logoutUri}`;
    }

    // ---------- Работа с accessToken ----------

    async refreshAccess (refreshToken: string): Promise<any> {
        try {
            const data = new URLSearchParams();
            data.append('client_id', this.clientId);
            data.append('client_secret', this.clientSecret);
            data.append('grant_type', 'refresh_token');
            data.append('refresh_token', refreshToken);
            const response = await axios.post(this.itmoIdTokenUrl, data, {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
            return response.data;
        } catch (e) {
            const error = e as AxiosError;
            return error?.response?.data as Record<string, any>;
        }
    }

    async exchangeCodeForAccessToken (codeAuth: string): Promise<Record<string, any>> {
        try {
            const data = new URLSearchParams({
                client_id: this.clientId,
                client_secret: this.clientSecret,
                grant_type: 'authorization_code',
                redirect_uri: this.redirectUri,
                code: codeAuth
            });
            const response = await axios.post(this.itmoIdTokenUrl, data.toString(), {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
            return response.data;
        } catch (e) {
            const error = e as AxiosError;
            return error?.response?.data as Record<string, any>;
        }
    }

    async getProfileFromToken (accessToken: string): Promise<Record<string, any>> {
        try {
            const user = await axios.get(this.itmoIdUserinfoUrl, { headers: { Authorization: `Bearer ${accessToken}` } });
            return user.data;
        } catch (e) {
            console.log(`[ERR] sso service getProfileFromToken: ${e.message as string}`);
            return { null: 'null' };
        }
    }

    // ---------- Работа с публичными ключами ----------
    async getKey (): Promise<string | null> {
        try {
            const name = 'keys';
            const key = await this.serviceRepository.findOne({ where: { name } });
            if (key != null) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                return key.data.keys[0];
            } else {
                const data = await axios.get(this.itmoIdPublicUrl);
                const dto = { name, data: data.data } satisfies CreateServiceDto;
                await this.serviceRepository.create(dto);
                return dto.data.keys[0];
            }
        } catch (e) {
            console.log(`══[ERR] sso service getKey ${e.message as string}`);
            return null;
        }
    }
}
