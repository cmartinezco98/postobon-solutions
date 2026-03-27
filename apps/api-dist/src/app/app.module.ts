import { Module } from '@nestjs/common';
import { configTypeORM, DocumentManagementModule } from '@postobon-solutions/server';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RemissionController } from './modules/remissions/remission.controller';

@Module({
  imports: [TypeOrmModule.forRoot(configTypeORM),DocumentManagementModule],
  controllers: [RemissionController],
  providers: [],
})
export class AppModule {}
