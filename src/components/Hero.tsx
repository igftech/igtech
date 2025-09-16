import React from 'react';
import { ChevronDown, Award, Users, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-red-900">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-transparent to-red-900/90"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Main content */}
        <div className="space-y-8 mb-16">
          <div className="animate-fadeInUp">
            <div className="inline-flex items-center space-x-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-2 mb-6">
              <Award className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-medium">Educational Excellence Initiative</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent">
                Empowering
              </span>
              <br />
              <span className="text-yellow-400">Nigeria's Future</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mt-6">
              Supporting senior secondary school students and teachers across Nigeria in pursuit of excellence and heritage
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#tournament"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <span>Math Tournament 2025</span>
              <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </a>
            
            <a
              href="#about"
              className="inline-flex items-center px-8 py-4 border-2 border-white/30 hover:border-white text-white hover:bg-white/10 font-semibold rounded-full transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-yellow-400" />
              </div>
            </div>
            <div className="text-3xl font-bold text-white">1000+</div>
            <div className="text-gray-300">Students Supported</div>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-red-400" />
              </div>
            </div>
            <div className="text-3xl font-bold text-white">50+</div>
            <div className="text-gray-300">Partner Schools</div>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-yellow-400" />
              </div>
            </div>
            <div className="text-3xl font-bold text-white">4</div>
            <div className="text-gray-300">Years of Impact</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;