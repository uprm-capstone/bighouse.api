import { IsNotEmpty, IsNumber } from 'class-validator';

export class occupyIDDto {
  @IsNotEmpty()
  @IsNumber()
  Occupy_ID: number;
}