import { Injectable } from '@nestjs/common';
import { Utilities } from 'src/Models/utilities.model';
import { createUtilityDto } from './dto/createUtility.dto';
import { apartments } from 'src/apartment/apartment.service';

const utilities: Utilities[] = [];
@Injectable()
export class UtilityService {
  createUtility(utility: createUtilityDto) {
    const newUtility = new Utilities(
      utility.Utility_ID,
      utility.Utility_Name,
      utility.Apartment_ID,
      utility.Unit_Quantity,
      utility.Cost_Per_Unit,
      utility.Unit,
    );

    const apartmentVerify = apartments.findIndex((object) => {
      return object.Apartment_ID == utility.Apartment_ID;
    });
    if(apartmentVerify != -1){
      utilities.push(newUtility);
    }
    return newUtility;
  }

  getAllUtilities() {
    return utilities;
  }

  getUtility(id: {Utility_ID:number}) {
    const index = utilities.findIndex((object) => {
      return object.Utility_ID == id.Utility_ID;
    });
    return utilities[index];
  }

  updateUtility(utility: createUtilityDto) {
    const newUtility = new Utilities(
      utility.Utility_ID,
      utility.Utility_Name,
      utility.Apartment_ID,
      utility.Unit_Quantity,
      utility.Cost_Per_Unit,
      utility.Unit,
    );

    const utilityVerify = utilities.findIndex((object) => {
      return object.Utility_ID == utility.Utility_ID;
    });
    const apartmentVerify = apartments.findIndex((object) => {
      return object.Apartment_ID == utility.Apartment_ID;
    });
    if(utilityVerify != -1 && apartmentVerify != -1){
      utilities.forEach((element) => {
      if (element.Utility_ID == utility.Utility_ID) {
        element.Utility_ID = utility.Utility_ID;
        element.Utility_Name = utility.Utility_Name;
        element.Apartment_ID = utility.Apartment_ID;
        element.Unit_Quantity = utility.Unit_Quantity;
        element.Cost_Per_Unit = utility.Cost_Per_Unit;
        element.Unit = utility.Unit;
      }
    });
    }
    
    return newUtility;
  }

  deleteUtility(id: {Utility_ID}) {
    const holder = {id};
    const index = utilities.findIndex((object) => {
      return object.Utility_ID == id.Utility_ID;
    });

    if(index != -1){
      utilities.splice(index,1);
    }
    return holder.id;
  }

  getTotalUtilityCost(apartment_ID:{Apartment_ID:number}){
    var total = 0;
    utilities.forEach(element => {
      if(element.Apartment_ID==apartment_ID.Apartment_ID){
        total = total + element.Cost_Per_Unit*element.Unit_Quantity;
      }
    });
    return {Utility_Cost: total};
  }

  getApartmentUtilities(apartment_ID:{Apartment_ID:number}){
    const ApartmentU: Utilities[] = [];
    utilities.forEach(element => {
      if(element.Apartment_ID==apartment_ID.Apartment_ID){
        ApartmentU.push(element);
      }
    });
    return ApartmentU;
  }

}