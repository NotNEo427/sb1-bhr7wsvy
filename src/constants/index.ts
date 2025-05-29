import { Kit, TierColor, TierRank } from '../types';

export const ADMIN_CREDENTIALS = {
  username: 'NEOADMIN',
  password: 'qwertyuioplkj5548yh'
};

export const KITS: { id: Kit; name: string }[] = [
  { id: 'sword', name: 'Sword' },
  { id: 'axe', name: 'Axe' },
  { id: 'crystal', name: 'Crystal' },
  { id: 'mace', name: 'Mace' },
  { id: 'diapot', name: 'DiaPot' },
  { id: 'netpot', name: 'NetPot' },
  { id: 'smp', name: 'SMP' },
  { id: 'diasmp', name: 'DiaSMP' },
  { id: 'uhc', name: 'UHC' },
  { id: 'shieldless', name: 'Shieldless' }
];

export const TIER_RANKS: TierRank[] = [
  'HT1', 'LT1', 'HT2', 'LT2', 'HT3', 'LT3', 'HT4', 'LT4', 'HT5', 'LT5'
];

export const TIER_COLORS: Record<TierRank, TierColor> = {
  'HT1': { background: '#FFD700', text: '#000000' }, // Gold
  'LT1': { background: '#4169E1', text: '#FFFFFF' }, // Royal Blue
  'HT2': { background: '#C0C0C0', text: '#000000' }, // Silver
  'LT2': { background: '#708090', text: '#FFFFFF' }, // Slate Gray
  'HT3': { background: '#CD7F32', text: '#FFFFFF' }, // Bronze
  'LT3': { background: '#A0522D', text: '#FFFFFF' }, // Sienna
  'HT4': { background: '#2E8B57', text: '#FFFFFF' }, // Sea Green
  'LT4': { background: '#556B2F', text: '#FFFFFF' }, // Dark Olive Green
  'HT5': { background: '#800080', text: '#FFFFFF' }, // Purple
  'LT5': { background: '#483D8B', text: '#FFFFFF' }  // Dark Slate Blue
};

