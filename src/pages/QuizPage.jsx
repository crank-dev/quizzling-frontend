import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { FiCheck, FiX } from "react-icons/fi";

export default function QuizPage() {
  const [showGif, setShowGif] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const [score, setScore] = useState(0);
  const [answersHistory, setAnswersHistory] = useState([]);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  const quizName = "English Quiz";

  const questions = [
    { question: "Which word is a synonym of 'happy'?", options: ["Sad", "Joyful", "Angry", "Tired"], answer: 1 },
    { question: "Choose the correct past tense: 'I ___ to the store yesterday.'", options: ["Go", "Went", "Gone", "Going"], answer: 1 },
    { question: "Which of these is a verb?", options: ["Quickly", "Beautiful", "Run", "Happiness"], answer: 2 },
    { question: "Fill in the blank: 'She ___ playing the piano.'", options: ["is", "are", "am", "be"], answer: 0 },
    { question: "Select the correct plural form of 'child':", options: ["Childs", "Childes", "Children", "Childer"], answer: 2 },
    { question: "Choose the correct article: '___ apple a day keeps the doctor away.'", options: ["A", "An", "The", "No article"], answer: 1 },
  ];

  useEffect(() => {
    const gifDuration = 4000;
    const timer = setTimeout(() => setShowGif(false), gifDuration);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOptionClick = (index) => {
    if (!confirmed) setSelectedOption(index);
  };

  const handleConfirm = () => {
    if (selectedOption !== null) {
      setConfirmed(true);
      const isCorrect = selectedOption === questions[currentQuestion].answer;
      if (isCorrect) setScore(score + 1);
      setAnswersHistory([...answersHistory, { selected: selectedOption, correct: questions[currentQuestion].answer }]);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setConfirmed(false);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setConfirmed(false);
    setScore(0);
    setAnswersHistory([]);
    setShowGif(true);
    const timer = setTimeout(() => setShowGif(false), 4000);
    return () => clearTimeout(timer);
  };

  const isCorrect = confirmed && selectedOption === questions[currentQuestion].answer;
  const quizFinished = confirmed && currentQuestion === questions.length - 1;

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      {/* GIF de introdução */}
      <AnimatePresence>
        {showGif && (
          <motion.img
            src="/src/assets/intro.gif"
            alt="Intro GIF"
            className="w-full h-full object-cover absolute top-0 left-0"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      {!showGif && (
        <motion.div
          className="w-full h-full absolute top-0 left-0 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            backgroundImage: `url(src/assets/background-2.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {isCorrect && <Confetti width={windowSize.width} height={windowSize.height} recycle={false} />}

          <div className="w-full max-w-5xl flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Lado Esquerdo */}
            {!quizFinished ? (
              <motion.div
                className="flex flex-col justify-between bg-white/80 p-6 rounded-xl shadow-lg"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div>
                  <div className="text-sm font-medium text-blue-500 mb-2">{quizName}</div>
                  <div className="text-xs text-gray-600 mb-4">
                    Question {currentQuestion + 1} of {questions.length}
                  </div>
                  <h2 className="text-lg md:text-xl font-semibold leading-snug mb-6 text-gray-800">
                    {questions[currentQuestion].question}
                  </h2>
                </div>

                <div className="h-1 bg-gray-300 rounded mb-2">
                  <div
                    className="h-1 bg-blue-500 rounded"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </motion.div>
            ) : (
              // Modal Relatório Final
              <AnimatePresence>
                {quizFinished && (
                  <motion.div
                    className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.div
                      className="w-full max-w-3xl max-h-[80vh] bg-white rounded-2xl shadow-2xl overflow-y-auto p-6"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                    >
                      <h2 className="text-3xl font-bold text-gray-800 mb-2">Quiz Completed!</h2>
                      <p className="text-lg text-gray-700 mb-4">
                        Your Score: {score} / {questions.length} ({Math.round((score / questions.length) * 100)}%)
                      </p>
                      <p className="text-gray-600 mb-4">
                        {score / questions.length >= 0.8
                          ? "Excellent work! 🎉"
                          : score / questions.length >= 0.5
                          ? "Good job! Keep practicing! 👍"
                          : "Don't worry, keep learning! 💪"}
                      </p>

                      <div className="space-y-4">
                        {questions.map((q, idx) => {
                          const answered = answersHistory[idx];
                          const correct = answered?.selected === q.answer;
                          return (
                            <div
                              key={idx}
                              className={`p-4 rounded-lg shadow-md ${
                                correct ? "bg-green-100 border-green-400" : "bg-red-100 border-red-400"
                              } border-l-4`}
                            >
                              <p className="font-semibold text-gray-800 mb-1">
                                Q{idx + 1}: {q.question}
                              </p>
                              <p className="text-gray-700 mb-1">
                                Correct Answer: <span className="font-bold">{q.options[q.answer]}</span>
                              </p>
                              <p className="text-gray-700">
                                Your Answer:{" "}
                                <span className="font-bold">{answered ? q.options[answered.selected] : "-"}</span>
                              </p>
                            </div>
                          );
                        })}
                      </div>

                      <button
                        onClick={handleRestart}
                        className="mt-6 w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                      >
                        Restart Quiz
                      </button>
                      <button
                        onClick={handleRestart}
                        className="mt-6 w-full px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
                      >
                        Go Back
                      </button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}

            {/* Lado Direito / Mobile */}
            {!quizFinished && (
              <motion.div
                className="flex flex-col space-y-4"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {questions[currentQuestion].options.map((option, index) => {
                  let bgClass = "bg-white hover:bg-gray-200 text-gray-800";
                  let icon = null;

                  if (confirmed) {
                    if (index === questions[currentQuestion].answer) {
                      bgClass = "bg-green-500 text-white";
                      icon = <FiCheck className="inline ml-2" />;
                    } else if (selectedOption === index) {
                      bgClass = "bg-red-500 text-white";
                      icon = <FiX className="inline ml-2" />;
                    }
                  } else if (selectedOption === index) {
                    bgClass = "bg-blue-200 text-gray-900";
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleOptionClick(index)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition ${bgClass}`}
                      disabled={confirmed}
                    >
                      <span className="font-bold mr-2">{String.fromCharCode(65 + index)}</span>
                      {option} {icon}
                    </button>
                  );
                })}

                <div className="mt-6 flex flex-col md:flex-row justify-end gap-2">
                  {!confirmed ? (
                    <button
                      onClick={handleConfirm}
                      disabled={selectedOption === null}
                      className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
                    >
                      Confirm
                    </button>
                  ) : (
                    <button
                      onClick={handleNext}
                      className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                    >
                      Next
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}
