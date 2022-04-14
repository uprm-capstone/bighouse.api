import { Query, Body, Controller, Post, Get, Put, Delete } from '@nestjs/common';
import { Apartment } from 'src/Models/apartment.model';
import { createApartmentDto } from './dto/createApartment.dto';
import { ApartmentService } from './apartment.service';
import { apartmentIDDto } from './dto/apartmentID.dto';

@Controller('apartments')
export class ApartmentController {
  constructor(private readonly apartmentService: ApartmentService) {}
  @Post('/create-apartment')
  createApartment(@Body() apartment:  {occupied:boolean, apartment_number:string, apartment_cost:number}) {
    return this.apartmentService.createApartment(apartment);
  }

  @Get()
  getApartments(): Promise<any> {
    return this.apartmentService.getApartments();
  }

  @Get('/apartment')
  getApartment(@Body() apartment: {apartment_id:number}): Promise<any> {
    return this.apartmentService.findOne(apartment);
  }

  @Put('/update-apartment')
  updateApartment(@Body() apartment:  {apartment_id:number, occupied:boolean, apartment_number:string, apartment_cost:number}): Promise<any> {
    return this.apartmentService.updateApartment(apartment);
  }

  @Delete('/delete-apartment')
  deleteApartment(@Body() apartment: {apartment_id:number}) : Promise<any> {
    return this.apartmentService.deleteApartment(apartment);
  }

  @Get('/apartment-total-cost')
  getApartmentTotalCost(@Query() query) : Promise<any> {
    return this.apartmentService.getApartmentTotalCost(query);
  }
}
