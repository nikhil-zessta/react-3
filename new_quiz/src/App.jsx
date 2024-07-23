// src/App.js
import { useState } from "react";
import Header from "./component/Header";
import Quiz from "./component/Quiz";

export default function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  function handleStartQuiz() {
    setIsQuizStarted(true);
  }

  return (
    <div>
      {isQuizStarted ? (
        <Quiz />
      ) : (
        <Header onStartQuiz={handleStartQuiz} />
      )}
    </div>
  );
}
