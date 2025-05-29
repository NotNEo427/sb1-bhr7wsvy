import React from 'react';
import { TIER_COLORS } from '../constants';
import { TierRank } from '../types';

interface TierBadgeProps {
  tier: TierRank;
  className?: string;
}

const TierBadge: React.FC<TierBadgeProps> = ({ tier, className = '' }) => {
  const tierStyle = TIER_COLORS[tier] || { background: '#808080', text: '#FFFFFF' };
  
  return (
    <div 
      className={`rounded-full px-2 py-1 text-xs font-bold ${className}`}
      style={{ 
        backgroundColor: tierStyle.background, 
        color: tierStyle.text
      }}
    >
      {tier}
    </div>
  );
};

export default TierBadge;