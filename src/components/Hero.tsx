import React, { useState, useEffect } from 'react';
import { Clock, Zap, TrendingUp, Users } from 'lucide-react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

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

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Title */}
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

        {/* Countdown Timer */}
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

        {/* Features Grid */}
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
  );
};

export default Hero;