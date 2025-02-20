export interface User {
  id: string;
  email: string;
  username: string;
  points: number;
  level: number;
  created_at: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  points: number;
  duration_days: number;
  difficulty: 'easy' | 'medium' | 'hard';
  category: 'cardio' | 'strength' | 'flexibility' | 'wellness';
  created_at: string;
}

export interface UserChallenge {
  id: string;
  user_id: string;
  challenge_id: string;
  status: 'active' | 'completed' | 'failed';
  progress: number;
  started_at: string;
  completed_at?: string;
}