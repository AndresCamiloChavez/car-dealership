import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // solo es para recibir los datos que estan en el DTO's
      forbidNonWhitelisted: true, // arroja un error de las propiedades que no existen
    }),
  );

  await app.listen(3000);
}
bootstrap();
