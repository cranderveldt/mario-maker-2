export class Level {
  createdAt: number;
  playedAt = 0;
  title: string;
  creator: string;
  summary: string;
  id: string;
  $levelId?: string;
  rating?: number;
  notes?: string;
  difficulty?: number;
}
