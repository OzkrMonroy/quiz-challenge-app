import styled from "@emotion/styled";

export const OptionContainer = styled.div`
  display: flex;
  border-radius: .75rem;
  border: 2px solid rgba(96, 102, 208, 0.7);
  color: rgba(96, 102, 208, 0.8);
  transition: all .2s ease;
  margin-bottom: 2rem;

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
    font-size: 1.2rem;
  }

  &:hover {
    background-color: #F9A826;
    border-color: #F9A826;
    color: #fff;
    cursor: pointer;
  }
`