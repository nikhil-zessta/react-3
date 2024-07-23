/* eslint-disable react/prop-types */
// src/component/Header.js
import QuizLogo from "../assets/startQuiz.png"; // Ensure the correct path to the image

export default function Header({ onStartQuiz }) {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex flex-col items-center justify-start pt-16">
      <img src={QuizLogo} alt="Quiz Logo" className="w-1/3 h-auto mb-8" />
      <h2 className="text-4xl font-bold text-white mb-4">Time To Start Quiz</h2>
      <button
        onClick={onStartQuiz}
        className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow-md hover:bg-indigo-50 transition duration-300"
      >
        Start
      </button>
    </div>
  );
}
