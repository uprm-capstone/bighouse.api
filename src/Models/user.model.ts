import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column({
    primaryKey:true,
    autoIncrement: true
  })
  user_id: number;

  @Column
  user_name: string;

  @Column
  user_lastname: string;

  @Column
  user_gender: string;

  @Column
  user_birth: string;

  @Column
  user_email: string;

//   @Column({ defaultValue: true })
//   isActive: boolean;
}

// No DB connection. For testing purposes with lists before connecting to DB.
// export class User{
//     constructor(public User_ID:number, public User_Name:string, public User_LastName:string, public User_Gender:string, public User_Birth:string, public User_Email:string){} 
// }