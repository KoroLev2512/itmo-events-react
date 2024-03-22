// import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
// import { Form } from 'forms/form.model';
// import { Event } from 'events/event.model';
//
// @Table({ tableName: 'form-events', createdAt: false, updatedAt: false })
// export class FormEvents extends Model<FormEvents> {
//     @Column({ type: DataType.INTEGER, unique: true, allowNull: false, primaryKey: true, autoIncrement: true })
//         id: number;
//
//     @ForeignKey(() => Form)
//     @Column({ type: DataType.INTEGER })
//         formId: number;
//
//     @ForeignKey(() => Event)
//     @Column({ type: DataType.INTEGER })
//         eventId: number;
// }
