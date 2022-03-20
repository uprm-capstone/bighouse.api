import { Body, Controller, Post, Get, Put, Delete } from '@nestjs/common';
import { Apartment } from 'src/Models/apartment.model';
import { createApartmentDto } from './dto/createApartment.dto';
import { ApartmentService } from './apartment.service';
import { apartmentIDDto } from './dto/apartmentID.dto';

@Controller('apartments')
export class ApartmentController {
  constructor(private readonly apartmentService: ApartmentService) {}
  @Post('/create-apartment')
  createApartment(@Body() apartment: createApartmentDto): Apartment {
    return this.apartmentService.createApartment(apartment);
  }

  @Get()
  getApartment(): Apartment[] {
    return this.apartmentService.getApartments();
  }

  @Put('/update-apartment')
  updateApartment(@Body() apartment: createApartmentDto): Apartment {
    return this.apartmentService.updateApartment(apartment);
  }

  @Delete('/delete-apartment')
  deleteApartment(@Body() apartment: apartmentIDDto) : apartmentIDDto {
    return this.apartmentService.deleteApartment(apartment);
  }

  @Get('/apartment-total-cost')
  getApartmentTotalCost(@Body() apartment: apartmentIDDto) : {Apartment_Cost: number} {
    return this.apartmentService.getApartmentTotalCost(apartment);
  }
}
