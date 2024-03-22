import { Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Event } from 'events/event.model';
import { User } from 'users/user.model';

export interface FormCreationAttrs {
    userId: number
    title: string
    description: string
    fields: object[]

}
@Table({ tableName: 'forms' })
export class Form extends Model<Form, FormCreationAttrs> {
    @ApiProperty({ example: '12', description: 'id формы' })
    @Column({ type: DataType.INTEGER, unique: true, primaryKey: true, allowNull: false, autoIncrement: true })
        id: number;

    @ForeignKey(() => User)
    @ApiProperty({ example: '330330', description: 'isu id создателя формы' })
    @Column({ type: DataType.INTEGER, allowNull: false })
        userId: number;

    @ApiProperty({ example: 'Выезд 2007', description: 'Название формы' })
    @Column({ type: DataType.STRING, allowNull: false })
        title: string;

    @ApiProperty({ example: 'Форма для больших выездов магистров', description: 'Описание формы' })
    @Column({ type: DataType.STRING, allowNull: false })
        description: string;

    @ApiProperty({ example: '{...}', description: 'Наполнение формы полями' })
    @Column({ type: DataType.ARRAY(DataType.JSON), allowNull: false })
        fields: object[];

    @HasMany(() => Event)
        events: Event[];
}
