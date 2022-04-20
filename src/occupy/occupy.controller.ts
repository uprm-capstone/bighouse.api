import { Body, Controller, Post, Get, Put, Delete, Query } from '@nestjs/common';
import { Occupy } from 'src/Models/occupy.model';
import { createOccupyDto } from './dto/createOccupy.dto';
import { occupyIDDto } from './dto/occupyID.dto';
import { OccupyService } from './occupy.service';

@Controller('occupy')
export class OccupyController {
    constructor(private readonly occupyService: OccupyService) {}
    @Post('/create-occupant')
    createOccupy(@Body() occupy:  {user_id:number, apartment_id:number, start_date:Date, end_date: Date}): Promise<any> {
      return this.occupyService.createOccupy(occupy);
    }
  
    @Get()
    getAllOccupy(): Promise<any> {
      return this.occupyService.getAllOccupy();
    }

    @Get('/get-occupant')
    findOne(@Body() occupy: {occupy_id:number}): Promise<any> {
      return this.occupyService.findOne(occupy);
    }
  
    @Put('/update-occupant')
    updateOccupy(@Body() occupy:  {occupy_id:number, user_id:number, apartment_id:number, start_date:Date, end_date: Date}): Promise<any> {
      return this.occupyService.updateOccupy(occupy);
    }
  
    @Delete('/delete-occupant')
    deleteOccupy(@Body() occupy: {occupy_id:number}): Promise<any> {
      return this.occupyService.deleteOccupy(occupy);
    }

    @Get('/get-term')
    getTerm(@Body() occupy: {occupy_id:number}): Promise<any> {
      return this.occupyService.getTerm(occupy);
    }

    @Get('/get-apartment-occupied')
    getApartmentOccupied(@Body() occupy: {occupy_id:number}): Promise<any> {
      return this.occupyService.getApartmentOccupied(occupy);
    }

    @Get('/get-user-occupant')
    getUserOccupied(@Body() occupy: {occupy_id:number}): Promise<any> {
      return this.occupyService.getUserOccupied(occupy);
    }

    @Get('/get-user-occupant-with-apartment')
    getUserOccupiedWithAptm(@Query() query): Promise<any> {
      return this.occupyService.getUserOccupiedWithAptm(query);
    }

    @Get('/get-apartment-occupant-with-user')
    getAptmOccupiedWithUser(@Query() query): Promise<any> {
      return this.occupyService.getAptmOccupiedWithUser(query);
    }
}
