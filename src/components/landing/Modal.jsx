import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen, PlayCircle, Heart, Target, Users, Award, Zap, Brain } from 'lucide-react';

const Modal = ({ isOpen, onClose }) => {
    const sections = [
        {
          id: 'overview',
          title: 'Overview',
          icon: BookOpen,
          content: {
            title: 'Create and Explore Quizzes',
            description: 'Quizzling is a platform where you can create your own quizzes, explore quizzes made by others, and share knowledge with the community.',
            features: [
              'Design your own quizzes easily',
              'Discover quizzes from other creators',
              'Engage with a community of learners',
              'Enjoy interactive and fun challenges'
            ]
          }
        },
        {
          id: 'mission',
          title: 'Mission',
          icon: PlayCircle,
          content: {
            title: 'Our Platform Mission',
            description: 'We aim to make quiz creation, discovery, and participation accessible and enjoyable for everyone.',
            features: [
              'Encourage learning through gamification',
              'Support creative quiz makers',
              'Provide engaging content for all levels',
              'Foster collaboration and sharing'
            ]
          }
        },
        {
          id: 'approach',
          title: 'Approach',
          icon: Heart,
          content: {
            title: 'Learning and Engagement',
            description: 'Our platform emphasizes interactive learning, user engagement, and community support, making education fun and social.',
            features: [
              'Play quizzes created by others',
              'Support your favorite quiz creators',
              'Earn points and achievements',
              'Participate in challenges and competitions'
            ]
          }
        },
        {
          id: 'impact',
          title: 'Impact',
          icon: Users,
          content: {
            title: 'Community and Growth',
            description: 'Quizzling is designed to create a thriving community where learning and creativity flourish together.',
            features: [
              'Build a community of learners',
              'Share your knowledge with others',
              'Encourage creativity and innovation',
              'Make learning a social and fun experience'
            ]
          }
        }
    ];

  const [activeSection, setActiveSection] = React.useState('overview');

  const activeContent = sections.find(section => section.id === activeSection)?.content;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex h-[80vh]">
              {/* Sidebar */}
              <div className="w-1/3 bg-gray-50 p-6 border-r">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-outfit text-2xl font-bold text-gray-900">Learn More</h2>
                  <motion.button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="h-6 w-6 text-gray-500" />
                  </motion.button>
                </div>

                <nav className="space-y-2">
                  {sections.map((section) => (
                    <motion.button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 text-left ${
                        activeSection === section.id
                          ? 'bg-primary-100 text-primary-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <section.icon className="h-5 w-5" />
                      <span className="font-poppins font-medium">{section.title}</span>
                    </motion.button>
                  ))}
                </nav>
              </div>

              {/* Content */}
              <div className="flex-1 p-8 overflow-y-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeContent && (
                      <>
                        <h3 className="font-outfit text-3xl font-bold text-gray-900 mb-6">
                          {activeContent.title}
                        </h3>
                        <p className="font-poppins text-lg text-gray-600 mb-8 leading-relaxed">
                          {activeContent.description}
                        </p>

                        <div className="space-y-4">
                          {activeContent.features.map((feature, index) => (
                            <motion.div
                              key={feature}
                              className="flex items-center space-x-3"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <div className="w-2 h-2 bg-primary-600 rounded-full" />
                              <span className="font-poppins text-gray-700">{feature}</span>
                            </motion.div>
                          ))}
                        </div>

                        {activeSection === 'overview' && (
                          <motion.div
                            className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                          >
                            <div className="flex items-center space-x-3 mb-4">
                              <Award className="h-8 w-8 text-primary-600" />
                              <h4 className="font-outfit text-xl font-semibold text-gray-900">
                                School Project Excellence
                              </h4>
                            </div>
                            <p className="font-poppins text-gray-700 leading-relaxed">
                              This platform showcases modern web development practices and
                              educational technology integration, demonstrating proficiency
                              in React, TypeScript, and responsive design principles.
                            </p>
                          </motion.div>
                        )}

                        {activeSection === 'impact' && (
                          <motion.div
                            className="mt-8 grid grid-cols-2 gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                          >
                            {['95%', '4.8/5', '50%', '10k+'].map((stat, index) => (
                              <div key={stat} className="text-center p-4 bg-gray-50 rounded-xl">
                                <div className="font-outfit text-2xl font-bold text-primary-700 mb-1">
                                  {stat}
                                </div>
                                <div className="font-poppins text-sm text-gray-600">
                                  {['Success Rate', 'User Rating', 'Faster Learning', 'Quiz Questions'][index]}
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;