import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { type CreateUserDto } from './dto/create-user.dto';
import { RolesService } from 'roles/roles.service';
import * as jwt from 'jsonwebtoken';
import { Role } from 'roles/role.model';

@Injectable()
export class UsersService {
    constructor (@InjectModel(User) private readonly userRepository: typeof User, private readonly roleService: RolesService) {
    }

    async createUser (dto: CreateUserDto): Promise<User | null> {
        try {
            const user = await this.userRepository.create(dto);
            const role = await this.roleService.getRoleByValue('USER');
            if ((user != null) && (role != null)) {
                await user.$set('roles', [role.id]);
                user.roles = [role];
                return user;
            }
            return null;
        } catch (e) {
            console.log(`createUser service ERR: ${e.message as string}`);
            return null;
        }
    }

    decodeUser (idToken: string): CreateUserDto {
        return jwt.decode(idToken) as CreateUserDto;
    }

    async updateUser (isu: number, updates: object): Promise<void> {
        try {
            const user = await this.userRepository.findOne({ where: { isu } });
            if (user == null) {
                throw new Error('User not found');
            }
            await user.update(updates);
        } catch (e) {
            console.log(`updateUser service ERR: ${e.message as string}`);
            throw e;
        }
    }

    async getUser (isu: number): Promise<User | null> {
        try {
            return await this.userRepository.findOne({ where: { isu }, include: [{ model: Role }] });
        } catch (e) {
            console.log(`getUser service ERR: ${e.message as string}`);
            return null;
        }
    }
}
