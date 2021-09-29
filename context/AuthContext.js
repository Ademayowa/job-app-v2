import { createContext, useState, useEffect } from 'react';
import { API_URL } from '@/config/index.js';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  // Register user
  const register = async (user) => {
    console.log(user);
  };

  // Login user
  const login = async ({ email: identifier, password }) => {
    console.log({ email, password });
  };

  // Logout user
  const logout = async (user) => {
    console.log('logout');
  };

  // Check if user is logged in
  const checkUserLoggedIn = async (user) => {
    console.log('check');
  };

  return (
    <AuthContext.Provider value={{ user, error, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
