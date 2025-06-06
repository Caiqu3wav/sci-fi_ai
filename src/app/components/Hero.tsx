import React from 'react';
import { Zap } from 'lucide-react';
import ScifiLogo from '../../../public/assets/img/logo/sci-fi_logo-1.png'
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-black"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <div className="p-4 rounded-full ">
            <Image src={ScifiLogo} alt="Sci-fi logo"/>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-fade-in">
          Sci-Fi A.I
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Next-generation AI-driven assistants and software tools that guide your business into the future of artificial intelligence
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 rounded-xl flex items-center justify-center text-white px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105">
            <Zap className="w-5 h-5 mr-2" />
            Request Demo
          </button>
          <button className="border-gray-600 bg-black/15 rounded-xl cursor-pointer text-white hover:bg-gray-800 px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105">
            Talk to AI Advisor
          </button>
        </div>
        
        <div className="text-sm text-gray-400">
          Trusted by 500+ companies worldwide
        </div>
      </div>
    </div>
  );
};

export default Hero;
