import { Body, Controller, Post, Get, Put, Delete, Query } from '@nestjs/common';
import { User } from 'src/Models/user.model';
import { createUserDto } from './dto/createUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService:UsersService){}
    @Post('/create-user')
    createUser(@Body() user: {user_id:number, user_name:string, user_lastname:string, user_gender:string, user_birth:string, user_email:string}) {
        this.userService.createUser(user);
    }

    @Get()
    getUsers(): Promise<any> {
        return this.userService.findAll();
    }

    @Get('/user')
    getUser(@Query() query): Promise<any> {
        return this.userService.findOne(query);
    }

    @Get('/user-by-email')
    getUserByEmail(@Query() query): Promise<any> {
        return this.userService.findOneByEmail(query);
    }

    @Put('/update-user')
    updateUser(@Body() user:  {user_id:number, user_name:string, user_lastname:string, user_gender:string, user_birth:string, user_email:string}): Promise<any> {
        return this.userService.updateUser(user);
    }

    @Delete('/delete-user')
    deleteUser(@Body() user:{user_id:number}): Promise<any> {
        return this.userService.deleteUser(user);
    }

}
