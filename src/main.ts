import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as express from 'express';

async function bootstrap() {
  dotenv.config();

  // เก็บ rawBody ไว้ตรวจลายเซ็นจาก LINE
  const app = await NestFactory.create(AppModule);
  app.use(express.json({
    verify: (req: any, _res, buf) => { req.rawBody = buf; }
  }));
  app.use(express.urlencoded({ extended: true }));

  const port = process.env.PORT || 8080;
  await app.listen(Number(port), '0.0.0.0');
  console.log(`Server running on :${port}`);
}
bootstrap();