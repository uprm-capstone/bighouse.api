import { Module } from '@nestjs/common';
import { UtilityService } from './utilities.service';
import { UtilityController } from './utilities.controller';
import { Utilities } from 'src/Models/utilities.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Utilities])],
  providers: [UtilityService],
  controllers: [UtilityController]
})
export class UtilitiesModule {}
