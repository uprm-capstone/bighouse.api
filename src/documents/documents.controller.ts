import { Body, Controller, Post, Get, Put, Delete } from '@nestjs/common';
import { Documents } from 'src/Models/documents.model';
import { createDocumentsDto } from './dto/createDocuments.dto';
import { Document } from './entities/document.entity';
import { DocumentsService } from './documents.service';

@Controller('documents')
export class DocumentsController {
    constructor(private readonly documentsService: DocumentsService) {}
    @Post('/create-document')
    createDocument(@Body() document: createDocumentsDto): Document {
      return this.documentsService.createDocument(document);
    }
  
    @Get()
    getAllDocuments(): Documents[] {
      return this.documentsService.getAllDocuments();
    }
  
    @Put('/update-document')
    updateDocuments(@Body() document: createDocumentsDto): Documents {
      return this.documentsService.updateDocument(document);
    }
  
    @Delete('/delete-document')
    deleteDocument(@Body() document: {Document_ID:number}) : {Document_ID: number} {
      return this.documentsService.deleteDocument(document);
    }
  
    @Get('/get-document')
    getDocument(@Body() document: {Document_ID:number}) : Documents {
      return this.documentsService.getDocument(document);
    }

}