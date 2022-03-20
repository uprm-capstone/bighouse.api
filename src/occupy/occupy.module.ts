import { Module } from '@nestjs/common';
import { OccupyService } from './occupy.service';
import { OccupyController } from './occupy.controller';

@Module({
  providers: [OccupyService],
  controllers: [OccupyController]
})
export class OccupyModule {}
