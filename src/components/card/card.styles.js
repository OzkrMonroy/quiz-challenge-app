import styled from '@emotion/styled';

export const CardContainer = styled.div`
  width: 35%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
`
export const CardHeader = styled.div`
  display: flex;
  margin-bottom: .5rem;
  position: relative;

  & h1 {
    color: #fff;
    text-transform: uppercase;
  }
  & .logo {
    position: absolute;
    height: 150px;
    width: 150px;
    right: 10%;
  }
`
export const CardBody = styled.div`
  background-color: #ffffff;
  border-radius: 1.5rem;
  padding: 3rem 1.5rem 2rem;;

  & h2 {
    color: #2F527B;
    margin-top: 0;
    margin-bottom: 2rem;
  }
`