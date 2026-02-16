import { Module } from '@nestjs/common';
import { RemissionController } from './remission.controller';
import { DocumentManagementModule } from '@postobon-solutions/server';

@Module({
  controllers: [RemissionController],
  imports: [DocumentManagementModule],
})
export class RemmissionModule {}
