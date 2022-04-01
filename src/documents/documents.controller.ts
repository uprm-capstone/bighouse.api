import { Body, Controller, Post, Get, Put, Delete } from '@nestjs/common';
import { Documents } from 'src/Models/documents.model';
import { createDocumentsDto } from './dto/createDocuments.dto';
import { Document } from './entities/document.entity';
import { DocumentsService } from './documents.service';

@Controller('documents')
export class DocumentsController {
    constructor(private readonly documentsService: DocumentsService) {}
    @Post('/create-document')
    createDocument(@Body() document: {user_id: number, document: string, sign_on: Date, signature: string, require_signature: boolean}): Promise<any> {
      return this.documentsService.createDocument(document);
    }
  
    @Get()
    getAllDocuments(): Promise<any> {
      return this.documentsService.getAllDocuments();
    }
  
    @Put('/update-document')
    updateDocuments(@Body() document: {document_id: number, user_id: number, document: string, sign_on: Date, signature: string, require_signature: boolean}): Promise<any> {
      return this.documentsService.updateDocument(document);
    }
  
    @Delete('/delete-document')
    deleteDocument(@Body() document: {document_id:number}) : Promise <any> {
      return this.documentsService.deleteDocument(document);
    }
  
    @Get('/get-document')
    getDocument(@Body() document: {document_id:number}): Promise<any> {
      return this.documentsService.getDocument(document);
    }

}