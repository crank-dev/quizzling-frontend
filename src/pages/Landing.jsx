import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/landing/Header';
import Hero from '../components/landing/Hero';
import About from '../components/landing/About';
import Features from '../components/landing/Features';
import Technologies from '../components/landing/Technologies';
import Testimonials from '../components/landing/Testimonials';
import Footer from '../components/landing/Footer';
import Modal from '../components/landing/Modal';

function Landing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  const handleStartQuiz = () => {
    setIsQuizStarted(true);
    // Add your quiz navigation logic here
    console.log('Starting quiz...');
  };

  const handleLearnMore = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <AnimatePresence>
        {!isQuizStarted ? (
          <motion.div
            key="landing"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              y: -100,
              transition: { duration: 0.8, ease: "easeInOut" }
            }}
          >
            <Hero onStartQuiz={handleStartQuiz} onLearnMore={handleLearnMore} />
            <About />
            <Features />
            <Technologies />
            <Testimonials />
            <Footer />
          </motion.div>
        ) : (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeInOut" }
            }}
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white"
          >
            <div className="max-w-2xl mx-auto px-4 text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-white p-12 rounded-3xl shadow-2xl"
              >
                <h1 className="font-outfit text-4xl font-bold text-gray-900 mb-6">
                  🚧 Quiz Coming Soon! 🚧
                </h1>
                <p className="font-poppins text-lg text-gray-600 mb-8">
                  The interactive quiz feature is currently under development.
                  This landing page demonstrates the platform's design and user experience.
                </p>
                <motion.button
                  onClick={() => setIsQuizStarted(false)}
                  className="bg-primary-700 text-white px-8 py-3 rounded-full font-poppins font-semibold hover:bg-primary-800 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Back to Landing Page
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default Landing;