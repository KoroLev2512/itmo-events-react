import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Event } from 'events/event.model';

interface RegCreationAttrs {
    eventId: number
}
@Table({ tableName: 'regs', createdAt: false, updatedAt: false })
export class Reg extends Model<Reg, RegCreationAttrs> {
    @ForeignKey(() => Event)
    @Column({ type: DataType.INTEGER, unique: true, primaryKey: true, allowNull: false })
        eventId: number;

    @Column({ type: DataType.JSONB, defaultValue: {} })
        regList: Record<number, { data: object, state: string, comment: string }>;
}
