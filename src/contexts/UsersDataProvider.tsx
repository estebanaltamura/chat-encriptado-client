// ** React Imports
import { createContext, useEffect, useState } from 'react';

interface IUsersDataContextType {
  usersData: {
    fromPublicKey: string | null;
    fromNickName: string | null;
    fromAvatarType: 1 | 2 | 3 | 4 | 5 | null;
    toPublicKey: string | null;
    toNickName: string | null;
    toAvatarType: 1 | 2 | 3 | 4 | 5 | null;
  };
  setUsersData: React.Dispatch<
    React.SetStateAction<{
      fromPublicKey: string | null;
      fromNickName: string | null;
      fromAvatarType: 1 | 2 | 3 | 4 | 5 | null;
      toPublicKey: string | null;
      toNickName: string | null;
      toAvatarType: 1 | 2 | 3 | 4 | 5 | null;
    }>
  >;
}

const UsersDataContextInitialValue: IUsersDataContextType = {
  usersData: {
    fromPublicKey: null,
    fromNickName: null,
    fromAvatarType: null,
    toPublicKey: null,
    toNickName: null,
    toAvatarType: null,
  },
  setUsersData: () => null,
};

export const UsersDataContext = createContext(UsersDataContextInitialValue);

export const UsersDataProvider = ({ children }: { children: React.ReactNode }) => {
  // ** States
  const [usersData, setUsersData] = useState<{
    fromPublicKey: string | null;
    fromNickName: string | null;
    fromAvatarType: 1 | 2 | 3 | 4 | 5 | null;
    toPublicKey: string | null;
    toNickName: string | null;
    toAvatarType: 1 | 2 | 3 | 4 | 5 | null;
  }>({
    fromPublicKey: null,
    fromNickName: null,
    fromAvatarType: null,
    toPublicKey: null,
    toNickName: null,
    toAvatarType: null,
  });

  useEffect(() => {
    console.log('usersDataContext', usersData);
  }, [usersData]);

  return (
    <UsersDataContext.Provider value={{ usersData, setUsersData }}>{children}</UsersDataContext.Provider>
  );
};
