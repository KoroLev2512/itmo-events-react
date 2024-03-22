import { BelongsToMany, Model, Column, DataType, Table } from 'sequelize-typescript';
// import {ApiProperty} from "@nestjs/swagger";
import { User } from 'users/user.model';
import { UserRoles } from './user-roles.model';

interface RoleCreationAttrs {
    value: string
    description: string
}
@Table({ tableName: 'roles', createdAt: false, updatedAt: false })
export class Role extends Model<Role, RoleCreationAttrs> {
    // @ApiProperty({example:'1',description:'ID роли'})
    @Column({ type: DataType.INTEGER, unique: true, allowNull: false, primaryKey: true, autoIncrement: true })
        id: number;

    // @ApiProperty({example:'ADMIN',description:'Значение роли пользователя'})
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
        value: string;

    // @ApiProperty({example:'Администратор',description:'Описание роли'})
    @Column({ type: DataType.STRING, unique: true, allowNull: false, primaryKey: true })
        description: string;

    @BelongsToMany(() => User, () => UserRoles)
        users: User[];
}
