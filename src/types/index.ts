export type TierRank = 'HT1' | 'LT1' | 'HT2' | 'LT2' | 'HT3' | 'LT3' | 'HT4' | 'LT4' | 'HT5' | 'LT5';

export type Kit = 'sword' | 'axe' | 'crystal' | 'mace' | 'diapot' | 'netpot' | 'smp' | 'diasmp' | 'uhc' | 'shieldless';

export type TierColor = {
  background: string;
  text: string;
};

export type PlayerTier = {
  kit: Kit;
  tier: TierRank;
};

export type Player = {
  id: string;
  name: string;
  rank: string;
  points: number;
  region: string;
  tiers: PlayerTier[];
};

export type AdminCredentials = {
  username: string;
  password: string;
};

export type AuthState = {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
};

export type TierListState = {
  players: Player[];
  isLoading: boolean;
  error: string | null;
};