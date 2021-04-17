import { useContext } from "react";
import QuizContext from "../../context/quiz/quizContext";
import { optionsQuiz } from "../../utils/optionsArray";
import { selectRegionRoute } from "../../utils/routes";
import { homeTitle } from "../../utils/strings";
import Card from "../../components/card/card.component";

const Home = ({history}) => {
  const quizContext = useContext(QuizContext);
  const { setTypeOfQuiz } = quizContext;

  const handleSetTypeOfQuiz = quizType => {
    setTypeOfQuiz(quizType);
    history.push(`${selectRegionRoute}`);
  }

  return (
    <Card
      bodyTitle={homeTitle}
      options={optionsQuiz}
      eventHandler={handleSetTypeOfQuiz}
      inputName="quizType"
    />
  )
}
export default Home;