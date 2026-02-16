import { Injectable } from '@nestjs/common';
import { CreateDocumentManagementDto } from './dto/create-document-management.dto';
import { UpdateDocumentManagementDto } from './dto/update-document-management.dto';

@Injectable()
export class DocumentManagementService {
  create(createDocumentManagementDto: CreateDocumentManagementDto) {
    return 'This action adds a new documentManagement';
  }

  findAll() {
    return `This action returns all documentManagement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} documentManagement`;
  }

  update(id: number, updateDocumentManagementDto: UpdateDocumentManagementDto) {
    return `This action updates a #${id} documentManagement`;
  }

  remove(id: number) {
    return `This action removes a #${id} documentManagement`;
  }
}
