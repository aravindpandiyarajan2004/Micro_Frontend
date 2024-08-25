


import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card, InputGroup } from 'react-bootstrap';
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
    } else if (password.length > 7) {
      passwordErr = 'Password cannot be more than 4 characters';
    }

    return { emailErr, passwordErr };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { emailErr, passwordErr } = validateValues();

    if (emailErr || passwordErr) {
      setEmailError(emailErr);
      setPasswordError(passwordErr);
      return;
    }

    try {
      const response = await axios.post("http://localhost:8027/admin/login", { email, password });

      if (response.data) {
        sessionStorage.setItem('isLoginAdmin', true);
        sessionStorage.setItem("adminData", JSON.stringify(response.data));

        await Toast.fire({
          icon: 'success',
          title: 'Signed in successfully'
        });

        setEmail('');
        setPassword('');
        setEmailError('');
        setPasswordError('');
        navigate("/admin-dash");
      } else {
        setEmailError('');
        setPasswordError('Invalid email or password');
      }
    } catch (err) {
      setEmailError('Invalid email or password');
      setPasswordError('');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) setEmailError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (passwordError) setPasswordError('');
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
                  <InputGroup>
                    <InputGroup.Text><i className="fas fa-envelope"></i></InputGroup.Text>
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
                  </InputGroup>
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <InputGroup>
                    <InputGroup.Text><i className="fas fa-lock"></i></InputGroup.Text>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={handlePasswordChange}
                      isInvalid={!!passwordError}
                      maxLength={7}
                    />
                    <Form.Control.Feedback type="invalid">
                      {passwordError}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mb-2" style={{ marginTop: 10 }}>
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
