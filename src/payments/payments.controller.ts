import { Body, Controller, Post, Get, Put, Delete, Query } from '@nestjs/common';
import { Payments } from 'src/Models/payments.model';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
    constructor(private readonly PaymentsService: PaymentsService) {}
    @Post('/create-payment')
    createOccupy(@Body() payment:  {user_id:number, payment_date:Date, total: number, utility_cost:number, apartment_cost: number}): Promise<any> {
      return this.PaymentsService.createOccupy(payment);
    }
  
    @Get()
    getAllOccupy(): Promise<any> {
      return this.PaymentsService.getAllOccupy();
    }

    @Get('/get-payment')
    findOne(@Body() payment: {payment_id:number}): Promise<any> {
      return this.PaymentsService.findOne(payment);
    }

    @Get('/get-payment-user')
    findUser(@Query() query): Promise<any> {
      return this.PaymentsService.findUser(query);
    }
  
    @Put('/update-payment')
    updateOccupy(@Body() payment:  {payment_id:number, user_id:number, payment_date:Date, total: number, utility_cost:number, apartment_cost: number}): Promise<any> {
      return this.PaymentsService.updateOccupy(payment);
    }
  
    @Delete('/delete-payment')
    deleteOccupy(@Body() payment: {payment_id:number}): Promise<any> {
      return this.PaymentsService.deleteOccupy(payment);
    }

}
