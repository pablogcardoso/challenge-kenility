import {
    IsNotEmpty,
    IsString,
  } from 'class-validator';
  
  export class logInDto {
    @IsNotEmpty()
    @IsString()
    email: string;
    
    @IsString()
    @IsNotEmpty()
    password: string;

  }
