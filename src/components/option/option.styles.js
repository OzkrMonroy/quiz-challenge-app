import styled from "@emotion/styled";

export const OptionContainer = styled.div`
  overflow: hidden;
  color: rgba(96, 102, 208, 0.8);
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
    border: 2px solid rgba(96, 102, 208, 0.7);
    border-radius: .75rem;
    transition: all .2s ease;

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
    background-color: #F9A826;
    border-color: #F9A826;
    color: #fff;
  }
`