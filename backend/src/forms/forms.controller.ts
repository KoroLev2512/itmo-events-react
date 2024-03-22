import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FormsService } from 'forms/forms.service';
import { Form } from 'forms/form.model';
import { UsersService } from 'users/users.service';
import { Cookies } from 'decorators/cookie.decorator';
import { CreateFormDto } from 'forms/dto/create-form.dto';
import { JwtAuthGuard } from 'auth/jwt-auth.guard';

@ApiTags('Формы')
@Controller('forms')
// @UseGuards(JwtAuthGuard)
export class FormsController {
    constructor (private readonly formService: FormsService, private readonly userService: UsersService) {}

    @ApiOperation({ summary: 'Получение форм' })
    @ApiResponse({ status: 200, type: Form })
    @Get('fetch')
    async fetchForms (): Promise<Form[]> {
        return await this.formService.fetch();
    }

    @ApiOperation({ summary: 'Получение форы по id' })
    @ApiResponse({ status: 200, type: Form })
    @Get(':id')
    async getForm (@Param() params): Promise<Form | null> {
        return await this.formService.getFormById(params.id);
    }

    @ApiBody({ type: CreateFormDto, description: 'userId сам подтягивается системой, передавать не надо' })
    @ApiOperation({ summary: 'Создание формы' })
    @ApiResponse({ status: 200, type: Form })
    @Post('create')
    async createForm (@Body() data: Omit<CreateFormDto, 'userId'>, @Cookies('id_token') idToken: string):
    Promise<number> {
        try {
            const isu = (this.userService.decodeUser(idToken)).isu;
            console.log(isu);
            const dto: CreateFormDto = { ...data, userId: isu };
            const form = await this.formService.create(dto);
            return form?.id;
        } catch (e) {
            throw new HttpException('Forbidden', HttpStatus.BAD_REQUEST);
        }
    }

    @Put('update')
    async updateForm (@Body() updates: Form): Promise<boolean> {
        try {
            const formId = updates.id;
            await this.formService.update(formId, updates);
            return true;
        } catch (e) {
            return false;
        }
    }

    @Delete('delete')
    async deleteForm (@Cookies('id_token') idToken: string, @Body() id: number): Promise<void> {
        const isu = (this.userService.decodeUser(idToken)).isu;
        const form = await this.formService.getFormById(id);
        if (form !== null && form?.userId === isu) {
            await this.formService.delete(id);
        }
    }
}
