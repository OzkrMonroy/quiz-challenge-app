import Option from '../option/option.component';
import { ReactComponent as Logo } from '../../assets/adventure.svg';
import { CardBody, CardButton, CardContainer, CardFooter, CardHeader } from './card.styles';

const Card = () => {
  return (
    <CardContainer>
      <CardHeader>
        <h1>Country quiz</h1>
        <Logo className="logo"/>
      </CardHeader>
      <CardBody>
        <h2>Kuala Lumpur is the capital of</h2>
        <Option/>
        <Option/>
        <Option/>
        <Option/>
        <CardFooter>
          <CardButton>Next</CardButton>
        </CardFooter>
      </CardBody>
    </CardContainer>
  )
}

export default Card;