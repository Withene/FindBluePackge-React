import styled from 'styled-components';
import { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    opacity: 0.2
  }
  to {
    opacity: 1
  }
`;

export const Container = styled.div`
  min-height: 165.31px;
  max-height: 265.31px;
  background-color: #fff;
  padding: 1em;
  border-radius: 9px;
  margin-bottom: 35px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  animation: ${rotate} 1.8s forwards;
`;
export const Inside = styled.div`
  height: 100%;
`;

export const FirtsTitle = styled.h1`
  /* font-weight: 400; */
  font-weight: normal;
  font-size: clamp(16px, 3vw, 20px);
  color: #0077b6;
`;
export const SecondTitle = styled.h2`
  /* font-weight: 400; */
  font-weight: normal;
  margin-top: 5px;
  font-size: clamp(19px, 3vw, 20px);
  color: #000;
`;

export const ThereTitle = styled.h2`
  /* font-weight: 400; */
  font-weight: 400;
  align-self: baseline;
  font-size: clamp(15px, 3vw, 16px);
  color: #000;
`;

export const Timer = styled.h2`
  /* font-weight: 400; */
  font-weight: normal;
  margin-top: 5px;
  font-size: clamp(15px, 3vw, 19px);
  color: #0077b6;
  @media (max-width: 30rem) {
    margin-top: 10px;
  }
`;
export const FlexItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  @media (max-width: 30rem) {
    flex-direction: column;
  }
`;
