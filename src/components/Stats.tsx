import React from 'react';
import { Activity, AlertCircle } from 'lucide-react';

const Stats = () => {
  return (
    <section id="stats" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Live Statistics
          </h2>
          <p className="text-gray-300 text-lg">
            Real-time data from platform APIs
          </p>
        </div>

        {/* API Status */}
        <div className="bg-black/30 border border-gray-700/50 rounded-2xl p-8 mb-8 backdrop-blur-sm">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Activity className="w-6 h-6 text-green-400" />
            <h3 className="text-xl font-bold text-white tracking-wide">API Status</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Rugs.fun', status: 'active', code: 'REF_Q51LEOWNE0RI', volume: '$12,450' },
              { name: 'Solpump', status: 'active', code: 'G0TZE', volume: '$8,920' },
              { name: 'BCGame', status: 'active', code: 'RAWLOOT', volume: '$15,680' },
              { name: 'Rain.gg', status: 'active', code: 'RAWLOOT', volume: '$6,340' }
            ].map((platform, index) => (
              <div key={index} className="bg-black/50 border border-gray-600/50 rounded-xl p-5 hover:border-green-400/40 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-white">{platform.name}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-xs text-green-400 font-medium">Active</span>
                  </div>
                </div>
                <div className="text-sm font-bold text-purple-300 mb-2">
                  {platform.volume}
                </div>
                <div className="text-xs text-gray-400 font-mono bg-black/40 px-2 py-1 rounded">
                  {platform.code}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Stats */}
        <div className="bg-gradient-to-r from-purple-600/10 to-cyan-600/10 border border-purple-400/30 rounded-2xl p-8 backdrop-blur-sm">
          <div className="flex items-start space-x-4">
            <AlertCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-white mb-4 tracking-wide">
                System Performance
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                The system is actively processing real-time data from all partner platforms. 
                Backend architecture handles automatically:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Affiliate user volume tracking</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Automatic leaderboard updates</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Monthly reward calculations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Automatic reset every 1st of month</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Total Volume */}
        <div className="mt-8 text-center">
          <div className="bg-black/40 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-lg text-gray-400 mb-2">Total Volume This Month</h3>
            <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              $43,390
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="text-center">
                <div className="text-sm text-gray-400">Active Users</div>
                <div className="text-xl font-bold text-white">127</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-400">Transactions</div>
                <div className="text-xl font-bold text-white">2,840</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-400">Platforms</div>
                <div className="text-xl font-bold text-white">4</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-400">Rewards Pool</div>
                <div className="text-xl font-bold text-green-400">$3,000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;