import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import './components/style.css';

function Forgot() {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [userid, setuserId] = useState('');
  const [token, setToken] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handelpasswordchange = (e) => {
    setpassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:9000/api/user/', {
        email: email,
      });

      if (response.status === 200) {
        const user = response.data.user;
        const token = response.data.token;
        setuserId(user._id);
        setToken(token.token);
        console.log('Password reset link sent successfully', token, user);
        console.log(email);
      } else {
        alert('Failed to send password reset link');
      }
    } catch (error) {
      console.error('Error during email change:', error);
    }
  };

  useEffect(() => {
    console.log(userid);
    console.log(token);
  }, [userid, token]);

  const handelpassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:9000/api/user/${userid}/${token}`, {
        password: password, // Assuming 'password' is the state storing the new password
      });
      if (response.status === 200) {
        alert('Password reset successfully');
        console.log(email);
      } else {
        alert('Failed to send  reset password');
      }
    } catch (error) {
      console.error('Error during  reset password:', error);
    }
  };

  return (
    <>
    

<Container  className="margin-auto w-50 mt-5">
<h3 className='text-center'>reset password link</h3>
<Form onSubmit={handleSubmit}>
<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Email address</Form.Label>
  <Form.Control
    type="email"
    placeholder="Enter email"
    value={email}
    onChange={handleEmailChange}
  />
  <Form.Text className="text-muted">
    We'll never share your email with anyone else.
  </Form.Text>
</Form.Group>
<Button  className="margin-auto" variant="primary" type="submit">
  Submit
</Button>
</Form>
</Container>


<Container  className="margin-auto w-50 mt-5">
<h3 className='text-center'>enter the password to change</h3>
<Form onSubmit={handelpassword}>
<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label> password</Form.Label>
  <Form.Control
    type="password"
    placeholder="Enter password"
    value={password}
    onChange={handelpasswordchange}
  />
  <Form.Text className="text-muted">
    We'll never share your password with anyone else.
  </Form.Text>
</Form.Group>
<Button  className="margin-auto" variant="primary" type="submit">
  Submit
</Button>
</Form>
</Container>
    </>
  );
}

export default Forgot;




