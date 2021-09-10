import { createContext } from 'react';
import { AuthContextType, LoadResponseProvider } from './types';
import useFind from './hooks/userFind';
export const GlobalContext = createContext({} as AuthContextType);

export function AuthContext(props: LoadResponseProvider): JSX.Element {
  const { handleLoadPackge, PackDates, have } = useFind();

  return (
    <GlobalContext.Provider
      value={{
        handleLoadPackge,
        PackDates,
        have,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
