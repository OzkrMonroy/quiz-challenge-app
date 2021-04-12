import { useContext, useEffect, useState } from "react"
import QuizContext from "../../../context/quiz/quizContext"
import Card from "../../card/card.component"
import Spinner from "../../spinner/spinner";

const QuestionPage = ({history}) => {
  const quizContext = useContext(QuizContext);
  const { question, checkAnswer, totalAskedQuestions, totalQuestions } = quizContext;
  const [questionsAsked, setQuestionsAsked] = useState(1);

  useEffect(() => {
    setQuestionsAsked(totalAskedQuestions)
  }, [totalAskedQuestions])

  const handleCheckAnswer = answerSelected => {
    const { capital } = question
    const isCorrect = answerSelected === capital;

    checkAnswer(isCorrect);

    if(questionsAsked === totalQuestions){
      setTimeout(() => {
        history.push('/results');
      }, 1900);
      return;
    }
  }

  return (
    <>
    { question ? (
      <Card
        logo={true}
        bodyTitle={`What is the capital of ${question.name}?`}
        options={question.posibleAnswers}
        inputName={question.name}
        eventHandler={handleCheckAnswer}
      />
      ) : (
        <Spinner/>
    )
    }
  </>
  )
}

export default QuestionPage