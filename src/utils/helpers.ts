// Utilitaires pour le formatage et les calculs

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('en-US').format(num);
};

export const calculateTimeUntilReset = (): string => {
  const now = new Date();
  const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  const diff = nextMonth.getTime() - now.getTime();
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  
  return `${days}j ${hours}h ${minutes}m`;
};

export const calculateRewardDistribution = (totalReward: number, rank: number): number => {
  // Distribution des $3,000 selon le classement
  const distribution = {
    1: 0.30,  // 30% = $900
    2: 0.20,  // 20% = $600
    3: 0.15,  // 15% = $450
    4: 0.10,  // 10% = $300
    5: 0.075, // 7.5% = $225
    6: 0.06,  // 6% = $180
    7: 0.05,  // 5% = $150
    8: 0.04,  // 4% = $120
    9: 0.035, // 3.5% = $105
    10: 0.03, // 3% = $90
  };

  const percentage = distribution[rank as keyof typeof distribution] || 0;
  return totalReward * percentage;
};

export const getPlatformConfig = () => {
  return {
    'rugs.fun': {
      name: 'Rugs.fun',
      color: 'purple',
      apiEndpoint: '/api/rugs-fun',
      referralCode: 'REF_Q51LEOWNE0RI'
    },
    'solpump': {
      name: 'Solpump',
      color: 'blue',
      apiEndpoint: '/api/solpump',
      referralCode: 'G0TZE'
    },
    'BCGame': {
      name: 'BCGame',
      color: 'yellow',
      apiEndpoint: '/api/bcgame',
      referralCode: 'RAWLOOT'
    },
    'Rain.gg': {
      name: 'Rain.gg',
      color: 'cyan',
      apiEndpoint: '/api/rain-gg',
      referralCode: 'RAWLOOT'
    }
  };
};

export const validateAffiliateData = (data: any): boolean => {
  // Validation des données reçues des APIs
  if (!data || typeof data !== 'object') return false;
  
  // Vérifier les champs requis
  const requiredFields = ['username', 'volume', 'platform'];
  return requiredFields.every(field => field in data);
};

export const sanitizeUserInput = (input: string): string => {
  // Nettoyer les entrées utilisateur pour éviter les injections
  return input.replace(/[<>\"']/g, '');
};