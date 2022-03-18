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
  @IsNotEmpty()
  Signature: Text;
  @IsNotEmpty()
  @IsBoolean()
  Require_Signature: Boolean;
}