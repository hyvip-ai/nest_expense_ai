import { Module } from '@nestjs/common';
import { ReportModule } from './report/report.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config/dist';

@Module({
  imports: [
    ReportModule,
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
})
export class AppModule {}
