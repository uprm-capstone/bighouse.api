import { Module } from '@nestjs/common';
import { UtilitiesService } from './utilities.service';
import { UtilitiesGateway } from './utilities.gateway';
import { UtilitiesController } from './utilities.controller';

@Module({
  providers: [UtilitiesGateway, UtilitiesService],
  controllers: [UtilitiesController]
})
export class UtilitiesModule {}
