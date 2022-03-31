import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class createOccupyDto {
  @IsNotEmpty()
  @IsNumber()
  Occupy_ID: number;
  @IsNotEmpty()
  @IsNumber()
  user_id: number;
  @IsNotEmpty()
  @IsNumber()
  Apartment_ID: number;
  @IsNotEmpty()
  Start_Date: Date;
  @IsNotEmpty()
  End_Date: Date;
}