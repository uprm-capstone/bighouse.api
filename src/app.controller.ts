import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getValidation(): Promise<any> {
    return this.appService.getValidation();
  }

  @Get()
  getAuthorization(): Promise<any> {
    return this.appService.getAuthorization();
  }

  @Post()
  createUser(@Body() user: {email:string, password:string, roles:string}){
    return this.appService.createUser(user)
  }
}
