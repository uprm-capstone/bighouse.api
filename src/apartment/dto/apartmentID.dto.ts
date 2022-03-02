import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class apartmentIDDto {
  @IsNotEmpty()
  @IsNumber()
  Apartment_ID: number;
}
