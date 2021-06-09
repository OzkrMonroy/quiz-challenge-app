import Option from '../option/option.component';
import { CardBody, CardButton, CardContainer, CardCounter, CardErrorContainer, CardFooter, CardHeader, CardLogo, CardQuestionContainer } from './card.styles';
import { useContext, useEffect, useState } from 'react';
import QuizContext from '../../context/quiz/quizContext';
import { withRouter } from 'react-router';

const Card = ({bodyTitle, options, eventHandler, inputName, flagUrl, location }) => {
  const [optionSelected, setOptionSelected] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [showCounter, setShowCounter] = useState(false);
  const [showFlag, setShowFlag] = useState(false);
  const quizContext = useContext(QuizContext);
  const { totalQuestionsAsked, totalQuestions, error, isChecking, typeOfQuiz } = quizContext;

  useEffect(() => {
    if(location.pathname === '/question'){
      setShowCounter(true);
    }
    if(typeOfQuiz === 'Flag' && location.pathname === '/question'){
      setShowFlag(true);
    }
  }, [location, typeOfQuiz]);

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
        {showCounter && <CardCounter>{totalQuestionsAsked}/{totalQuestions}</CardCounter>}
        {error && <CardErrorContainer>Ha ocurrido un error.</CardErrorContainer>}
        <CardFooter>
          {!isChecking && <CardButton onClick={() => eventHandler(optionSelected)} disabled={isDisabled}>Next</CardButton>}
        </CardFooter>
      </CardBody>
    </CardContainer>
  )
}

export default withRouter(Card);