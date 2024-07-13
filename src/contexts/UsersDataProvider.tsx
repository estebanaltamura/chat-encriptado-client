import { createContext, useState } from 'react';

interface IUsersDataContextType {
  usersData: {
    fromPublicKey: string | null;
    fromNickName: string | null;
    toPublicKey: string | null;
    toNickName: string | null;
  };
  setUsersData: React.Dispatch<
    React.SetStateAction<{
      fromPublicKey: string | null;
      fromNickName: string | null;
      toPublicKey: string | null;
      toNickName: string | null;
    }>
  >;
}

const UsersDataContextInitialValue: IUsersDataContextType = {
  usersData: { fromPublicKey: null, fromNickName: null, toPublicKey: null, toNickName: null },
  setUsersData: () => null,
};

export const UsersDataContext = createContext(UsersDataContextInitialValue);

export const UsersDataProvider = ({ children }: { children: React.ReactNode }) => {
  const [usersData, setUsersData] = useState<{
    fromPublicKey: string | null;
    fromNickName: string | null;
    toPublicKey: string | null;
    toNickName: string | null;
  }>({ fromPublicKey: null, fromNickName: null, toPublicKey: null, toNickName: null });

  return (
    <UsersDataContext.Provider value={{ usersData, setUsersData }}>{children}</UsersDataContext.Provider>
  );
};
