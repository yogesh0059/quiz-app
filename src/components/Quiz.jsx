import { useState } from "react";
import questions from "../data/questions";
import "../styles/quiz.css";
import bgImage from "../assets/bg.jpg"; // Background image from assets

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div
      className="quiz-container"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="quiz-box">
        {showScore ? (
          <div className="score-section">
            <h2>Quiz Complete!</h2>
            <p>Your Score: {score} / {questions.length}</p>
          </div>
        ) : (
          <>
            <h3 className="question">{questions[current].question}</h3>
            <div className="options">
              {questions[current].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="option-button"
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
