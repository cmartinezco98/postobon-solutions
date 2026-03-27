import { Module } from '@nestjs/common';
import { DocumentManagementService } from './services/document-management.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Preauthorized } from './entities/preauthorized.entity';
import { ORMPreauthorizedRepository } from './repositories/preauthorizeds/preauthorized.orm.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Preauthorized])],
  providers: [DocumentManagementService, ORMPreauthorizedRepository],
  exports: [DocumentManagementService],
})
export class DocumentManagementModule {
}
