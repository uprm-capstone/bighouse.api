import { Injectable } from '@nestjs/common';
import { Occupy } from 'src/Models/occupy.model';
import { createOccupyDto } from './dto/createOccupy.dto';
import { occupyIDDto } from './dto/occupyID.dto';
import { users } from '../users/users.service'
import { apartments } from '../apartment/apartment.service'

const occupies: Occupy[] = [];
@Injectable()
export class OccupyService {
  createOccupy(occupy: createOccupyDto) {
    const newOccupant = new Occupy(
      occupy.Occupy_ID,
      occupy.User_ID,
      occupy.Apartment_ID,
      occupy.Start_Date,
      occupy.End_Date,
    );
    const userVerify = users.findIndex((object) => {
      return object.User_ID == occupy.User_ID;
    });
    const apartmentVerify = apartments.findIndex((object) => {
      return object.Apartment_ID == occupy.Apartment_ID;
    });
    if(userVerify != -1 && apartmentVerify != -1){
      occupies.push(newOccupant);
    }
    return newOccupant;
    
  }

  getAllOccupy() {
    return occupies;
  }

  getOccupy(occupy: occupyIDDto) {
    const index = occupies.findIndex((object) => {
      return object.Occupy_ID == occupy.Occupy_ID;
    });
    return occupies[index];
  }

  updateOccupy(occupy: createOccupyDto) {
    const newOccupant = new Occupy(
      occupy.Occupy_ID,
      occupy.User_ID,
      occupy.Apartment_ID,
      occupy.Start_Date,
      occupy.End_Date,
    );

    const userVerify = users.findIndex((object) => {
      return object.User_ID == occupy.User_ID;
    });
    const apartmentVerify = apartments.findIndex((object) => {
      return object.Apartment_ID == occupy.Apartment_ID;
    });
    if(userVerify != -1 && apartmentVerify != -1){
      occupies.forEach((element) => {
      if (element.Occupy_ID == occupy.Occupy_ID) {
        element.Occupy_ID = occupy.Occupy_ID;
        element.User_ID = occupy.User_ID;
        element.Apartment_ID = occupy.Apartment_ID;
        element.Start_Date = occupy.Start_Date;
        element.End_Date = occupy.End_Date;
      }
    });
    }
    
    return newOccupant;
  }

  deleteOccupy(occupy: occupyIDDto) {
    const holder = {occupy};
    const index = occupies.findIndex((object) => {
      return object.Occupy_ID == occupy.Occupy_ID;
    });

    if(index != -1){
      occupies.splice(index,1);
    }
    return holder.occupy;
  }

  getTerm(occupy: occupyIDDto){
    const index = occupies.findIndex((object) => {
      return object.Occupy_ID == occupy.Occupy_ID;
    });

    if(index != -1){
      return {Start_Date: occupies[index].Start_Date, End_Date: occupies[index].End_Date};
    }
    else{
      return {Start_Date: null, End_Date: null};
    }
  }

  getApartmentOccupied(occupy: occupyIDDto){
    const index = occupies.findIndex((object) => {
      return object.Occupy_ID == occupy.Occupy_ID;
    });

    return {Apartment_ID: occupies[index].Apartment_ID};
  }

  getUserOccupied(occupy: occupyIDDto){
    const index = occupies.findIndex((object) => {
      return object.Occupy_ID == occupy.Occupy_ID;
    });

    return {User_ID: occupies[index].User_ID};
  }

  getUserOccupiedWithAptm(occupy: {Apartment_ID: number}){
    const index = occupies.findIndex((object) => {
      return object.Apartment_ID == occupy.Apartment_ID;
    });

    if(index != -1){
      return {User_ID: occupies[index].User_ID};
    }
    else{
      return {User_ID: null};
    }
    
  }

  getAptmOccupiedWithUser(occupy: {User_ID: number}){
    const index = occupies.findIndex((object) => {
      return object.User_ID == occupy.User_ID;
    });

    if(index != -1){
      return {Apartment_ID: occupies[index].Apartment_ID};
    }
    else{
      return {Apartment_ID: null};
    }
    
  }

}
