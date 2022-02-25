import { Body, Controller, Post, Get, Put, Delete } from '@nestjs/common';
import { User } from 'src/Models/user.model';
import { createUserDto } from './dto/createUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService:UsersService){}
    @Post('/create-user')
    createUser(@Body() user: createUserDto): User {
        return this.userService.createUser(user);
    }

    @Get()
    getUsers(): User[] {
        return this.userService.getUsers();
    }

    @Put('/update-user')
    updateUser(@Body() user: createUserDto, Old_ID:number): User {
        return this.userService.updateUser(user);
    }

    @Delete('/delete-user')
    deleteUser(User_ID:number) {
        return this.userService.deleteUser(User_ID);
    }

}
