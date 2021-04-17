import { useContext, useEffect } from "react";
import QuizContext from "../../context/quiz/quizContext";
import { homeRoute } from "../../utils/routes";
import { CardBody, CardContainer, CardHeader } from "../../components/card/card.styles";
import { EndGameButton, HighScoreLogo, LowScoreLogo, ResultContent, ResultTitle } from "./results.styles";

const ResultsPage = ({history}) => {
  const quizContext = useContext(QuizContext);
  const { score, endGame, typeOfQuiz } = quizContext;

  useEffect(() => {
    if(!typeOfQuiz){
      history.push(`${homeRoute}`)
    }
  }, [typeOfQuiz, history]);

  const handleOnClick = () => {
    endGame();
    history.push(`${homeRoute}`);
  }

  return (
    <CardContainer>
      <CardHeader>
        <h1>Country Quiz</h1>
      </CardHeader>
      <CardBody>
        {score < 5 ? <LowScoreLogo/> : <HighScoreLogo/>}
        <ResultTitle>Results</ResultTitle>
        <ResultContent>You got <span>{score}</span> correct answers</ResultContent>
        <EndGameButton onClick={handleOnClick}>Try again</EndGameButton>
      </CardBody>
    </CardContainer>
  )
}

export default ResultsPage;