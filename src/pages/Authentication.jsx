import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { BookOpen } from 'lucide-react';

export function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen flex">
      {/* Left Content */}
      <motion.div
        className="hidden md:flex w-1/2 bg-blue-700 text-white flex-col justify-center items-center p-16"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <BookOpen className="h-24 w-24 mb-6" />
        <h1 className="text-4xl font-bold mb-4">Welcome to Quizzling</h1>
        <p className="text-lg max-w-xs text-center">
          Create your own quizzes, enjoy quizzes from others, and support your favorite creators. Learning has never been this fun and interactive!
        </p>
      </motion.div>

      {/* Right Form */}
      <motion.div
        className="flex-1 flex items-center justify-center bg-white p-10"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Register</h2>

          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign Up
            </motion.button>
          </form>

          <div className="mt-6 text-center text-gray-500">or continue with</div>
          <div className="flex justify-center gap-4 mt-4">
            <button className="p-3 rounded-lg shadow hover:scale-105 transition-transform">
              <FcGoogle className="h-6 w-6" />
            </button>
            <button className="p-3 rounded-lg shadow hover:scale-105 transition-transform">
              <FaGithub className="h-6 w-6 text-black" />
            </button>
          </div>

          <p className="mt-6 text-center text-gray-500">
            Already have an account? <a href="/login" className="text-blue-700 font-semibold">Login</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen flex">
      {/* Left Content */}
      <motion.div
        className="hidden md:flex w-1/2 bg-blue-700 text-white flex-col justify-center items-center p-16"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <BookOpen className="h-24 w-24 mb-6" />
        <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
        <p className="text-lg max-w-xs text-center">
          Access your account, try exciting quizzes, and explore creations from the community. Learning and fun combined in one platform!
        </p>
      </motion.div>

      {/* Right Form */}
      <motion.div
        className="flex-1 flex items-center justify-center bg-white p-10"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Login</h2>

          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.button>
          </form>

          <div className="mt-6 text-center text-gray-500">or continue with</div>
          <div className="flex justify-center gap-4 mt-4">
            <button className="p-3 rounded-lg shadow hover:scale-105 transition-transform">
              <FcGoogle className="h-6 w-6" />
            </button>
            <button className="p-3 rounded-lg shadow hover:scale-105 transition-transform">
              <FaGithub className="h-6 w-6 text-black" />
            </button>
          </div>

          <p className="mt-6 text-center text-gray-500">
            Don't have an account? <a href="/register" className="text-blue-700 font-semibold">Register</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
