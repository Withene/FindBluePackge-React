import styled from 'styled-components';
import { ButtonStyleProps } from './types';

export const ButtonStyle = styled.button<ButtonStyleProps>`
  width: 16.875rem;
  height: 3.125rem;
  border-radius: 1.25rem;
  background: #f8f8f8;
  border: 0.125rem solid ${(props) => (props.BorderColor ? props.BorderColor : '#48cae4')};
  font-size: 1.25rem;
  margin: ${(props) => (props.Center ? '0rem auto' : '0rem')};
  margin-bottom: ${(props) => (props.MBottom ? '1rem' : '0rem')};
  cursor: pointer;
  transition: 0.7s;
  display: block;
  &:hover {
    background-color: ${(props) => (props.BorderColor ? props.BorderColor : '#48cae4')};
  }
  &:disabled {
    display: none;
    cursor: not-allowed;
    &:hover {
      background-color: #f8f8f8;
    }
  }
`;
