import { type ExecutionContext, Injectable, type CanActivate } from '@nestjs/common';
import { type FastifyReply, type FastifyRequest } from 'fastify';
import { AuthService } from 'auth/auth.service';

@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor (private readonly authService: AuthService) {}

    async canActivate (context: ExecutionContext): Promise<boolean> {
        const req = context.switchToHttp().getRequest<FastifyRequest>();
        const res = context.switchToHttp().getResponse<FastifyReply>();

        try {
            console.log('jwtguard works');
            const bearer = req.cookies.token_type;
            const accessToken = req.cookies.access_token;
            console.log('jwt start');
            if (accessToken !== undefined && bearer === 'Bearer' &&
                await this.authService.validateToken(accessToken)) {
                console.log('yepi');
                return true;
            } else if (req.cookies.refresh_token !== undefined) {
                console.log('no');
                const newTokens = await this.authService.updateTokensFromRefresh(req.cookies.refresh_token);
                await this.authService.setCookies(res, newTokens);
                return true;
            }
            console.log('so no');
            return false;
        } catch (e) {
            console.log(`[ERR] JwtGuard: ${e.message as string}`);
            return false;
        }
    }
}
