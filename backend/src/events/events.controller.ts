import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateEventDto } from 'events/dto/create-event.dto';
import { EventsService } from 'events/events.service';
import { Cookies } from 'decorators/cookie.decorator';
import { Event } from 'events/event.model';
import { UsersService } from 'users/users.service';
import { RegsService } from 'regs/regs.service';

@ApiTags('Мероприятия')
@Controller('events')
export class EventsController {
    constructor (
        private readonly eventsService: EventsService,
        private readonly userService: UsersService,
        private readonly regService: RegsService) {}

    @ApiOperation({ summary: 'Получение всех мероприятий' })
    @ApiResponse({ status: 200, type: Event })
    @Get('fetch')
    async fetchEvents (): Promise<Event[]> {
        return await this.eventsService.fetchEvents();
    }

    @ApiBody({ type: CreateEventDto, description: 'authorId сам подтягивается системой, передавать не надо' })
    @ApiOperation({ summary: 'Создание мероприятия' })
    @ApiResponse({ status: 200, type: Event })
    @Post('create')
    async createEvent (@Body() data: Omit<CreateEventDto, 'userId'>, @Cookies('id_token') idToken: string):
    Promise<CreateEventDto | any> {
        try {
            const isu = (this.userService.decodeUser(idToken)).isu;
            const eventDto: CreateEventDto = { ...data, userId: isu };
            const event = await this.eventsService.createEvent(eventDto);
            return { id: event?.id };
        } catch (e) {
            console.log(`[LOG] createForm: ${e.message as string}`);
            return { null: undefined };
        }
    }

    @ApiOperation({ summary: 'Получение мероприятия по id' })
    @ApiResponse({ status: 200, type: Event })
    @Get(':id')
    async getEvent (@Param() params): Promise<Event | null> {
        try {
            return await this.eventsService.getEvent(params.id);
        } catch (e) {
            console.log(`[LOG] getEvent: ${e.message as string}`);
            return null;
        }
    }

    @Get('register/:id')
    async canRegister (@Param() params, @Cookies('id_token') idToken: string): Promise<boolean> {
        const userId = this.userService.decodeUser(idToken).isu;
        return await this.regService.canRegister(params.id, userId);
    }

    // @ApiOperation({ summary: 'Получение мероприятия по id' })
    // @ApiResponse({ status: 200, type: Event })
    @Patch(':id')
    async editEvent (@Body() data: CreateEventDto): Promise<boolean> {
        try {
            await this.eventsService.editEvent(data);
            return true;
        } catch (e) {
            console.log(`[LOG] getEvent: ${e.message as string}`);
            return false;
        }
    }

    @Delete(':id')
    async deleteEvent (@Cookies('id_token') idToken: string, @Param() params: { id: number }): Promise<boolean> {
        const isu = (this.userService.decodeUser(idToken)).isu;
        const event = await this.eventsService.getEvent(params.id);
        if (event !== null && event?.userId === isu) {
            await this.eventsService.deleteEvent(params.id);
            await this.regService.deleteReg(params.id);
        }
        return true;
    }
}
