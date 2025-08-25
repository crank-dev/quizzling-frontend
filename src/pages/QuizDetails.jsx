import React, { useState } from "react";
import { FaPlay, FaEllipsisH, FaShareAlt, FaFlag, FaHeart, FaUserPlus, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import Header from "../components/discovery/Header";
import Footer from "../components/landing/Footer";

const quiz = {
  id: 1,
  title: "Math Master",
  description: "Test your math skills with fun challenges!",
  tags: ["Math", "Logic"],
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7HI0oTxxN5IF5fgorPVYEbn-oYSMyWPyF6w&s",
  creator: {
    name: "John Doe",
    avatar: "https://i.pravatar.cc/100?img=12",
    bio: "Math enthusiast and quiz creator.",
    quizzes: 12,
    followers: 340,
  },
};

const allQuizzes = [
  { id: 2, title: "Logic Genius", description: "Sharpen your logical thinking with tricky puzzles.", tags: ["Math","Logic"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKyQLk2MtbGJNwxf9PORQjkUxeGyYBfDb1Bg&s" },
  { id: 3, title: "Number Cruncher", description: "Quick math challenges for fast thinkers.", tags: ["Math"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn074AJcg4H9tISWI0cao-jKjTZzBhQYQ19w&s" },
  { id: 4, title: "Puzzle Master", description: "Test your logic with these mind-bending puzzles.", tags: ["Logic"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRidRXByJzMdSewMoy5lYVCGV-nXh0ex9memg&s" },
  { id: 5, title: "Number Wizard", description: "Mathematics challenges for experts.", tags: ["Math"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPrghgsngbYy_0y04lj33IPs5Ad_Fmzouwxg&s" },
  { id: 6, title: "Brain Teasers", description: "Fun and tricky puzzles for logical minds.", tags: ["Logic"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8mndV8darVDGfTxLkglH1mAB6qQ25f3QTIg&s" },
];

const initialComments = [
  { id: 1, name: "Alice", avatar: "https://i.pravatar.cc/100?img=21", comment: "Loved this quiz!", timestamp: "2h ago" },
  { id: 2, name: "Bob", avatar: "https://i.pravatar.cc/100?img=32", comment: "Challenging but fun.", timestamp: "5h ago" },
  { id: 3, name: "Charlie", avatar: "https://i.pravatar.cc/100?img=44", comment: "I want more like this!", timestamp: "1d ago" },
];

export default function QuizDetailPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");

  const relatedQuizzes = allQuizzes.filter((q) => q.tags.some((tag) => quiz.tags.includes(tag)));

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, { id: Date.now(), name: "You", avatar: "https://i.pravatar.cc/100?img=55", comment: newComment, timestamp: "Just now" }]);
      setNewComment("");
    }
  };

  return (
    <div className="w-full space-y-12">
        <Header />
      {/* Top Image Section */}
      <div className="relative w-full h-[350px] lg:h-[450px] my-16">
        <img src={quiz.image} alt={quiz.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 lg:p-12 space-y-2">
          <h1 className="text-3xl lg:text-4xl font-bold text-white">{quiz.title}</h1>
          <p className="text-sm lg:text-lg text-gray-200 max-w-2xl">{quiz.description}</p>
        </div>
      </div>

      {/* Creator Info & Actions */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row justify-between gap-6 items-start">
        <div className="flex gap-4 items-center">
          <img src={quiz.creator.avatar} alt={quiz.creator.name} className="w-16 h-16 rounded-full object-cover" />
          <div>
            <p className="font-semibold text-gray-900 text-lg">{quiz.creator.name}</p>
            <p className="text-gray-500 text-sm">{quiz.creator.bio}</p>
            <div className="flex gap-4 mt-1 text-gray-600 text-sm">
              <span>{quiz.creator.quizzes} quizzes</span>
              <span>{quiz.creator.followers} followers</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-1">
            <FaPlay /> Play
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-full hover:bg-gray-200 transition relative"
          >
            <FaEllipsisH />
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100"><FaShareAlt /> Share</button>
                <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100"><FaFlag /> Report</button>
                <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100"><FaUserPlus /> Follow</button>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Additional Description Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 bg-white rounded-2xl shadow p-6 mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About this Quiz</h2>
        <p className="text-gray-700 mb-2">
            This quiz is designed to challenge your math skills with a variety of fun and educational questions.
            It's perfect for students, teachers, or anyone looking to improve their logical reasoning and problem-solving abilities.
        </p>
        <p className="text-gray-700 mb-2">
            <span className="font-semibold text-yellow-700">Difficulty:</span> Intermediate <br/>
            <span className="font-semibold text-green-700">Time limit:</span> 15 minutes <br/>
            <span className="font-semibold text-red-700">Number of questions:</span> 20
        </p>
        <p className="text-gray-700">
            Remember to read each question carefully and try to answer all of them. You can retake the quiz as many times as you want to improve your score.
        </p>
    </section>

    {/* Feedback Section */}
    <section className="max-w-7xl mx-auto px-6 lg:px-8 bg-white rounded-2xl shadow p-6 mt-6 flex items-center justify-between">
    <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 font-semibold rounded-lg hover:bg-green-200 transition">
        <FaThumbsUp /> <span>120</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 font-semibold rounded-lg hover:bg-red-200 transition">
        <FaThumbsDown /> <span>5</span>
        </button>
    </div>
    <p className="text-gray-500 text-sm">Did you enjoy this quiz?</p>
    </section>

    <section className="max-w-7xl mx-auto px-6 lg:px-8 space-y-6">
    <h2 className="text-2xl font-bold text-gray-900">Comments</h2>
    <div className="flex flex-col gap-4">
        {comments.map((c) => (
        <div key={c.id} className="flex gap-4 items-start bg-white p-4 rounded-2xl shadow hover:shadow-lg transition relative">
            <img src={c.avatar} alt={c.name} className="w-12 h-12 rounded-full object-cover" />
            <div className="flex-1">
            <div className="flex justify-between items-center">
                <p className="font-semibold text-gray-900">{c.name}</p>
                <div className="flex items-center gap-2">
                <span className="text-gray-400 text-xs">{c.timestamp}</span>
                {/* Three dots menu */}
                <div className="relative">
                    <button className="p-1 rounded-full hover:bg-gray-100 transition">
                    <FaEllipsisH className="text-gray-400" />
                    </button>
                    {/* Dropdown menu */}
                    <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg hidden group-hover:block">
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100 transition text-gray-700 text-sm">
                        Report Comment
                    </button>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100 transition text-gray-700 text-sm">
                        Block User
                    </button>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100 transition text-gray-700 text-sm">
                        Copy Link
                    </button>
                    </div>
                </div>
                </div>
            </div>
            <p className="text-gray-700 mt-1">{c.comment}</p>
            <div className="flex gap-2 mt-1 text-gray-500 text-sm">
                <button className="hover:text-blue-600 transition flex items-center gap-1"><FaHeart /> Like</button>
                <button className="hover:text-blue-600 transition">Reply</button>
            </div>
            </div>
        </div>
        ))}
    </div>

    {/* Add Comment */}
    <div className="flex gap-2 mt-4">
        <input
        type="text"
        placeholder="Add a comment..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        className="flex-1 px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
        onClick={handleAddComment}
        className="px-4 py-2 bg-blue-600 text-white rounded-2xl font-semibold hover:bg-blue-700 transition"
        >
        Comment
        </button>
    </div>
    </section>

      {/* Related Quizzes */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Related Quizzes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedQuizzes.map((q) => (
            <div key={q.id} className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
              <img src={q.image} alt={q.title} className="w-full h-48 object-cover" />
              <div className="p-4 flex flex-col space-y-2">
                <h3 className="text-lg font-semibold text-gray-800">{q.title}</h3>
                <p className="text-sm text-gray-600">{q.description}</p>
                <div className="flex flex-wrap gap-1">
                  {q.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">{tag}</span>
                  ))}
                </div>
                <div className="flex space-x-2 mt-2">
                  <button className="flex-1 px-3 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition">Play</button>
                  <button className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 font-semibold rounded hover:bg-gray-100 transition">See More</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner for more quizzes */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl p-6 flex justify-between items-center mt-6">
          <div>
            <h2 className="text-xl font-bold">Explore More Quizzes</h2>
            <p className="text-sm">Find quizzes in your favorite topics and test your knowledge!</p>
          </div>
          <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
            See More
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
