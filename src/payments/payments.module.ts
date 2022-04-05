import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Payments } from 'src/Models/payments.model';

@Module({
  imports: [SequelizeModule.forFeature([Payments])],
  providers: [PaymentsService],
  controllers: [PaymentsController]
})
export class OccupyModule {}
