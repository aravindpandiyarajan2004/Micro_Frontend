

import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card, InputGroup } from 'react-bootstrap';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/ApplicantLogin.css';
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

const ApplicantLoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [generalError, setGeneralError] = useState('');
    const navigate = useNavigate();

    const validateValues = (data) => {
        let emailErr = '';
        let passwordErr = '';

        if (!data.email) {
            emailErr = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            emailErr = 'Email format is invalid';
        }

        if (!data.password) {
            passwordErr = 'Password is required';
        } else if (data.password.length > 7) {
            passwordErr = 'Password cannot be more than 7 characters';
        }

        return { emailErr, passwordErr };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const inputData = { email, password };
        const { emailErr, passwordErr } = validateValues(inputData);

        if (emailErr || passwordErr) {
            setEmailError(emailErr);
            setPasswordError(passwordErr);
            return;
        }

        try {
            const res = await axios.post("http://localhost:8027/applicant/login", inputData);

            if (res.data && res.data.applicantId) {
                sessionStorage.setItem('isLoginUser', true);
                sessionStorage.setItem('applicantId', res.data.applicantId);
                sessionStorage.setItem('email', res.data.email);

                await Toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully'
                });

                setEmail('');
                setPassword('');
                setEmailError('');
                setPasswordError('');
                navigate("/applicant-dash");
            } else {
                setEmailError('');
                setPasswordError('Invalid email or password');
            }
        } catch (err) {
            console.error("Error during API call:", err.response ? err.response.data : err.message);
            setEmailError('');
            setPasswordError('');
            setGeneralError('An error occurred. Please try again.');
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
                                <h2>Applicant Login</h2>
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
                                            maxLength={7} // Enforces max length of 7 characters
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {passwordError}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>

                                <Button variant="primary" type="submit" className="w-100 mb-2" style={{ marginTop: 10,textAlign:'center' }}>
                                    Login
                                </Button>
                            </Form>

                            {generalError && <div className="alert alert-danger mt-3 text-center">{generalError}</div>}

                            <div className="text-center mt-3">
                                <p>Don't have an account? <a href="/register">Register here</a></p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ApplicantLoginForm;

