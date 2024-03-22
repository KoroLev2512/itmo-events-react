import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RegsService } from 'regs/regs.service';
import { type Reg } from 'regs/reg.model';
import { Cookies } from 'decorators/cookie.decorator';
import { RegDto } from 'regs/dto/reg.dto';
import { UsersService } from 'users/users.service';

@ApiTags('Заявки')
@Controller('regs')
export class RegsController {
    constructor (private readonly regService: RegsService, private readonly usersService: UsersService) {}
    @Get('fetch')
    async fetchAll (): Promise<Reg[]> {
        return await this.regService.fetchAll();
    }

    @Patch(':id')
    async updateUserRegistration (@Param() params, @Body() body: { userId: number, dto: Omit<RegDto, 'data'> }): Promise<boolean> {
        try {
            await this.regService.updateRegData(params.id, body.userId, body.dto);
            return true;
        } catch {
            return false;
        }
    }

    @Post(':id')
    async addUserRegistration (@Param() params, @Cookies('id_token') idToken: string, @Body() userData: RegDto): Promise<boolean> {
        try {
            const isu = (this.usersService.decodeUser(idToken).isu);
            await this.regService.addRegData(params.id, isu, userData);
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    @Get(':id')
    async getReg (@Param() id: number): Promise<Reg | null> {
        return await this.regService.getRegById(id);
    }
}
