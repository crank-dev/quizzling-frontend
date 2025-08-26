import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaQuestionCircle,
  FaHeart
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="src/assets/icon.png" className="w-8" />
              <h3 className="text-2xl font-bold">Quizzling</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Create, share, and play engaging quizzes with friends. Test your knowledge
              across various topics and challenge others in our interactive quiz platform.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4 pt-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                aria-label="Twitter"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                aria-label="YouTube"
              >
                <FaYoutube className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Create Quiz
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Browse Quizzes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Leaderboard
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  My Profile
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Categories
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
              Support & Legal
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
              Get in Touch
            </h4>

            {/* Contact Details */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3 text-gray-400">
                <FaEnvelope className="text-blue-400" />
                <span>support@quizzling.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <FaPhone className="text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>New York, NY 10001</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="pt-4">
              <h5 className="text-sm font-medium text-white mb-2">Stay Updated</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 text-white text-sm rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700"
                />
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-r-md transition-colors duration-200">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Get the latest quizzes and updates delivered to your inbox.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

            {/* Copyright */}
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>© {currentYear} Quizzling. All rights reserved.</span>
              <span className="hidden md:inline">|</span>
              <span className="flex items-center space-x-1">
                <span>Made with</span>
                <FaHeart className="text-red-500 text-xs" />
                <span>for quiz lovers</span>
              </span>
            </div>

            {/* Additional Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Sitemap
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Accessibility
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Status
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-40"
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;