import { useContext, useEffect, useState } from "react";
import QuizContext from "../../../context/quiz/quizContext";
import { CardBody, CardContainer, CardHeader } from "../../card/card.styles";
import { EndGameButton, LogoComponent, ResultContent, ResultTitle } from "./results.styles";

const ResultsPage = ({history}) => {
  const quizContext = useContext(QuizContext);
  const { score, endGame } = quizContext;
  const [scoreTotal, setScoreTotal] = useState(score);

  useEffect(() => {
    if(score < 0){
      setScoreTotal(0)
    }else{
      setScoreTotal(score);
    }
  }, [score])

  const handleOnClick = () => {
    endGame();
    history.push('/');
  }

  return (
    <CardContainer>
      <CardHeader>
        <h1>Country Quiz</h1>
      </CardHeader>
      <CardBody>
        <LogoComponent/>
        <ResultTitle>Results</ResultTitle>
        <ResultContent>You got <span>{scoreTotal}</span> correct answers</ResultContent>
        <EndGameButton onClick={handleOnClick}>Try again</EndGameButton>
      </CardBody>
    </CardContainer>
  )
}

export default ResultsPage;