import React, { useState } from 'react';
import { Copy, ExternalLink, CheckCircle, Coins, Zap, Dice6, Gamepad2 } from 'lucide-react';

const AffiliateLinks = () => {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

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

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedLink(id);
      setTimeout(() => setCopiedLink(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <section id="links" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            🔗 Official Affiliate Links
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Use exclusively these links to be tracked in the system
          </p>
          
          {/* Important Notice */}
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
                {/* Header */}
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

                {/* URL Section */}
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

                  {/* Code Section */}
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

                {/* Status */}
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

        {/* Instructions */}
        <div className="mt-12 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-400/30 rounded-2xl p-8 backdrop-blur-sm">
          <h3 className="text-xl font-bold text-white mb-6 text-center tracking-wide">
            How to use these links?
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-200">
            <div>
              <h4 className="font-semibold text-white mb-3 text-base">For Rugs.fun & Solpump:</h4>
              <p className="leading-relaxed">Click directly on the link to be automatically referred and tracked</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3 text-base">For BCGame & Rain.gg:</h4>
              <p className="leading-relaxed">Use the code <span className="font-mono bg-black/50 px-3 py-1 rounded-lg text-purple-300 font-bold">RAWLOOT</span> during registration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliateLinks;