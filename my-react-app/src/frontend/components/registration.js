// Login.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Registration = ({ Register }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setUsername] = useState('');
  const [_id, setId] = useState('');

const[registered,setReg]=useState('')



  const handleRegistration = async () => {
    try {
      const response = await fetch('http://localhost:9000/api/user/customertype', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({_id, name, email, password }),
      });


console.log("njhg")
      const data = await response.text();
console.log(data)

if (response.ok) {
    // Check if the response is successful
    if (data) {
      // If login is successful, notify the parent component
      Register(data);
      console.log('User is registered');
      setReg('registeed true go back')
    } else {
      console.error('registration failed:', data);
    }
  } else if (response.status === 500) {
    // Handle 403 status as plain text response
    console.error('User is present:', data);
    setReg('  error try again/user present')
    
  }
} catch (error) {
  console.error('Server error:', error);
  setReg("not valid")
 

}
};

  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ marginTop: "20px", border: "1px solid gray", width: "500px", margin: "40px auto" }}>
      <Form>
        <h3>Registration Form</h3>

        <Form.Group controlId="formBasicText">
          <Form.Label>ID</Form.Label>
          <Form.Control onChange={(e) => setId(e.target.value)} type="text" placeholder="ID" />
        </Form.Group>

        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
        </Form.Group>

        <Button onClick={handleRegistration} className='mt-3' variant="primary" type="button">
          Submit
        </Button>
        {registered}
      </Form>
    </div>
  );
};

export default Registration;
