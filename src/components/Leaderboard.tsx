import React from 'react';
import { Trophy, Crown, Medal, Award, Users } from 'lucide-react';

const Leaderboard = () => {
  return (
    <section id="leaderboard" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            🏆 Monthly Leaderboard
          </h2>
          <p className="text-gray-300 text-lg">
            Top performing affiliates ranking
          </p>
        </div>

        {/* Reward Distribution */}
        <div className="bg-black/30 border border-gray-700/50 rounded-2xl p-8 mb-8 backdrop-blur-sm">
          <h3 className="text-xl font-bold text-white mb-8 text-center tracking-wide">
            $3,000 USD Distribution
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { rank: '1st', reward: '$900', percentage: '30%', icon: Crown, color: 'from-yellow-400 to-orange-400' },
              { rank: '2nd', reward: '$600', percentage: '20%', icon: Trophy, color: 'from-gray-300 to-gray-400' },
              { rank: '3rd', reward: '$450', percentage: '15%', icon: Medal, color: 'from-amber-600 to-amber-700' },
              { rank: '4th', reward: '$300', percentage: '10%', icon: Award, color: 'from-purple-400 to-purple-500' },
              { rank: '5-10', reward: '$750', percentage: '25%', icon: Users, color: 'from-blue-400 to-blue-500' }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-black/60 border border-gray-800 rounded-xl p-4 text-center">
                  <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-medium text-gray-400 mb-1">{item.rank}</div>
                  <div className="text-lg font-bold text-white mb-1">{item.reward}</div>
                  <div className="text-xs text-gray-500">{item.percentage}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Current Leaderboard */}
        <div className="bg-black/30 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white tracking-wide">Current Rankings</h3>
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-green-400 font-medium">Live Updates</span>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { rank: 1, username: 'G0TZE_Maximus', volume: 12450, platform: 'Rugs.fun', reward: 900, trend: 'up' },
              { rank: 2, username: 'xCryptoLord', volume: 8920, platform: 'BCGame', reward: 600, trend: 'up' },
              { rank: 3, username: 'G0TZE_Sarah', volume: 7680, platform: 'Solpump', reward: 450, trend: 'down' },
              { rank: 4, username: 'xMoonWalker', volume: 6340, platform: 'Rain.gg', reward: 300, trend: 'up' },
              { rank: 5, username: 'G0TZE_Alpha', volume: 5890, platform: 'BCGame', reward: 225, trend: 'stable' }
            ].map((player, index) => {
              const isTop3 = player.rank <= 3;
              const trendColors = {
                up: 'text-green-400',
                down: 'text-red-400',
                stable: 'text-gray-400'
              };
              
              return (
                <div
                  key={index}
                  className={`flex items-center justify-between p-6 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${
                    isTop3 
                      ? 'bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-400/30 hover:border-yellow-400/50' 
                      : 'bg-black/40 border-gray-600/50 hover:border-purple-400/40'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${
                      player.rank === 1 ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-black' :
                      player.rank === 2 ? 'bg-gradient-to-r from-gray-300 to-gray-400 text-black' :
                      player.rank === 3 ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white' :
                      'bg-gradient-to-r from-purple-500 to-purple-600 text-white'
                    }`}>
                      #{player.rank}
                    </div>
                    
                    <div>
                      <div className="font-bold text-white text-lg">{player.username}</div>
                      <div className="text-sm text-gray-400">{player.platform}</div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="font-bold text-xl text-white">${player.volume.toLocaleString()}</div>
                    <div className="text-sm text-green-400 font-medium">${player.reward} reward</div>
                  </div>
                  
                  <div className={`text-sm font-medium ${trendColors[player.trend as keyof typeof trendColors]}`}>
                    {player.trend === 'up' ? '↗' : player.trend === 'down' ? '↘' : '→'}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105">
              View Full Leaderboard
            </button>
          </div>
        </div>

        {/* Empty Leaderboard State */}
        <div className="bg-black/40 border border-gray-800 rounded-2xl p-12 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 opacity-50">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">
            Leaderboard en attente
          </h3>
          
          <p className="text-gray-400 max-w-md mx-auto mb-8 leading-relaxed">
            Le classement sera mis à jour automatiquement dès que les APIs des plateformes 
            seront connectées et que les premiers volumes seront trackés.
          </p>

          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-6 max-w-lg mx-auto">
            <h4 className="font-bold text-white mb-3">Prochaines étapes :</h4>
            <ul className="text-sm text-gray-300 space-y-2 text-left">
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                <span>Connexion aux APIs des plateformes</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                <span>Tracking automatique des volumes</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                <span>Mise à jour du classement en temps réel</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;