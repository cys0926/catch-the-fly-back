export type Difficulty = 'easy' | 'medium' | 'hard';

export interface GameRecord {
  username: string;
  time: number;
  difficulty: Difficulty;
}

export interface Ranking {
  rank: number;
  username: string;
  time: number;
} 