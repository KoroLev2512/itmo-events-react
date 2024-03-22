import { Module } from '@nestjs/common';
import { LoggerController } from './logger.controller';
import { LoggerService } from './logger.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Logger } from 'logger/logger.model';

@Module({
    controllers: [LoggerController],
    providers: [LoggerService],
    imports: [
        SequelizeModule.forFeature([Logger])
    ],
    exports: [
        LoggerService
    ]
})
export class LoggerModule {}
