import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, Users, MessageCircle } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'English Teacher',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      content: 'Quizzling has transformed how my students approach grammar learning. The interactive quizzes make complex concepts accessible and engaging.',
      rating: 5,
    },
    {
      name: 'Mike Chen',
      role: 'Student',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      content: 'As an ESL student, I struggled with grammar rules. This platform made learning fun and I can see real improvement in my writing.',
      rating: 5,
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Education Researcher',
      avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      content: 'The pedagogical approach behind Quizzling is impressive. It combines proven learning theories with modern technology beautifully.',
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: 'What grammar topics are covered?',
      answer: 'Quizzling covers essential grammar topics including present continuous, false cognates, gerunds, conditionals, and more. New topics are added regularly.',
    },
    {
      question: 'Is Quizzling suitable for all levels?',
      answer: 'Yes! Our adaptive learning system adjusts question difficulty based on your performance, making it suitable for beginners to advanced learners.',
    },
    {
      question: 'Can teachers use this in their classroom?',
      answer: 'Absolutely! Quizzling is designed to be an excellent supplementary tool for educators, with progress tracking and detailed analytics.',
    },
    {
      question: 'Is there a mobile app available?',
      answer: 'Quizzling is fully responsive and works perfectly on all devices. A dedicated mobile app is in development for an even better experience.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="font-outfit text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What People <span className="text-primary-700">Say</span>
            </h2>
            <p className="font-poppins text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hear from educators, students, and researchers who have experienced
              the impact of Quizzling on English grammar learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary-300 mb-6" />

                {/* Stars */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="font-poppins text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-outfit font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="font-poppins text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="font-outfit text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-primary-700">Questions</span>
            </h2>
            <p className="font-poppins text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get answers to common questions about Quizzling and how it can
              help you master English grammar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-outfit text-xl font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="font-poppins text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;