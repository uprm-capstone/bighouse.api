import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Apartment } from './apartment.model';
import { User } from './user.model';

@Table
export class Occupy extends Model {
  @Column({
    primaryKey:true,
    autoIncrement: true
  })
  occupy_id: number;

  @Column
  user_id: number;

  @Column
  apartment_id: number;

  // @OneToOne(() => User)
  //   @JoinColumn()
  //   user_id: User;

  // @OneToOne(() => Apartment)
  //   @JoinColumn()
  //   apartment_id: Apartment;

  @Column
  start_date: Date;

  @Column
  end_date: Date;


    // constructor(
    //   public Occupy_ID: number,
    //   public User_ID: number,
    //   public Apartment_ID: number,
    //   public Start_Date: Date,
    //   public End_Date: Date,
    // ) {}
  }