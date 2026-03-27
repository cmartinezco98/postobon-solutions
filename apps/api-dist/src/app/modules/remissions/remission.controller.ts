import { Body, Controller, Post } from '@nestjs/common';
import { DocumentManagementService, GetPreAuthorizedsByDateDto } from '@postobon-solutions/server';

@Controller('remission')
export class RemissionController {
    constructor(private readonly documentManagementService: DocumentManagementService) {
    }

    @Post('preauthorizeds-by-date')
    getPreAuthorizedsByDate(@Body() data: GetPreAuthorizedsByDateDto) {
        return this.documentManagementService.getPreAuthorizedsByDate(data);
    }
}
