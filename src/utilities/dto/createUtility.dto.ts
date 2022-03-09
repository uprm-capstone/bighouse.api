import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class createUtilityDto {
  @IsNotEmpty()
  @IsNumber()
  Utility_ID: number;
  @IsNotEmpty()
  @IsString()
  Utility_Name: string;
  @IsNotEmpty()
  @IsNumber()
  Apartment_ID: number;
  @IsNotEmpty()
  @IsNumber()
  Unit_Quantity: number;
  @IsNotEmpty()
  @IsNumber()
  Cost_Per_Unit: number;
  @IsNotEmpty()
  @IsString()
  Unit: string;
}