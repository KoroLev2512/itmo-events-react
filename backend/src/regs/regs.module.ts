import { forwardRef, Module } from '@nestjs/common';
import { RegsService } from './regs.service';
import { RegsController } from './regs.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Reg } from './reg.model';
import { Event } from 'events/event.model';
import { UsersModule } from 'users/users.module';

@Module({
    providers: [RegsService],
    controllers: [RegsController],
    imports: [
        SequelizeModule.forFeature([Reg, Event]),
        forwardRef(() => UsersModule)
    ],
    exports: [
        RegsService
    ]
})
export class RegsModule {}
