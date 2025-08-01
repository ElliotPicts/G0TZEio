import React, { useState } from 'react';
import { Trophy, Menu, X, ExternalLink } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-gray-800/50 backdrop-blur-xl bg-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#leaderboard" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm font-medium relative group">
              Leaderboard
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#links" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm font-medium relative group">
              Affiliate Links
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#stats" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm font-medium relative group">
              Statistics
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          {/* Reward Pool */}
          <div className="hidden sm:flex items-center space-x-4">
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-400/40 rounded-xl px-4 py-2 backdrop-blur-sm">
              <div className="text-xs text-green-300 font-medium">Monthly Pool</div>
              <div className="text-lg font-bold text-green-400">$3,000</div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
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
              <div className="pt-3 border-t border-gray-800/50">
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-400/40 rounded-xl px-4 py-2 inline-block backdrop-blur-sm">
                  <div className="text-xs text-green-300 font-medium">Monthly Pool</div>
                  <div className="text-lg font-bold text-green-400">$3,000</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;