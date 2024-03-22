import { NestFactory } from '@nestjs/core';
import { AppModule } from 'app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import * as cookieParser from 'cookie-parser';
import fastifyCookie from '@fastify/cookie';
import fastifyCors from '@fastify/cors';
import fastifyHelmet from '@fastify/helmet';
import { FastifyAdapter, type NestFastifyApplication } from '@nestjs/platform-fastify';


const CORS_OPTIONS = {
    origin: ['https://events.itmo.space', 'https://id.itmo.ru'], // Обновленный origin
    allowedHeaders: [
        'Access-Control-Allow-Origin',
        'Origin',
        'X-Requested-With',
        'Accept',
        'Content-Type',
        'Authorization',
        'Access-Control-Allow-Headers' // Добавлен Access-Control-Allow-Headers
    ],
    exposedHeaders: ['Authorization', 'Access-Control-Allow-Headers'], // Добавлен Access-Control-Allow-Headers
    credentials: true,
    methods: ['GET', 'PUT', 'OPTIONS', 'POST', 'DELETE']
};

const start = async (): Promise<any> => {
    const PORT = process.env.PORT ?? 5001;
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter()
    );
    await app.register(fastifyCookie);
    await app.register(fastifyHelmet);
    await app.register(fastifyCors, CORS_OPTIONS);

    const config = new DocumentBuilder()
        .setTitle('Event Backend')
        .setDescription('REST API Documentation')
        .setVersion('1.0.0')
        .addTag('Event')
        .build();

    const document = SwaggerModule.createDocument(app, config);

    app.setGlobalPrefix('api');
    SwaggerModule.setup('/api/docs', app, document);
    // app.use(cookieParser());
    await app.listen(PORT, '0.0.0.0', () => { console.log(`ALIVE port=${PORT}`); });
    return 0;
};

try {
    void start();
} catch (e) {
    console.log(e.message as string);
}
