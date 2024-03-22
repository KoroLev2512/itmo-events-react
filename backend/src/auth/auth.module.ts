import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { SsoService } from './sso.service';
import { AuthService } from './auth.service';
import { UsersModule } from 'users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Service } from 'auth/service.model';
import { LoggerModule } from 'logger/logger.module';

@Module({
    controllers: [AuthController],
    providers: [SsoService, AuthService],
    imports: [
        forwardRef(() => UsersModule),
        forwardRef(() => LoggerModule),
        SequelizeModule.forFeature([Service])
    ],
    exports: [
        SsoService,
        AuthService
    ]
})
export class AuthModule {
}
