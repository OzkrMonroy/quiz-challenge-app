import Option from '../option/option.component';
import { ReactComponent as Logo } from '../../assets/adventure.svg';
import { CardBody, CardButton, CardContainer, CardFooter, CardHeader, CardQuestionContainer } from './card.styles';
import { useState } from 'react';

const Card = ({logo, bodyTitle, options, eventHandler, inputName, showFlag, flagUrl}) => {
  const [optionSelected, setOptionSelected] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const handleOptionClick = optionValue => {
    setIsDisabled(false);
    setOptionSelected(optionValue);
  }

  return (
    <CardContainer>
      <CardHeader>
        <h1>Country quiz</h1>
        {logo && (<Logo className="logo"/>)}
      </CardHeader>
      <CardBody>
        <CardQuestionContainer>
          {showFlag && (<img src={flagUrl} alt="question flag"/>)}
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
        <CardFooter>
          <CardButton onClick={() => eventHandler(optionSelected)} disabled={isDisabled}>Next</CardButton>
        </CardFooter>
      </CardBody>
    </CardContainer>
  )
}

export default Card;