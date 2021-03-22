import styled from 'styled-components';

export const Main = styled.main`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Button = styled.button`
  display: block;
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  text-transform: uppercase;
  background-color: var(--yellow);
  border: 1px solid var(--yellow);
  border-radius: 20px;
  box-shadow: 4px 4px 10px var(--black);
  outline: none;
  cursor: pointer;

  &:active {
    background-color: var(--black);
    border: 1px solid var(--black);
    color: var(--yellow);
  }
`;

export const Info = styled.p`
  text-align: center;
  color: var(--black);
  font-size: 24px;
  margin-top: 80px;
`;
