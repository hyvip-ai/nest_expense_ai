import { ReportEnum } from '../enum';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class ReportBodyDTO {
  @IsNotEmpty()
  @IsString()
  source: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;
}

export class ReportBodyUpdateDTO {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  source?: string;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  amount?: number;
}

export interface ReportResponseDTO {
  source: string;
  amount: number;
  updated_at: string;
  created_at: string;
  type: ReportEnum;
  id: string;
}
