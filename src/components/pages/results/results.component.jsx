import { useContext } from "react";
import QuizContext from "../../../context/quiz/quizContext";

const ResultsPage = ({history}) => {
  const quizContext = useContext(QuizContext);
  const { score, endGame } = quizContext;

  const handleOnClick = () => {
    endGame();
    history.push('/');
  }

  return (
    <div>
      <h1>Fin del juego</h1>
      <p>Resultado: {score}</p>
      <button onClick={handleOnClick}>Intentar de nuevo.</button>
    </div>
  )
}

export default ResultsPage;