import React, { createContext, useContext, useState } from 'react';

const CartMessageContext = createContext();

export const CartMessageProvider = ({ children }) => {
  const [cartMessage, setCartMessage] = useState('');

  const updateCartMessage = (message) => {
    setCartMessage(message);
  };

  return (
    <CartMessageContext.Provider value={{ cartMessage, updateCartMessage }}>
      {children}
    </CartMessageContext.Provider>
  );
};

export const useCartMessage = () => {
  return useContext(CartMessageContext);
};
