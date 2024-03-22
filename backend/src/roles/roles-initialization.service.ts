import { Injectable, type OnModuleInit } from '@nestjs/common';
import { Role } from './role.model';

@Injectable()
export class RolesInitializationService implements OnModuleInit {
    async onModuleInit (): Promise<void> {
        await this.createInitialRoles();
    }

    private async createInitialRoles (): Promise<void> {
        const roles = [
            { value: 'ADMIN', description: 'Админ - человек имеющий полные права на все' },
            { value: 'USER', description: 'Пользователь - человек без дополнительных ролей' },
            { value: 'EVENTADMIN', description: 'Создатель мероприятия - может создавать, редактировать и удалять мероприятия' },
            { value: 'EVENTMANAGER', description: 'Ответственный за мероприятие - присваивается юзеру на конкретные мероприятия админом и может выполнять определенные действия с мероприятием, кроме создания, редактирования и удаления' }
        ];

        for (const role of roles) {
            await Role.findOrCreate({ where: role });
        }
    }
}
