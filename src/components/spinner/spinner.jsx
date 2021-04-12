import { CardBody, CardContainer, CardHeader } from '../card/card.styles';
import { ReactComponent as Logo } from '../../assets/adventure.svg';
import './spinner.css';

const Spinner = () => (
  <CardContainer>
    <CardHeader>
      <h1>Country quiz</h1>
      <Logo className="logo"/>
    </CardHeader>
    <CardBody>
      <div className="sk-folding-cube">
        <div className="sk-cube1 sk-cube"></div>
        <div className="sk-cube2 sk-cube"></div>
        <div className="sk-cube4 sk-cube"></div>
        <div className="sk-cube3 sk-cube"></div>
      </div>
    </CardBody>
  </CardContainer>
)

export default Spinner;