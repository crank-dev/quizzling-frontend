import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';

const Hero = ({ onStartQuiz, onLearnMore }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-4 h-4 bg-blue-200 rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-40 right-32 w-6 h-6 bg-blue-300 rounded-full"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-8 h-8 bg-blue-100 rounded-full"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-3 h-3 bg-blue-400 rounded-full"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Logo */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex justify-center mb-6">
            <motion.div
              className="bg-white rounded-full p-8 shadow-2xl"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/src/assets/icon.png"
                alt="Quizzling Logo"
                className="h-24 w-24 object-contain"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="font-outfit text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Welcome to{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
            Quizzling
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="font-poppins text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Quizzling is a platform where you can create your own quizzes,
          have fun with quizzes made by others, and easily support your favorite creators.
          A modern and interactive space to learn, share, and enjoy quizzes with the community.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            onClick={onStartQuiz}
            className="bg-blue-700 text-white px-8 py-4 rounded-full font-poppins font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Play className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
            Start Now
          </motion.button>

          <motion.button
            onClick={onLearnMore}
            className="bg-white text-blue-700 px-8 py-4 rounded-full font-poppins font-semibold text-lg border-2 border-blue-200 hover:border-blue-700 transition-all duration-300 flex items-center gap-3 group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn More
            <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
