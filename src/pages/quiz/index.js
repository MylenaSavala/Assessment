import { useState,useContext } from "react";
import GlobalStateContext from "../../context/GlobalStateContext";
import '../../styles/styles.scss';
import {goToResult} from "../../Router/coordinator";
import { useNavigate } from "react-router-dom";



function Quiz() {

  const navigation = useNavigate();
  const {data} = useContext(GlobalStateContext);

 
  const questions = [
    {
      questionText: "Prefiro fotografar lugares do que ler livros",
      answerOptions: [
          { answerText: "Sim", isCorrect: true },
          { answerText: "Não", isCorrect: false },
        { answerText: "OS DOIS/NENHUM DOS DOIS", isCorrect: 0 },
      ],
    },
    {
      questionText:
        "Acho melhor aplicativos/sites que sejam Lindos do que Rápido",
      answerOptions: [
          { answerText: "Sim", isCorrect: true },
          { answerText: "Não", isCorrect: false },
        { answerText: "IGUALMENTE IMPORTANTES", isCorrect: 0 },
      ],
    },
    {
      questionText: "Me enxergo mais como artista do que como uma engenheira",
      answerOptions: [
          { answerText: "Sim", isCorrect: true },
          { answerText: "Não", isCorrect: false },
          { answerText: "OS DOIS/NENHUM DOS DOIS", isCorrect: 0 },
      ],
    },
    {
      questionText: " Me apego tanto aos detalhes que às vezes demoro muito pra fazer minhas atividade",
      answerOptions: [
        { answerText: "Sim", isCorrect: true },
        { answerText: "Não", isCorrect: false }
      ],
    },
    {
      questionText: "Prefiro História ou Ciências a Matemática ou Química",
      answerOptions: [
        { answerText: "Sim", isCorrect: true },
        { answerText: "Não", isCorrect: false },
          { answerText: "PREFIRO IGUALMENTE TODAS", isCorrect:0 },
      ],
    }
  ];
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);


  const setResultQuiz = ()=>{
    data.setResult(score)
  }
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
    setResultQuiz()
  }

return (
  <div className="app">
  {showScore ? (
    <div className="score-section">
      Você pontuou {score} de 50
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
  Pontuação Atual: {score}

      </div>
    </>
  )}
  
   <input type="button" className="buttonResul" id="btnResult" value="Ver Resultados" onClick={() =>goToResult(navigation)}/>
 
</div>
    )
}

export default Quiz;
