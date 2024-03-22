import { forwardRef, Module } from '@nestjs/common';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { News } from './news.model';
import { LoggerModule } from 'logger/logger.module';

@Module({
    controllers: [NewsController],
    providers: [NewsService],
    imports: [
        forwardRef(() => LoggerModule),
        SequelizeModule.forFeature([News])
    ]
})
export class NewsModule {}
