import {
    IsNotEmpty,
    IsString,
    MinLength,
  } from 'class-validator';
  
  export class UserDto {

    @IsNotEmpty()
    @IsString()
    username: string;
    
    @MinLength(5)
    @MinLength(10)
    password: string;

    @IsString()
    @IsNotEmpty()
    email: string;
  }
