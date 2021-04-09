import { useContext, useEffect, useState } from "react"
import QuizContext from "../../../context/quiz/quizContext"
import Card from "../../card/card.component"

const QuestionPage = ({match, history}) => {
  const quizContext = useContext(QuizContext);
  const { allQuestions } = quizContext;
  const [questionData, setQuestionData] = useState(null)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const { questionNumber } = match.params
    const index = parseInt(questionNumber) -1;
    if(allQuestions){
      const question = allQuestions[index];
      setQuestionData(question)
      setIsLoading(false);
    }
  }, [allQuestions, match.params])

  const handleCheckAnswer = answerSelected => {
    const { questionNumber } = match.params;
    const nextPage = parseInt(questionNumber) + 1;
    const { capital } = questionData.answerData
    if (answerSelected === capital) {
      history.push(`/question/${nextPage}`)
    }else {
      alert('Te equivocaste :(');
    }
  }

  return (
    <>
    { isLoading ? (
      <p>Loading</p>
      ) : (
      <Card
        logo={true}
        bodyTitle={`What is the capital of ${questionData.answerData.name}`}
        options={questionData.posibleAnswers}
        inputName="capital"
        eventHandler={handleCheckAnswer}
      />
    )
    }
  </>
  )
}

export default QuestionPage