import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ example: '330330', description: 'isu ID' })
    readonly isu: number;

    @ApiProperty({ example: 'male', description: 'Пол' })
    readonly gender: string;

    @ApiProperty({ example: 'Зленко Владимир Владимирович', description: 'Полное ФИО' })
    readonly name: string;

    @ApiProperty({ example: 'Зленко', description: 'Фамилия' })
    readonly family_name: string;

    @ApiProperty({ example: 'Владимир', description: 'Имя' })
    readonly given_name: string;

    @ApiProperty({ example: 'Владимирович', description: 'Отчество' })
    readonly middle_name: string;

    @ApiProperty({ example: 'https://imageurl.com', description: 'Ссылка на фото' })
    readonly picture: string;

    @ApiProperty({ example: 'example@mail.ru', description: 'Личная электронная почта' })
    readonly email: string;

    @ApiProperty({ example: 'true', description: 'Подтвержден личный адрес' })
    readonly email_verified: boolean;

    @ApiProperty({ example: 'true', description: 'Пользователь студент или нет' })
    readonly is_student: boolean;

    @ApiProperty({ example: '330330@niuitmo.ru', description: 'Корпоративная электронная почта' })
    readonly corp_email: string;
}
