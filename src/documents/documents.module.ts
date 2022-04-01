import { Module } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { DocumentsController } from './documents.controller';
import { Documents } from 'src/Models/documents.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Documents])],
  providers: [DocumentsService],
  controllers: [DocumentsController]
})
export class DocumentsModule {}
