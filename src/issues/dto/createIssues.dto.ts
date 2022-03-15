import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class createIssuesDto {
  @IsNotEmpty()
  @IsNumber()
  Issue_ID: number;
  @IsNotEmpty()
  @IsString()
  Title: string;
  @IsNotEmpty()
  @IsNumber()
  Apartment_ID: number;
  @IsNotEmpty()
  @IsBoolean()
  Status: Boolean;
  @IsNotEmpty()
  Date_Created: Date;
  Date_Closed: Date;
  @IsString()
  Description: string;
  @IsNotEmpty()
  @IsString()
  Issue_Type: string;
}