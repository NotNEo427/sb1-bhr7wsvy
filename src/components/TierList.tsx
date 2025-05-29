import React, { useState } from 'react';
import { KITS, TIER_RANKS } from '../constants';
import { useTierList } from '../context/TierListContext';
import { Kit, Player, TierRank } from '../types';
import KitIcon from './KitIcon';
import TierBadge from './TierBadge';
import { useAuth } from '../context/AuthContext';
import { AlertCircle, ArrowDown, Check, ChevronDown, Medal, RefreshCw, X } from 'lucide-react';

const TierList: React.FC = () => {
  const { state, updateTier, refreshData } = useTierList();
  const { authState } = useAuth();
  const [editingCell, setEditingCell] = useState<{ playerId: string; kit: Kit } | null>(null);
  const [selectedTier, setSelectedTier] = useState<TierRank | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  const handleCellClick = (playerId: string, kit: Kit) => {
    if (!authState.isAuthenticated) return;
    
    setEditingCell({ playerId, kit });
    setSelectedTier(null);
    setDropdownOpen(true);
  };
  
  const handleTierSelect = (tier: TierRank) => {
    if (!editingCell) return;
    
    const { playerId, kit } = editingCell;
    updateTier(playerId, kit, tier);
    
    setSuccessMessage(`Updated ${kit} tier for Player #${playerId}`);
    setTimeout(() => setSuccessMessage(null), 3000);
    
    setEditingCell(null);
    setSelectedTier(null);
    setDropdownOpen(false);
  };
  
  const handleCancel = () => {
    setEditingCell(null);
    setSelectedTier(null);
    setDropdownOpen(false);
  };
  
  const handleRefresh = () => {
    refreshData();
    setSuccessMessage('Data refreshed successfully');
    setTimeout(() => setSuccessMessage(null), 3000);
  };
  
  const getPlayerTier = (player: Player, kit: Kit): TierRank | null => {
    const tierEntry = player.tiers.find(t => t.kit === kit);
    return tierEntry ? tierEntry.tier as TierRank : null;
  };
  
  if (state.isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  
  if (state.error) {
    return (
      <div className="bg-red-900/50 border border-red-500 text-red-200 p-4 rounded-lg">
        <h3 className="text-lg font-semibold flex items-center">
          <AlertCircle className="mr-2" />
          Error
        </h3>
        <p>{state.error}</p>
      </div>
    );
  }
  
  return (
    <div className="overflow-x-auto">
      {successMessage && (
        <div className="fixed top-4 right-4 bg-green-900/70 border border-green-500 text-green-200 px-4 py-2 rounded-lg flex items-center shadow-lg animate-fadeIn z-50">
          <Check className="mr-2\" size={16} />
          {successMessage}
        </div>
      )}
      
      {errorMessage && (
        <div className="fixed top-4 right-4 bg-red-900/70 border border-red-500 text-red-200 px-4 py-2 rounded-lg flex items-center shadow-lg animate-fadeIn z-50">
          <AlertCircle className="mr-2" size={16} />
          {errorMessage}
        </div>
      )}
      
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white flex items-center">
          <Medal className="mr-2 text-yellow-500" />
          Player Rankings
        </h2>
        
        <button 
          onClick={handleRefresh}
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm flex items-center transition-colors"
        >
          <RefreshCw size={16} className="mr-1" />
          Refresh
        </button>
      </div>
      
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-900">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Rank
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Player
              </th>
              {KITS.map((kit) => (
                <th key={kit.id} scope="col" className="px-3 py-3 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">
                  <div className="flex flex-col items-center">
                    <KitIcon kit={kit.id as Kit} size={20} />
                    <span className="mt-1">{kit.name}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {state.players.map((player, index) => (
              <tr key={player.id} className={index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-750'}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center bg-gray-700 rounded-full text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-white">{player.name}</div>
                  <div className="text-sm text-gray-400">{player.rank} ({player.points} pts)</div>
                </td>
                
                {KITS.map((kit) => {
                  const tier = getPlayerTier(player, kit.id as Kit);
                  const isEditing = editingCell?.playerId === player.id && editingCell?.kit === kit.id;
                  
                  return (
                    <td key={`${player.id}-${kit.id}`} className="px-3 py-4 whitespace-nowrap text-center">
                      {isEditing ? (
                        <div className="relative">
                          <button
                            type="button"
                            className="inline-flex justify-between items-center w-full rounded-md border border-gray-600 shadow-sm px-4 py-2 bg-gray-700 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                          >
                            {selectedTier ? (
                              <TierBadge tier={selectedTier} />
                            ) : (
                              <span>Select Tier</span>
                            )}
                            <ChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                          </button>
                          
                          {dropdownOpen && (
                            <div className="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5 divide-y divide-gray-600 z-10">
                              <div className="py-1">
                                {TIER_RANKS.map((tierOption) => (
                                  <button
                                    key={tierOption}
                                    onClick={() => handleTierSelect(tierOption)}
                                    className="flex items-center justify-between px-4 py-2 text-sm text-white hover:bg-gray-600 w-full text-left"
                                  >
                                    <TierBadge tier={tierOption} />
                                  </button>
                                ))}
                              </div>
                              <div className="py-1">
                                <button
                                  onClick={handleCancel}
                                  className="flex items-center px-4 py-2 text-sm text-red-400 hover:bg-gray-600 w-full text-left"
                                >
                                  <X size={16} className="mr-2" />
                                  Cancel
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div 
                          onClick={() => handleCellClick(player.id, kit.id as Kit)}
                          className={`flex justify-center ${authState.isAuthenticated ? 'cursor-pointer hover:bg-gray-700 p-2 rounded-md transition-colors' : ''}`}
                        >
                          {tier ? <TierBadge tier={tier} /> : <span className="text-gray-500">-</span>}
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {!authState.isAuthenticated && (
        <div className="mt-4 text-center text-gray-400 text-sm">
          <p>Login as admin to edit tier rankings</p>
        </div>
      )}
    </div>
  );
};

export default TierList;