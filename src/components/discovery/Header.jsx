import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search } from 'lucide-react';

const recentSearches = [
  "Math Quiz",
  "History Trivia",
  "Science Challenge"
];

const recommendations = [
  "Geography Test",
  "Pop Culture Quiz",
  "Tech Trivia",
  "Literature Quiz",
  "Art & Creativity",
  "Sports Quiz"
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
    setShowDropdown(e.target.value.trim() !== '');
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="src/assets/icon.png" alt="Quizzling Logo" className="h-10 w-10 object-contain mr-2" />
            <span className="font-outfit font-bold text-xl text-gray-900">Quizzling</span>
          </motion.div>

          {/* Search Bar */}
          <div className="flex-1 mx-6 relative">
            <input
              type="text"
              placeholder="Search quizzes..."
              value={searchValue}
              onChange={handleInputChange}
              onFocus={() => setShowDropdown(searchValue.trim() !== '')}
              className="w-full rounded-md border border-gray-300 px-6 py-2 pl-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500 h-5 w-5" />

            {/* Suggestions dropdown */}
            <AnimatePresence>
              {showDropdown && (
                <motion.div
                  className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-md mt-1 shadow-lg max-h-72 overflow-y-auto z-50"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {/* Recent Searches */}
                  <div className="px-4 py-2 border-b border-gray-200">
                    <h4 className="text-gray-500 text-sm font-semibold mb-1">Pesquisado Recentemente</h4>
                    {recentSearches
                      .filter(item => item.toLowerCase().includes(searchValue.toLowerCase()))
                      .map((item, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ backgroundColor: 'rgb(239 246 255)' }}
                          className="flex items-center px-2 py-1 cursor-pointer rounded"
                          onClick={() => setSearchValue(item)}
                        >
                          <Search className="text-blue-500 w-4 h-4 mr-2" />
                          <span className="text-gray-800 text-sm">{item}</span>
                        </motion.div>
                      ))}
                  </div>

                  {/* Recommendations */}
                  <div className="px-4 py-2">
                    <h4 className="text-gray-500 text-sm font-semibold mb-1">Recomendações</h4>
                    {recommendations
                      .filter(item => item.toLowerCase().includes(searchValue.toLowerCase()))
                      .map((item, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ backgroundColor: 'rgb(239 246 255)' }}
                          className="flex items-center px-2 py-1 cursor-pointer rounded"
                          onClick={() => setSearchValue(item)}
                        >
                          <Search className="text-blue-500 w-4 h-4 mr-2" />
                          <span className="text-gray-800 text-sm">{item}</span>
                        </motion.div>
                      ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              className="font-poppins text-blue-500 border-2 border-blue-400 px-6 py-2 rounded-md hover:text-blue-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.button>
            <motion.button
              className="bg-blue-500 text-white px-6 py-2  font-poppins font-medium hover:bg-blue-600 rounded-md transition-all duration-200 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign Up
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6 text-gray-900" /> : <Menu className="h-6 w-6 text-gray-900" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white border-t"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-4 py-4">
              <input
                type="text"
                placeholder="Search quizzes..."
                value={searchValue}
                onChange={handleInputChange}
                className="w-full rounded-full border border-gray-300 px-6 py-2 pl-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all mb-4"
              />
              <div className="flex flex-col space-y-2">
                <button className="w-full px-3 py-2 text-base font-poppins text-gray-700 text-left">Login</button>
                <button className="w-full bg-blue-700 text-white px-3 py-2 rounded-lg font-poppins font-medium">Sign Up</button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
