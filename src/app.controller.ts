import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/validate')
  getValidation(): Promise<any> {
    return this.appService.getValidation();
  }

  @Get('/authorization')
  getAuthorization(): Promise<any> {
    return this.appService.getAuthorization();
  }

  @Post('/auth-create')
  createUser(@Body() user: {email:string, password:string, roles:string}){
    return this.appService.createUser(user)
  }
}
