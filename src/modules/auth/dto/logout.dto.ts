import {
    IsNotEmpty,
    IsString,
  } from 'class-validator';
  
  export class logOutDto {
    @IsNotEmpty()
    @IsString()
    email: string;
    
  }
