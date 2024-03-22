import { type CanActivate, type ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from 'decorators/roles.decorator';
import { type FastifyRequest } from 'fastify';
import { UsersService } from 'users/users.service';

@Injectable()
export class RoleGuard implements CanActivate {
    constructor (private readonly reflector: Reflector,
        private readonly userService: UsersService) {}

    async canActivate (context: ExecutionContext): Promise<boolean> {
        try {
            const reqRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
                context.getHandler(),
                context.getClass()]);
            if (reqRoles.length === 0) {
                return true;
            }

            const req = context.switchToHttp().getRequest<FastifyRequest>();
            const token = req.cookies.id_token;
            if (token !== undefined) {
                const profile = this.userService.decodeUser(token);
                const user = await this.userService.getUser(profile.isu);
                if (user != null) {
                    console.log(user);
                    return (user.roles.some(role => reqRoles.includes(role.value)));
                }
            }
            return false;
        } catch (e) {
            return false;
        }
    }
}
