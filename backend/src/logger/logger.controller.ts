import { Controller, Get } from '@nestjs/common';
import { LoggerService } from 'logger/logger.service';
import { type Logger } from 'logger/logger.model';

@Controller('logger')
export class LoggerController {
    constructor (private readonly loggerService: LoggerService) {}

    @Get()
    async getLogs (): Promise<Logger[]> {
        return await this.loggerService.getLogs();
    }

    @Get('clear')
    async deleteLogs (): Promise<any> {
        await this.loggerService.deleteLogs();
        return { logs: 'cleared' };
    }
}
