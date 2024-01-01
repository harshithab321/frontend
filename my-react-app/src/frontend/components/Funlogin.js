
import Login from './loginrouter';
import Registration from './registration';
import { useNavigate } from 'react-router-dom';
import React, { createContext, useContext, useState } from 'react';
import Prod from './productsstore'

import Order from './buynow';

const AuthContext = createContext();
  

export function Funlogin({children}) {
  const [productId, setProductId] = useState(null);
    
    const [authenticate,setIsAuthenticated]=useState(false)
     console.log(authenticate)
    
     console.log("hello")

   const handleLogin = (user) => {
    try{
            // Handle the login callback, e.g., store user data in state or localStorage
    console.log('User logged in:', user);


    // After successful login, you can redirect or perform additional actions
    
    setIsAuthenticated(true)
    localStorage.setItem('authenticate', JSON.stringify(true));

// Set a timer to change authenticate to false after one hour
setTimeout(function() {
  localStorage.setItem('authenticate', JSON.stringify(false));
}, 60 * 60 * 1000); // 60 minutes * 60 seconds * 1000 milliseconds
    }
    catch (error) {
      console.error('Login failed:', error);
      // Handle error, e.g., show an error message to the user
    }

  }; 


  console.log(authenticate)
  return (
    <>
    <AuthContext.Provider  value={{authenticate,handleLogin}}>
        {children}
        <Prod/>
        
    </AuthContext.Provider>
    
    <Login  onLogin={handleLogin}/>
    </>
  );
}


export function FunRegistration() {

    const handleRegi = (user) => {
       
     
      // Handle the login callback, e.g., store user data in state or localStorage
      console.log('User registred in:', user);
  
      // After successful login, you can redirect or perform additional actions
    
      
    }; 
  
  
    return (
      <>
        <Registration Register={handleRegi} />
      </>
    );
  }

 export  const useAuth = () => useContext(AuthContext);

