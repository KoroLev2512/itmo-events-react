import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface LoggerCreationAttrs {
    log: object
}
@Table({ tableName: 'logger', createdAt: false, updatedAt: false })
export class Logger extends Model<Logger, LoggerCreationAttrs> {
    @Column({ type: DataType.JSON, allowNull: false })
        log: object;
}
