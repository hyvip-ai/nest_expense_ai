import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ReportBodyDTO, ReportBodyUpdateDTO } from './dto';
import { ReportEnum } from './enum';

@Injectable()
export class ReportService {
  constructor(private prismaService: PrismaService) {}

  async allReports(type: ReportEnum) {
    try {
      const report = await this.prismaService.report.findMany({
        where: {
          type,
        },
      });
      return { status: HttpStatus.OK, data: { report } };
    } catch (err) {
      return {
        stackTrace: err.stack.split('\n'),
        message: 'Something went wrong',
      };
    }
  }

  async reportById(reportId: string, type: ReportEnum) {
    try {
      const report = await this.prismaService.report.findFirst({
        where: {
          id: reportId,
          type,
        },
      });
      return { status: HttpStatus.OK, data: { report } };
    } catch (err) {
      return {
        stackTrace: err.stack.split('\n'),
        message: 'Something went wrong',
      };
    }
  }

  async createNewReport(reportData: ReportBodyDTO, type: ReportEnum) {
    try {
      await this.prismaService.report.create({
        data: { ...reportData, type },
      });
      return { message: 'Success', status: HttpStatus.CREATED };
    } catch (err) {
      return {
        message: 'Something went wrong',
        stackTrace: err.stack.split('\n'),
      };
    }
  }

  async updateReportById(reportId: string, reportData: ReportBodyUpdateDTO) {
    try {
      await this.prismaService.report.update({
        where: {
          id: reportId,
        },
        data: {
          ...reportData,
        },
      });

      return {
        message: 'Success',
        status: HttpStatus.NO_CONTENT,
      };
    } catch (err) {
      return {
        message: 'Something went wrong',
        stackTrace: err.stack.split('\n'),
      };
    }
  }

  async deleteReportById(reportId: string) {
    try {
      await this.prismaService.report.delete({
        where: {
          id: reportId,
        },
      });
      return { message: 'Success', status: HttpStatus.NO_CONTENT };
    } catch (err) {
      return {
        message: 'Something went wrong',
        stackTrace: err.stack.split('\n'),
      };
    }
  }
}
