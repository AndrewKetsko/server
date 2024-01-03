import { Injectable, OnModuleInit } from '@nestjs/common';
import TelegramBot = require('node-telegram-bot-api');
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BotService implements OnModuleInit {
  constructor(private prisma: PrismaService) {}

  async onModuleInit() {
    await this.botMessage();
  }

  async botMessage() {
    const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });
    bot.on('new_chat_members', (ctx) =>
      bot.sendMessage(
        ctx.chat.id,
        `Hello ${ctx.new_chat_members[0].first_name}`,
      ),
    );
  }
}
