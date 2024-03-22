import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Logger } from 'logger/logger.model';
import { type CreateLogDto } from 'logger/dto/create-log.dto';

@Injectable()
export class LoggerService {
    constructor (@InjectModel(Logger) private readonly loggerRepository: typeof Logger) {
    }

    async log (m: any[]): Promise<void> {
        try {
            const dto: CreateLogDto = { log: m };
            console.log(dto.log);
            await this.loggerRepository.create(dto);
        } catch (e) {
            console.log(e.message);
        }
    }

    async getLogs (): Promise<Logger[]> {
        return await this.loggerRepository.findAll({ attributes: { exclude: ['id'] } });
    }

    async deleteLogs (): Promise<void> {
        await this.loggerRepository.truncate();
    }
}
