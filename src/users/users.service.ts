import { Injectable, UseFilters } from '@nestjs/common';
import { elementAt } from 'rxjs';
import { User } from 'src/Models/user.model';
import { createUserDto } from './dto/createUser.dto';
import { InjectModel } from '@nestjs/sequelize';

export const users: User[] = [];

function arrayRemove(arr, value) { 
    
    return arr.filter(function(ele){ 
        return ele != value; 
    });
}

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User)
        private userModel: typeof User,
      ) {}

    async createUser(user:  {user_name:string, user_lastname:string, user_gender:string, user_birth:string, user_email:string}) {
      console.log(user.user_birth);
      this.userModel.create(user);
    }

    findOne(id: {user_id:number}): Promise<any> {
      const user_id = id.user_id;
      return this.userModel.findOne({ where: { user_id } });
    }

    async findAll(): Promise<any> {
    return this.userModel.findAll();
    }

    async updateUser(user:  {user_id:number, user_name:string, user_lastname:string, user_gender:string, user_birth:string, user_email:string}): Promise<any> {
      // return this.userModel.update(user_id)
      const user_id = user.user_id
      return this.userModel.update(user, { where: { user_id } })
    }

    async deleteUser(id: {user_id:number}): Promise<any> {
      const user = await this.findOne(id);
      await user.destroy();
      return user;
    }

    // createUser(user: createUserDto) {
    //     const newUser = new User(user.User_ID, user.User_Name, user.User_LastName, user.User_Gender, user.User_Birth, user.User_Email);
    //     users.push(newUser);
    //     return newUser; 
    // }

    // getUsers(){
    //     return users;
    // }

    // verifyUser(id: {User_ID:number}){

    //     const index = users.findIndex(object => {
    //         return object.User_ID == id.User_ID;
    //     });
        
    //     if(index != -1) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }

    // getUserList(){
    //     return users;
    // }

    // updateUser(user: createUserDto){
    //     const newUser = new User(user.User_ID, user.User_Name, user.User_LastName, user.User_Gender, user.User_Birth, user.User_Email);

    //     users.forEach(element=>{
    //         if(element.User_ID==user.User_ID){
    //             element.User_ID = user.User_ID;
    //             element.User_Name = user.User_Name;
    //             element.User_LastName = user.User_LastName;
    //             element.User_Gender = user.User_Gender;
    //             element.User_Birth = user.User_Birth;
    //             element.User_Email = user.User_Email;
    //         }
    //     })
    //     return newUser;
        
    // }

    // deleteUser(user: {User_ID:number}){
    //     const index = users.findIndex(object => {
    //         return object.User_ID == user.User_ID;
    //       });
        
    //       if(index != -1){
    //           users.splice(index,1);
    //       }
    //       return user;
    // }
}

