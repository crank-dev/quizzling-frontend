import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Smartphone, Globe, Shield } from 'lucide-react';

const Technologies = () => {
  const technologies = [
    {
      icon: Code,
      title: 'React & TypeScript',
      description: 'Built with modern React hooks and TypeScript for type-safe, maintainable code.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Palette,
      title: 'TailwindCSS',
      description: 'Styled with utility-first CSS framework for rapid, consistent UI development.',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Zap,
      title: 'Framer Motion',
      description: 'Smooth animations and micro-interactions powered by production-ready animation library.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring optimal experience across all devices and screen sizes.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Globe,
      title: 'Modern Web Standards',
      description: 'Follows accessibility guidelines and modern web best practices for inclusive design.',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Shield,
      title: 'Performance Optimized',
      description: 'Optimized bundle size, lazy loading, and efficient rendering for lightning-fast performance.',
      color: 'from-emerald-500 to-green-500',
    },
  ];

  const stats = [
    { number: '100%', label: 'Mobile Responsive' },
    { number: '< 2s', label: 'Load Time' },
    { number: '99%', label: 'Uptime' },
    { number: 'A+', label: 'Performance Grade' },
  ];

  return (
    <section id="technologies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-outfit text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Built with Modern <span className="text-primary-700">Technologies</span>
          </h2>
          <p className="font-poppins text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Quizzling leverages cutting-edge web technologies to deliver a fast, scalable,
            and maintainable educational platform with exceptional user experience.
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              className="group relative bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              {/* Icon */}
              <div className={`bg-gradient-to-r ${tech.color} p-3 rounded-lg mb-6 inline-block`}>
                <tech.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-outfit text-xl font-semibold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                {tech.title}
              </h3>
              <p className="font-poppins text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Performance Stats */}
        <motion.div
          className="bg-gradient-to-r from-primary-50 to-blue-50 p-8 md:p-12 rounded-3xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="font-outfit text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Performance Metrics
            </h3>
            <p className="font-poppins text-gray-700">
              Delivering exceptional performance across all key metrics
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="font-outfit text-3xl md:text-4xl font-bold text-primary-700 mb-2">
                  {stat.number}
                </div>
                <div className="font-poppins text-gray-600 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;