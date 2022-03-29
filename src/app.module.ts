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

@Module({
  imports: [UsersModule, ApartmentModule, OccupyModule, UtilitiesModule, IssuesModule, DocumentsModule, 
    ClientsModule.register([{name: 'USER_VALIDATOR', transport: Transport.TCP, 
    options: {
      host: 'localhost',
      port: 3001
    }
  }
])
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
