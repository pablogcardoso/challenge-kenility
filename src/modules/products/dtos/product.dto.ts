import {
    IsDate,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
  } from 'class-validator';
  import { ApiProperty } from '@nestjs/swagger';

  export class ProductDto {
    
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    sku: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    picture: string;
    
    @ApiProperty()
    @IsNumber()
    price:number;
  }
  