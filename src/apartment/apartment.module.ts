import { Module } from '@nestjs/common';
import { ApartmentService } from './apartment.service';
import { ApartmentController } from './apartment.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Apartment } from 'src/Models/apartment.model';

@Module({
  imports: [SequelizeModule.forFeature([Apartment])],
  providers: [ApartmentService],
  controllers: [ApartmentController],
})
export class ApartmentModule {}
