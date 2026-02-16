import { Controller, Get } from '@nestjs/common';
import { DocumentManagementService } from '@postobon-solutions/server';

@Controller('remission')
export class RemissionController {
    constructor(private readonly documentManagementService: DocumentManagementService) {
    }

    @Get('')
    getRemissions() {
        return this.documentManagementService.findOne(1803);
    }
}
