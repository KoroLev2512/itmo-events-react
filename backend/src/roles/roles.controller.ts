import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { createRoleDto } from './dto/create-role.dto';
import { ApiTags } from '@nestjs/swagger';
import { type Role } from 'roles/role.model';

@ApiTags('Роли')
@Controller('roles')
export class RolesController {
    constructor (private readonly roleService: RolesService) {
    }

    @Post()
    async create (@Body() dto: createRoleDto): Promise<Role | null> {
        return await this.roleService.createRole(dto);
    }

    @Get('/:value')
    async getByValue (@Param('value') value: string): Promise<Role | null> {
        return await this.roleService.getRoleByValue(value);
    }
}
