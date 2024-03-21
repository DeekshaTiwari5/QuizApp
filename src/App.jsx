import { useState } from "react";
import "./App.css";
import questions from "./constants/question.json";
import Question from "./components/Question";
import Result from "./components/Result";

function App() {
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [userAnswers, setuserAnswers] = useState([]);

  const handleNextClick = (isCorrect) => {
    setcurrentQuestion(currentQuestion + 1);
    setuserAnswers([...userAnswers, isCorrect]);
  };

  const resetQuiz = () => {
    setcurrentQuestion(0);
    setuserAnswers([]);
  };
  return (
    <>
      <h1 className="App">Quiz App</h1>
      {/* Question Component */}
      {currentQuestion < questions.length ? (
        <Question
          question={questions[currentQuestion]}
          onAnswerClick={handleNextClick}
        />
      ):(
      // {/* Result component */}
      // {currentQuestion < questions.length && (
        <Result
          userAnswers={userAnswers}
          questions={questions}
          resetQuiz={resetQuiz}
        />
      )}
    </>
  );
}

export default App;
