import React from 'react';
export interface InputProp extends React.HTMLAttributes<HTMLElement> {
  Text?: string;
  inputType: string;
  event?: (event: any) => void;
  eventBlur?: (event: any) => void;
  value?: string;
  name: string;
  maxwidth?: string;
  Mbottom?: string;
}

export interface CoverProps {
  maxwidth?: string;
  Mbottom?: string;
}

//ONLY FOR TESTS BY JEST

export interface InputTestProps extends HTMLElement {
  value?: string;
}
