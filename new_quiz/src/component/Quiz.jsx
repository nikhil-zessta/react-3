import  { useState, useEffect } from 'react';
import questionsData from '../question';
import Result from './Result';

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(10);
  const [progressWidth, setProgressWidth] = useState(100);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const currentQuestion = questionsData[currentQuestionIndex];

  useEffect(() => {
    // Shuffle answers whenever the question changes
    if (currentQuestion) {
      const answers = [...currentQuestion.answers];
      setShuffledAnswers(answers.sort(() => Math.random() - 0.5));
    }
  }, [currentQuestionIndex, currentQuestion]);

  useEffect(() => {
    // Timer for each question
    if (timeRemaining > 0 && !isAnswered) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => prev - 0.1);
        setProgressWidth((timeRemaining - 0.1) / 10 * 100);
      }, 100);

      return () => clearInterval(timer);
    } else if (timeRemaining <= 0 && !isAnswered) {
      // Move to next question if time runs out
      setIsAnswered(true);
      setTimeout(() => {
        setIsAnswered(false);
        setSelectedAnswer(null);
        setTimeRemaining(10);
        setProgressWidth(100);
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      }, 2000);
    }
  }, [timeRemaining, isAnswered]);

  function handleAnswerClick(answer) {
    setSelectedAnswer(answer);
    setIsAnswered(true);
    const correct = answer === currentQuestion.answers[0];
    setIsCorrect(correct);
    if (correct) {
      setCorrectAnswers((prev) => prev + 1);
    }
    setTimeout(() => {
      setIsAnswered(false);
      setSelectedAnswer(null);
      setTimeRemaining(10);
      setProgressWidth(100);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }, 2000);
  }

  if (currentQuestionIndex >= questionsData.length) {
    return <Result correctAnswers={correctAnswers} totalQuestions={questionsData.length} />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">
        <div className="w-full bg-gray-300 rounded-full h-4 mb-6 relative overflow-hidden">
          <div
            className="bg-blue-600 h-4 absolute left-0 top-0 transition-all duration-[100ms] ease-linear"
            style={{ width: `${progressWidth}%` }}
          ></div>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">{currentQuestion.text}</h2>
        <div className="grid grid-cols-1 gap-4">
          {shuffledAnswers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(answer)}
              className={`px-6 py-3 rounded-lg text-left border 
              ${isAnswered ? 
                (answer === selectedAnswer ? (isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white') : 'bg-gray-200')
                : 'bg-white text-gray-700 hover:bg-blue-500 hover:text-white'}
              transition duration-300`}
              disabled={isAnswered}
            >
              {answer}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
