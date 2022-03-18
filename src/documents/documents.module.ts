import { Module } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { DocumentsGateway } from './documents.gateway';
import { DocumentsController } from './documents.controller';

@Module({
  providers: [DocumentsGateway, DocumentsService],
  controllers: [DocumentsController]
})
export class DocumentsModule {}