export const MOCK_PLAYERS = [
  {
    id: '1',
    name: 'Sycthy',
    rank: 'Master',
    points: 500,
    region: 'EU',
    tiers: [
      { kit: 'sword', tier: 'HT1' },
      { kit: 'axe', tier: 'HT1' },
      { kit: 'crystal', tier: 'LT1' },
      { kit: 'mace', tier: 'HT2' },
      { kit: 'diapot', tier: 'LT2' },
      { kit: 'netpot', tier: 'HT2' },
      { kit: 'smp', tier: 'LT2' },
      { kit: 'diasmp', tier: 'HT1' },
      { kit: 'uhc', tier: 'LT1' },
      { kit: 'shieldless', tier: 'HT2' }
    ]
  },
  {
    id: '2',
    name: 'Ellies V',
    rank: 'Elite',
    points: 480,
    region: 'NA',
    tiers: [
      { kit: 'sword', tier: 'LT1' },
      { kit: 'axe', tier: 'HT1' },
      { kit: 'crystal', tier: 'HT1' },
      { kit: 'mace', tier: 'LT2' },
      { kit: 'diapot', tier: 'HT2' },
      { kit: 'netpot', tier: 'LT2' },
      { kit: 'smp', tier: 'HT2' },
      { kit: 'diasmp', tier: 'LT1' },
      { kit: 'uhc', tier: 'HT1' },
      { kit: 'shieldless', tier: 'LT1' }
    ]
  },
  {
    id: '3',
    name: 'Wido',
    rank: 'Master',
    points: 470,
    region: 'EU',
    tiers: [
      { kit: 'sword', tier: 'HT2' },
      { kit: 'axe', tier: 'LT2' },
      { kit: 'crystal', tier: 'HT3' },
      { kit: 'mace', tier: 'LT2' },
      { kit: 'diapot', tier: 'HT2' },
      { kit: 'netpot', tier: 'LT3' },
      { kit: 'smp', tier: 'HT2' },
      { kit: 'diasmp', tier: 'LT2' },
      { kit: 'uhc', tier: 'HT3' },
      { kit: 'shieldless', tier: 'LT2' }
    ]
  },
  {
    id: '4',
    name: 'Neo H',
    rank: 'Elite',
    points: 460,
    region: 'NA',
    tiers: [
      { kit: 'sword', tier: 'LT2' },
      { kit: 'axe', tier: 'HT2' },
      { kit: 'crystal', tier: 'LT2' },
      { kit: 'mace', tier: 'HT3' },
      { kit: 'diapot', tier: 'LT2' },
      { kit: 'netpot', tier: 'HT2' },
      { kit: 'smp', tier: 'LT3' },
      { kit: 'diasmp', tier: 'HT2' },
      { kit: 'uhc', tier: 'LT2' },
      { kit: 'shieldless', tier: 'HT3' }
    ]
  },
  {
    id: '5',
    name: 'Rexo',
    rank: 'Master',
    points: 450,
    region: 'EU',
    tiers: [
      { kit: 'sword', tier: 'HT2' },
      { kit: 'axe', tier: 'LT3' },
      { kit: 'crystal', tier: 'HT2' },
      { kit: 'mace', tier: 'LT2' },
      { kit: 'diapot', tier: 'HT3' },
      { kit: 'netpot', tier: 'LT2' },
      { kit: 'smp', tier: 'HT2' },
      { kit: 'diasmp', tier: 'LT3' },
      { kit: 'uhc', tier: 'HT2' },
      { kit: 'shieldless', tier: 'LT2' }
    ]
  },
  {
    id: '6',
    name: 'Evo',
    rank: 'Elite',
    points: 440,
    region: 'NA',
    tiers: [
      { kit: 'sword', tier: 'LT3' },
      { kit: 'axe', tier: 'HT2' },
      { kit: 'crystal', tier: 'LT2' },
      { kit: 'mace', tier: 'HT3' },
      { kit: 'diapot', tier: 'LT2' },
      { kit: 'netpot', tier: 'HT3' },
      { kit: 'smp', tier: 'LT2' },
      { kit: 'diasmp', tier: 'HT2' },
      { kit: 'uhc', tier: 'LT3' },
      { kit: 'shieldless', tier: 'HT2' }
    ]
  },
  {
    id: '7',
    name: 'Darky',
    rank: 'Master',
    points: 430,
    region: 'EU',
    tiers: [
      { kit: 'sword', tier: 'HT3' },
      { kit: 'axe', tier: 'LT2' },
      { kit: 'crystal', tier: 'HT2' },
      { kit: 'mace', tier: 'LT3' },
      { kit: 'diapot', tier: 'HT2' },
      { kit: 'netpot', tier: 'LT2' },
      { kit: 'smp', tier: 'HT3' },
      { kit: 'diasmp', tier: 'LT2' },
      { kit: 'uhc', tier: 'HT2' },
      { kit: 'shieldless', tier: 'LT3' }
    ]
  },
  {
    id: '8',
    name: 'Blom',
    rank: 'Elite',
    points: 420,
    region: 'NA',
    tiers: [
      { kit: 'sword', tier: 'LT2' },
      { kit: 'axe', tier: 'HT3' },
      { kit: 'crystal', tier: 'LT2' },
      { kit: 'mace', tier: 'HT2' },
      { kit: 'diapot', tier: 'LT3' },
      { kit: 'netpot', tier: 'HT2' },
      { kit: 'smp', tier: 'LT2' },
      { kit: 'diasmp', tier: 'HT3' },
      { kit: 'uhc', tier: 'LT2' },
      { kit: 'shieldless', tier: 'HT2' }
    ]
  },
  {
    id: '9',
    name: 'Blazo',
    rank: 'Master',
    points: 410,
    region: 'EU',
    tiers: [
      { kit: 'sword', tier: 'HT2' },
      { kit: 'axe', tier: 'LT3' },
      { kit: 'crystal', tier: 'HT2' },
      { kit: 'mace', tier: 'LT2' },
      { kit: 'diapot', tier: 'HT3' },
      { kit: 'netpot', tier: 'LT2' },
      { kit: 'smp', tier: 'HT2' },
      { kit: 'diasmp', tier: 'LT3' },
      { kit: 'uhc', tier: 'HT2' },
      { kit: 'shieldless', tier: 'LT2' }
    ]
  },
  {
    id: '10',
    name: 'Spectro',
    rank: 'Elite',
    points: 400,
    region: 'NA',
    tiers: [
      { kit: 'sword', tier: 'LT2' },
      { kit: 'axe', tier: 'HT3' },
      { kit: 'crystal', tier: 'LT2' },
      { kit: 'mace', tier: 'HT2' },
      { kit: 'diapot', tier: 'LT3' },
      { kit: 'netpot', tier: 'HT2' },
      { kit: 'smp', tier: 'LT2' },
      { kit: 'diasmp', tier: 'HT3' },
      { kit: 'uhc', tier: 'LT2' },
      { kit: 'shieldless', tier: 'HT2' }
    ]
  },
  {
    id: '11',
    name: 'Doni',
    rank: 'Master',
    points: 390,
    region: 'EU',
    tiers: [
      { kit: 'sword', tier: 'HT3' },
      { kit: 'axe', tier: 'LT2' },
      { kit: 'crystal', tier: 'HT3' },
      { kit: 'mace', tier: 'LT2' },
      { kit: 'diapot', tier: 'HT2' },
      { kit: 'netpot', tier: 'LT3' },
      { kit: 'smp', tier: 'HT2' },
      { kit: 'diasmp', tier: 'LT2' },
      { kit: 'uhc', tier: 'HT3' },
      { kit: 'shieldless', tier: 'LT2' }
    ]
  },
  {
    id: '12',
    name: 'Reterno',
    rank: 'Elite',
    points: 380,
    region: 'NA',
    tiers: [
      { kit: 'sword', tier: 'LT3' },
      { kit: 'axe', tier: 'HT2' },
      { kit: 'crystal', tier: 'LT2' },
      { kit: 'mace', tier: 'HT3' },
      { kit: 'diapot', tier: 'LT2' },
      { kit: 'netpot', tier: 'HT3' },
      { kit: 'smp', tier: 'LT2' },
      { kit: 'diasmp', tier: 'HT2' },
      { kit: 'uhc', tier: 'LT3' },
      { kit: 'shieldless', tier: 'HT2' }
    ]
  },
  {
    id: '13',
    name: 'Kelk',
    rank: 'Master',
    points: 370,
    region: 'EU',
    tiers: [
      { kit: 'sword', tier: 'HT2' },
      { kit: 'axe', tier: 'LT3' },
      { kit: 'crystal', tier: 'HT2' },
      { kit: 'mace', tier: 'LT2' },
      { kit: 'diapot', tier: 'HT3' },
      { kit: 'netpot', tier: 'LT2' },
      { kit: 'smp', tier: 'HT2' },
      { kit: 'diasmp', tier: 'LT3' },
      { kit: 'uhc', tier: 'HT2' },
      { kit: 'shieldless', tier: 'LT2' }
    ]
  },
  {
    id: '14',
    name: 'Me',
    rank: 'Elite',
    points: 360,
    region: 'NA',
    tiers: [
      { kit: 'sword', tier: 'LT2' },
      { kit: 'axe', tier: 'HT3' },
      { kit: 'crystal', tier: 'LT2' },
      { kit: 'mace', tier: 'HT2' },
      { kit: 'diapot', tier: 'LT3' },
      { kit: 'netpot', tier: 'HT2' },
      { kit: 'smp', tier: 'LT2' },
      { kit: 'diasmp', tier: 'HT3' },
      { kit: 'uhc', tier: 'LT2' },
      { kit: 'shieldless', tier: 'HT2' }
    ]
  },
  {
    id: '15',
    name: 'Yolo',
    rank: 'Master',
    points: 350,
    region: 'EU',
    tiers: [
      { kit: 'sword', tier: 'HT3' },
      { kit: 'axe', tier: 'LT2' },
      { kit: 'crystal', tier: 'HT2' },
      { kit: 'mace', tier: 'LT3' },
      { kit: 'diapot', tier: 'HT2' },
      { kit: 'netpot', tier: 'LT2' },
      { kit: 'smp', tier: 'HT3' },
      { kit: 'diasmp', tier: 'LT2' },
      { kit: 'uhc', tier: 'HT2' },
      { kit: 'shieldless', tier: 'LT3' }
    ]
  },
  {
    id: '16',
    name: 'Big A',
    rank: 'Elite',
    points: 340,
    region: 'NA',
    tiers: [
      { kit: 'sword', tier: 'LT2' },
      { kit: 'axe', tier: 'HT3' },
      { kit: 'crystal', tier: 'LT2' },
      { kit: 'mace', tier: 'HT2' },
      { kit: 'diapot', tier: 'LT3' },
      { kit: 'netpot', tier: 'HT2' },
      { kit: 'smp', tier: 'LT2' },
      { kit: 'diasmp', tier: 'HT3' },
      { kit: 'uhc', tier: 'LT2' },
      { kit: 'shieldless', tier: 'HT2' }
    ]
  },
  {
    id: '17',
    name: 'Unded',
    rank: 'Master',
    points: 330,
    region: 'EU',
    tiers: [
      { kit: 'sword', tier: 'HT2' },
      { kit: 'axe', tier: 'LT3' },
      { kit: 'crystal', tier: 'HT2' },
      { kit: 'mace', tier: 'LT2' },
      { kit: 'diapot', tier: 'HT3' },
      { kit: 'netpot', tier: 'LT2' },
      { kit: 'smp', tier: 'HT2' },
      { kit: 'diasmp', tier: 'LT3' },
      { kit: 'uhc', tier: 'HT2' },
      { kit: 'shieldless', tier: 'LT2' }
    ]
  },
  {
    id: '18',
    name: 'Unio',
    rank: 'Elite',
    points: 320,
    region: 'NA',
    tiers: [
      { kit: 'sword', tier: 'LT3' },
      { kit: 'axe', tier: 'HT2' },
      { kit: 'crystal', tier: 'LT2' },
      { kit: 'mace', tier: 'HT3' },
      { kit: 'diapot', tier: 'LT2' },
      { kit: 'netpot', tier: 'HT3' },
      { kit: 'smp', tier: 'LT2' },
      { kit: 'diasmp', tier: 'HT2' },
      { kit: 'uhc', tier: 'LT3' },
      { kit: 'shieldless', tier: 'HT2' }
    ]
  },
  {
    id: '19',
    name: 'Winder',
    rank: 'Master',
    points: 310,
    region: 'EU',
    tiers: [
      { kit: 'sword', tier: 'HT3' },
      { kit: 'axe', tier: 'LT2' },
      { kit: 'crystal', tier: 'HT2' },
      { kit: 'mace', tier: 'LT3' },
      { kit: 'diapot', tier: 'HT2' },
      { kit: 'netpot', tier: 'LT2' },
      { kit: 'smp', tier: 'HT3' },
      { kit: 'diasmp', tier: 'LT2' },
      { kit: 'uhc', tier: 'HT2' },
      { kit: 'shieldless', tier: 'LT3' }
    ]
  },
  {
    id: '20',
    name: 'Vran',
    rank: 'Elite',
    points: 300,
    region: 'NA',
    tiers: [
      { kit: 'sword', tier: 'LT2' },
      { kit: 'axe', tier: 'HT3' },
      { kit: 'crystal', tier: 'LT2' },
      { kit: 'mace', tier: 'HT2' },
      { kit: 'diapot', tier: 'LT3' },
      { kit: 'netpot', tier: 'HT2' },
      { kit: 'smp', tier: 'LT2' },
      { kit: 'diasmp', tier: 'HT3' },
      { kit: 'uhc', tier: 'LT2' },
      { kit: 'shieldless', tier: 'HT2' }
    ]
  },
  {
    id: '21',
    name: 'Crysto',
    rank: 'Master',
    points: 290,
    region: 'EU',
    tiers: [
      { kit: 'sword', tier: 'HT3' },
      { kit: 'axe', tier: 'LT2' },
      { kit: 'crystal', tier: 'HT2' },
      { kit: 'mace', tier: 'LT3' },
      { kit: 'diapot', tier: 'HT2' },
      { kit: 'netpot', tier: 'LT2' },
      { kit: 'smp', tier: 'HT3' },
      { kit: 'diasmp', tier: 'LT2' },
      { kit: 'uhc', tier: 'HT2' },
      { kit: 'shieldless', tier: 'LT3' }
    ]
  },
  {
    id: '22',
    name: 'Morpho',
    rank: 'Elite',
    points: 280,
    region: 'NA',
    tiers: [
      { kit: 'sword', tier: 'LT2' },
      { kit: 'axe', tier: 'HT3' },
      { kit: 'crystal', tier: 'LT2' },
      { kit: 'mace', tier: 'HT2' },
      { kit: 'diapot', tier: 'LT3' },
      { kit: 'netpot', tier: 'HT2' },
      { kit: 'smp', tier: 'LT2' },
      { kit: 'diasmp', tier: 'HT3' },
      { kit: 'uhc', tier: 'LT2' },
      { kit: 'shieldless', tier: 'HT2' }
    ]
  },
  {
    id: '23',
    name: 'Void',
    rank: 'Master',
    points: 270,
    region: 'EU',
    tiers: [
      { kit: 'sword', tier: 'HT3' },
      { kit: 'axe', tier: 'LT2' },
      { kit: 'crystal', tier: 'HT2' },
      { kit: 'mace', tier: 'LT3' },
      { kit: 'diapot', tier: 'HT2' },
      { kit: 'netpot', tier: 'LT2' },
      { kit: 'smp', tier: 'HT3' },
      { kit: 'diasmp', tier: 'LT2' },
      { kit: 'uhc', tier: 'HT2' },
      { kit: 'shieldless', tier: 'LT3' }
    ]
  },
  {
    id: '24',
    name: 'Ravv',
    rank: 'Elite',
    points: 260,
    region: 'NA',
    tiers: [
      { kit: 'sword', tier: 'LT2' },
      { kit: 'axe', tier: 'HT3' },
      { kit: 'crystal', tier: 'LT2' },
      { kit: 'mace', tier: 'HT2' },
      { kit: 'diapot', tier: 'LT3' },
      { kit: 'netpot', tier: 'HT2' },
      { kit: 'smp', tier: 'LT2' },
      { kit: 'diasmp', tier: 'HT3' },
      { kit: 'uhc', tier: 'LT2' },
      { kit: 'shieldless', tier: 'HT2' }
    ]
  },
  {
    id: '25',
    name: 'Polo',
    rank: 'Master',
    points: 250,
    region: 'EU',
    tiers: [
      { kit: 'sword', tier: 'HT3' },
      { kit: 'axe', tier: 'LT2' },
      { kit: 'crystal', tier: 'HT2' },
      { kit: 'mace', tier: 'LT3' },
      { kit: 'diapot', tier: 'HT2' },
      { kit: 'netpot', tier: 'LT2' },
      { kit: 'smp', tier: 'HT3' },
      { kit: 'diasmp', tier: 'LT2' },
      { kit: 'uhc', tier: 'HT2' },
      { kit: 'shieldless', tier: 'LT3' }
    ]
  },
  {
    id: '26',
    name: 'Retoro',
    rank: 'Elite',
    points: 240,
    region: 'NA',
    tiers: [
      { kit: 'sword', tier: 'LT2' },
      { kit: 'axe', tier: 'HT3' },
      { kit: 'crystal', tier: 'LT2' },
      { kit: 'mace', tier: 'HT2' },
      { kit: 'diapot', tier: 'LT3' },
      { kit: 'netpot', tier: 'HT2' },
      { kit: 'smp', tier: 'LT2' },
      { kit: 'diasmp', tier: 'HT3' },
      { kit: 'uhc', tier: 'LT2' },
      { kit: 'shieldless', tier: 'HT2' }
    ]
  },
  {
    id: '27',
    name: 'Rutner',
    rank: 'Master',
    points: 230,
    region: 'EU',
    tiers: [
      { kit: 'sword', tier: 'HT3' },
      { kit: 'axe', tier: 'LT2' },
      { kit: 'crystal', tier: 'HT2' },
      { kit: 'mace', tier: 'LT3' },
      { kit: 'diapot', tier: 'HT2' },
      { kit: 'netpot', tier: 'LT2' },
      { kit: 'smp', tier: 'HT3' },
      { kit: 'diasmp', tier: 'LT2' },
      { kit: 'uhc', tier: 'HT2' },
      { kit: 'shieldless', tier: 'LT3' }
    ]
  },
  {
    id: '28',
    name: 'Raivo',
    rank: 'Elite',
    points: 220,
    region: 'NA',
    tiers: [
      { kit: 'sword', tier: 'LT2' },
      { kit: 'axe', tier: 'HT3' },
      { kit: 'crystal', tier: 'LT2' },
      { kit: 'mace', tier: 'HT2' },
      { kit: 'diapot', tier: 'LT3' },
      { kit: 'netpot', tier: 'HT2' },
      { kit: 'smp', tier: 'LT2' },
      { kit: 'diasmp', tier: 'HT3' },
      { kit: 'uhc', tier: 'LT2' },
      { kit: 'shieldless', tier: 'HT2' }
    ]
  },
  {
    id: '29',
    name: 'Tron T',
    rank: 'Master',
    points: 210,
    region: 'EU',
    tiers: [
      { kit: 'sword', tier: 'HT3' },
      { kit: 'axe', tier: 'LT2' },
      { kit: 'crystal', tier: 'HT2' },
      { kit: 'mace', tier: 'LT3' },
      { kit: 'diapot', tier: 'HT2' },
      { kit: 'netpot', tier: 'LT2' },
      { kit: 'smp', tier: 'HT3' },
      { kit: 'diasmp', tier: 'LT2' },
      { kit: 'uhc', tier: 'HT2' },
      { kit: 'shieldless', tier: 'LT3' }
    ]
  },
  {
    id: '30',
    name: 'Inferno',
    rank: 'Elite',
    points: 200,
    region: 'NA',
    tiers: [
      { kit: 'sword', tier: 'LT2' },
      { kit: 'axe', tier: 'HT3' },
      { kit: 'crystal', tier: 'LT2' },
      { kit: 'mace', tier: 'HT2' },
      { kit: 'diapot', tier: 'LT3' },
      { kit: 'netpot', tier: 'HT2' },
      { kit: 'smp', tier: 'LT2' },
      { kit: 'diasmp', tier: 'HT3' },
      { kit: 'uhc', tier: 'LT2' },
      { kit: 'shieldless', tier: 'HT2' }
    ]
  },
  {
    id: '31',
    name: 'Crysteo',
    rank: 'Master',
    points: 190,
    region: 'EU',
    tiers: [
      { kit: 'sword', tier: 'HT3' },
      
      { kit: 'axe', tier: 'LT2' },
      { kit: 'crystal', tier: 'HT2' },
      { kit: 'mace', tier: 'LT3' },
      { kit: 'diapot', tier: 'HT2' },
      { kit: 'netpot', tier: 'LT2' },
      { kit: 'smp', tier: 'HT3' },
      { kit: 'diasmp', tier: 'LT2' },
      { kit: 'uhc', tier: 'HT2' },
      { kit: 'shieldless', tier: 'LT3' }
    ]
  },
  {
    id: '32',
    name: 'Jka',
    rank: 'Elite',
    points: 180,
    region: 'NA',
    tiers: [
      { kit: 'sword', tier: 'LT2' },
      { kit: 'axe', tier: 'HT3' },
      { kit: 'crystal', tier: 'LT2' },
      { kit: 'mace', tier: 'HT2' },
      { kit: 'diapot', tier: 'LT3' },
      { kit: 'netpot', tier: 'HT2' },
      { kit: 'smp', tier: 'LT2' },
      { kit: 'diasmp', tier: 'HT3' },
      { kit: 'uhc', tier: 'LT2' },
      { kit: 'shieldless', tier: 'HT2' }
    ]
  }
];

export const SESSION_STORAGE_KEY = 'acd_tierlist_auth';
export const LOCAL_STORAGE_KEY = 'acd_tierlist_data';
export const CSRF_TOKEN_KEY = 'acd_tierlist_csrf_token';