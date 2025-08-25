import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, BookOpen } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Educational Focus',
      description: 'Designed specifically for fun learning with targeted quiz topics and comprehensive explanations.',
    },
    {
      icon: Users,
      title: 'Interactive Learning',
      description: 'Engaging quiz format that makes learning fun and memorable for students of all levels.',
    },
    {
      icon: Award,
      title: 'School Project',
      description: 'Developed as an innovative educational project showcasing modern web technologies and pedagogical approaches.',
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Content',
      description: 'Covers essential topics including geography, science, maths, and more topics, whatever you think, it is there.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
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
            About <span className="text-primary-700">Quizzling</span>
          </h2>
          <p className="font-poppins text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Quizzling is an innovative educational platform created as a comprehensive school project.
            Our mission is to transform learning through interactive quizzes, making
            complex concepts accessible and engaging for students worldwide.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <feature.icon className="h-8 w-8 text-primary-700" />
                </div>
                <div>
                  <h3 className="font-outfit text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="font-poppins text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-primary-50 to-blue-50 p-8 md:p-12 rounded-3xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h3 className="font-outfit text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Our Educational Mission
            </h3>
            <p className="font-poppins text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              At Quizzling, we believe that learning should be both effective and enjoyable. Our platform
              combines cutting-edge web technologies with proven educational methodologies to create an
              immersive learning experience. Whether you're a student struggling with a certain topic and related concepts or
              an educator looking for innovative teaching tools, Quizzling provides the resources you need
              to succeed in mastering your thoughts.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;