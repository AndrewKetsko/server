import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BotService } from './bot/bot.service';
import { PrismaService } from './prisma.service';

@Module({
  exports: [],
  imports: [],
  controllers: [AppController],
  providers: [AppService, BotService, PrismaService],
})
export class AppModule {}
