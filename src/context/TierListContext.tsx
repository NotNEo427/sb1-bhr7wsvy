import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { Kit, Player, PlayerTier, TierRank } from '../types';
import { getCSRFToken } from '../utils/auth';
import { getPlayers, initializeDataStore, updatePlayerTier } from '../utils/storage';

// Define the tier list context type
type TierListContextType = {
  state: TierListState;
  updateTier: (playerId: string, kit: Kit, tier: TierRank) => void;
  refreshData: () => void;
};

// Tier list state
export type TierListState = {
  players: Player[];
  isLoading: boolean;
  error: string | null;
};

// Initial tier list state
const initialState: TierListState = {
  players: [],
  isLoading: true,
  error: null
};

// Create the tier list context
const TierListContext = createContext<TierListContextType>({
  state: initialState,
  updateTier: () => {},
  refreshData: () => {}
});

// Tier list reducer
type TierListAction = 
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: Player[] }
  | { type: 'FETCH_FAILURE'; payload: string }
  | { type: 'UPDATE_TIER_SUCCESS'; payload: { playerId: string; kit: Kit; tier: TierRank } }
  | { type: 'UPDATE_TIER_FAILURE'; payload: string };

const tierListReducer = (state: TierListState, action: TierListAction): TierListState => {
  switch (action.type) {
    case 'FETCH_START':
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        players: action.payload,
        isLoading: false,
        error: null
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case 'UPDATE_TIER_SUCCESS': {
      const { playerId, kit, tier } = action.payload;
      const updatedPlayers = state.players.map(player => {
        if (player.id === playerId) {
          const updatedTiers = [...player.tiers];
          const tierIndex = updatedTiers.findIndex((t: PlayerTier) => t.kit === kit);
          
          if (tierIndex !== -1) {
            updatedTiers[tierIndex] = { ...updatedTiers[tierIndex], tier };
          } else {
            updatedTiers.push({ kit, tier });
          }
          
          return { ...player, tiers: updatedTiers };
        }
        return player;
      });
      
      return {
        ...state,
        players: updatedPlayers,
        error: null
      };
    }
    case 'UPDATE_TIER_FAILURE':
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

// Tier list provider component
export const TierListProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(tierListReducer, initialState);

  // Initialize data store and fetch players on mount
  useEffect(() => {
    initializeDataStore();
    fetchPlayers();
  }, []);

  // Fetch players from storage
  const fetchPlayers = () => {
    dispatch({ type: 'FETCH_START' });
    
    try {
      const players = getPlayers();
      dispatch({ type: 'FETCH_SUCCESS', payload: players });
    } catch (error) {
      dispatch({ type: 'FETCH_FAILURE', payload: 'Failed to fetch players' });
    }
  };

  // Update a player's tier
  const updateTier = (playerId: string, kit: Kit, tier: TierRank) => {
    const csrfToken = getCSRFToken();
    
    try {
      const success = updatePlayerTier(playerId, kit, tier, csrfToken);
      
      if (success) {
        dispatch({ 
          type: 'UPDATE_TIER_SUCCESS', 
          payload: { playerId, kit, tier } 
        });
      } else {
        dispatch({ 
          type: 'UPDATE_TIER_FAILURE', 
          payload: 'Failed to update tier' 
        });
      }
    } catch (error) {
      dispatch({ 
        type: 'UPDATE_TIER_FAILURE', 
        payload: 'An error occurred while updating tier' 
      });
    }
  };

  // Refresh data
  const refreshData = () => {
    fetchPlayers();
  };

  return (
    <TierListContext.Provider value={{ state, updateTier, refreshData }}>
      {children}
    </TierListContext.Provider>
  );
};

// Custom hook to use tier list context
export const useTierList = () => useContext(TierListContext);