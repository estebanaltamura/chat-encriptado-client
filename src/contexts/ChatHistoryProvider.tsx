// ** React Imports
import React, { createContext, useState } from 'react';

interface IChatMessage {
  type: string | null;
  message: string | null;
  time: string | null;
}

interface IChatHistoryContextType {
  chatHistory: IChatMessage[] | [];
  setChatHistory: React.Dispatch<React.SetStateAction<IChatMessage[] | []>>;
}

const ChatHistoryContextInitialValue: IChatHistoryContextType = {
  chatHistory: [],
  setChatHistory: () => null,
};

export const ChatHistoryContext = createContext<IChatHistoryContextType>(ChatHistoryContextInitialValue);

export const ChatHistoryProvider = ({ children }: { children: React.ReactNode }) => {
  const [chatHistory, setChatHistory] = useState<IChatMessage[] | []>([]);

  return (
    <ChatHistoryContext.Provider value={{ chatHistory, setChatHistory }}>
      {children}
    </ChatHistoryContext.Provider>
  );
};
