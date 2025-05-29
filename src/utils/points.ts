import { TierRank } from '../types';

// Points for each tier
export const TIER_POINTS: Record<TierRank, number> = {
  'HT1': 100,
  'LT1': 90,
  'HT2': 80,
  'LT2': 70,
  'HT3': 60,
  'LT3': 50,
  'HT4': 40,
  'LT4': 30,
  'HT5': 20,
  'LT5': 10
};

// Calculate rank based on points
export const calculateRank = (points: number): string => {
  if (points >= 1001) return 'Diamond';
  if (points >= 601) return 'Platinum';
  if (points >= 301) return 'Gold';
  if (points >= 101) return 'Silver';
  return 'Bronze';
};

// Calculate total points for a player based on their tiers
export const calculatePlayerPoints = (tiers: { kit: string; tier: TierRank }[]): number => {
  return tiers.reduce((total, { tier }) => total + TIER_POINTS[tier], 0);
};