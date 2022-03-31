import { Body, Controller, Post, Get, Put, Delete } from '@nestjs/common';
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
    getUser(@Body() id: {user_id:number}): Promise<any> {
        return this.userService.findOne(id);
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
