import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Clock, Trophy, BarChart, Repeat, CheckCircle } from 'lucide-react';

const Features = () => {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Topic',
      description: 'Select from various topics, whatever you think, you have here, if not, you can create.',
      icon: Brain,
    },
    {
      number: '02',
      title: 'Take the Quiz',
      description: 'Answer interactive questions with immediate feedback and detailed explanations.',
      icon: Clock,
    },
    {
      number: '03',
      title: 'Track Progress',
      description: 'Monitor your learning journey with detailed analytics and performance insights.',
      icon: BarChart,
    },
    {
      number: '04',
      title: 'Master Grammar',
      description: 'Achieve mastery through repetition, practice, and comprehensive understanding.',
      icon: Trophy,
    },
  ];

  const features = [
    {
      icon: Repeat,
      title: 'Adaptive Learning',
      description: 'Quizzes adapt to your skill level, providing appropriate challenges for continuous improvement.',
    },
    {
      icon: CheckCircle,
      title: 'Instant Feedback',
      description: 'Get immediate explanations for correct and incorrect answers to reinforce learning.',
    },
    {
      icon: BarChart,
      title: 'Progress Tracking',
      description: 'Detailed analytics help you identify strengths and areas for improvement.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-blue-50 to-white">
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
            How It <span className="text-primary-700">Works</span>
          </h2>
          <p className="font-poppins text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our intuitive quiz platform guides you through a structured learning process designed
            to maximize retention and understanding of the topic you choose.
          </p>
        </motion.div>

        {/* How It Works Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center relative">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 bg-primary-700 text-white w-12 h-12 rounded-full flex items-center justify-center font-outfit font-bold text-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="h-8 w-8 text-primary-700" />
                </div>

                {/* Content */}
                <h3 className="font-outfit text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="font-poppins text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="h-8 w-8 text-primary-700" />
              </div>
              <h3 className="font-outfit text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="font-poppins text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;