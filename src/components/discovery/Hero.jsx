import React, { useState } from 'react'
import { FaQuestionCircle } from 'react-icons/fa'
import Footer from '../landing/Footer'

export default function Hero() {
  const quizzes = [
    {
      id: 1,
      title: "Math Master",
      description: "Test your math skills with fun challenges!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7HI0oTxxN5IF5fgorPVYEbn-oYSMyWPyF6w&s",
      tags: ["Math", "Logic", "Numbers"]
    },
    {
      id: 2,
      title: "History Buff",
      description: "How much do you know about world history?",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKyQLk2MtbGJNwxf9PORQjkUxeGyYBfDb1Bg&s",
      tags: ["History", "World", "Culture"]
    },
    {
      id: 3,
      title: "Science Explorer",
      description: "Explore amazing science facts and questions.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn074AJcg4H9tISWI0cao-jKjTZzBhQYQ19w&s",
      tags: ["Science", "Physics", "Chemistry"]
    },
    {
      id: 4,
      title: "Geography Guru",
      description: "Challenge your knowledge of countries and capitals.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIZ_AGuQNV54vtx6G0sotDSOPolRRwJ-kYJw&s",
      tags: ["Geography", "Maps", "World"]
    },
    {
      id: 5,
      title: "Literature Lover",
      description: "Test yourself on classic books and authors.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPrghgsngbYy_0y04lj33IPs5Ad_Fmzouwxg&s",
      tags: ["Books", "Literature", "Reading"]
    },
    {
      id: 6,
      title: "Pop Culture Quiz",
      description: "See how well you know movies, music and trends!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8mndV8darVDGfTxLkglH1mAB6qQ25f3QTIg&s",
      tags: ["Pop Culture", "Movies", "Music"]
    },
    {
      id: 7,
      title: "Tech Trivia",
      description: "Fun tech questions for geeks and enthusiasts.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNXGuAAedBZV8NK7xKHY3UwU5NkCkdV5wXtA&s",
      tags: ["Tech", "Gadgets", "Computers"]
    },
    {
      id: 8,
      title: "Sports Fanatics",
      description: "Are you a true sports aficionado?",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjeIDiytXzG3df2aiSRlupf2Zo33hjsmIL_g&s",
      tags: ["Sports", "Games", "Competition"]
    },
    {
      id: 9,
      title: "Art & Creativity",
      description: "Explore your knowledge in art and creative works.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRidRXByJzMdSewMoy5lYVCGV-nXh0ex9memg&s",
      tags: ["Art", "Creativity", "Painting"]
    }
  ]

  const [activeTag, setActiveTag] = useState("All")

  const filteredQuizzes = activeTag === "All"
    ? quizzes
    : quizzes.filter(quiz => quiz.tags.includes(activeTag))

  const allTags = ["All", ...new Set(quizzes.flatMap(q => q.tags))]

  return (
    <>
      {/* Hero principal */}
      <section className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 my-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          {/* Texto principal */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Create Your Own Quiz
            </h1>
            <p className="text-lg sm:text-xl text-gray-100 max-w-md mx-auto lg:mx-0">
              Build fun quizzes, challenge your friends, and explore quizzes made by others.
            </p>

            {/* Barra de pesquisa */}
            <div className="mt-6 w-full max-w-md mx-auto lg:mx-0">
              <input
                type="text"
                placeholder="Search for quizzes..."
                className="w-full px-4 bg-white py-3 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              />
            </div>

            {/* Botões */}
            <div className="flex justify-center lg:justify-start space-x-4 mt-6">
              <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:shadow-md transition">
                Create Quiz
              </button>
              <button className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition">
                Explore Quizzes
              </button>
            </div>
          </div>

          {/* Ilustração de quiz */}
          <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end">
            <div className="w-80 h-80 bg-white rounded-3xl shadow-2xl flex flex-col items-center justify-center text-blue-600 font-bold text-2xl">
              <FaQuestionCircle className="text-9xl mb-4" />
              <span className="text-xl">Your Quiz Awaits!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Play Quizzes */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 my-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Play Quizzes</h2>

        <div className="flex">
          {/* Grid de quizzes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 flex-1">
            {filteredQuizzes.map((quiz) => (
              <div key={quiz.id} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
                <img src={quiz.image} alt={quiz.title} className="w-full h-48 object-cover" />
                <div className="p-4 flex flex-col space-y-2">
                  <h3 className="text-lg font-semibold text-gray-800">{quiz.title}</h3>
                  <p className="text-sm text-gray-600">{quiz.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {quiz.tags.map(tag => (
                      <span key={tag} className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <div className="flex space-x-2 mt-2">
                    <button className="flex-1 px-3 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition">
                      Play
                    </button>
                    <button className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 font-semibold rounded hover:bg-gray-100 transition">
                      See More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Painel de filtragem */}
          <div className="hidden lg:flex h-fit lg:flex-col lg:w-64 lg:ml-6 bg-gray-50 rounded-lg p-4 shadow">
            <h3 className="text-gray-800 font-semibold mb-4">Filter by Tag</h3>
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                    activeTag === tag ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
