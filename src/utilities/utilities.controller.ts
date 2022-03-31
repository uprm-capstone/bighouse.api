import { Body, Controller, Post, Get, Put, Delete } from '@nestjs/common';
import { Utilities } from 'src/Models/utilities.model';
import { createUtilityDto } from './dto/createUtility.dto';
import { UtilityService } from './utilities.service';

@Controller('utility')
export class UtilityController {
    constructor(private readonly utilityService: UtilityService) {}
    @Post('/create-utility')
    createUtility(@Body() utility: {utility_name: string, apartment_id: number, unit_quantity: number, cost_per_unit: number, unit: string}): Promise<any> {
      return this.utilityService.createUtility(utility);
    }
  
    @Get()
    getAllOccupy(): Promise<any> {
      return this.utilityService.getAllUtilities();
    }
  
    @Put('/update-utility')
    updateOccupy(@Body() utility: {utility_id:number, utility_name: string, apartment_id: number, unit_quantity: number, cost_per_unit: number, unit: string}): Promise<any> {
      return this.utilityService.updateUtility(utility);
    }
  
    @Delete('/delete-utility')
    deleteOccupy(@Body() utility: {utility_id:number}): Promise<any> {
      return this.utilityService.deleteUtility(utility);
    }
  
    @Get('/get-utility')
    getApartmentTotalCost(@Body() utility: {utility_id:number}): Promise<any> {
      return this.utilityService.getUtility(utility);
    }

    @Get('/get-utility-total')
    getTotalUtilityCost(@Body() apartment_ID: {apartment_id:number}): Promise<any> {
      return this.utilityService.getTotalUtilityCost(apartment_ID);
    }

    @Get('/get-apartment-utilities')
    getApartmentUtilities(@Body() apartment_ID: {apartment_id:number}): Promise<any> {
      return this.utilityService.getApartmentUtilities(apartment_ID);
    }

}