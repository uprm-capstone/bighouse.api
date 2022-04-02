import { Injectable } from '@nestjs/common';
import { Occupy } from 'src/Models/occupy.model';
import { createOccupyDto } from './dto/createOccupy.dto';
import { occupyIDDto } from './dto/occupyID.dto';
import { users } from '../users/users.service'
import { apartments } from '../apartment/apartment.service'
import { InjectModel } from '@nestjs/sequelize';

const occupies: Occupy[] = [];
@Injectable()
export class OccupyService {

  constructor(
    @InjectModel(Occupy)
    private OccupyModel: typeof Occupy,
  ) {}

  async createOccupy(occupy:  {user_id:number, apartment_id:number, start_date:Date, end_date: Date}): Promise<any> {
    this.OccupyModel.create(occupy)
    .catch(function(err){
      console.log("Error: "+err);
      return {"Error": err};
    });
  }

  findOne(id: {occupy_id:number}): Promise<any> {
    const occupy_id = id.occupy_id;
    return this.OccupyModel.findOne({ where: { occupy_id } });
  }

  async getAllOccupy(): Promise<any> {
  return this.OccupyModel.findAll();
  }

  async updateOccupy(occupy:  {occupy_id:number, user_id:number, apartment_id:number, start_date:Date, end_date: Date}): Promise<any> {
    const occupy_id = occupy.occupy_id;
    return this.OccupyModel.update(occupy, { where: { occupy_id } });
  }

  async deleteOccupy(id: {occupy_id:number}): Promise<any> {
    const occupy = await this.findOne(id);
    await occupy.destroy();
    return occupy;
  }

  async getTerm(id: {occupy_id:number}): Promise<any>{
    const occupy_id = id.occupy_id;
    return this.OccupyModel.findOne({attributes: ['start_date', 'end_date'], where:{occupy_id}})
  }

  async getApartmentOccupied(id: {occupy_id:number}): Promise<any>{
    const occupy_id = id.occupy_id;
    return this.OccupyModel.findOne({attributes: ['apartment_id'], where:{occupy_id}})
  }

  async getUserOccupied(id: {occupy_id:number}): Promise<any>{
    const occupy_id = id.occupy_id;
    return this.OccupyModel.findOne({attributes: ['user_id'], where:{occupy_id}})
  }

  async getUserOccupiedWithAptm(id: {apartment_id:number}): Promise<any>{
    const apartment_id = id.apartment_id;
    return this.OccupyModel.findOne({attributes: ['user_id'], where:{apartment_id}})
  }

  async getAptmOccupiedWithUser(id: {user_id:number}): Promise<any>{
    const user_id = id.user_id;
    return this.OccupyModel.findAll({attributes: ['apartment_id'], where:{user_id}})
  }


  // createOccupy(occupy: createOccupyDto) {
  //   const newOccupant = new Occupy(
  //     occupy.Occupy_ID,
  //     occupy.user_id,
  //     occupy.Apartment_ID,
  //     occupy.Start_Date,
  //     occupy.End_Date,
  //   );
  //   // const userVerify = users.findIndex((object) => {
  //   //   return object.user_id == occupy.user_id;
  //   // });
  //   // const apartmentVerify = apartments.findIndex((object) => {
  //   //   return object.Apartment_ID == occupy.Apartment_ID;
  //   // });
  //   // if(userVerify != -1 && apartmentVerify != -1){
  //   //   occupies.push(newOccupant);
  //   // }
  //   return newOccupant;
    
  // }

  // getAllOccupy() {
  //   return occupies;
  // }

  // getOccupy(occupy: occupyIDDto) {
  //   const index = occupies.findIndex((object) => {
  //     return object.Occupy_ID == occupy.Occupy_ID;
  //   });
  //   return occupies[index];
  // }

  // updateOccupy(occupy: createOccupyDto) {
  //   const newOccupant = new Occupy(
  //     occupy.Occupy_ID,
  //     occupy.user_id,
  //     occupy.Apartment_ID,
  //     occupy.Start_Date,
  //     occupy.End_Date,
  //   );

  //   // const userVerify = users.findIndex((object) => {
  //   //   return object.user_id == occupy.user_id;
  //   // });
  //   // const apartmentVerify = apartments.findIndex((object) => {
  //   //   return object.Apartment_ID == occupy.Apartment_ID;
  //   // });
  //   // if(userVerify != -1 && apartmentVerify != -1){
  //   //   occupies.forEach((element) => {
  //   //   if (element.Occupy_ID == occupy.Occupy_ID) {
  //   //     element.Occupy_ID = occupy.Occupy_ID;
  //   //     element.User_ID = occupy.user_id;
  //   //     element.Apartment_ID = occupy.Apartment_ID;
  //   //     element.Start_Date = occupy.Start_Date;
  //   //     element.End_Date = occupy.End_Date;
  //   //   }
  //   // });
  //   // }
    
  //   return newOccupant;
  // }

  // deleteOccupy(occupy: occupyIDDto) {
  //   const holder = {occupy};
  //   const index = occupies.findIndex((object) => {
  //     return object.Occupy_ID == occupy.Occupy_ID;
  //   });

  //   if(index != -1){
  //     occupies.splice(index,1);
  //   }
  //   return holder.occupy;
  // }

  // getTerm(occupy: occupyIDDto){
  //   const index = occupies.findIndex((object) => {
  //     return object.Occupy_ID == occupy.Occupy_ID;
  //   });

  //   if(index != -1){
  //     return {Start_Date: occupies[index].Start_Date, End_Date: occupies[index].End_Date};
  //   }
  //   else{
  //     return {Start_Date: null, End_Date: null};
  //   }
  // }

  // getApartmentOccupied(occupy: occupyIDDto){
  //   const index = occupies.findIndex((object) => {
  //     return object.Occupy_ID == occupy.Occupy_ID;
  //   });

  //   return {Apartment_ID: occupies[index].Apartment_ID};
  // }

  // getUserOccupied(occupy: occupyIDDto){
  //   const index = occupies.findIndex((object) => {
  //     return object.Occupy_ID == occupy.Occupy_ID;
  //   });

  //   return {User_ID: occupies[index].User_ID};
  // }

  // getUserOccupiedWithAptm(occupy: {Apartment_ID: number}){
  //   const index = occupies.findIndex((object) => {
  //     return object.Apartment_ID == occupy.Apartment_ID;
  //   });

  //   if(index != -1){
  //     return {User_ID: occupies[index].User_ID};
  //   }
  //   else{
  //     return {User_ID: null};
  //   }
    
  // }

  // getAptmOccupiedWithUser(occupy: {User_ID: number}){
  //   const index = occupies.findIndex((object) => {
  //     return object.User_ID == occupy.User_ID;
  //   });

  //   if(index != -1){
  //     return {Apartment_ID: occupies[index].Apartment_ID};
  //   }
  //   else{
  //     return {Apartment_ID: null};
  //   }
    
  // }

}
