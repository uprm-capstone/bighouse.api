import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Apartment } from './apartment.model';
import { User } from './user.model';

@Table
export class Issues extends Model {
  @Column({primaryKey:true})
  issue_id: number;

  @Column
  title: string;

  @Column
  apartment_id: number;

  @Column
  status: boolean;

  @Column
  date_created: Date;

  @Column
  date_closed: Date;

  @Column
  description: string;

  @Column
  issue_type: string;

    // constructor(
    //   public Issue_ID: number,
    //   public Title: string,
    //   public Apartment_ID: number,
    //   public Status: Boolean,
    //   public Date_Created: Date,
    //   public Date_Closed: Date,
    //   public Description: string,
    //   public Issue_Type: string,
    // ) {}
  }