import { Module } from '@nestjs/common';
import { IssuesService } from './issues.service';
import { IssuesController } from './issues.controller';
import { Issues } from 'src/Models/issues.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Issues])],
  providers: [IssuesService],
  controllers: [IssuesController]
})
export class IssuesModule {}
