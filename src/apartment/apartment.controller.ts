import { Body, Controller, Post, Get, Put, Delete } from '@nestjs/common';
import { Apartment } from 'src/Models/apartment.model';
import { createApartmentDto } from './dto/createApartment.dto';
import { ApartmentService } from './apartment.service';

@Controller('apartments')
export class ApartmentController {

    constructor(private readonly apartmentService:ApartmentService){}
    @Post('/create-apartment')
    createApartment(@Body() apartment: createApartmentDto): Apartment {
        return this.apartmentService.createApartment(apartment);
    }

    @Get()
    getApartment(): Apartment[] {
        return this.apartmentService.getApartments();
    }

    @Put('/update-apartment')
    updateApartment(@Body() apartment: createApartmentDto, Old_ID:number): Apartment {
        return this.apartmentService.updateApartment(apartment);
    }

    @Delete('/delete-apartment')
    deleteApartment(Apartmen_ID:number) {
        return this.apartmentService.deleteApartment(Apartmen_ID);
    }

}
