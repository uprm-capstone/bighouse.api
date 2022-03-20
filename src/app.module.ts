import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ApartmentModule } from './apartment/apartment.module';
import { OccupyModule } from './occupy/occupy.module';
import { UtilitiesModule } from './utilities/utilities.module';
import { IssuesModule } from './issues/issues.module';

@Module({
  imports: [UsersModule, ApartmentModule, OccupyModule, UtilitiesModule, IssuesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
