import { useContext, useEffect, useState } from "react"
import QuizContext from "../../../context/quiz/quizContext"
import Card from "../../card/card.component"
import Spinner from "../../spinner/spinner";

const QuestionPage = ({history}) => {
  const quizContext = useContext(QuizContext);
  const { question, checkAnswer, totalAskedQuestions, totalQuestions, typeOfQuiz } = quizContext;
  const [questionsAsked, setQuestionsAsked] = useState(1);
  const [titleToShow, setTitleToShow] = useState('');
  const showFlagIcon = typeOfQuiz === 'Flag';

  useEffect(() => {
    setQuestionsAsked(totalAskedQuestions)
    if(question){
      const title = typeOfQuiz === 'Flag' ? 'Which country does this flag belong to?  ' : `What is the capital of ${question.name}?`;
      setTitleToShow(title)
    }
  }, [totalAskedQuestions, question, typeOfQuiz])

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
        bodyTitle={titleToShow}
        options={question.posibleAnswers}
        inputName={question.name}
        eventHandler={handleCheckAnswer}
        showFlag={showFlagIcon}
        flagUrl={question.name}
      />
      ) : (
        <Spinner/>
    )
    }
  </>
  )
}

export default QuestionPage