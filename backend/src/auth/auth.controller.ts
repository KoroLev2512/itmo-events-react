import { Controller, Get, Query, Res } from '@nestjs/common';
import { SsoService } from './sso.service';
import { AuthService } from './auth.service';
import { FastifyReply } from 'fastify';
import { ApiTags } from '@nestjs/swagger';
import { isString } from '@nestjs/common/utils/shared.utils';

@ApiTags('Логин')
@Controller('login')
export class AuthController {
    constructor (private readonly ssoService: SsoService,
        private readonly authService: AuthService) {}

    @Get()
    async login (@Query() query: any, @Res() res: FastifyReply): Promise<any> {
        try {
            const code = query.code as string;
            if (code === undefined) {
                const authorizationUrl = this.ssoService.getAuthorizationUrl();
                void await res.status(307).redirect(authorizationUrl);
            } else {
                const tokenData = await this.ssoService.exchangeCodeForAccessToken(code);
                if (isString(tokenData.error)) {
                    return await res.status(301).redirect('/error');
                }
                if (tokenData?.id_token) {
                    await this.authService.importUser(tokenData?.id_token);
                    await this.authService.setCookies(res, tokenData);
                } else {
                    return await res.status(301).redirect('/error');
                }
                void await res.status(301).redirect('/');
            }
        } catch (e) {
            console.error('[ERR] auth controller handleCallback:', e.message);
            await res.status(307).redirect('/');
        }
    }

    @Get('out')
    logout (@Res() res: FastifyReply): void {
        try {
            const logoutUrl = this.ssoService.getLogoutUrl();
            void res.redirect(307, logoutUrl);
        } catch (e) {
            console.log(`[ERR] auth controller logout controller: ${e.message as string}`);
        }
    }
}
