import { Module } from '@nestjs/common';
import { UtilityService } from './utilities.service';
import { UtilityController } from './utilities.controller';

@Module({
  providers: [UtilityService],
  controllers: [UtilityController]
})
export class UtilitiesModule {}
