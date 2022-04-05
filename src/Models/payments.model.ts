import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Payments extends Model {
  @Column({
    primaryKey:true,
    autoIncrement: true
  })
  payment_id: number;

  @Column
  user_id: number;

  @Column
  payment_date: Date;

  @Column
  total: number;

  @Column
  utility_cost: number;

  @Column
  apartment_cost: number;

  }