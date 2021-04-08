import Option from '../option/option.component';
import { ReactComponent as Logo } from '../../assets/adventure.svg';
import { CardBody, CardButton, CardContainer, CardFooter, CardHeader } from './card.styles';
import { useState } from 'react';

const Card = ({logo, bodyTitle, options, eventHandler}) => {
  const [optionSelected, setOptionSelected] = useState("");

  const handleOptionClick = optionValue => {
    setOptionSelected(optionValue);
  }

  return (
    <CardContainer>
      <CardHeader>
        <h1>Country quiz</h1>
        {logo && (<Logo className="logo"/>)}
      </CardHeader>
      <CardBody>
        <h2>{bodyTitle}</h2>
        {options.map((option, index) => (
          <Option optionText={option} index={index} key={index} optionEventHandler={handleOptionClick}/>
        ))}
        <CardFooter>
          <CardButton onClick={() => eventHandler(optionSelected)}>Next</CardButton>
        </CardFooter>
      </CardBody>
    </CardContainer>
  )
}

export default Card;