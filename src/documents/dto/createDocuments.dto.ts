import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class createDocumentsDto {
  @IsNotEmpty()
  @IsNumber()
  Document_ID: number;
  @IsNotEmpty()
  @IsNumber()
  User_ID: number;
  @IsNotEmpty()
  @IsString()
  Document: string;
  @IsNotEmpty()
  Sign_On: Date;
  // Next element is Text but string as placeholder for testing purposes.
  @IsNotEmpty()
  @IsString()
  Signature: string;
  @IsNotEmpty()
  @IsBoolean()
  Require_Signature: Boolean;
}