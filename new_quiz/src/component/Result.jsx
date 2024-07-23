/* eslint-disable react/prop-types */
// src/component/Result.js
import CircularProgressBar from './CircularProgressBar';

export default function Result({ correctAnswers, totalQuestions }) {
  const incorrectAnswers = totalQuestions - correctAnswers;
  const percentage = (correctAnswers / totalQuestions) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Quiz Results</h2>
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800">Correct Answers</h3>
            <p className="text-xl text-gray-700">{correctAnswers} out of {totalQuestions}</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800">Mistakes</h3>
            <p className="text-xl text-gray-700">{incorrectAnswers}</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex items-center justify-center">
            <CircularProgressBar percentage={percentage} />
          </div>
        </div>
      </div>
    </div>
  );
}
