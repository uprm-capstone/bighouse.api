import { Injectable } from '@nestjs/common';
import { Payments } from 'src/Models/payments.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class PaymentsService {

  constructor(
    @InjectModel(Payments)
    private PaymentModel: typeof Payments,
  ) {}

  async createOccupy(payment:  {user_id:number, payment_date:Date, total: number, utility_cost:number, apartment_cost: number}): Promise<any> {
    const result = this.PaymentModel.create(payment)
    .catch(function(err){
      return {Error: err};
    });
    return result;
  }

  findOne(id: {payment_id:number}): Promise<any> {
    const payment_id = id.payment_id;
    return this.PaymentModel.findOne({ where: { payment_id } });
  }

  findUser(id: {user_id:number}): Promise<any> {
    const user_id = id.user_id;
    return this.PaymentModel.findOne({ where: { user_id } });
  }

  async getAllOccupy(): Promise<any> {
  return this.PaymentModel.findAll();
  }

  async updateOccupy(payment:  {payment_id:number, user_id:number, payment_date:Date, total: number, utility_cost:number, apartment_cost: number}): Promise<any> {
    const payment_id = payment.payment_id;
    return this.PaymentModel.update(payment, { where: { payment_id } });
  }

  async deleteOccupy(id: {payment_id:number}): Promise<any> {
    const occupy = await this.findOne(id);
    await occupy.destroy();
    return occupy;
  }

}
