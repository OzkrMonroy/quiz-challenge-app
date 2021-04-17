import styled from "@emotion/styled";
import device from "./utils/cssBreakpoints";

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
    @media ${device.ipadPro}{
      left: -14%;
      top: 55%;
      height: 1000px;
      width: 700px;
    }
    @media ${device.ipadPropLandscape}{
      left: 2%;
      top: 49%;
      height: 1000px;
      width: 700px;
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
    @media ${device.ipadPro}{
      right: -26%;
      bottom: 51%;
      width: 900px;
      height: 900px;
    }
    @media ${device.ipadPropLandscape}{
      right: -16%;
      bottom: 53%;
      width: 900px;
      height: 900px;
    }
  }
`
export const CreatedBy = styled.p`
  position: absolute;
  bottom: 0;
  display: block;
  width: 100%;
  text-align: center;
  color: #F2F2F2;

  & span {
    font-weight: 700;
  }
`