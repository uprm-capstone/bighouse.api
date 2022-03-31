import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { isBooleanObject } from 'util/types';

export class createApartmentDto {
  @IsNotEmpty()
  @IsNumber()
  apartment_id: number;
  @IsNotEmpty()
  @IsBoolean()
  occupied: boolean;
  @IsNotEmpty()
  @IsString()
  apartment_number: string;
  @IsNotEmpty()
  apartment_cost: number;
}
