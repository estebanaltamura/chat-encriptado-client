import { createContext, SetStateAction, useEffect, useState } from 'react';

interface ILifeCycleContextType {
  lifeCycle: 'offline' | 'online' | 'userRegistered' | 'chating' | null;
  setLifeCycle: React.Dispatch<SetStateAction<'offline' | 'online' | 'userRegistered' | 'chating' | null>>;
}

const LifeCycleContextInitialValue: ILifeCycleContextType = {
  lifeCycle: null,
  setLifeCycle: () => null,
};

export const LifeCycleContext = createContext(LifeCycleContextInitialValue);

export const LifeCycleProvider = ({ children }: { children: React.ReactNode }) => {
  const [lifeCycle, setLifeCycle] = useState<'offline' | 'online' | 'userRegistered' | 'chating' | null>(
    null,
  );

  useEffect(() => {
    console.log('lifeCycleContext', lifeCycle);
  }, [lifeCycle]);

  return (
    <LifeCycleContext.Provider value={{ lifeCycle, setLifeCycle }}>{children}</LifeCycleContext.Provider>
  );
};
