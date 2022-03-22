import { Injectable, UseFilters } from '@nestjs/common';
import console, { Console } from 'console';
import { Apartment } from 'src/Models/apartment.model';
import { apartmentIDDto } from './dto/apartmentID.dto';
import { createApartmentDto } from './dto/createApartment.dto';

const apartments: Apartment[] = [];

@Injectable()
export class ApartmentService {
  createApartment(apartment: createApartmentDto) {
    const newApartment = new Apartment(
      apartment.Apartment_ID,
      apartment.Occupied,
      apartment.Apartment_Number,
      apartment.Apartment_Cost,
    );
    apartments.push(newApartment);
    return newApartment;
  }

  getApartments() {
    return apartments;
  }

  updateApartment(apartment: createApartmentDto) {
    const newApartment = new Apartment(
      apartment.Apartment_ID,
      apartment.Occupied,
      apartment.Apartment_Number,
      apartment.Apartment_Cost,
    );

    apartments.forEach((element) => {
      if (element.Apartment_ID == apartment.Apartment_ID) {
        element.Apartment_ID = apartment.Apartment_ID;
        element.Occupied = apartment.Occupied;
        element.Apartment_Number = apartment.Apartment_Number;
        element.Apartment_Cost = apartment.Apartment_Cost;
      }
    });
    return newApartment;
  }

  deleteApartment(id: apartmentIDDto) {
    const holder = {id};
    const index = apartments.findIndex((object) => {
      return object.Apartment_ID == id.Apartment_ID;
    });
    if(index != -1){
      apartments.splice(index,1);
    }
    
    return id;
  }

  getApartmentTotalCost(apartment: apartmentIDDto) {
    // apartments.forEach((element) => {
    //   if (element.Apartment_ID == apartment.Apartment_ID) {
    //     console.log(element.Apartment_ID);
    //     //When applayong query apply a join with utilities entity table and get the sum of all the unit costs of each element with the same Apartment_ID reference.
    //     return { Apartment_Cost: element.Apartment_Cost };
    //   }
    // });

    const index = apartments.findIndex((object) => {
      return object.Apartment_ID == apartment.Apartment_ID;
    });

    // Here add the sum of all utility costs with the apartment cost when utility operations are implemented.
    return {Apartment_Cost: apartments[index].Apartment_Cost};
  }
}
