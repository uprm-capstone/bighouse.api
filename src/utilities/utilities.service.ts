import { Injectable } from '@nestjs/common';
import { Utilities } from 'src/Models/utilities.model';
import { createUtilityDto } from './dto/createUtility.dto';
import { apartments } from 'src/apartment/apartment.service';
import { InjectModel } from '@nestjs/sequelize';

const utilities: Utilities[] = [];
@Injectable()
export class UtilityService {

  constructor(
    @InjectModel(Utilities)
    private UtilitiesModel: typeof Utilities,
  ) {}

  async createUtility(utility:  { utility_name: string, apartment_id: number, unit_quantity: number, cost_per_unit: number, unit: string }): Promise<any> {
    this.UtilitiesModel.create(utility);
  }

  getUtility(id: {utility_id:number}): Promise<any> {
    const utility_id = id.utility_id;
    return this.UtilitiesModel.findOne({ where: { utility_id } });
  }

  async getAllUtilities(): Promise<any> {
  return this.UtilitiesModel.findAll();
  }

  async updateUtility(issue:  {utility_id:number, utility_name: string, apartment_id: number, unit_quantity: number, cost_per_unit: number, unit: string}): Promise<any> {
    const utility_id = issue.utility_id;
    return this.UtilitiesModel.update(issue, { where: { utility_id } });
  }

  async deleteUtility(id: {utility_id:number}): Promise<any> {
    const utilitity = await this.getUtility(id);
    await utilitity.destroy();
    return utilitity;
  }

  async getTotalUtilityCost(issue:  { apartment_id: number}): Promise<any> {
    const apartment_id = issue.apartment_id;
    const res = this.UtilitiesModel.findAll( {attributes: ['unit_quantity','cost_per_unit'], where: { apartment_id } });
    let result = 0;
    (await res).forEach(element => {
          result = result +(element.unit_quantity*element.cost_per_unit);
        });
    return {total_cost: result};
  }

  async getApartmentUtilities(id: {apartment_id:number}): Promise<any> {
    const apartment_id = id.apartment_id;
    return this.UtilitiesModel.findAll({where: {apartment_id}});
  }

  // createUtility(utility: createUtilityDto) {
  //   const newUtility = new Utilities(
  //     utility.Utility_ID,
  //     utility.Utility_Name,
  //     utility.Apartment_ID,
  //     utility.Unit_Quantity,
  //     utility.Cost_Per_Unit,
  //     utility.Unit,
  //   );

  //   // const apartmentVerify = apartments.findIndex((object) => {
  //   //   return object.Apartment_ID == utility.Apartment_ID;
  //   // });
  //   // if(apartmentVerify != -1){
  //   //   utilities.push(newUtility);
  //   // }
  //   return newUtility;
  // }

  // getAllUtilities() {
  //   return utilities;
  // }

  // getUtility(id: {Utility_ID:number}) {
  //   const index = utilities.findIndex((object) => {
  //     return object.Utility_ID == id.Utility_ID;
  //   });
  //   return utilities[index];
  // }

  // updateUtility(utility: createUtilityDto) {
  //   const newUtility = new Utilities(
  //     utility.Utility_ID,
  //     utility.Utility_Name,
  //     utility.Apartment_ID,
  //     utility.Unit_Quantity,
  //     utility.Cost_Per_Unit,
  //     utility.Unit,
  //   );

  //   const utilityVerify = utilities.findIndex((object) => {
  //     return object.Utility_ID == utility.Utility_ID;
  //   });
  //   // const apartmentVerify = apartments.findIndex((object) => {
  //   //   return object.Apartment_ID == utility.Apartment_ID;
  //   // });
  //   // if(utilityVerify != -1 && apartmentVerify != -1){
  //   //   utilities.forEach((element) => {
  //   //   if (element.Utility_ID == utility.Utility_ID) {
  //   //     element.Utility_ID = utility.Utility_ID;
  //   //     element.Utility_Name = utility.Utility_Name;
  //   //     element.Apartment_ID = utility.Apartment_ID;
  //   //     element.Unit_Quantity = utility.Unit_Quantity;
  //   //     element.Cost_Per_Unit = utility.Cost_Per_Unit;
  //   //     element.Unit = utility.Unit;
  //   //   }
  //   // });
  //   // }
    
  //   return newUtility;
  // }

  // deleteUtility(id: {Utility_ID}) {
  //   const holder = {id};
  //   const index = utilities.findIndex((object) => {
  //     return object.Utility_ID == id.Utility_ID;
  //   });

  //   if(index != -1){
  //     utilities.splice(index,1);
  //   }
  //   return holder.id;
  // }

  // getTotalUtilityCost(apartment_ID:{Apartment_ID:number}){
  //   var total = 0;
  //   utilities.forEach(element => {
  //     if(element.Apartment_ID==apartment_ID.Apartment_ID){
  //       total = total + element.Cost_Per_Unit*element.Unit_Quantity;
  //     }
  //   });
  //   return {Utility_Cost: total};
  // }

  // getApartmentUtilities(apartment_ID:{Apartment_ID:number}){
  //   const ApartmentU: Utilities[] = [];
  //   utilities.forEach(element => {
  //     if(element.Apartment_ID==apartment_ID.Apartment_ID){
  //       ApartmentU.push(element);
  //     }
  //   });
  //   return ApartmentU;
  // }

}