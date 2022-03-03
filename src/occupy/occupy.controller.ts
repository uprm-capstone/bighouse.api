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
}
