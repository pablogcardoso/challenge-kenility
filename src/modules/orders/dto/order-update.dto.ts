import {
    IsDate,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
  } from 'class-validator';
import { ProductDto } from 'src/modules/products/dtos/product.dto';
  
  export class OrderUpdateDto {
  
    @IsOptional()
    @IsString()
    clientName: string;

    @IsOptional()
    @IsNumber()
    total: number;

    @IsOptional()
    @IsString()
    date: string;

    @IsOptional()
    products: ProductDto[];
  }
  