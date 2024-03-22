import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface ServiceCreationAttrs {
    name: string
    data: object
}
@Table({ tableName: 'service' })
export class Service extends Model<Service, ServiceCreationAttrs> {
    @ApiProperty({ example: '1', description: 'id' })
    @Column({ type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true })
        id: number;

    @ApiProperty({ example: 'keys', description: 'название вспомогательных данных' })
    @Column({ type: DataType.STRING, unique: true })
        name: number;

    @ApiProperty({ example: '{...}', description: 'Сами вспомогательные данные' })
    @Column({ type: DataType.JSON, allowNull: true })
        data: object;
}
