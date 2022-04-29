import { Injectable } from '@nestjs/common';
import { Payments } from 'src/Models/payments.model';
import { InjectModel } from '@nestjs/sequelize';


@Injectable()
export class PaymentsService {

  constructor(
    @InjectModel(Payments)
    private PaymentModel: typeof Payments,
  ) {}

  async createPayment(payment:  {payment_date:Date, total: number, utility_cost:number, apartment_cost: number, amount: number, id: string}): Promise<any> {
    
    require('dotenv').config();
    const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);

    const newPayment = await stripe.paymentIntents.create({
			amount:payment.amount,
			currency: "USD",
			description: "BigHouse",
			payment_method: payment.id,
			confirm: true
		})
		// console.log("Payment", newPayment)

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
    return this.PaymentModel.findOne({ where: { user_id },order: [
      ["payment_id", "DESC"],
    ], });
  }

  findUserPayments(id: {user_id:number}): Promise<any> {
    const user_id = id.user_id;
    return this.PaymentModel.findAll({ where: { user_id } });
  }

  async getAllPayments(): Promise<any> {
  return this.PaymentModel.findAll();
  }

  async updatePayment(payment:  {payment_id:number, user_id:number, payment_date:Date, total: number, utility_cost:number, apartment_cost: number}): Promise<any> {
    const payment_id = payment.payment_id;
    return this.PaymentModel.update(payment, { where: { payment_id } });
  }

  async deletePayment(id: {payment_id:number}): Promise<any> {
    const payment = await this.findOne(id);
    await payment.destroy();
    return payment;
  }

}
