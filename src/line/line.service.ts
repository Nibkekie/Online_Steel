import { Injectable } from '@nestjs/common';
import { Client } from '@line/bot-sdk';

@Injectable()
export class LineService {
  public readonly client: Client;

  constructor() {
    this.client = new Client({
      channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN!,
      channelSecret: process.env.CHANNEL_SECRET!,
    });
  }

  replyText(replyToken: string, text: string) {
    return this.client.replyMessage(replyToken, { type: 'text', text });
  }

  replyFlex(replyToken: string, altText: string, contents: any) {
    return this.client.replyMessage(replyToken, { type: 'flex', altText, contents });
  }
}
