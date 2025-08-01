import React, { useState, useEffect } from 'react';
import { Trophy, Clock, TrendingUp, Users, Zap, Copy, ExternalLink, CheckCircle, Coins, Dice6, Gamepad2, Crown, Medal, Award, Twitter, Mail, Github, Menu, X, Activity, AlertCircle } from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
      const diff = nextMonth.getTime() - now.getTime();
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedLink(id);
      setTimeout(() => setCopiedLink(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const affiliateLinks = [
    {
      platform: 'Rugs.fun',
      url: 'https://rugs.fun/?start=REF_Q51LEOWNE0RI',
      code: 'REF_Q51LEOWNE0RI',
      description: 'Launch meme tokens on Solana',
      icon: Coins,
      gradient: 'from-purple-500 to-pink-500',
      borderColor: 'border-purple-500/30 hover:border-purple-500/60'
    },
    {
      platform: 'Solpump',
      url: 'https://solpump.com/a/G0TZE',
      code: 'G0TZE',
      description: 'Solana token trading',
      icon: Zap,
      gradient: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-500/30 hover:border-blue-500/60'
    },
    {
      platform: 'BCGame',
      url: 'https://bcgame.top/',
      code: 'RAWLOOT',
      description: 'Crypto casino & sports betting',
      icon: Dice6,
      gradient: 'from-yellow-500 to-orange-500',
      borderColor: 'border-yellow-500/30 hover:border-yellow-500/60'
    },
    {
      platform: 'Rain.gg',
      url: 'https://rain.gg/',
      code: 'RAWLOOT',
      description: 'Gaming & crypto rewards',
      icon: Gamepad2,
      gradient: 'from-cyan-500 to-teal-500',
      borderColor: 'border-cyan-500/30 hover:border-cyan-500/60'
    }
  ];

  const leaderboardData = [
    { rank: 1, username: 'G0TZE_Maximus', volume: 12450, platform: 'Rugs.fun', reward: 900, trend: 'up' },
    { rank: 2, username: 'xCryptoLord', volume: 8920, platform: 'BCGame', reward: 600, trend: 'up' },
    { rank: 3, username: 'G0TZE_Sarah', volume: 7680, platform: 'Solpump', reward: 450, trend: 'down' },
    { rank: 4, username: 'xMoonWalker', volume: 6340, platform: 'Rain.gg', reward: 300, trend: 'up' },
    { rank: 5, username: 'G0TZE_Alpha', volume: 5890, platform: 'BCGame', reward: 225, trend: 'stable' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900">
      {/* Header */}
      <header className="relative z-50 border-b border-gray-800/50 backdrop-blur-xl bg-black/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-white via-purple-100 to-cyan-100 bg-clip-text text-transparent">
                  G0TZE AFFILIATES
                </h1>
                <p className="text-xs text-gray-400">@G0TZEWEB3</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#leaderboard" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm font-medium">
                Leaderboard
              </a>
              <a href="#links" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm font-medium">
                Affiliate Links
              </a>
              <a href="#stats" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm font-medium">
                Statistics
              </a>
            </nav>

            <div className="hidden sm:flex items-center space-x-4">
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-400/40 rounded-xl px-4 py-2 backdrop-blur-sm">
                <div className="text-xs text-green-300 font-medium">Monthly Pool</div>
                <div className="text-lg font-bold text-green-400">$3,000</div>
              </div>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-800/50 py-4">
              <div className="flex flex-col space-y-3">
                <a href="#leaderboard" className="text-gray-300 hover:text-purple-400 transition-colors text-sm font-medium">
                  Leaderboard
                </a>
                <a href="#links" className="text-gray-300 hover:text-purple-400 transition-colors text-sm font-medium">
                  Affiliate Links
                </a>
                <a href="#stats" className="text-gray-300 hover:text-purple-400 transition-colors text-sm font-medium">
                  Statistics
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                $3,000
              </span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-wide">
              MONTHLY REWARDS
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Reward system for the most active affiliates in the G0TZE community
            </p>
          </div>

          <div className="mb-16">
            <div className="inline-flex items-center space-x-2 mb-6">
              <Clock className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-medium tracking-wider">RESET IN</span>
            </div>
            
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
              {[
                { label: 'DAYS', value: timeLeft.days },
                { label: 'HOURS', value: timeLeft.hours },
                { label: 'MIN', value: timeLeft.minutes },
                { label: 'SEC', value: timeLeft.seconds }
              ].map((item, index) => (
                <div key={index} className="bg-black/60 border border-gray-700/50 rounded-xl p-4 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300">
                  <div className="text-2xl md:text-3xl font-mono font-bold text-white">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs text-gray-400 font-medium mt-1 tracking-wide">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="group">
              <div className="bg-black/30 border border-gray-700/50 rounded-2xl p-8 hover:border-purple-400/60 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl group-hover:shadow-purple-500/30 transition-all duration-500">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Live Tracking</h3>
                <p className="text-gray-400 leading-relaxed">
                  Real-time volume tracking across all partner platforms
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-black/30 border border-gray-700/50 rounded-2xl p-8 hover:border-blue-400/60 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-500">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Leaderboard</h3>
                <p className="text-gray-400 leading-relaxed">
                  Automatically updated rankings with monthly reset
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-black/30 border border-gray-700/50 rounded-2xl p-8 hover:border-green-400/60 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl group-hover:shadow-green-500/30 transition-all duration-500">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Instant Rewards</h3>
                <p className="text-gray-400 leading-relaxed">
                  Automatic distribution of $3,000 to top performers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard Section */}
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

          <div className="bg-black/30 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-white tracking-wide">Current Rankings</h3>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-green-400 font-medium">Live Updates</span>
              </div>
            </div>

            <div className="space-y-4">
              {leaderboardData.map((player, index) => {
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
          </div>
        </div>
      </section>

      {/* Affiliate Links Section */}
      <section id="links" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              🔗 Official Affiliate Links
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Use exclusively these links to be tracked in the system
            </p>
            
            <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-400/40 rounded-xl p-6 max-w-2xl mx-auto backdrop-blur-sm">
              <h3 className="text-lg font-bold text-red-300 mb-2">
                ⚠️ MANDATORY
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                Only volumes generated through these official links will be counted 
                in the leaderboard for the monthly $3,000 rewards.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {affiliateLinks.map((link, index) => {
              const Icon = link.icon;
              
              return (
                <div
                  key={index}
                  className={`bg-black/40 border ${link.borderColor} rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-[1.02]`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-14 h-14 bg-gradient-to-r ${link.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {link.platform}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {link.description}
                        </p>
                      </div>
                    </div>
                    
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800/50 rounded-lg"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-300 font-medium mb-2 block">
                        Affiliate Link
                      </label>
                      <div className="flex items-center space-x-3">
                        <div className="flex-1 bg-black/50 border border-gray-600/50 rounded-lg p-3 font-mono text-sm text-gray-200 truncate">
                          {link.url}
                        </div>
                        <button
                          onClick={() => copyToClipboard(link.url, `${link.platform}-url`)}
                          className="bg-gray-700/50 hover:bg-gray-600/50 p-3 rounded-lg transition-all duration-300 border border-gray-600/50 hover:border-purple-400/50"
                        >
                          {copiedLink === `${link.platform}-url` ? (
                            <CheckCircle className="w-4 h-4 text-green-400" />
                          ) : (
                            <Copy className="w-4 h-4 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm text-gray-300 font-medium mb-2 block">
                        Referral Code
                      </label>
                      <div className="flex items-center space-x-3">
                        <div className="flex-1 bg-black/50 border border-gray-600/50 rounded-lg p-3 font-mono text-sm text-white font-bold">
                          {link.code}
                        </div>
                        <button
                          onClick={() => copyToClipboard(link.code, `${link.platform}-code`)}
                          className="bg-gray-700/50 hover:bg-gray-600/50 p-3 rounded-lg transition-all duration-300 border border-gray-600/50 hover:border-purple-400/50"
                        >
                          {copiedLink === `${link.platform}-code` ? (
                            <CheckCircle className="w-4 h-4 text-green-400" />
                          ) : (
                            <Copy className="w-4 h-4 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between text-sm">
                    <span className="text-gray-300">Tracking Status</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-green-400 font-medium">Active</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Footer */}
      <footer className="border-t border-gray-800/50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
                <div>
                  <span className="text-xl font-bold text-white">G0TZE AFFILIATES</span>
                  <p className="text-sm text-gray-400">@G0TZEWEB3 Community</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                Automated reward system for the G0TZE crypto community. 
                $3,000 redistributed monthly to the top performing affiliates 
                across partner platforms.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">Platforms</h3>
              <div className="space-y-3">
                {[
                  { name: 'Rugs.fun', url: 'https://rugs.fun/?start=REF_Q51LEOWNE0RI' },
                  { name: 'Solpump', url: 'https://solpump.com/a/G0TZE' },
                  { name: 'BCGame', url: 'https://bcgame.top/' },
                  { name: 'Rain.gg', url: 'https://rain.gg/' }
                ].map((platform, index) => (
                  <a
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-purple-300 transition-colors text-sm group"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover:text-purple-300" />
                    {platform.name}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">Community</h3>
              <div className="space-y-3">
                <a
                  href="https://twitter.com/G0TZEWEB3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-blue-300 transition-colors text-sm group"
                >
                  <Twitter className="w-4 h-4 mr-2 group-hover:text-blue-300" />
                  @G0TZEWEB3
                </a>
                <a
                  href="https://kick.com/g0tze"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-green-300 transition-colors text-sm group"
                >
                  <Users className="w-4 h-4 mr-2 group-hover:text-green-300" />
                  Kick.com/g0tze
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800/50 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-300 text-sm">
                © 2025 G0TZE AFFILIATES. Community reward system.
              </p>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-green-400">All Systems Active</span>
                </div>
                
                <div className="text-sm text-gray-300">
                  v1.0.0
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;