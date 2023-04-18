import React, { createContext, useState, useContext } from 'react';

interface ChatContextType {
  chatList: any[];
  addChat: (message: string) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChatContext = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
};

export const ChatProvider = ({ children } : any) => {
  const [chatList, setChatList] = useState<any[]>([]);

  const addChat = (message: string) => {
    setChatList((chatList) => [...chatList, message]);
  };

  return (
    <ChatContext.Provider value={{ chatList, addChat }}>
      {children}
    </ChatContext.Provider>
  );
};
