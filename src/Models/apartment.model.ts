import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Table
export class Apartment extends Model {
  @Column({
    primaryKey:true,
    autoIncrement: true
  })
  apartment_id: number;

  @Column
  occupied: boolean;

  @Column
  apartment_number: string;

  @Column
  apartment_cost: number;

  // constructor(
  //   public Apartment_ID: number,
  //   public Occupied: boolean,
  //   public Apartment_Number: string,
  //   public Apartment_Cost: number,
  // ) {}
}
