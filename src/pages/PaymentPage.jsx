

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import '../styles/PaymentPage.css';
import ApplicantNavbar from '../components/ApplicantNavbar';

const PaymentPage = () => {
    const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm();
    const [submitting, setSubmitting] = useState(false);
    const [amount, setAmount] = useState(0);
    const [selectedFrequency, setSelectedFrequency] = useState('yearly');
    const [premiumId, setPremiumId] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false); // New state for form submission
    const location = useLocation();
    const navigate = useNavigate();
    const premiums = location.state?.premiums || []; // Retrieve premiums from state

    useEffect(() => {
        const storedPremiumId = sessionStorage.getItem('premiumId');
        if (storedPremiumId) {
            setPremiumId(storedPremiumId);
        }

        const initialPremium = premiums.find(premium => premium.yearly);
        setAmount(initialPremium?.yearly || 0);
        setPremiumId(initialPremium?.premiumId || null);


        if (initialPremium?.premiumId) {
            sessionStorage.setItem('premiumId', initialPremium.premiumId);
        }

        setValue('payDate', getCurrentDate());
    }, [premiums, setValue]);

    const handleFrequencyChange = (event) => {
        const frequency = event.target.value;
        setSelectedFrequency(frequency);
        sessionStorage.setItem("frequency", frequency);
        const selectedPremium = premiums.find(premium => premium[frequency]);
        setAmount(selectedPremium ? selectedPremium[frequency] : 0);
        setPremiumId(selectedPremium ? selectedPremium.premiumId : null);

        if (selectedPremium?.premiumId) {
            sessionStorage.setItem('premiumId', selectedPremium.premiumId);
        }
    };

    const generateTransactionId = () => {
        return 'TXN' + Math.floor(Math.random() * 1000000);
    };

    const getCurrentDate = () => {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}`;
    };


    const generatePdf = (data) => {
        const doc = new jsPDF();

        const margin = 10;
        const lineHeight = 10;

        doc.setFontSize(16);
        doc.setFont('helvetica', 'bold');
        doc.text('Premium Payment Receipt', margin, margin + 10);

        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text('Payment Information', margin, margin + 20);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(12);

        let y = margin + 30;
        doc.text(`Transaction ID: ${generateTransactionId()}`, margin, y);
        y += lineHeight;
        doc.text(`Amount: ${data.amount}`, margin, y);
        y += lineHeight;
        doc.text(`Payment Method: ${data.payMethod}`, margin, y);
        y += lineHeight;
        doc.text(`Payment Date: ${data.payDate}`, margin, y);

        doc.save('payment-info.pdf');
    };


    const showOtpModal = async () => {
        const { value: otp } = await Swal.fire({
            title: 'Enter OTP',
            html: `
                <div class="otp-container">
                    <input id="otp-1" class="otp-input" maxlength="1" autofocus />
                    <input id="otp-2" class="otp-input" maxlength="1" />
                    <input id="otp-3" class="otp-input" maxlength="1" />
                    <input id="otp-4" class="otp-input" maxlength="1" />
                </div>
            `,
            confirmButtonText: 'Submit',
            focusConfirm: false,
            preConfirm: () => {
                const otpInputs = [
                    document.getElementById('otp-1').value,
                    document.getElementById('otp-2').value,
                    document.getElementById('otp-3').value,
                    document.getElementById('otp-4').value
                ];
                return otpInputs.join('');
            },
            didOpen: () => {
                const otpInputs = document.querySelectorAll('.otp-input');
                otpInputs.forEach((input, index) => {
                    input.addEventListener('input', (event) => {
                        if (event.target.value.length === 1) {
                            const nextInput = otpInputs[index + 1];
                            if (nextInput) {
                                nextInput.focus();
                            }
                        }
                    });
                });
            },
            customClass: {
                container: 'otp-modal-container',
                input: 'otp-input',
            }
        });

        return otp;
    };

    const onSubmit = async (data) => {
        setSubmitting(true);
        try {
            const otp = await showOtpModal();

            if (otp === '1234') {
                const applicantId = sessionStorage.getItem('applicantId');
                if (!applicantId) {
                    throw new Error('Applicant ID not found in session storage');
                }

                const requestData = {
                    ...data,
                    applicant: { applicantId },
                    status: 'successful',
                    amount,
                    premium: { premiumId }
                };

                await axios.post('http://localhost:8027/payment', requestData);
                generatePdf(requestData);

                Swal.fire({
                    title: 'Payment Successful!',
                    text: `Transaction ID: ${generateTransactionId()}`,
                    icon: 'success',
                });
                sessionStorage.setItem("button", true);
                setFormSubmitted(true);
                navigate("/application-tracking");
            } else {
                Swal.fire({
                    title: 'OTP Error',
                    text: 'The OTP you entered is incorrect. Please try again.',
                    icon: 'error',
                });
            }
        } catch (err) {
            Swal.fire({
                title: 'Payment Error',
                text: err.response?.data?.message || 'An error occurred during payment. Please try again.',
                icon: 'error',
            });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div>
            <ApplicantNavbar className="applicant-navbar" />
            <Container className="payment-page mt-5">
                <Row className="justify-content-center">
                    <Col md-3 lg-2>
                        <Card className="p-4 shadow-sm">
                            <Card.Body>
                                <Card.Title className="text-center mb-4" style={{ color: 'black', fontWeight: 700, fontSize: 30 }}>Payment Page</Card.Title>
                                <hr />
                                <Form onSubmit={handleSubmit(onSubmit)} className="payment-form">
                                    <Form.Group controlId="amount">
                                        <Form.Label>Amount</Form.Label>
                                        <Form.Control
                                            type="number"
                                            value={amount.toFixed(2)}
                                            readOnly
                                            className="bg-light"
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="frequency">
                                        <Form.Label>Frequency</Form.Label>
                                        <Form.Control
                                            as="select"
                                            value={selectedFrequency}
                                            onChange={handleFrequencyChange}
                                            className="custom-select"
                                        >
                                            <option value="monthly">Monthly</option>
                                            <option value="quartely">Quarterly</option>
                                            <option value="halfly">Half Yearly</option>
                                            <option value="yearly">Yearly</option>
                                        </Form.Control>

                                    </Form.Group>

                                    <Form.Group controlId="payMethod">
                                        <Form.Label>Payment Method</Form.Label>
                                        <Form.Control
                                            as="select"
                                            {...register('payMethod', { required: 'Payment method is required' })}
                                            className="custom-select"
                                        >
                                            <option value="">Select a payment method</option>
                                            <option value="creditCard">Credit Card</option>
                                            <option value="upi">UPI</option>
                                        </Form.Control>
                                        {errors.payMethod && <div className="error-message">{errors.payMethod.message}</div>}
                                    </Form.Group>

                                    {watch('payMethod') === 'creditCard' && (
                                        <>
                                            <Form.Group controlId="cardNumber">
                                                <Form.Label>Credit Card Number</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    {...register('cardNumber', {
                                                        required: 'Credit Card Number is required',
                                                        pattern: {
                                                            value: /^\d{16}$/,
                                                            message: 'Credit Card Number must be 16 digits'
                                                        }
                                                    })}
                                                />
                                                {errors.cardNumber && <div className="error-message">{errors.cardNumber.message}</div>}
                                            </Form.Group>

                                            <Form.Group controlId="cvv">
                                                <Form.Label>CVV</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    {...register('cvv', {
                                                        required: 'CVV is required',
                                                        pattern: {
                                                            value: /^\d{3}$/,
                                                            message: 'CVV must be 3 digits'
                                                        }
                                                    })}
                                                />
                                                {errors.cvv && <div className="error-message">{errors.cvv.message}</div>}
                                            </Form.Group>
                                        </>
                                    )}

                                    {watch('payMethod') === 'upi' && (
                                        <Form.Group controlId="upiId">
                                            <Form.Label>UPI ID</Form.Label>
                                            <Form.Control
                                                type="text"
                                                {...register('upiId', {
                                                    required: 'UPI ID is required',
                                                    pattern: {
                                                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/,
                                                        message: 'UPI ID must be in the format "username@bankname"'
                                                    }
                                                })}
                                            />
                                            {errors.upiId && <div className="error-message">{errors.upiId.message}</div>}
                                        </Form.Group>
                                    )}

                                    <Form.Group controlId="payDate">
                                        <Form.Label>Payment Date</Form.Label>
                                        <Form.Control
                                            type="date"
                                            {...register('payDate', { required: 'Payment date is required' })}
                                            min={getCurrentDate()}
                                            defaultValue={getCurrentDate()}
                                            disabled={formSubmitted}
                                        />
                                        {errors.payDate && <div className="error-message">{errors.payDate.message}</div>}
                                    </Form.Group>

                                    <Button
                                        type="submit"
                                        disabled={submitting}
                                        className="w-100 mt-3"
                                        variant={submitting ? 'secondary' : 'primary'}
                                    >
                                        {submitting ? 'Processing...' : 'Pay Now'}
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PaymentPage;


