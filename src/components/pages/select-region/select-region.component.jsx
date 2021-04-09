import { useContext } from "react";
import QuizContext from "../../../context/quiz/quizContext";
import Card from "../../card/card.component"

const SelectRegion = ({history}) => {
  const title = "Select the region";
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const quizContext = useContext(QuizContext);
  const { createAllQuestionsQuiz, isReady } = quizContext;

  const handleSelectionRegion = async region => {
    console.log(region);
    await createAllQuestionsQuiz(region, history);
  }

  return (
    <Card
      logo
      bodyTitle={title}
      options={regions}
      eventHandler={handleSelectionRegion}
      inputName="region"
    />
  )
}

export default SelectRegion;