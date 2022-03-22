import { Injectable, UseFilters } from '@nestjs/common';
import { elementAt } from 'rxjs';
import { User } from 'src/Models/user.model';
import { createUserDto } from './dto/createUser.dto';

const users: User[] = [];

function arrayRemove(arr, value) { 
    
    return arr.filter(function(ele){ 
        return ele != value; 
    });
}

@Injectable()
export class UsersService {
    createUser(user: createUserDto) {
        const newUser = new User(user.User_ID, user.User_Name, user.User_LastName, user.User_Gender, user.User_Birth, user.User_Email);
        users.push(newUser);
        return newUser; 
    }

    getUsers(){
        return users;
    }

    updateUser(user: createUserDto){
        const newUser = new User(user.User_ID, user.User_Name, user.User_LastName, user.User_Gender, user.User_Birth, user.User_Email);

        users.forEach(element=>{
            if(element.User_ID==user.User_ID){
                element.User_ID = user.User_ID;
                element.User_Name = user.User_Name;
                element.User_LastName = user.User_LastName;
                element.User_Gender = user.User_Gender;
                element.User_Birth = user.User_Birth;
                element.User_Email = user.User_Email;
            }
        })
        return newUser;
        
    }

    deleteUser(user: {User_ID:number}){
        const index = users.findIndex(object => {
            return object.User_ID == user.User_ID;
          });
        
          if(index != -1){
              users.splice(index,1);
          }
          return user;
    }
}

