import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Form } from 'forms/form.model';
import { type CreateFormDto } from 'forms/dto/create-form.dto';

@Injectable()
export class FormsService {
    constructor (@InjectModel(Form) private readonly formRepository: typeof Form) {
    }

    async create (dto: CreateFormDto): Promise<Form> {
        return await this.formRepository.create(dto);
    }

    async getFormById (id: number): Promise<Form | null> {
        return await this.formRepository.findOne({ where: { id } });
    }

    async fetch (): Promise<Form[]> {
        return await this.formRepository.findAll();
    }

    async update (id: number, updates: object): Promise<void> {
        try {
            const form = await this.formRepository.findOne({ where: { id } });

            if (form !== null) {
                await form.update(updates);
            }
        } catch (e) {
            console.log(`updateForm service ERR: ${e.message as string}`);
            throw e;
        }
    }

    async delete (id: number): Promise<void> {
        await this.formRepository.destroy({ where: { id } });
    }
}
