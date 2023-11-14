import React from 'react';
import { Navigate } from 'react-router-dom';
import { useChat } from '../../context/chatContext';

export default function PrivateRoute({ children }) {
    
  const { user } = useChat();
  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
}
