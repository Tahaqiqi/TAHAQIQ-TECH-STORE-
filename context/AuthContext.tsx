import React, { createContext, useState, useContext, ReactNode } from 'react';
import { User, AuthStatus } from '../types';

interface AuthContextType {
  authStatus: AuthStatus;
  currentUser: User | null;
  login: (email: string, role: 'customer' | 'admin') => void;
  logout: () => void;
  signUp: (email: string, name: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>('guest');
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const login = (email: string, role: 'customer' | 'admin') => {
    const user: User = { id: Date.now(), email, role };
    setCurrentUser(user);
    setAuthStatus(role);
  };

  const logout = () => {
    setCurrentUser(null);
    setAuthStatus('guest');
  };

  const signUp = (email: string, name: string) => {
    const user: User = { id: Date.now(), email, name, role: 'customer' };
    setCurrentUser(user);
    setAuthStatus('customer');
  };

  return (
    <AuthContext.Provider value={{ authStatus, currentUser, login, logout, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
