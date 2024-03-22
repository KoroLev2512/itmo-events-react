import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface NewsCreationAttrs {
    title: string
    content: string
}
@Table({ tableName: 'news' })
export class News extends Model<News, NewsCreationAttrs> {
    @Column({ type: DataType.INTEGER, unique: true, allowNull: false, primaryKey: true, autoIncrement: true })
        id: number;

    @Column({ type: DataType.STRING, allowNull: false })
        title: string;

    @Column({ type: DataType.STRING, allowNull: false })
        content: string;

    @Column({ type: DataType.STRING, allowNull: true })
        imageURL: string;
}
