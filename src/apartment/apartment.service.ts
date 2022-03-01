import { Injectable, UseFilters } from '@nestjs/common';
import { elementAt } from 'rxjs';
import { Apartment } from 'src/Models/apartment.model';
import { createApartmentDto } from './dto/createApartment.dto';


const apartments: Apartment[] = [];

function arrayRemove(arr, value) { 
    
    return arr.filter(function(ele){ 
        return ele != value; 
    });
}

@Injectable()
export class ApartmentService {
  createApartment(apartment: createApartmentDto) {
    const newApartment = new Apartment(apartment.Apartment_ID, apartment.Occupied, apartment.Apartment_Number, apartment.Apartment_Cost);
    apartments.push(newApartment);
    return newApartment; 
}

getApartments(){
    return apartments;
}

updateApartment(apartment: createApartmentDto){
    const newApartment = new Apartment(apartment.Apartment_ID, apartment.Occupied, apartment.Apartment_Number, apartment.Apartment_Cost);

    apartments.forEach(element=>{
        if(element.Apartment_ID==3){
            element.Apartment_ID = apartment.Apartment_ID;
            element.Occupied = apartment.Occupied;
            element.Apartment_Number = apartment.Apartment_Number;
            element.Apartment_Cost = apartment.Apartment_Cost;
        }
    })
    return newApartment;
    
}

deleteApartment(Apartmen_ID: number){
    const index = apartments.findIndex(object => {
        return object.Apartment_ID == 6;
      });
      console.log(index);
    
      apartments.splice(index);
      console.log(apartments);
      return Apartmen_ID;
}
}
