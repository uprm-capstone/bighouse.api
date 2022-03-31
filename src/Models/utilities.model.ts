import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Apartment } from './apartment.model';
import { User } from './user.model';

@Table
export class Utilities extends Model {
  @Column({primaryKey:true})
  utility_id: number;

  @Column
  utility_name: string;

  @Column
  apartment_id: number;

  @Column
  unit_quantity: number;

  @Column
  cost_per_unit: number;

  @Column
  unit: string;

    // constructor(
    //   public Utility_ID: number,
    //   public Utility_Name: string,
    //   public Apartment_ID: number,
    //   public Unit_Quantity: number,
    //   public Cost_Per_Unit: number,
    //   public Unit: string,
    // ) {}
  }