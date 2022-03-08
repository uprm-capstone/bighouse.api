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
  Unit_Quantity: Float32Array;
  @IsNotEmpty()
  Cost_Per_Unit: Float32Array;
  @IsNotEmpty()
  @IsString()
  Unit: string;
}