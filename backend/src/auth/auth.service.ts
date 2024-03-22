import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { UsersService } from 'users/users.service';
import { SsoService } from 'auth/sso.service';
import * as jwkToPem from 'jwk-to-pem';
import { type CreateUserDto } from 'users/dto/create-user.dto';
import { type FastifyReply } from 'fastify';

@Injectable()
export class AuthService {
    constructor (private readonly userRepository: UsersService,
        private readonly ssoService: SsoService) {
    }

    async updateTokensFromRefresh (refreshToken: string): Promise<any> {
        // new tokens getting from refresh (idToken accessToken refreshToken) with new expiration
        console.log(refreshToken);
        return await this.ssoService.refreshAccess(refreshToken);
    }

    async validateToken (token: string): Promise<boolean> {
        try {
            const publicKey = await this.ssoService.getKey() as string;
            const publicKeyPem = jwkToPem(publicKey);
            jwt.verify(token, publicKeyPem, { algorithms: ['RS256'] });
            return true;
        } catch (e) {
            console.log(`══[ERR] auth service validateToken: ${e as string}`);
            return false;
        }
    }

    async importUser (idToken: string): Promise<void> {
        try {
            const userDto = jwt.decode(idToken) as CreateUserDto;
            const candidate = await this.userRepository.getUser(userDto.isu);
            if (candidate === null) {
                await this.userRepository.createUser(userDto);
            }
        } catch (e) {
            console.log(`══[ERR] auth service importUser: ${e.message as string}`);
        }
    }

    async setCookies (reply: FastifyReply, tokenData: Record<string, any>): Promise<void> {
        const cookies = [
            ['access_token', tokenData.access_token, tokenData.expires_in],
            ['id_token', tokenData.id_token],
            ['refresh_token', tokenData.refresh_token, tokenData.refresh_expires_in],
            ['token_type', tokenData.token_type],
            ['session_state', tokenData.session_state],
            ['scope', tokenData.scope]
        ];
        try {
            cookies.forEach(cookieConfig => {
                const [name, value, maxAge] = cookieConfig;
                void reply.setCookie(name, value.toString(), {
                    httpOnly: true,
                    ...(maxAge !== undefined && { maxAge }),
                    sameSite: 'strict',
                    path: '/'
                });
            });
        } catch (e) {
            console.error(`[ERR] set cookie : ${e as string}:`);
        }
    }
}
