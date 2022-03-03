import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OccupyModule } from './occupy/occupy.module';

@Module({
  imports: [OccupyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
