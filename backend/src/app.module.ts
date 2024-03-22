import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from 'users/users.module';
import { NewsModule } from 'news/news.module';
import { EventsModule } from 'events/events.module';
import { ConfigModule } from '@nestjs/config';
import { User } from 'users/user.model';
import { FormsModule } from 'forms/forms.module';
import { RegsModule } from 'regs/regs.module';
import { Event } from 'events/event.model';
import { Reg } from 'regs/reg.model';
import { Form } from 'forms/form.model';
import { News } from 'news/news.model';
import { RolesModule } from 'roles/roles.module';
import { Role } from 'roles/role.model';
import { UserRoles } from 'roles/user-roles.model';
import { AuthModule } from 'auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { readFileSync } from 'fs';
import { LoggerModule } from 'logger/logger.module';

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            envFilePath: `${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            ssl: true,
            dialectOptions: {
                ssl: process.env.NODE_ENV === 'production' && {
                    require: true,
                    ca: readFileSync('root.crt').toString()
                }
            },
            host: process.env.POSTGRES_HOST ?? 'postgres',
            port: Number(process.env.POSTGRES_PORT) ?? 5432,
            username: process.env.POSTGRES_USER ?? 'admin',
            password: process.env.POSTGRES_PASSWORD ?? 'admin',
            database: process.env.POSTGRES_DB ?? 'backend',
            models: [User, Event, Reg, Form, News, Role, UserRoles],
            autoLoadModels: true,
            synchronize: true,
            logging: false
        }),
        UsersModule,
        NewsModule,
        EventsModule,
        FormsModule,
        RegsModule,
        RolesModule,
        AuthModule,
        JwtModule,
        LoggerModule
    ]

})
export class AppModule {

}
