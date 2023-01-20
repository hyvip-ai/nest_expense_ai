import { ReportEnum } from '../enum';

export interface ReportBodyDTO {
  source: string;
  amount: number;
}

export interface ReportResponseDTO {
  source: string;
  amount: number;
  updated_at: string;
  created_at: string;
  type: ReportEnum;
  id: string;
}
