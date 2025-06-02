import React from 'react';
import { Shield, Users, Zap, Brain, Cpu, Network } from 'lucide-react';

const Mission = () => {
  return (
    <section className="py-20 px-6 bg-gray-800/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-blue-500/30 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-purple-500/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main mission statement */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-600/20 p-2 rounded-lg">
                  <Brain className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Our Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Bridging the AI Gap for Tomorrow&apos;s Business
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                We transform traditional business operations with cutting-edge AI technology, making adoption seamless, strategic, and sustainable for companies of all sizes. Our specialized AI franchise provides dedicated guidance for every step of your transformation journey.
              </p>
            </div>
            
            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-800/60 p-4 rounded-xl border border-gray-700 text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">500+</div>
                <div className="text-sm text-gray-400">Companies Served</div>
              </div>
              <div className="bg-gray-800/60 p-4 rounded-xl border border-gray-700 text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">95%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
              <div className="bg-gray-800/60 p-4 rounded-xl border border-gray-700 text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">24/7</div>
                <div className="text-sm text-gray-400">AI Support</div>
              </div>
              <div className="bg-gray-800/60 p-4 rounded-xl border border-gray-700 text-center">
                <div className="text-2xl font-bold text-orange-400 mb-1">3.5x</div>
                <div className="text-sm text-gray-400">Average ROI</div>
              </div>
            </div>
          </div>
          
          {/* Side features */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-blue-400" />
                <h3 className="text-lg font-semibold text-white">Trusted Guidance</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Step-by-step consulting ensuring secure, compliant AI implementation.
              </p>
              <div className="flex items-center text-xs text-blue-400">
                <Cpu className="w-4 h-4 mr-2" />
                Security First Approach
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-purple-400" />
                <h3 className="text-lg font-semibold text-white">Tailored Solutions</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Custom AI tools designed for your specific industry challenges.
              </p>
              <div className="flex items-center text-xs text-purple-400">
                <Network className="w-4 h-4 mr-2" />
                Industry Specialized
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-green-400" />
                <h3 className="text-lg font-semibold text-white">Team Empowerment</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Comprehensive training to maximize your team&apos;s AI potential.
              </p>
              <div className="flex items-center text-xs text-green-400">
                <Brain className="w-4 h-4 mr-2" />
                98% Adoption Rate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
