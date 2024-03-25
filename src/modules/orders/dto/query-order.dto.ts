import {
  IsDate,
    IsNotEmpty,
    IsString,
  } from 'class-validator';
  
  export class QueryOrderDto {
  
    @IsNotEmpty()
    @IsString()
    date: string;

  }
  