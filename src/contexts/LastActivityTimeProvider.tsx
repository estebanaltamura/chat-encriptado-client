// ** React Imports
import { createContext, useEffect, useState, useContext } from 'react';
import { ErrorTypes } from '../types';
import { ErrorContext } from './ErrorContextProvider';
import { LifeCycleContext } from './LifeCycleProvider';

// ** Contexts Imports
import { WebSocketConnectionContext } from './WebSocketConnectionProvider';

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
  const { connectionStatus, setConnectionStatus } = useContext(WebSocketConnectionContext);
  const { lifeCycle, setLifeCycle } = useContext(LifeCycleContext);
  const { error, setError } = useContext(ErrorContext);

  // ** States
  const [secondsFromLastActivity, setSecondsFromLastActivity] = useState(0);

  useEffect(() => {
    if (connectionStatus === 'userRegistered' && secondsFromLastActivity >= 120)
      setError(ErrorTypes.DisconnectionByInactivity);
    if (connectionStatus === 'chating' && secondsFromLastActivity >= 30000)
      setError(ErrorTypes.DisconnectionByInactivity);
  }, [secondsFromLastActivity]);

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
