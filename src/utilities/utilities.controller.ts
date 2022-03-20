import { Body, Controller, Post, Get, Put, Delete } from '@nestjs/common';
import { Utilities } from 'src/Models/utilities.model';
import { createUtilityDto } from './dto/createUtility.dto';
import { UtilityService } from './utilities.service';

@Controller('utility')
export class UtilityController {
    constructor(private readonly utilityService: UtilityService) {}
    @Post('/create-utility')
    createUtility(@Body() utility: createUtilityDto): Utilities {
      return this.utilityService.createUtility(utility);
    }
  
    @Get()
    getAllOccupy(): Utilities[] {
      return this.utilityService.getAllUtilities();
    }
  
    @Put('/update-utility')
    updateOccupy(@Body() utility: createUtilityDto): Utilities {
      return this.utilityService.updateUtility(utility);
    }
  
    @Delete('/delete-utility')
    deleteOccupy(@Body() utility: {Utility_ID:number}) : {Utility_ID: number} {
      return this.utilityService.deleteUtility(utility);
    }
  
    @Get('/get-utility')
    getApartmentTotalCost(@Body() utility: {Utility_ID:number}) : Utilities {
      return this.utilityService.getUtility(utility);
    }

    @Get('/get-utility-total')
    getTotalUtilityCost(@Body() apartment_ID: {Apartment_ID:number}) : {Utility_Cost: number} {
      return this.utilityService.getTotalUtilityCost(apartment_ID);
    }

    @Get('/get-apartment-utilities')
    getApartmentUtilities(@Body() apartment_ID: {Apartment_ID:number}) : Utilities[] {
      return this.utilityService.getApartmentUtilities(apartment_ID);
    }

}