import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocumentManagementModule } from '@postobon-solutions/server';
import { RemmissionModule } from './modules/remissions/remmission.module';

@Module({
  imports: [DocumentManagementModule, RemmissionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
