import {
    IsNumber,
      IsOptional,
      IsString,
    } from 'class-validator';
    import { ApiProperty } from '@nestjs/swagger';

    export class PaginationDto {
      @ApiProperty()
      @IsString()
      @IsOptional()
      page: number;
  
      @ApiProperty()
      @IsString()
      @IsOptional()
      cantPage: number;
  
      @ApiProperty()
      @IsNumber()
      @IsOptional()
      total: number;
  
      @ApiProperty()
      @IsString()
      @IsOptional()
      name: string;
  
    }