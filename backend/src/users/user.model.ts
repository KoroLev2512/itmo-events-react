import { BelongsToMany, Model, Column, DataType, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'roles/role.model';
import { UserRoles } from 'roles/user-roles.model';

interface UserCreationAttrs {
    isu: number
    gender: string
    name: string
    given_name: string
    family_name: string
    picture: string
    email_verified: boolean
}
@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({ example: '330330', description: 'isu ID' })
    @Column({ type: DataType.INTEGER, unique: true, allowNull: false, primaryKey: true })
        isu: number;

    @ApiProperty({ example: 'male', description: 'Пол' })
    @Column({ type: DataType.STRING, allowNull: false, defaultValue: 'male' })
        gender: string;

    @ApiProperty({ example: 'Зленко Владимир Владимирович', description: 'Полное ФИО' })
    @Column({ type: DataType.STRING, allowNull: false })
        name: string;

    @ApiProperty({ example: 'Владимир', description: 'Фамилия' })
    @Column({ type: DataType.STRING, allowNull: false })
        given_name: string;

    @ApiProperty({ example: 'Владимирович', description: 'Имя' })
    @Column({ type: DataType.STRING, allowNull: true })
        middle_name: string;

    @ApiProperty({ example: 'Зленко', description: 'Отчество' })
    @Column({ type: DataType.STRING, allowNull: false })
        family_name: string;

    @ApiProperty({ example: '88005553535', description: 'Номер телефона' })
    @Column({ type: DataType.STRING, allowNull: true })
        phone: string;

    @ApiProperty({ example: 'vk.com/pavel_durov', description: 'Ссылка ВК' })
    @Column({ type: DataType.STRING, allowNull: true })
        vk: string;

    @ApiProperty({ example: '@Pavel_Durov', description: 'Ссылка ТГ' })
    @Column({ type: DataType.STRING, allowNull: true })
        tg: string;

    @ApiProperty({ example: 'example@mail.ru', description: 'Личная электронная почта' })
    @Column({ type: DataType.STRING, unique: true, allowNull: true })
        email: string;

    @ApiProperty({ example: 'true', description: 'Подтвержден личный адрес' })
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
        email_verified: boolean;

    @ApiProperty({ example: 'true', description: 'Пользователь студент или нет' })
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
        is_student: boolean;

    @ApiProperty({ example: '330330@niuitmo.ru', description: 'Корпоративная электронная почта' })
    @Column({ type: DataType.STRING, unique: true, allowNull: true })
        corp_email: string;

    @ApiProperty({ example: 'https://imageurl.com', description: 'Ссылка на фото' })
    @Column({ type: DataType.STRING, allowNull: true })
        picture: string;

    @ApiProperty({ example: 'true', description: 'Забанен пользователь' })
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
        banned: boolean;

    @ApiProperty({ example: 'Не пришел на меро', description: 'Причина бана' })
    @Column({ type: DataType.STRING, allowNull: true })
        ban_reason: string;

    @BelongsToMany(() => Role, () => UserRoles)
        roles: Role[];
}
