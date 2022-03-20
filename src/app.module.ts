import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ApartmentModule } from './apartment/apartment.module';
import { OccupyModule } from './occupy/occupy.module';

@Module({
  imports: [UsersModule, ApartmentModule, OccupyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
