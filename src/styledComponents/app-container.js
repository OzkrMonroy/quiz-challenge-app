import styled from "@emotion/styled";
import device from "../utils/cssBreakpoints";

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
    display: none;
    position: absolute;
    width: 500px;
    height: 995px;
    background-color: rgba(96, 102, 208, 0.5);
    border-radius: 33px;
    transform: rotate(-40.14deg);

    @media ${device.mobileL}{
      display:block;
    }
    @media ${device.laptop}{
      transform: rotate(-57.14deg);
    }
  }

  &::before {
    left: -43%;
    top: 7%;

    @media ${device.tablet}{
      left: -14%;
      top: 36%;
    }
    @media ${device.laptop}{
      left: 4%;
      top: 21%;
    }
  }
  &::after {
    right: -36%;
    bottom: -7%;

    @media ${device.tablet}{
      right: -28%;
      bottom: 15%;
    }
    @media ${device.laptop}{
      right: -4%;
      bottom: 8%;
    }
  }
`