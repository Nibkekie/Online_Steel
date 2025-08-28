import { Module } from '@nestjs/common';
import { LineModule } from './line/line.module';

@Module({
  imports: [LineModule],
})
export class AppModule {}
