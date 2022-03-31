import { Module } from '@nestjs/common';
import { OccupyService } from './occupy.service';
import { OccupyController } from './occupy.controller';
import { Occupy } from 'src/Models/occupy.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Occupy])],
  providers: [OccupyService],
  controllers: [OccupyController]
})
export class OccupyModule {}
