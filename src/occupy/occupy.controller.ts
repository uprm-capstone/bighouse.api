import { Body, Controller, Post, Get, Put, Delete } from '@nestjs/common';
import { Occupy } from 'src/Models/occupy.model';
import { createOccupyDto } from './dto/createOccupy.dto';
import { occupyIDDto } from './dto/occupyID.dto';
import { OccupyService } from './occupy.service';

@Controller('occupy')
export class OccupyController {
    constructor(private readonly occupyService: OccupyService) {}
    @Post('/create-occupant')
    createOccupy(@Body() occupy: createOccupyDto): Occupy {
      return this.occupyService.createOccupy(occupy);
    }
  
    @Get()
    getAllOccupy(): Occupy[] {
      return this.occupyService.getAllOccupy();
    }
  
    @Put('/update-occupant')
    updateOccupy(@Body() occupy: createOccupyDto): Occupy {
      return this.occupyService.updateOccupy(occupy);
    }
  
    @Delete('/delete-occupant')
    deleteOccupy(@Body() occupy: occupyIDDto) : {Occupy_ID: number} {
      return this.occupyService.deleteOccupy(occupy);
    }
  
    @Get('/get-occupant')
    getApartmentTotalCost(@Body() occupy: occupyIDDto) : Occupy {
      return this.occupyService.getOccupy(occupy);
    }

    @Get('/get-term')
    getTerm(@Body() occupy: occupyIDDto) : {Start_Date: Date, End_Date: Date} {
      return this.occupyService.getTerm(occupy);
    }

    @Get('/get-apartment-occupied')
    getApartmentOccupied(@Body() occupy: occupyIDDto) : {Apartment_ID: number} {
      return this.occupyService.getApartmentOccupied(occupy);
    }

    @Get('/get-user-occupant')
    getUserOccupied(@Body() occupy: occupyIDDto) : {User_ID: number} {
      return this.occupyService.getUserOccupied(occupy);
    }

    @Get('/get-user-occupant-with-apartment')
    getUserOccupiedWithAptm(@Body() occupy: {Apartment_ID: number}) : {User_ID: number} {
      return this.occupyService.getUserOccupiedWithAptm(occupy);
    }

    @Get('/get-apartment-occupant-with-user')
    getAptmOccupiedWithUser(@Body() occupy: {User_ID: number}) : {Apartment_ID: number} {
      return this.occupyService.getAptmOccupiedWithUser(occupy);
    }
}
