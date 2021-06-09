import { useContext, useEffect, useState } from "react"
import QuizContext from "../../context/quiz/quizContext"
import { homeRoute, resultsRoute } from "../../utils/routes";
import { capitalTitle, flagTitle } from "../../utils/strings";
import Card from "../../components/card/card.component";
import Spinner from "../../components/spinner/spinner";

const QuestionPage = ({history}) => {
  const quizContext = useContext(QuizContext);
  const { question, checkAnswer, totalQuestionsAsked, totalQuestions, typeOfQuiz } = quizContext;
  const [questionsAsked, setQuestionsAsked] = useState(1);
  const [titleToShow, setTitleToShow] = useState('');
  const showFlagIcon = typeOfQuiz === 'Flag';

  useEffect(() => {
    if(!typeOfQuiz){
      history.push(`${homeRoute}`)
    }
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
    setQuestionsAsked(totalQuestionsAsked);
    if(question){
      const title = setTitle(typeOfQuiz, question);
      setTitleToShow(title);
    }
  }, [totalQuestionsAsked, question, typeOfQuiz, history]);

  const handleCheckAnswer = answerSelected => {
    const { answer } = question;
    const isCorrect = answerSelected === answer;

    checkAnswer(isCorrect);

    if(questionsAsked === totalQuestions){
      setTimeout(() => {
        history.replace(`${resultsRoute}`);
      }, 1900);
      return;
    }
  }

  const setTitle = (typeOfQuiz, question) => {
    const title = typeOfQuiz === 'Flag' ? flagTitle : `${capitalTitle} ${question.content}?`;
    return title;
  }

  return (
    <>
    { question ? (
      <Card
        bodyTitle={titleToShow}
        options={question.posibleAnswers}
        inputName={question.inputName}
        eventHandler={handleCheckAnswer}
        showFlag={showFlagIcon}
        flagUrl={question.content}
        showCounter={true}
      />
      ) : (
        <Spinner/>
    )
    }
  </>
  )
}

export default QuestionPage