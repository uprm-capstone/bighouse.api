import { Injectable } from '@nestjs/common';
import { Occupy } from 'src/Models/occupy.model';
import { createOccupyDto } from './dto/createOccupy.dto';
import { occupyIDDto } from './dto/occupyID.dto';

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
    occupies.push(newOccupant);
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

    occupies.forEach((element) => {
      if (element.Occupy_ID == 2) {
        element.Occupy_ID = occupy.Occupy_ID;
        element.User_ID = occupy.User_ID;
        element.Apartment_ID = occupy.Apartment_ID;
        element.Start_Date = occupy.Start_Date;
        element.End_Date = occupy.End_Date;
      }
    });
    return newOccupant;
  }

  deleteOccupy(occupy: occupyIDDto) {
    const holder = {occupy};
    const index = occupies.findIndex((object) => {
      return object.Occupy_ID == occupy.Occupy_ID;
    });

    occupies.splice(index,1);
    return holder.occupy;
  }
}
