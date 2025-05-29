import { LOCAL_STORAGE_KEY, MOCK_PLAYERS } from '../constants';
import { Player, PlayerTier } from '../types';
import { calculatePlayerPoints, calculateRank } from './points';

// Initialize the data store with mock data if it doesn't exist
export const initializeDataStore = (): void => {
  const existingData = localStorage.getItem(LOCAL_STORAGE_KEY);
  
  if (!existingData) {
    // Calculate initial points and ranks for mock players
    const playersWithPoints = MOCK_PLAYERS.map(player => {
      const points = calculatePlayerPoints(player.tiers);
      return {
        ...player,
        points,
        rank: calculateRank(points)
      };
    });

    // Sort players by points in descending order
    const sortedPlayers = playersWithPoints.sort((a, b) => b.points - a.points);
    
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({
      players: sortedPlayers,
      lastUpdated: new Date().toISOString()
    }));
  }
};

// Get all players
export const getPlayers = (): Player[] => {
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!data) {
      initializeDataStore();
      return MOCK_PLAYERS;
    }
    
    const parsedData = JSON.parse(data);
    const players = parsedData.players || [];
    
    // Sort players by points in descending order
    return players.sort((a, b) => b.points - a.points);
  } catch (error) {
    console.error('Error retrieving players:', error);
    return [];
  }
};

// Update a player's tier
export const updatePlayerTier = (
  playerId: string,
  kitId: string,
  tier: string,
  csrfToken: string | null
): boolean => {
  // Validate CSRF token
  if (!csrfToken || csrfToken.trim() === '') {
    console.error('CSRF token is missing or invalid');
    return false;
  }
  
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!data) {
      console.error('No data found in storage');
      return false;
    }
    
    const parsedData = JSON.parse(data);
    const players = parsedData.players || [];
    
    // Find the player to update
    const playerIndex = players.findIndex((p: Player) => p.id === playerId);
    if (playerIndex === -1) {
      console.error(`Player with ID ${playerId} not found`);
      return false;
    }
    
    const player = players[playerIndex];
    
    // Find the kit to update
    const kitIndex = player.tiers.findIndex((t: PlayerTier) => t.kit === kitId);
    
    if (kitIndex === -1) {
      // If the kit doesn't exist for this player, add it
      player.tiers.push({ kit: kitId, tier });
    } else {
      // Update the existing kit tier
      player.tiers[kitIndex].tier = tier;
    }
    
    // Recalculate player's points and rank
    const points = calculatePlayerPoints(player.tiers);
    player.points = points;
    player.rank = calculateRank(points);
    
    // Update the player in the array
    players[playerIndex] = player;
    
    // Sort players by points
    const sortedPlayers = players.sort((a, b) => b.points - a.points);
    
    // Save the updated data
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({
      players: sortedPlayers,
      lastUpdated: new Date().toISOString()
    }));
    
    // Log the tier update
    logTierUpdate(playerId, kitId, tier);
    
    return true;
  } catch (error) {
    console.error('Error updating player tier:', error);
    return false;
  }
};

// Add a new player
export const addPlayer = (player: Omit<Player, 'id'>, csrfToken: string | null): string | null => {
  // Validate CSRF token
  if (!csrfToken || csrfToken.trim() === '') {
    console.error('CSRF token is missing or invalid');
    return null;
  }
  
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!data) {
      console.error('No data found in storage');
      return null;
    }
    
    const parsedData = JSON.parse(data);
    const players = parsedData.players || [];
    
    // Generate a new ID
    const newId = String(players.length + 1);
    
    // Calculate initial points and rank
    const points = calculatePlayerPoints(player.tiers);
    
    // Create the new player object
    const newPlayer: Player = {
      id: newId,
      ...player,
      points,
      rank: calculateRank(points)
    };
    
    // Add the player to the array and sort by points
    players.push(newPlayer);
    const sortedPlayers = players.sort((a, b) => b.points - a.points);
    
    // Save the updated data
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({
      players: sortedPlayers,
      lastUpdated: new Date().toISOString()
    }));
    
    return newId;
  } catch (error) {
    console.error('Error adding player:', error);
    return null;
  }
};

// Log tier update
const logTierUpdate = (playerId: string, kitId: string, tier: string): void => {
  console.log(`Tier update: ${new Date().toISOString()} | Player: ${playerId} | Kit: ${kitId} | Tier: ${tier}`);
  // In a real application, this would send a log to the server
};