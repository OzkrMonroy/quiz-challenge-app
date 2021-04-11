import { useContext } from "react";
import QuizContext from "../../../context/quiz/quizContext";
import Card from "../../card/card.component";

const Home = ({history}) => {
  const optionsQuiz = ["Capital", "Flag"];
  const title = "What kind of quiz do you want to play?"
  const quizContext = useContext(QuizContext);
  const { setTypeOfQuiz } = quizContext;

  const handleSetTypeOfQuiz = quizType => {
    setTypeOfQuiz(quizType);
    history.push('/select-region');
  }

  return (
    <Card
      logo={true}
      bodyTitle={title}
      options={optionsQuiz}
      eventHandler={handleSetTypeOfQuiz}
      inputName="quizType"
    />
  )
}
export default Home;