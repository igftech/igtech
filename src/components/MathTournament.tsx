import React from 'react';
import { Calendar, MapPin, Trophy, Users, Clock, Award, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MathTournament = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const prizes = [
    { position: "1st Place", amount: "₦500,000", color: "from-yellow-400 to-yellow-600" },
    { position: "2nd Place", amount: "₦300,000", color: "from-gray-400 to-gray-600" },
    { position: "3rd Place", amount: "₦200,000", color: "from-amber-600 to-amber-800" },
    { position: "4th-10th", amount: "₦50,000", color: "from-blue-500 to-blue-700" }
  ];

  const timeline = [
    { date: "January 2025", event: "Registration Opens", status: "upcoming" },
    { date: "March 2025", event: "Regional Qualifiers", status: "upcoming" },
    { date: "October 2025", event: "Semi-Finals", status: "upcoming" },
    { date: "November 29, 2025", event: "Grand Finals", status: "upcoming" }
  ];

  const eligibility = [
    "SS1, SS2, and SS3 students from Nigerian secondary schools",
    "Public and private schools are eligible to participate",
    "Maximum of 5 students per school for registration",
    "Students must be enrolled and actively attending school"
  ];

  return (
    <section id="tournament" className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-red-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full px-4 py-2 mb-6">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-300 font-medium">Annual Math Tournament</span>
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            IGF Math Tournament
            <span className="block text-yellow-400 text-3xl sm:text-4xl mt-2">4th Edition - 2025</span>
          </h2>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Nigeria's premier mathematics competition bringing together the brightest minds from secondary schools across the nation.
          </p>
        </div>

        {/* Event Details */}
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12 border border-white/20"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Date & Time</h3>
              <p className="text-gray-200">November 29, 2025</p>
              <p className="text-gray-300">10:00 AM - 4:00 PM</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Venue</h3>
              <p className="text-gray-200">SIO Event Centre</p>
              <p className="text-gray-300">Ikpotan Road, Benin City, Nigeria</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expected</h3>
              <p className="text-gray-200">500+ Students</p>
              <p className="text-gray-300">100+ Schools</p>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Prizes */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <div className="flex items-center mb-6">
              <Trophy className="w-8 h-8 text-yellow-600 mr-3" />
              <h3 className="text-2xl font-bold text-navy-900">Prize Structure</h3>
            </div>
            
            <div className="space-y-4">
              {prizes.map((prize, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 bg-gradient-to-r ${prize.color} rounded-full flex items-center justify-center mr-4`}>
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-semibold text-navy-900">{prize.position}</span>
                  </div>
                  <span className="font-bold text-2xl text-red-700">{prize.amount}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
              <p className="text-yellow-800 font-medium text-sm">
                🎓 Additional prizes include scholarship opportunities and educational grants
              </p>
            </div>
          </motion.div>

          {/* Timeline & Eligibility */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Tournament Timeline */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <Clock className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-navy-900">Tournament Timeline</h3>
              </div>
              
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                    <div>
                      <span className="font-semibold text-navy-900">{item.date}</span>
                      <p className="text-gray-600">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-navy-900">Eligibility Criteria</h3>
              </div>
              
              <ul className="space-y-3">
                {eligibility.map((criterion, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{criterion}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Registration CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-3xl font-bold text-navy-900 mb-4">
              Registration Opens January 2025
            </h3>
            <p className="text-navy-800 text-lg mb-6 max-w-2xl mx-auto">
              Don't miss this opportunity to showcase mathematical excellence and win amazing prizes. Register your school today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-navy-900 text-white font-semibold rounded-full hover:bg-navy-800 transition-all duration-300 transform hover:scale-105">
                Get Notified
              </button>
              <button className="px-8 py-4 border-2 border-navy-900 text-navy-900 font-semibold rounded-full hover:bg-navy-900 hover:text-white transition-all duration-300">
                Download Info Pack
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MathTournament;