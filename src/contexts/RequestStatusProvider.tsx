import { createContext, useEffect, useState } from 'react';

interface IRequestStatusContextType {
  requestStatus: 'requestSent' | 'requestReceived' | 'requestConfirmed' | null;
  setRequestStatus: React.Dispatch<
    React.SetStateAction<'requestSent' | 'requestReceived' | 'requestConfirmed' | null>
  >;
}

const RequestStatusContextInitialValue: IRequestStatusContextType = {
  requestStatus: null,
  setRequestStatus: () => null,
};

export const RequestStatusContext = createContext(RequestStatusContextInitialValue);

export const RequestStatusProvider = ({ children }: { children: React.ReactNode }) => {
  const [requestStatus, setRequestStatus] = useState<
    'requestSent' | 'requestReceived' | 'requestConfirmed' | null
  >(null);

  useEffect(() => {
    console.log('requestStatusContext', requestStatus);
  }, [requestStatus]);

  return (
    <RequestStatusContext.Provider value={{ requestStatus, setRequestStatus }}>
      {children}
    </RequestStatusContext.Provider>
  );
};
