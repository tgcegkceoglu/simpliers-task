import React, { createContext, useContext, useState, useEffect } from 'react';

const ChatContext = createContext(null);

const ChatProvider = ({ children }) => {
  const storedUserData = localStorage.getItem('user');

  const [user, setUser] = useState(storedUserData ? JSON.parse(storedUserData) : false);
  const [room, setRoom] = useState('');

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <ChatContext.Provider value={{ user, setUser, room, setRoom }}>
      {children}
    </ChatContext.Provider>
  );
};

const useChat = () => useContext(ChatContext);

export { ChatProvider, useChat };
