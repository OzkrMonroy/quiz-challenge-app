import Option from '../option/option.component';
import { CardBody, CardButton, CardContainer, CardCounter, CardFooter, CardHeader, CardLogo, CardQuestionContainer } from './card.styles';
import { useContext, useState } from 'react';
import QuizContext from '../../context/quiz/quizContext';

const Card = ({bodyTitle, options, eventHandler, inputName, showFlag, flagUrl }) => {
  const [optionSelected, setOptionSelected] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const quizContext = useContext(QuizContext);
  const { question, totalQuestionsAsked, totalQuestions } = quizContext;

  const handleOptionClick = optionValue => {
    setIsDisabled(false);
    setOptionSelected(optionValue);
  }

  return (
    <CardContainer>
      <CardHeader>
        <h1>Country quiz</h1>
        <CardLogo/>
      </CardHeader>
      <CardBody>
        <CardQuestionContainer>
          {showFlag && (<img src={flagUrl} alt={`${inputName} flag`}/>)}
          <h2>{bodyTitle}</h2>
        </CardQuestionContainer>
        {options.map((option, index) => (
          <Option 
            optionText={option} 
            index={index} 
            key={index} 
            optionEventHandler={handleOptionClick} 
            inputName={inputName}/>
          ))}
        {question && <CardCounter>{totalQuestionsAsked}/{totalQuestions}</CardCounter>}
        <CardFooter>
          <CardButton onClick={() => eventHandler(optionSelected)} disabled={isDisabled}>Next</CardButton>
        </CardFooter>
      </CardBody>
    </CardContainer>
  )
}

export default Card;