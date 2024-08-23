


import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminLogin.css'; 
import NavigationBar from '../components/Navbar';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const validateValues = () => {
    let emailErr = '';
    let passwordErr = '';

    if (!email) {
      emailErr = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailErr = 'Email format is invalid';
    }

    if (!password) {
      passwordErr = 'Password is required';
    } else if (password.length > 4) {
      passwordErr = 'Password cannot be more than 4 characters';
    }

    return { emailErr, passwordErr };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { emailErr, passwordErr } = validateValues();

    // Set validation errors if any
    if (emailErr || passwordErr) {
      setEmailError(emailErr);
      setPasswordError(passwordErr);
      return;
    }

    try {
      const response = await axios.post("http://localhost:8027/admin/login", { email, password });

      if (response.data) {
        sessionStorage.setItem('isLoginAdmin', true); // Store login state
        sessionStorage.setItem("adminData", JSON.stringify(response.data));
        
        // Show success notification
        await Toast.fire({
          icon: 'success',
          title: 'Signed in successfully'
        });

        setEmail('');
        setPassword('');
        setEmailError(''); // Clear email error after successful login
        setPasswordError(''); // Clear password error after successful login
        navigate("/admin-dash"); // Redirect to admin dashboard
      } else {
        // If response.data is false, assume invalid credentials
        setEmailError('');
        setPasswordError('Invalid email or password');
      }
    } catch (err) {
      setEmailError('Invalid email or password'); // Display the same message for exceptions
      setPasswordError(''); // Clear password error if an exception occurs
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) setEmailError(''); // Clear email error when user starts typing
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (passwordError) setPasswordError(''); // Clear password error when user starts typing
  };

  return (
    <Container fluid className="login-container">
      <NavigationBar />
      <Row className="w-100 h-100 no-gutters">
        <Col className="image-section"></Col>
        <Col className="card-section">
          <Card className="login-card">
            <Card.Body>
              <div className="login-header text-center">
                <h2>Admin Login</h2>
                <p className="text-muted">Please enter your credentials to access your account.</p>
              </div>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                    isInvalid={!!emailError}
                  />
                  <Form.Control.Feedback type="invalid">
                    {emailError}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    isInvalid={!!passwordError}
                    maxLength={4}
                  />
                  <Form.Control.Feedback type="invalid">
                    {passwordError}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mb-2" style={{marginTop:10}}>
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminLogin;

