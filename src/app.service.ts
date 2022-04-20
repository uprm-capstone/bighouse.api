import { Injectable, Inject, UnprocessableEntityException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class AppService {

  constructor(@Inject('USER_VALIDATOR') private client: ClientProxy, private sequelize: Sequelize){}

  async createUser(user: {email:string, password:string, roles:string}): Promise<any>{
    const msg = this.client.send({cmd: 'create-user'}, user);
    return msg;
  }

  async getValidation(token:string) {
    const message = await this.client.send({cmd: 'validate'}, token);
    return message;
  }

  async getAuthorization(user: {email:string, password:string, roles:string[]}) {
    const message = await this.client.send({cmd: 'authorize'}, user);
    return message;
  }
}
