import { ForeignKey, Model, Column, DataType, Table } from 'sequelize-typescript';
import { User } from 'users/user.model';
import { Role } from './role.model';

@Table({ tableName: 'user_roles', createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {
    @Column({ type: DataType.INTEGER, unique: true, allowNull: false, primaryKey: true, autoIncrement: true })
        id: number;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
        userId: number;

    @ForeignKey(() => Role)
    @Column({ type: DataType.INTEGER })
        roleId: number;

    @Column({ type: DataType.INTEGER, allowNull: true })
        data: number;
}
