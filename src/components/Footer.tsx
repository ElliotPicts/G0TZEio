import React from 'react';
import { Twitter, Users, Mail, ExternalLink, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-800/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
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

          {/* Platforms */}
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

          {/* Community */}
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

        {/* Bottom Bar */}
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
  );
};

export default Footer;