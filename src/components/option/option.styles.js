import styled from "@emotion/styled";
import { ReactComponent as CorrectIcon } from '../../assets/correctAnswer.svg';
import { ReactComponent as IncorrectIcon } from '../../assets/incorrectAnswer.svg'

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
    background-color: ${props => props.isChecking && props.isCorrect ? props.optionColor : ''};
    color: ${props => props.isChecking && props.isCorrect ? '#fff' : '#6066d0b3'};
    position: relative;

    & span {
      display: block;
      width: 15%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
    }
    & p {
      width: 70%;
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
export const IconContainer = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.isChecking ? 1 : 0};
`
export const CorrectAnswerIcon = styled(CorrectIcon)`
  width: 35px;
  height: 35px;
`
export const IncorrectAnswerIcon = styled(IncorrectIcon)`
  width: 35px;
  height: 35px;
`