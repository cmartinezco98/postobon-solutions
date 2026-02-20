import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true, 
    whitelist: true, 
    forbidNonWhitelisted: true,
  }));
  const globalPrefix = process.env.NAME_API + '/' + process.env.API_VERSION || 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT_API || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
