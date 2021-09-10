import { ReactNode } from 'react';

export type LoadResponseProvider = {
  children: ReactNode;
};

export type AuthContextType = {
  handleLoadPackge: (data: DataProps) => Promise<void>;
  PackDates: Array<PackDatesProps>;
  have: boolean;
};

export type DataProps = Array<string>;

export type PackDatesProps = {
  status?: string;
  data?: string;
  origem?: string;
  hora?: string;
  local?: string;
};
