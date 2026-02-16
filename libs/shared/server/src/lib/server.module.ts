import { Module } from '@nestjs/common';
import { DocumentManagementModule } from './modules/documents/document-management.module';

@Module({
  controllers: [],
  providers: [],
  exports: [],
  imports: [DocumentManagementModule],
})
export class ServerModule {}
