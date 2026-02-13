import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

// Configuraciones
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const configService = app.get(ConfigService);
  // const prefixApi = configService.get('NAME_API') + '-' + configService.get('API_VERSION');
  // //Configuracion de prefijo en la ruta de la API
  // app.setGlobalPrefix(prefixApi);

  app.setGlobalPrefix("api-dist/v1");
  // const port = configService.get<number>('PORT_API') || 3000;
  await app.listen(3000);
  Logger.log(
    `🚀 Application is running on: http://localhost:3000/api-dist/v1`
  );
}

bootstrap();
