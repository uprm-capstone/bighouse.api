import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class createUserDto{
    @IsNotEmpty()
    @IsNumber()
    User_ID: number;
    @IsNotEmpty()
    @IsString()
    User_Name: string;
    @IsNotEmpty()
    @IsString()
    User_LastName: string;
    @IsNotEmpty()
    @IsString()
    User_Gender: string;
    @IsNotEmpty()
    //@IsDate()
    User_Birth: string;
    @IsNotEmpty()
    @IsEmail()
    User_Email: string;
}