import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configTypeORM, DocumentManagementModule } from '@postobon-solutions/server';
import { RemmissionModule } from './modules/remissions/remmission.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(configTypeORM), DocumentManagementModule, RemmissionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
