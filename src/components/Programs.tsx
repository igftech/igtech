import React, { useState, useEffect } from 'react';
import { BookOpen, Users, Trophy, Lightbulb, Target, Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Programs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const programs = [
    {
      icon: BookOpen,
      title: "Academic Support Program",
      description: "Comprehensive support for senior secondary school students across all subjects with focus on STEM education.",
      features: [
        "Mathematics and Science tutoring",
        "Study materials and resources",
        "Exam preparation workshops",
        "Scholarship opportunities"
      ],
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Users,
      title: "Teacher Development Initiative",
      description: "Empowering educators with modern teaching methodologies and resources to enhance classroom effectiveness.",
      features: [
        "Professional development workshops",
        "Teaching resources and materials",
        "Peer collaboration networks",
        "Technology integration training"
      ],
      color: "from-red-700 to-red-800"
    },
    {
      icon: Trophy,
      title: "Excellence Recognition Awards",
      description: "Celebrating outstanding achievements in academics and recognizing exceptional contributions to education.",
      features: [
        "Student achievement awards",
        "Teacher excellence recognition",
        "School performance incentives",
        "Community impact certificates"
      ],
      color: "from-yellow-600 to-yellow-700"
    },
    {
      icon: Lightbulb,
      title: "Innovation & Research Hub",
      description: "Fostering creativity and research among students and teachers through innovative programs and facilities.",
      features: [
        "Science project competitions",
        "Research methodology training",
        "Innovation showcases",
        "STEM career guidance"
      ],
      color: "from-green-600 to-green-700"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-100 border border-red-200 rounded-full px-4 py-2 mb-6">
            <Target className="w-5 h-5 text-red-600" />
            <span className="text-red-700 font-medium">Our Programs</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-6">
            Comprehensive Educational
            <span className="text-red-700"> Support</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer a range of carefully designed programs to support students, teachers, and schools in achieving educational excellence across Nigeria.
          </p>
        </div>

        {/* Programs Grid */}
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {programs.map((program, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-500"
            >
              <div className="flex items-start space-x-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-navy-900 mb-3 group-hover:text-red-700 transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {program.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-red-700 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center text-red-700 font-semibold group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                    <span>Learn more</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-red-900 rounded-2xl p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Join Our Educational Excellence Journey?
            </h3>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Whether you're a student, teacher, or school administrator, we have programs designed to support your educational goals and aspirations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-white text-navy-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get Involved
              </a>
              <a
                href="#tournament"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-navy-900 font-semibold rounded-full transition-all duration-300"
              >
                Join Math Tournament
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;