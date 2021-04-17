import styled from '@emotion/styled';
import { ReactComponent as WinnerLogo } from '../../assets/winners.svg';
import { ReactComponent as LoserLogo } from '../../assets/lowScoreIcon.svg';
import { css } from '@emotion/react';

const logoStyle = css`
  width: 250px;
  height: 250px;
  margin: 0 auto;
  display: block;
  margin-top: -4rem;
`

export const HighScoreLogo = styled(WinnerLogo)`
  ${logoStyle}
`
export const LowScoreLogo = styled(LoserLogo)`
  ${logoStyle}
`

export const ResultTitle = styled.p`
  text-align: center;
  font-size: 3rem;
  margin: 0;
  color: #1D355D;
  font-weight: 700;
`
export const ResultContent = styled.p`
  text-align: center;
  color: #1D355D;
  margin: 0;
  margin-bottom: 3rem;
  font-size: 2rem;

  & span {
    color: #6FCF97;
    font-size: 1.5rem;
    font-weight: 700;
    font-size: 2.5rem;
  }
`
export const EndGameButton = styled.button`
  margin: 0 auto;
  border: 2px solid #1D355D;
  display: block;
  background-color: #fff;
  color: #1D355D;
  padding: 1rem 3.5rem;
  border-radius: .75rem;
  font-weight: 700;
  cursor: pointer;
  font-size: 1.2rem;
  outline: none;
`