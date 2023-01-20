import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ReportBodyDTO } from './dto';
import { ReportEnum } from './enum';

@Injectable()
export class ReportService {
  constructor(private prismaService: PrismaService) {}

  allReports() {
    return 'Working';
  }

  reportById(reportId: string, type: ReportEnum) {
    return 'Working';
  }

  createNewReport(reportData: ReportBodyDTO, type: ReportEnum) {
    return 'Working';
  }

  updateReport(reportId: string, type: ReportEnum) {
    return 'Working';
  }

  editReportById(reportId: string, type: ReportEnum) {
    return 'Working';
  }

  deleteReportById(reportId: string, type: ReportEnum) {
    return 'Working';
  }
}
