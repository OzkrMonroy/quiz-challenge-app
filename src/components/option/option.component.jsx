import { OptionContainer } from "./option.styles";

const Option = ({optionText, index, optionEventHandler}) => {
  const letterOptions = ["A", "B", "C", "D"];

  const handleClick = () => {
    optionEventHandler(optionText);
    console.log(optionText);
  }

  return (
    <OptionContainer onClick={handleClick}>
      <span>{letterOptions[index]}</span>
      <p>{optionText}</p>
    </OptionContainer>
  )
}

export default Option;