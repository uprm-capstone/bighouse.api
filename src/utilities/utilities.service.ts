import { Injectable } from '@nestjs/common';
import { Utilities } from 'src/Models/utilities.model';
import { createUtilityDto } from './dto/createUtility.dto';

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
    utilities.push(newUtility);
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
    return newUtility;
  }

  deleteUtility(id: {Utility_ID}) {
    const holder = {id};
    const index = utilities.findIndex((object) => {
      return object.Utility_ID == id.Utility_ID;
    });

    utilities.splice(index,1);
    return holder.id;
  }

}