import { OptionContainer } from "./option.styles";

const Option = ({optionText, index, optionEventHandler, inputName}) => {
  const letterOptions = ["A", "B", "C", "D", "E", "F"];

  const handleClick = () => {
    optionEventHandler(optionText);
  }

  return (
    <OptionContainer onClick={handleClick}>
      <input type="radio" name={inputName} value={optionText} id={optionText}/>
      <label htmlFor={optionText}>
        <span>{letterOptions[index]}</span>
        <p>{optionText}</p>
      </label>
    </OptionContainer>
  )
}

export default Option;