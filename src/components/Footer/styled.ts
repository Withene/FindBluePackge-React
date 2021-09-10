import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { FooterProps } from './types';
const rotate = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;
export const Block = styled.div``;

export const Relative = styled.div<FooterProps>`
  position: relative;
  display: flex;

  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-end;
  height: 27rem;
  overflow: hidden;
  z-index: -5500;

  @media (max-width: 30rem) {
    margin-top: -5rem;
    height: ${(props) => (props.height ? props.height : '10')}rem;
  }
`;

export const Animation = styled.img`
  position: absolute;
  z-index: -500;
  /*  height: 100vh; */
  bottom: 0;
  left: 0;
  right: 0;
  animation: ${rotate} 3.8s forwards;
  @media (max-width: 30rem) {
    height: 9rem;
  }
`;
