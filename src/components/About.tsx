import React from 'react';
import { Target, Heart, Star, ArrowRight } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Educational Excellence",
      description: "Committed to raising the standard of education in Nigerian secondary schools through targeted support and resources."
    },
    {
      icon: Heart,
      title: "Heritage Preservation",
      description: "Honoring our rich cultural heritage while building bridges to a prosperous future for the next generation."
    },
    {
      icon: Star,
      title: "Sustainable Impact",
      description: "Creating lasting change through comprehensive programs that support both students and educators."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-yellow-100 border border-yellow-200 rounded-full px-4 py-2 mb-6">
            <Star className="w-5 h-5 text-yellow-600" />
            <span className="text-yellow-700 font-medium">About Our Mission</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-6">
            Championing Educational
            <span className="text-red-700"> Excellence</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The Igiehon Foundation is dedicated to transforming Nigeria's educational landscape by providing comprehensive support to senior secondary school students and teachers.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Our Story</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Founded with a vision to bridge the educational gap in Nigeria, the Igiehon Foundation has been at the forefront of educational reform since its inception. We believe that every student deserves access to quality education and every teacher deserves the resources to excel.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Through our flagship Math Tournament and various support programs, we've impacted thousands of lives across Nigeria, creating a ripple effect that extends far beyond the classroom.
              </p>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-red-700 to-red-800 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">IGF</span>
              </div>
              <div>
                <h4 className="font-semibold text-navy-900 text-lg">Our Promise</h4>
                <p className="text-gray-600">In pursuit of excellence and heritage, building tomorrow's leaders today.</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-navy-900 to-red-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Impact</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <span>Students Supported</span>
                  <span className="font-bold text-yellow-400">1,000+</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <span>Schools Partnered</span>
                  <span className="font-bold text-yellow-400">50+</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <span>Teachers Trained</span>
                  <span className="font-bold text-yellow-400">200+</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <span>Tournaments Held</span>
                  <span className="font-bold text-yellow-400">3</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="group bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{value.description}</p>
              <div className="flex items-center text-red-700 font-medium group-hover:translate-x-2 transition-transform duration-300">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;