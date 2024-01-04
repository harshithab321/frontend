import Login from './loginrouter';
import Registration from './registration';
import { useNavigate } from 'react-router-dom';
import React, { createContext, useContext, useState, useEffect } from 'react';
import Prod from './productsstore';
import Order from './buynow';

const AuthContext = createContext();

export function Funlogin({ children }) {
  const [authenticate, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the authentication status is stored in localStorage
    const storedAuthenticate = JSON.parse(localStorage.getItem('authenticate'));
    if (storedAuthenticate !== null) {
      setIsAuthenticated(storedAuthenticate);
    }
  }, []);

  const handleLogin = (user) => {
    try {
      console.log('User logged in:', user);
      setIsAuthenticated(true);
      localStorage.setItem('authenticate', JSON.stringify(true));

      // Set a timer to change authenticate to false after one hour
      setTimeout(() => {
        setIsAuthenticated(false);
        localStorage.setItem('authenticate', JSON.stringify(false));
      }, 60*60*1000); // 1 second
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ authenticate, handleLogin }}>
      {children}
      <Prod />
      <Login onLogin={handleLogin} />
    </AuthContext.Provider>
  );
}s

export function FunRegistration() {
  const handleRegi = (user) => {
    console.log('User registered in:', user);
  };

  return (
    <>
      <Registration Register={handleRegi} />
    </>
  );
}

export const useAuth = () => useContext(AuthContext);
