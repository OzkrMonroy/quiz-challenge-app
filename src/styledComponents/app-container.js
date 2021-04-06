import styled from "@emotion/styled";

export const AppContainer = styled.div`
  background-color: rgb(82, 86, 161);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 2rem 0;

  &::before, &::after {
    content: '';
    display: block;
    position: absolute;
    width: 875px;
    height: 995px;
    background-color: rgba(96, 102, 208, 0.5);
    border-radius: 33px;
  }
  &::before {
    left: -14%;
    top: 36%;
    transform: rotate(-57.14deg);
  }
  &::after {
    right: -37%;
    bottom: -2%;
    transform: rotate(-57.14deg);
  }
`