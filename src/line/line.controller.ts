import { Controller, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { LineService } from './line.service';
import { validateSignature } from '@line/bot-sdk';
import { productListFlex } from '../utils/flex';

@Controller('line')
export class LineController {
  constructor(private readonly line: LineService) {}

  @Post('webhook')
  async webhook(@Req() req: Request & { rawBody?: Buffer }, @Res() res: Response) {
    // ตรวจลายเซ็นจาก LINE (ความปลอดภัย)
    const signature = req.headers['x-line-signature'] as string;
    if (!signature || !req.rawBody ||
        !validateSignature(req.rawBody, process.env.CHANNEL_SECRET!, signature)) {
      return res.status(401).send('Invalid signature');
    }

    const events = (req.body as any).events || [];
    await Promise.all(events.map(async (event: any) => {
      // 1) โต้ตอบจากข้อความ (Rich menu → Action=Send message "สินค้า")
      if (event.type === 'message' && event.message.type === 'text') {
        const text = (event.message.text || '').trim();

        if (text === 'สินค้า' || /^(เมนู|menu)$/i.test(text)) {
          return this.line.replyFlex(event.replyToken, 'รายการสินค้า', productListFlex);
        }
        if (/^(สั่งซื้อ|order)$/i.test(text)) {
          return this.line.replyText(event.replyToken,
            'พิมพ์ชื่อสินค้า + จำนวน เช่น "RB9 x 10"\nหรือกดปุ่ม "สั่งซื้อ" ในเมนู');
        }
        return this.line.replyText(event.replyToken,
          'สวัสดีครับ 🙌 พิมพ์ "สินค้า" เพื่อดูรายการ หรือ "สั่งซื้อ" เพื่อเริ่มสั่งซื้อ');
      }

      // 2) (ทางเลือก) ถ้าตั้ง Rich menu เป็น Postback
      if (event.type === 'postback' && event.postback?.data === 'PRODUCT_MENU') {
        return this.line.replyFlex(event.replyToken, 'รายการสินค้า', productListFlex);
      }
    }));

    res.status(200).send('OK');
  }
}
