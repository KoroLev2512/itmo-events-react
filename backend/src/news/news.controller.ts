import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoggerService } from 'logger/logger.service';

@ApiTags('Новости')
@Controller('news')
export class NewsController {
    constructor (private readonly console: LoggerService) {
    }

    @Get()
    async fetchNews (): Promise<object[]> {
        await this.console.log(['[NEWS WORKS]']);
        return [{ id: 123 }];
    }
}
