// Login.js
import React, { createContext, useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import {useParams, useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';








 const Login = ({ onLogin,children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [userlogin,setuserlogin]=useState('')


  




const navigate=useNavigate()
  
const handelForgot=()=>{

  navigate('/Forgot');
}

const handleregister = () => {
  // Check if the user is logged in

  
    // User is not authenticated, show the login modal
  // User is not authenticated, navigate to the login page
  navigate('/api/user/customertype');
  
};









  const handleLogin = async () => {
    try {
      // Make a request to the server's login endpoint
      const response = await fetch('http://localhost:9000/api/login/loginUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      console.log(email);
  
      const data = await response.text();
  
      
      
  
      if (response.ok) {
        // Check if the response is successful
        if (data) {
          // If login is successful, notify the parent component
            onLogin(data)
         console.log(data)
       
          console.log('User is present');
          setuserlogin('login true go back')
        
        } else {
          console.error('Login failed:', data);
        }
      } else if (response.status === 403) {
        // Handle 403 status as plain text response
        console.error('User is present:', data);
        setuserlogin('use correct password or user name')
      }
    } catch (error) {
      console.error('Server error:', error);
      setuserlogin('login true go back')

    }
  };
  

  return (


<>
    


    <div className="d-flex flex-column justify-content-center align-items-center" style={{ marginTop: "20px", border: "1px solid gray", width: "500px", margin: " 40px auto" }}>
      <Form>
        <h3>Login Form</h3>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update the email state
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update the password state
          />
        </Form.Group>
        {userlogin}
        <span  onClick={handelForgot}><Link  >Forgot Password!!</Link></span>
        <div  className='mt-3 d-flex justify-content-between' >


      

                  <Button className='mt-3' variant="primary" type="button" onClick={handleLogin}>
                    Submit
                  </Button>
                  <Button  onClick={handleregister}  className='mt-3' variant="primary" type="button" >
                  register here 
                  </Button>

        </div>
     
       
      
      </Form>
    </div>
    </>
  );
};

export default Login


