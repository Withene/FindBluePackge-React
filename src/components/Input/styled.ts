import styled from 'styled-components';
import { CoverProps } from './types';

export const Inpu = styled.input<CoverProps>`
  height: 3.125rem;
  border-radius: 1.25rem;
  background: rgba(3, 4, 90, 5%);
  margin-top: 0.625rem;
  width: 100%;
  outline: none;
  padding: 0rem 1rem 0rem 1rem;
  border: 0;
  font-size: 1rem;
`;
export const Label = styled.label`
  font-size: 1.5rem;
  line-height: 121%;
  margin: 0 0 0rem 0.3125rem;
  letter-spacing: 0.0625rem;
  font-weight: 400;
  align-items: center;
  color: rgba(3, 4, 90, 100%);
`;
export const Container = styled.div<CoverProps>`
  display: block;
  margin-bottom: ${(props) => (props.Mbottom ? props.Mbottom : 2.375)}rem;
  max-width: ${(props) => (props.maxwidth ? props.maxwidth : 31.2606)}rem;
`;
