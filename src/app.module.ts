import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ApartmentModule } from './apartment/apartment.module';
import { OccupyModule } from './occupy/occupy.module';
import { UtilitiesModule } from './utilities/utilities.module';
import { IssuesModule } from './issues/issues.module';
import { DocumentsModule } from './documents/documents.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './Models/user.model';
import { Apartment } from './Models/apartment.model';
import { Occupy } from './Models/occupy.model';
import { Issues } from './Models/issues.model';
import { Utilities } from './Models/utilities.model';
import { Documents } from './Models/documents.model';

@Module({
  imports: [UsersModule, ApartmentModule, OccupyModule, UtilitiesModule, IssuesModule, DocumentsModule, 
    ClientsModule.register([{name: 'USER_VALIDATOR', transport: Transport.TCP, 
    options: {
      host: 'localhost',
      port: 3001
    }
  }
]),
SequelizeModule.forRoot({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'example',
  database: 'postgres',
  models: [User, Apartment, Occupy, Issues, Utilities, Documents],
  define: {
    timestamps: false
  },
}),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
