export interface Player {
  rank: number;
  username: string;
  volume: number;
  platform: string;
  reward: number;
  trend: string;
  userId?: string;
  lastActivity?: Date;
}

export interface Platform {
  id: string;
  name: string;
  apiEndpoint?: string;
  referralCode: string;
  color: string;
  isActive: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
  timestamp: Date;
}

export interface LeaderboardData {
  players: Player[];
  totalVolume: number;
  totalRewards: number;
  lastUpdate: Date;
  nextReset: Date;
}