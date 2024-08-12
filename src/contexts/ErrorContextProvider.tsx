import React, { createContext, useEffect, useState } from 'react';
import { ErrorTypes } from '../types';

interface IErrorContextType {
  error: ErrorTypes | null;
  setError: React.Dispatch<React.SetStateAction<ErrorTypes | null>>;
}

const initialState: IErrorContextType = {
  error: null,
  setError: () => null,
};

export const ErrorContext = createContext<IErrorContextType>(initialState);

const ErrorProvider = ({ children }: { children: React.ReactNode }) => {
  const [error, setError] = useState<ErrorTypes | null>(null);

  useEffect(() => {
    console.log('errorContext', error);
  }, [error]);

  return <ErrorContext.Provider value={{ error, setError }}>{children}</ErrorContext.Provider>;
};

export default ErrorProvider;
