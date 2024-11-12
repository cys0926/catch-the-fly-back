import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  BadRequestException,
} from '@nestjs/common';
import { AppService } from './app.service';
import { SaveTimeDto } from './dto/save-time.dto';
import { Difficulty } from './types';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('save-time')
  saveTime(@Body() saveTimeDto: SaveTimeDto) {
    const savedRecord = this.appService.saveTime(saveTimeDto);
    return {
      message: 'Time saved successfully',
      data: savedRecord,
    };
  }

  @Get('rankings')
  getRankings(@Query('difficulty') difficulty: Difficulty) {
    if (!['easy', 'medium', 'hard'].includes(difficulty)) {
      throw new BadRequestException('Invalid difficulty level');
    }

    return {
      difficulty,
      rankings: this.appService.getRankings(difficulty),
    };
  }
}
