// Service pour gérer les appels API vers les différentes plateformes
// Cette architecture permet d'intégrer facilement les vraies APIs

export class AffiliateApiService {
  private baseUrl = process.env.REACT_APP_API_BASE_URL || '/api';

  // Rugs.fun API integration
  async getRugsFunData(referralCode: string) {
    try {
      // URL API réelle de rugs.fun (à adapter selon leur documentation)
      const response = await fetch(`${this.baseUrl}/rugs-fun/affiliates/${referralCode}`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching Rugs.fun data:', error);
      return { error: 'Failed to fetch data' };
    }
  }

  // Solpump API integration
  async getSolpumpData(referralCode: string) {
    try {
      const response = await fetch(`${this.baseUrl}/solpump/affiliates/${referralCode}`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching Solpump data:', error);
      return { error: 'Failed to fetch data' };
    }
  }

  // BCGame API integration
  async getBCGameData(referralCode: string) {
    try {
      const response = await fetch(`${this.baseUrl}/bcgame/affiliates/${referralCode}`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching BCGame data:', error);
      return { error: 'Failed to fetch data' };
    }
  }

  // Rain.gg API integration
  async getRainGGData(referralCode: string) {
    try {
      const response = await fetch(`${this.baseUrl}/rain-gg/affiliates/${referralCode}`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching Rain.gg data:', error);
      return { error: 'Failed to fetch data' };
    }
  }

  // Agrégation de toutes les données
  async getAllAffiliateData() {
    try {
      const [rugsFun, solpump, bcgame, raingg] = await Promise.all([
        this.getRugsFunData('REF_Q51LEOWNE0RI'),
        this.getSolpumpData('G0TZE'),
        this.getBCGameData('RAWLOOT'),
        this.getRainGGData('RAWLOOT')
      ]);

      return {
        rugsFun,
        solpump,
        bcgame,
        raingg,
        timestamp: new Date()
      };
    } catch (error) {
      console.error('Error fetching all affiliate data:', error);
      throw error;
    }
  }

  // Obtenir le leaderboard consolidé
  async getLeaderboard() {
    try {
      const response = await fetch(`${this.baseUrl}/leaderboard`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
      return { error: 'Failed to fetch leaderboard' };
    }
  }

  // Mettre à jour les données d'un utilisateur
  async updateUserData(userId: string, platform: string, volume: number) {
    try {
      const response = await fetch(`${this.baseUrl}/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          platform,
          volume,
          timestamp: new Date()
        })
      });
      return await response.json();
    } catch (error) {
      console.error('Error updating user data:', error);
      throw error;
    }
  }
}