import React from 'react';
import { Axe, Shield, Sword, Gem, Hammer, FlaskRound as Flask, Globe, Diamond, Heart, ShieldX } from 'lucide-react';
import { Kit } from '../types';

interface KitIconProps {
  kit: Kit;
  size?: number;
  className?: string;
}

const KitIcon: React.FC<KitIconProps> = ({ kit, size = 24, className = '' }) => {
  const getIcon = () => {
    switch (kit) {
      case 'sword':
        return <Sword size={size} className={`${className} text-blue-400`} />;
      case 'axe':
        return <Axe size={size} className={`${className} text-gray-400`} />;
      case 'crystal':
        return <Gem size={size} className={`${className} text-purple-400`} />;
      case 'mace':
        return <Hammer size={size} className={`${className} text-gray-600`} />;
      case 'diapot':
        return <Flask size={size} className={`${className} text-blue-600`} />;
      case 'netpot':
        return <Flask size={size} className={`${className} text-purple-600`} />;
      case 'smp':
        return <Globe size={size} className={`${className} text-green-400`} />;
      case 'diasmp':
        return <Diamond size={size} className={`${className} text-blue-300`} />;
      case 'uhc':
        return <Heart size={size} className={`${className} text-red-500`} />;
      case 'shieldless':
        return <ShieldX size={size} className={`${className} text-yellow-500`} />;
      default:
        return <Shield size={size} className={className} />;
    }
  };

  return (
    <div className="flex items-center justify-center">
      {getIcon()}
    </div>
  );
};

export default KitIcon;