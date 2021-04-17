import { CardBody, CardContainer, CardHeader, CardLogo } from '../card/card.styles';
import './spinner.css';

const Spinner = () => (
  <CardContainer>
    <CardHeader>
      <h1>Country quiz</h1>
      <CardLogo/>
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