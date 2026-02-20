import { Injectable } from '@nestjs/common';
import { CreateDocumentManagementDto } from './dto/create-document-management.dto';
import { UpdateDocumentManagementDto } from './dto/update-document-management.dto';
import { GetPreAuthorizedsByDateDto } from './dto/get-preauthorizeds-by-date.dto';

@Injectable()
export class DocumentManagementService {
  create(createDocumentManagementDto: CreateDocumentManagementDto) {
    return 'This action adds a new documentManagement';
  }


    /**
   * Busca un usuario por su ID único en la base de datos.
   * @param dto DTO con los parámetros de búsqueda.
   * @returns La lista de objetos encontrados o null.
   */

  async getPreAuthorizedsByDate(dto: GetPreAuthorizedsByDateDto) {
    const {end_date, start_date,  route} = dto;
    const startDate = new Date(start_date);
    const endDate = new Date(end_date);
    
    return `This action returns pre-authorized documents from ${startDate} to ${endDate} from route ${route}` ;
  }

  findAll() {
    return `This action returns all documentManagement`;
  }

  findOne(id: number) {
    return `Esto retorna un #${id} desde la Librería de DocumentManagementService`;
  }

  update(id: number, updateDocumentManagementDto: UpdateDocumentManagementDto) {
    return `This action updates a #${id} documentManagement`;
  }

  remove(id: number) {
    return `This action removes a #${id} documentManagement`;
  }
}
