import React, { createContext, useContext, useState, useEffect } from 'react';

const ChatContext = createContext(null);

const ChatProvider = ({ children }) => {
  ///  Uygulama genelinde user ve room kullandığımızdan sürekli props geçmemek için ve veri aktarımını kolaylaştırmak için context kullanıyoruz.
  /// Kullanıcı giriş yaptıktan sonra eğer kullanıcı localstroge kayıtlıysa user localstroge veri ile setliyoruz.
  const storedUserData = localStorage.getItem('user');

  const [user, setUser] = useState(storedUserData ? JSON.parse(storedUserData) : false);
  const [room, setRoom] = useState('');

  /// user setlendiği zaman kullanıcıyı localstroge kayıt ediyoruz.
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
