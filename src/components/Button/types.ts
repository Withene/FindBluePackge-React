import React from 'react';
export type ButtonStyleProps = {
  Center: boolean;
  BorderColor?: string;
  MBottom?: boolean;
};

export interface ButtonProp extends React.HTMLAttributes<HTMLElement> {
  Text: string;
  Center: boolean;
  eventClick?: (e?: React.MouseEvent) => void | Promise<unknown>;
  type?: 'submit';
  disabled?: boolean;
  Name?: string;
  ColorBorder?: string;
  MBottom?: boolean;
}
