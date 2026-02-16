import { Module } from '@nestjs/common';
import { DocumentManagementService } from './document-management.service';

@Module({
  providers: [DocumentManagementService],
  exports: [DocumentManagementService],
})
export class DocumentManagementModule { 
}
