import { Model, Column, DataType, Table, HasOne, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Form } from 'forms/form.model';
import { Reg } from 'regs/reg.model';

interface EventsCreationAttrs {
    title: string
    description: string
    userId: number
    imageUrl: string
    formId: number
}

@Table({ tableName: 'events', createdAt: false, updatedAt: false })
export class Event extends Model<Event, EventsCreationAttrs> {
    @Column({ type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true, allowNull: false })
        id: number;

    @Column({ type: DataType.STRING, allowNull: false })
        title: string;

    @Column({ type: DataType.STRING, allowNull: false })
        description: string;

    @Column({ type: DataType.STRING, allowNull: true })
        imageUrl: string;

    @Column({ type: DataType.STRING, allowNull: true })
        albumUrl: string;

    @Column({ type: DataType.INTEGER, allowNull: false })
        userId: number;

    @Column({ type: DataType.DATE, allowNull: false })
        eventStartDate: number;

    @Column({ type: DataType.DATE, allowNull: false })
        eventExpirationDate: number;

    @Column({ type: DataType.DATE, allowNull: false })
        regStartDate: number;

    @Column({ type: DataType.DATE, allowNull: false })
        regExpirationDate: number;

    @Column({ type: DataType.INTEGER, allowNull: false })
        duration: number;

    @Column({ type: DataType.INTEGER, defaultValue: 0 })
        memberAmount: number;

    @Column({ type: DataType.INTEGER, defaultValue: 0 })
        visitors: number;

    @HasOne(() => Reg)
        reg: Reg;

    @ForeignKey(() => Form)
    @Column({ type: DataType.INTEGER, allowNull: true })
        formId: number;

    @BelongsTo(() => Form)
        form: Form;
}
