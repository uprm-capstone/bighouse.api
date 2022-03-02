import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { isBooleanObject } from 'util/types';

export class createApartmentDto {
  @IsNotEmpty()
  @IsNumber()
  Apartment_ID: number;
  @IsNotEmpty()
  @IsBoolean()
  Occupied: boolean;
  @IsNotEmpty()
  @IsString()
  Apartment_Number: string;
  @IsNotEmpty()
  Apartment_Cost: number;
}
