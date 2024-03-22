import { Injectable } from '@nestjs/common';
import { Reg } from 'regs/reg.model';
import { type CreateRegDto } from 'regs/dto/create-reg.dto';
import { InjectModel } from '@nestjs/sequelize';
import { type RegDto } from 'regs/dto/reg.dto';

@Injectable()
export class RegsService {
    constructor (@InjectModel(Reg) private readonly regRepository: typeof Reg) {}

    async fetchAll (): Promise<Reg[]> {
        return await this.regRepository.findAll();
    }

    async getRegById (id: number): Promise<Reg | null> {
        return await this.regRepository.findOne({ where: { id } });
    }

    async createReg (dto: CreateRegDto): Promise<void> {
        await this.regRepository.create(dto);
    }

    async deleteReg (id: number): Promise<void> {
        await this.regRepository.destroy({ where: { eventId: id } });
    }

    async updateRegData (eventId: number, userId: number, dto: Omit<RegDto, 'data'>): Promise<void> {
        const reg = await this.regRepository.findOne({ where: { eventId } });
        if (reg !== null) {
            reg.regList[userId].state = dto.state;
            reg.regList[userId].comment = dto.comment;
            reg.changed('regList', true);
            await reg.save();
        }
    }

    async addRegData (eventId: number, userId: number, userData: RegDto): Promise<void> {
        const reg = await this.regRepository.findOne({ where: { eventId } });
        if (reg !== null) {
            reg.regList[userId] = userData;
            reg.changed('regList', true);
            await reg.save();
        }
    }

    async canRegister (eventId: number, userId: number): Promise<boolean> {
        const reg = await this.regRepository.findOne({
            where: {
                eventId,
                regList: { [userId]: { $not: null } }
            }
        });
        console.log(reg?.regList);
        return reg === null;
    }
}
