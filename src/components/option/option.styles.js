import styled from "@emotion/styled";

export const OptionContainer = styled.div`
  overflow: hidden;
  color: #6066d0b3;
  margin-bottom: 2rem;
  position: relative;

  & input {
    visibility: hidden;
    appearance: none;
    position: absolute;
  }

  & label {
    display: flex;
    width: 100%;
    font-size: 1.2rem;
    border: 2px solid ${props => props.isChecking && props.isCorrect ? props.optionColor : '#6066d0b3'};
    border-radius: .75rem;
    transition: all .2s ease;
    background-color: ${props => props.isChecking && props.isCorrect ? props.optionColor : '#fff'};
    color: ${props => props.isChecking && props.isCorrect ? '#fff' : '#6066d0b3'};

    & span {
      display: block;
      width: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
    }
    & p {
      width: 80%;
    }
  }

  &:hover label{
    background-color: #F9A826;
    border-color: #F9A826;
    color: #fff;
    cursor: pointer;
  }
  & input:checked + label{
    background-color: ${props => props.optionColor};
    border-color: ${props => props.optionColor};
    color: #fff;
  }
`
// background: #EA8282;
// background: #60BF88;
// #6066d0b3
