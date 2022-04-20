import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/validate')
  getValidation(@Query() query): Promise<any> {
    return this.appService.getValidation(query);
  }

  @Get('/authorization')
  getAuthorization(@Query() query): Promise<any> {
    console.log("Data in query: "+query.email + query.password + query.roles);
    return this.appService.getAuthorization(query);
  }

  @Post('/auth-create')
  createUser(@Body() user: {email:string, password:string, roles:string}){
    return this.appService.createUser(user)
  }
}
