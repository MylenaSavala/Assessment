import { useState,useContext } from "react";
import GlobalStateContext from "../../context/GlobalStateContext";

function Result() {


  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);


  function handleAnswer(isCorrect) {
    if (isCorrect) {
      setScore(score + 10);
    }else if (isCorrect===false){
      setScore(score - 10);
    }else{
      setScore(score);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

return (
  <div className="app">
  {showScore ? (
    <div className="score-section">
      Você pontuou {score} de {questions.length}
    </div>
  ) : (
    <>
      <div className="question-section">
        <div className="question-count">
          <span>Questão {currentQuestion + 1}</span>/{questions.length}
        </div>
        <div className="question-text">
          {questions[currentQuestion].questionText}
        </div>
      </div>

      <div className="answer-section">
        {questions[currentQuestion].answerOptions.map(
          (answerOption, index) => (
            <button
              onClick={() => handleAnswer(answerOption.isCorrect)}
              key={index}
            >
              {answerOption.answerText}
            </button>
          )
        )}
      </div>
    </>
  )}
</div>
    )
}

export default Result;
