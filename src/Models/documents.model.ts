import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Apartment } from './apartment.model';
import { User } from './user.model';

@Table
export class Documents extends Model {
  @Column({primaryKey:true})
  document_id: number;

  @Column
  user_id: number;

  @Column
  document: string;

  @Column
  sign_on: Date;

  @Column
  signature: string;

  @Column
  require_signature: boolean;

    // constructor(
    //   public Document_ID: number,
    //   public User_ID: number,
    //   public Document: string,
    //   public Sign_On: Date,
    //   public Signature: string,
    //   public Require_Signature: Boolean,
    // ) {}
  }