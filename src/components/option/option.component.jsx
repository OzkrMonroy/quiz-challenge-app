import { useContext, useState, useEffect } from "react";
import QuizContext from "../../context/quiz/quizContext";
import { correctColor, defaultColor, incorrectColor } from "../../utils/colors";
import { letterOptions } from "../../utils/optionsArray";
import { CorrectAnswerIcon, IconContainer, IncorrectAnswerIcon, OptionContainer } from "./option.styles";

const Option = ({optionText, index, optionEventHandler, inputName}) => {
  const quizContext = useContext(QuizContext);
  const { question, selectAnswerToCheck, selectedAnswer, isChecking } = quizContext;
  const [optionColor, setOptionColor] = useState(defaultColor);
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    if(question){
      const correct = optionText === question.answer;
      let optionIsSelected = selectedAnswer === optionText;
      if (isChecking) {
        if(!correct && optionIsSelected){
          setOptionColor(incorrectColor);
        }else if(correct && optionIsSelected){
          setOptionColor(correctColor);
        }else if(correct && !optionIsSelected){
          setOptionColor(correctColor);
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
    <OptionContainer 
      onChange={handleOnChange} 
      optionColor={optionColor} 
      isChecking={isChecking} 
      isCorrect={isCorrect}
    >
      <input 
        type="radio" 
        name={inputName} 
        value={optionText} 
        id={optionText}
      />
      <label htmlFor={optionText}>
        <span>{letterOptions[index]}</span>
        <p>{optionText}</p>
        <IconContainer isChecking={isChecking}>
          {isCorrect ? <CorrectAnswerIcon/> : <IncorrectAnswerIcon/>}
        </IconContainer>
      </label>
    </OptionContainer>
  )
}

export default Option;