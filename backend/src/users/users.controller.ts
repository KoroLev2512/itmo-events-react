import { Body, Controller, Get, Param, Put, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './user.model';
import { JwtAuthGuard } from 'auth/jwt-auth.guard';
import { Cookies } from 'decorators/cookie.decorator';
import { Roles } from 'decorators/roles.decorator';
import { RoleGuard } from 'auth/role.guard';

@ApiTags('Пользователи')
@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
    constructor (private readonly usersService: UsersService) { }

    @ApiOperation({ summary: 'Получение пользователя' })
    @ApiResponse({ status: 200, type: User })
    // @Roles('USER')
    // @UseGuards(RoleGuard)
    @Get('me')
    async getMe (@Cookies('id_token') idToken: string): Promise<User | null> {
        try {
            const isu = (this.usersService.decodeUser(idToken).isu);
            return await this.usersService.getUser(isu);
        } catch (e) {
            console.log(`getMe controller ERR: ${e.message as string}`);
            return null;
        }
    }

    @ApiOperation({ summary: 'Получение пользователя по isu' })
    @ApiResponse({ status: 200, type: User })
    @Roles('ADMIN')
    @UseGuards(RoleGuard)
    @Get(':isu')
    async getUser (@Param() params): Promise<User | null> {
        return await this.usersService.getUser(params.isu);
    }

    @ApiOperation({ summary: 'Обновление данных пользователя' })
    @ApiResponse({ status: 200, type: User })
    @Roles('USER')
    @UseGuards(RoleGuard)
    @Put('update')
    async updateUser (@Body() updates: User, @Cookies('id_token') idToken: string): Promise<boolean> {
        try {
            const isu = (this.usersService.decodeUser(idToken).isu);
            await this.usersService.updateUser(isu, updates);
            return true;
        } catch (e) {
            console.log(`getMe controller ERR: ${e.message as string}`);
            return false;
        }
    }
}
