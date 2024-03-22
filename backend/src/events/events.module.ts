import { forwardRef, Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Event } from './event.model';
import { UsersModule } from 'users/users.module';
import { Reg } from 'regs/reg.model';
import { Form } from 'forms/form.model';
import { FormsModule } from 'forms/forms.module';
import { RegsModule } from 'regs/regs.module';

@Module({
    controllers: [EventsController],
    providers: [EventsService],
    imports: [
        SequelizeModule.forFeature([Event, Reg, Form]),
        forwardRef(() => UsersModule),
        forwardRef(() => FormsModule),
        forwardRef(() => RegsModule)
    ]
})
export class EventsModule {

}
