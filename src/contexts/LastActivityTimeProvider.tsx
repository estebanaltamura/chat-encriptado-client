// ** React Imports
import { createContext, useContext, useEffect, useState } from 'react';
import { ErrorTypes } from '../types';
import { ErrorContext } from './ErrorContextProvider';
import { LifeCycleContext } from './LifeCycleProvider';

interface ILastActivityTimeContextType {
  secondsFromLastActivity: number;
  setSecondsFromLastActivity: React.Dispatch<React.SetStateAction<number>>;
}

const lastActivityTimeContextInitialValue: ILastActivityTimeContextType = {
  secondsFromLastActivity: 0, // PROBLEMA
  setSecondsFromLastActivity: () => null,
};

export const LastActivityTimeContext = createContext(lastActivityTimeContextInitialValue);

export const LastActivityTimeProvider = ({ children }: { children: React.ReactNode }) => {
  // ** Contexts
  const { lifeCycle, setLifeCycle } = useContext(LifeCycleContext);
  const { setError } = useContext(ErrorContext);

  // ** States
  const [secondsFromLastActivity, setSecondsFromLastActivity] = useState(0);

  useEffect(() => {
    if (lifeCycle === 'chating' && secondsFromLastActivity >= 180)
      setError(ErrorTypes.DisconnectionByInactivity);
  }, [secondsFromLastActivity, lifeCycle]);

  useEffect(() => {
    setSecondsFromLastActivity(0);
  }, [lifeCycle]);

  useEffect(() => {
    const clickActivityHandler = () => {
      setSecondsFromLastActivity(0);
    };

    const contextmenuActivityHandler = () => {
      setSecondsFromLastActivity(0);
    };

    const mousemoveActivityHandler = (e: MouseEvent) => {
      // no anda
      setSecondsFromLastActivity(0);
    };

    const scrollActivityHandler = () => {
      setSecondsFromLastActivity(0);
    };

    const keydownActivityHandler = () => {
      setSecondsFromLastActivity(0);
    };

    const interval = setInterval(() => {
      setSecondsFromLastActivity((secondsFromLastActivity) => secondsFromLastActivity + 1);
    }, 1000);

    window.addEventListener('click', clickActivityHandler);
    window.addEventListener('contextmenu', contextmenuActivityHandler);
    window.addEventListener('mousemove', mousemoveActivityHandler);
    window.addEventListener('scroll', scrollActivityHandler);
    window.addEventListener('keydown', keydownActivityHandler);

    return () => {
      clearInterval(interval);
      window.removeEventListener('click', clickActivityHandler);
      window.removeEventListener('contextmenu', contextmenuActivityHandler);
      window.removeEventListener('mousemove', mousemoveActivityHandler);
      window.removeEventListener('scroll', scrollActivityHandler);
      window.removeEventListener('keydown', keydownActivityHandler);
    };
  }, []);

  return (
    <LastActivityTimeContext.Provider value={{ secondsFromLastActivity, setSecondsFromLastActivity }}>
      {children}
    </LastActivityTimeContext.Provider>
  );
};
