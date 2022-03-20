import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ApartmentModule } from './apartment/apartment.module';

@Module({
  imports: [UsersModule, ApartmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
