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
import { ReportBodyDTO, ReportBodyUpdateDTO } from './dto';
import { ReportEnum } from './enum';
import { ReportService } from './report.service';

@Controller('/reports/:type')
export class ReportController {
  constructor(private reportService: ReportService) {}

  @Get()
  getAllReports(
    @Param('type', new ParseEnumPipe(ReportEnum)) type: ReportEnum,
  ) {
    return this.reportService.allReports(type);
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
    @Body() reportDTOUpdate: ReportBodyUpdateDTO,
  ) {
    return this.reportService.updateReportById(id, reportDTOUpdate);
  }

  @Patch('/:id')
  editReportById(
    @Param('id') id: string,
    @Body() reportDTOUpdate: ReportBodyUpdateDTO,
  ) {
    return this.reportService.updateReportById(id, reportDTOUpdate);
  }

  @Delete('/:id')
  deleteReportById(@Param('id') id: string) {
    return this.reportService.deleteReportById(id);
  }
}
