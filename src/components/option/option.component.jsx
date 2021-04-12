import { useContext, useState, useEffect } from "react";
import QuizContext from "../../context/quiz/quizContext";
import { OptionContainer } from "./option.styles";

const Option = ({optionText, index, optionEventHandler, inputName}) => {
  const letterOptions = ["A", "B", "C", "D", "E", "F"];
  const quizContext = useContext(QuizContext);
  const { question, selectAnswerToCheck, selectedAnswer, isChecking } = quizContext;
  const [optionColor, setOptionColor] = useState('#F9A826');
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    if(question){
      const correct = optionText === question.capital;
      let optionIsSelected = selectedAnswer === optionText;
      if (isChecking) {
        if(!correct && optionIsSelected){
          setOptionColor('#EA8282');
        }else if(correct && optionIsSelected){
          setOptionColor('#60BF88');
        }else if(correct && !optionIsSelected){
          setOptionColor('#60BF88');
        }
      }
      setIsCorrect(correct);
    }
  }, [optionText, question, selectedAnswer, isChecking])

  const handleOnChange = () => {
    optionEventHandler(optionText);
    selectAnswerToCheck(optionText);
  }

  return (
    <OptionContainer onChange={handleOnChange} optionColor={optionColor} isChecking={isChecking} isCorrect={isCorrect}>
      <input 
        type="radio" 
        name={inputName} 
        value={optionText} 
        id={optionText}
      />
      <label htmlFor={optionText}>
        <span>{letterOptions[index]}</span>
        <p>{optionText}</p>
      </label>
    </OptionContainer>
  )
}

export default Option;