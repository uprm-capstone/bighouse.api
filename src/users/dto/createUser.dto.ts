import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class createUserDto{
    @IsNotEmpty()
    @IsNumber()
    user_id: number;
    @IsNotEmpty()
    @IsString()
    user_name: string;
    @IsNotEmpty()
    @IsString()
    user_lastname: string;
    @IsNotEmpty()
    @IsString()
    user_gender: string;
    @IsNotEmpty()
    //@IsDate()
    user_birth: string;
    @IsNotEmpty()
    @IsEmail()
    user_email: string;
    @IsNotEmpty()
    @IsString()
    password: string;
}