import React from 'react';
import { Navigate } from 'react-router-dom';
import { useChat } from '../../context/chatContext';

export default function PrivateRoute({ children }) {
  /// Eğer kullanıcı girişi varsa,children probundan gelen sayfa içeriğini render ediyor. 
  /// Eğer kullanıcı girişi yoksa kullanıcıyı login ekranına yönlendiriyoruz.
  const { user } = useChat();
  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
}
