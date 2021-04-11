import { useContext, useEffect, useState } from "react"
import QuizContext from "../../../context/quiz/quizContext"
import Card from "../../card/card.component"

const QuestionPage = ({history}) => {
  const quizContext = useContext(QuizContext);
  const { question, checkAnswer, score, totalAskedQuestions, totalQuestions } = quizContext;
  const [questionsAsked, setQuestionsAsked] = useState(1);

  useEffect(() => {
    setQuestionsAsked(totalAskedQuestions)
  }, [totalAskedQuestions])

  const handleCheckAnswer = answerSelected => {
    const { capital } = question
    const isCorrect = answerSelected === capital;

    checkAnswer(isCorrect);

    if(questionsAsked === totalQuestions){
      history.push('/results');
      return;
    }
  }

  return (
    <>
    {console.log(score, questionsAsked)}
    { question ? (
      <Card
        logo={true}
        bodyTitle={`What is the capital of ${question.name}`}
        options={question.posibleAnswers}
        inputName={question.name}
        eventHandler={handleCheckAnswer}
      />
      ) : (
        <p>Loading</p>
    )
    }
  </>
  )
}

export default QuestionPage