import { Injectable } from '@nestjs/common';
import { GameRecord, Difficulty, Ranking } from './types';

@Injectable()
export class AppService {
  private records: Map<Difficulty, GameRecord[]> = new Map([
    ['easy', []],
    ['medium', []],
    ['hard', []],
  ]);

  saveTime(record: GameRecord): GameRecord {
    const records = this.records.get(record.difficulty) || [];
    records.push(record);
    records.sort((a, b) => a.time - b.time);
    this.records.set(record.difficulty, records);
    return record;
  }

  getRankings(difficulty: Difficulty): Ranking[] {
    const records = this.records.get(difficulty) || [];
    return records.slice(0, 5).map((record, index) => ({
      rank: index + 1,
      username: record.username,
      time: record.time,
    }));
  }
}
