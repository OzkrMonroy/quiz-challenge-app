import { useContext, useEffect } from "react";
import QuizContext from "../../context/quiz/quizContext";
import { regions } from "../../utils/optionsArray";
import { homeRoute } from "../../utils/routes";
import { selectRegionTitle } from "../../utils/strings";
import Card from "../../components/card/card.component"

const SelectRegion = ({history}) => {
  const quizContext = useContext(QuizContext);
  const { createFirstQuestion, typeOfQuiz } = quizContext;

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    if(!typeOfQuiz){
      history.push(`${homeRoute}`)
    }
  }, [typeOfQuiz, history]);

  const handleSelectionRegion = async region => {
    await createFirstQuestion(region, history);
  }

  return (
    <Card
      bodyTitle={selectRegionTitle}
      options={regions}
      eventHandler={handleSelectionRegion}
      inputName="region"
    />
  )
}

export default SelectRegion;