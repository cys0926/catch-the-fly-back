import { IsString, IsNumber, IsEnum } from 'class-validator';
import { Difficulty } from '../types';

export class SaveTimeDto {
  @IsString()
  username: string;

  @IsNumber()
  time: number;

  @IsEnum(['easy', 'medium', 'hard'])
  difficulty: Difficulty;
} 