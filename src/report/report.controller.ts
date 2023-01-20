import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ParseEnumPipe } from '@nestjs/common/pipes';
import { ReportBodyDTO } from './dto';
import { ReportEnum } from './enum';
import { ReportService } from './report.service';

@Controller('/reports/:type')
export class ReportController {
  constructor(private reportService: ReportService) {}

  @Get()
  getAllReports() {
    return this.reportService.allReports();
  }

  @Post()
  createReport(
    @Body() reportDTO: ReportBodyDTO,
    @Param('type', new ParseEnumPipe(ReportEnum)) type: ReportEnum,
  ) {
    return this.reportService.createNewReport(reportDTO, type);
  }

  @Get('/:id')
  reportById(
    @Param('id') id: string,
    @Param('type', new ParseEnumPipe(ReportEnum)) type: ReportEnum,
  ) {
    return this.reportService.reportById(id, type);
  }

  @Put('/:id')
  updateReportById(
    @Param('id') id: string,
    @Param('type', new ParseEnumPipe(ReportEnum)) type: ReportEnum,
  ) {
    return this.reportService.updateReport(id, type);
  }

  @Patch('/:id')
  editReportById(@Param('id') id: string, @Param('type') type: ReportEnum) {
    return this.reportService.editReportById(id, type);
  }

  @Delete('/:id')
  deleteReportById(@Param('id') id: string, @Param('type') type: ReportEnum) {
    return this.reportService.deleteReportById(id, type);
  }
}
