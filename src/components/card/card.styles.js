import styled from '@emotion/styled';
import device from '../../utils/cssBreakpoints';
import { ReactComponent as Logo } from '../../assets/adventure.svg';

export const CardContainer = styled.div`
  width: 95%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;

  @media ${device.mobileL} {
    width: 55%;
  }
  @media ${device.tablet}{
    width: 60%;
  }
  @media ${device.laptop}{
    width: 35%;
  }
`
export const CardHeader = styled.div`
  display: flex;
  margin-bottom: .5rem;
  position: relative;

  & h1 {
    color: #fff;
    text-transform: uppercase;
  }
`

export const CardLogo = styled(Logo)`
  position: absolute;
  height: 110px;
  width: 110px;
  top: 50%;
  right: 5%;

  @media ${device.tablet}{
    height: 150px;
    width: 150px;
    right: 10%;
    top:0;
  }
`

export const CardBody = styled.div`
  background-color: #ffffff;
  border-radius: 1.5rem;
  padding: 3rem 1.5rem 2rem;;
`
export const CardQuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & img {
    display: block;
    width: 195px;
    height: 120px;
    margin-bottom: 1rem;
  }

  & h2 {
    color: #2F527B;
    margin-top: 0;
    margin-bottom: 2rem;
  }
`

export const CardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const CardButton = styled.button`
  outline: none;
  border: none;
  color: white;
  background-color: #F9A826;
  box-shadow: 0px 2px 4px rgba(252, 168, 47, 0.4);
  border-radius: 12px;
  font-weight: 700;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;

  &:disabled {
    background-color: gray;
    cursor: unset;
    box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.4);
  }
`
export const CardCounter = styled.p`
  color: #2F527B;
  text-align: center;
  font-weight: 700;
`