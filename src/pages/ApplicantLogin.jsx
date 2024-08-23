
// import React, { useState } from 'react';
// import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
// import Swal from 'sweetalert2';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import '../styles/ApplicantLogin.css';
// import NavigationBar from '../components/Navbar';

// const Toast = Swal.mixin({
//     toast: true,
//     position: 'top-end',
//     showConfirmButton: false,
//     timer: 3000,
//     timerProgressBar: true,
//     didOpen: (toast) => {
//         toast.onmouseenter = Swal.stopTimer;
//         toast.onmouseleave = Swal.resumeTimer;
//     },
// });

// const ApplicantLoginForm = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [emailError, setEmailError] = useState('');
//     const [passwordError, setPasswordError] = useState('');
//     const [generalError, setGeneralError] = useState('');
//     const navigate = useNavigate();

//     const validateValues = (data) => {
//         let emailErr = '';
//         let passwordErr = '';

//         if (!data.email) {
//             emailErr = 'Email is required';
//         }

//         if (!data.password) {
//             passwordErr = 'Password is required';
//         } else if (data.password.length > 4) {
//             passwordErr = 'Password cannot be more than 4 characters';
//         }

//         return { emailErr, passwordErr };
//     };

//     //   const handleSubmit = async (e) => {
//     //     e.preventDefault();
//     //     const inputData = { email, password };
//     //     const { emailErr, passwordErr } = validateValues(inputData);

//     //     if (emailErr || passwordErr) {
//     //       setEmailError(emailErr);
//     //       setPasswordError(passwordErr);
//     //       return;
//     //     }

//     //     try {
//     //       console.log("Sending Request with Data:", inputData);
//     //       const res = await axios.post("http://localhost:8027/applicant/login", inputData);

//     //       console.log("API Response:", res.data);

//     //       if (res.data && res.data.applicantId) { // Assuming API returns { applicantId }
//     //         localStorage.setItem('applicantToken', 'someToken'); // Store token
//     //         localStorage.setItem('applicantId', res.data.applicantId); // Store applicant ID
//     //         await Toast.fire({
//     //           icon: 'success',
//     //           title: 'Signed in successfully',
//     //         });
//     //         setEmail('');
//     //         setPassword('');
//     //         navigate("/applicant-dash");
//     //       } else {
//     //         console.log("Login failed response:", res.data);
//     //         setEmailError('');
//     //         setPasswordError('');
//     //         setGeneralError('Login failed: Invalid email or password');
//     //       }
//     //     } catch (err) {
//     //       console.error("Error during API call:", err.response ? err.response.data : err.message);
//     //       setEmailError('');
//     //       setPasswordError('');
//     //       setGeneralError('An error occurred. Please try again.');
//     //     }
//     //   };
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const inputData = { email, password };
//         const { emailErr, passwordErr } = validateValues(inputData);

//         if (emailErr || passwordErr) {
//             setEmailError(emailErr);
//             setPasswordError(passwordErr);
//             return;
//         }

//     //     try {
//     //         const res = await axios.post("http://localhost:8027/applicant/login", inputData);

//     //         if (res.data !=null) {
//     //             sessionStorage.setItem('isLoginUser', true); // Store token
//     //             sessionStorage.setItem('userData',JSON.stringify(res.data))
//     //             navigate("/applicant-dash"); // Redirect to applicant dashboard
//     //         } else {
//     //             setGeneralError('Login failed: Invalid email or password');
//     //         }
//     //     } catch (err) {
//     //         setGeneralError('An error occurred. Please try again.');
//     //     }
//     // };
//     try {
//         const res = await axios.post("http://localhost:8027/applicant/login", inputData);

//         if (res.data && res.data.applicantId) {
//             // Store only the applicantId in session storage
//             sessionStorage.setItem('isLoginUser', true); // Store login state
//             sessionStorage.setItem('applicantId', res.data.applicantId); // Store applicantId alone
//             sessionStorage.setItem('email',res.data.email);
//             await Toast.fire({
//                 icon: 'success',
//                 title: 'Signed in successfully'
//               });
//             navigate("/applicant-dash"); // Redirect to applicant dashboard
//         } else {
//             setGeneralError('Login failed: Invalid email or password');
//         }
//     } catch (err) {
//         setGeneralError('An error occurred. Please try again.');
//     }
// };


//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//         if (emailError) setEmailError('');
//     };

//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//         if (passwordError) setPasswordError('');
//     };

//     return (
//         <Container fluid className="login-container">
//             <NavigationBar />
//             <Row className="w-100 h-100 no-gutters">
//                 <Col className="image-section"></Col>
//                 <Col className="card-section">
//                     <Card className="login-card">
//                         <Card.Body>
//                             <div className="login-header text-center">
//                                 <h2>Applicant Login</h2>
//                                 <p className="text-muted">Please enter your credentials to access your account.</p>
//                             </div>
//                             {generalError && <div className="alert alert-danger">{generalError}</div>}
//                             <Form onSubmit={handleSubmit}>
//                                 <Form.Group controlId="formEmail">
//                                     <Form.Label>Email address</Form.Label>
//                                     <Form.Control
//                                         type="email"
//                                         placeholder="Enter your email"
//                                         value={email}
//                                         onChange={handleEmailChange}
//                                         isInvalid={!!emailError}
//                                     />
//                                     <Form.Control.Feedback type="invalid">
//                                         {emailError}
//                                     </Form.Control.Feedback>
//                                 </Form.Group>

//                                 <Form.Group controlId="formPassword">
//                                     <Form.Label>Password</Form.Label>
//                                     <Form.Control
//                                         type="password"
//                                         placeholder="Password"
//                                         value={password}
//                                         onChange={handlePasswordChange}
//                                         isInvalid={!!passwordError}
//                                         maxLength={4} // Enforces max length of 4 characters
//                                     />
//                                     <Form.Control.Feedback type="invalid">
//                                         {passwordError}
//                                     </Form.Control.Feedback>
//                                 </Form.Group>

//                                 <Button variant="primary" type="submit" className="w-100 mb-2">
//                                     Login
//                                 </Button>
//                             </Form>

//                             <div className="text-center mt-3">
//                                 <p>Don't have an account? <a href="/register">Register here</a></p>
//                             </div>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default ApplicantLoginForm;

import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
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

        // Set validation errors if any
        if (emailErr || passwordErr) {
            setEmailError(emailErr);
            setPasswordError(passwordErr);
            return;
        }

        try {
            const res = await axios.post("http://localhost:8027/applicant/login", inputData);

            if (res.data && res.data.applicantId) {
                // Store applicant data in session storage
                sessionStorage.setItem('isLoginUser', true);
                sessionStorage.setItem('applicantId', res.data.applicantId);
                sessionStorage.setItem('email', res.data.email);

                // Show success notification
                await Toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully'
                });

                // Clear form and redirect
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
                                        maxLength={7} // Enforces max length of 4 characters
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {passwordError}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Button variant="primary" type="submit" className="w-100 mb-2" style={{marginTop:10}}>
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


