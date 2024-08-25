

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/ApplicationTracking.css';
import ApplicantNavbar from '../components/ApplicantNavbar';
import { Container, Card, Table, Button, Alert, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faSpinner, faCreditCard } from '@fortawesome/free-solid-svg-icons';

const ApplicationTracking = () => {
    const [application, setApplication] = useState(null);
    const [premiums, setPremiums] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isPremiumTableDisabled, setIsPremiumTableDisabled] = useState(true);
    const [isPayNowDisabled, setIsPayNowDisabled] = useState(false);
    const navigate = useNavigate();
    const applicantId = sessionStorage.getItem('applicantId');
    const sessionButton = sessionStorage.getItem("button");
    const setFrequency = sessionStorage.getItem('frequency');
    const lastPaymentDate = sessionStorage.getItem('lastPaymentDate');

    // Function to calculate the next due date based on frequency and last payment date
    const calculateNextDueDate = (frequency, lastPaymentDate) => {
        if (!lastPaymentDate) return new Date();
        const date = new Date(lastPaymentDate);
        let nextDueDate;

        switch (frequency) {
            case 'monthly':
                nextDueDate = new Date(date.setMonth(date.getMonth() + 1));
                break;
            case 'quarterly':
                nextDueDate = new Date(date.setMonth(date.getMonth() + 3));
                break;
            case 'halfly':
                nextDueDate = new Date(date.setMonth(date.getMonth() + 6));
                break;
            case 'yearly':
                nextDueDate = new Date(date.setFullYear(date.getFullYear() + 1));
                break;
            default:
                return new Date();
        }

        return nextDueDate;
    };

    useEffect(() => {
        const fetchApplication = async () => {
            if (!applicantId) {
                setError('No applicant ID found in session storage');
                setLoading(false);
                return;
            }

            try {
                // Fetch application details
                const appResponse = await axios.get(`http://localhost:8027/applyInsurance/getInsuranceDetails/${applicantId}`);
                if (appResponse.data) {
                    setApplication(appResponse.data);
                    if (appResponse.data.status.toLowerCase() === 'approved') {
                        setIsPremiumTableDisabled(false);
                    } else {
                        setIsPremiumTableDisabled(true);
                    }
                } else {
                    setError('No application data found for this applicant ID');
                }

                // Fetch premium details
                const premiumResponse = await axios.get(`http://localhost:8027/premium/getByApplicant/${applicantId}`);
                setPremiums(premiumResponse.data);

                // Determine if Pay Now button should be enabled
                if (lastPaymentDate) {
                    const nextDueDate = calculateNextDueDate(setFrequency, lastPaymentDate);
                    setIsPayNowDisabled(new Date() < nextDueDate);
                }

            } catch (err) {
                console.error('Error fetching data:', err);
                setError('Error fetching data');
            } finally {
                setLoading(false);
            }
        };

        fetchApplication();
    }, [applicantId, lastPaymentDate, setFrequency]);

    const handlePayNow = () => {
        if (premiums.length > 0) {
            setIsPayNowDisabled(true);
            navigate('/payment', {
                state: { premiums }
            });
            sessionStorage.setItem("premiumId", premiums[0].premiumId);
        } else {
            setError('No premium details available');
        }
    };

    if (loading) return (
        <div className="loading-spinner">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );

    if (error) return <Alert variant="danger">{error}</Alert>;

    const status = application?.status || 'pending';

    return (
        <div className="application-tracking-page">
            <ApplicantNavbar />
            <Container className="mt-4">
                <h1 className="text-center mb-4" style={{ marginTop: 90 }}>Application Tracking</h1>
                <Card className="application-card mb-4">
                    <Card.Body>
                        <Card.Title>Application Details</Card.Title>
                        {application ? (
                            <>
                                <div className="detail-row">
                                    <span className="detail-label">Policy Number:</span>
                                    <span className="detail-value">{application.policyNumber || 'N/A'}</span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">Insurance Date:</span>
                                    <span className="detail-value">
                                        {application.insuranceDate ? new Date(application.insuranceDate).toLocaleDateString() : 'N/A'}
                                    </span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">Status:</span>
                                    <span className={`status-badge ${status}`} style={{
                                        color: status.toLowerCase() === 'approved' ? 'green' : status.toLowerCase() === 'rejected' ? 'red' : 'orange',
                                        fontSize: 18,
                                        marginLeft: 10
                                    }}>
                                        {status.toLowerCase() === 'approved' ? <FontAwesomeIcon icon={faCheckCircle} /> : status.toLowerCase() === 'rejected' ? <FontAwesomeIcon icon={faTimesCircle} /> : <FontAwesomeIcon icon={faSpinner} />}
                                        {' '}{status.charAt(0).toUpperCase() + status.slice(1)}
                                    </span>
                                </div>
                            </>
                        ) : (
                            <Alert variant="info">No application data available</Alert>
                        )}
                    </Card.Body>
                </Card>

                {premiums.length > 0 && (
                    <Card className="premium-card">
                        <Card.Body>
                            <Card.Title>Premium Details</Card.Title>
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>Total Amount</th>
                                        <th>Monthly</th>
                                        <th>Quarterly</th>
                                        <th>Half Yearly</th>
                                        <th>Yearly</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {premiums.map((premium) => (
                                        <tr key={premium.premiumId} style={{ opacity: isPremiumTableDisabled ? 0.5 : 1 }}>
                                            <td>{premium.totalAmount}</td>
                                            <td>{premium.monthly.toFixed(2)}</td>
                                            <td>{premium.quartely.toFixed(2)}</td>
                                            <td>{premium.halfly.toFixed(2)}</td>
                                            <td>{premium.yearly.toFixed(2)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <Button variant="primary" onClick={handlePayNow} className="mt-3" disabled={isPremiumTableDisabled || isPayNowDisabled || sessionButton}>
                                <FontAwesomeIcon icon={faCreditCard} className="me-2" />
                                Pay Now
                            </Button>
                        </Card.Body>
                    </Card>
                )}

                {premiums.length > 0 && sessionButton && (
                    <Card className="premium-card">
                        <Card.Body>
                            <Card.Title>Next Due</Card.Title>
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>Total Amount</th>
                                        {setFrequency === 'monthly' && <th>Monthly</th>}
                                        {setFrequency === 'quartely' && <th>Quarterly</th>}
                                        {setFrequency === 'halfly' && <th>Half Yearly</th>}
                                        {setFrequency === 'yearly' && <th>Yearly</th>}
                                    </tr>
                                </thead>
                                <tbody>
                                    {premiums.map((premium) => (
                                        <tr key={premium.premiumId} style={{ opacity: isPremiumTableDisabled ? 0.5 : 1 }}>
                                            <td>{premium.totalAmount}</td>
                                            {setFrequency === 'monthly' && <td>{premium.monthly.toFixed(2)}</td>}
                                            {setFrequency === 'quartely' && <td>{premium.quartely.toFixed(2)}</td>}
                                            {setFrequency === 'halfly' && <td>{premium.halfly.toFixed(2)}</td>}
                                            {setFrequency === 'yearly' && <td>{premium.yearly.toFixed(2)}</td>}
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <Button variant="primary" onClick={handlePayNow} className="mt-3" disabled={isPremiumTableDisabled || isPayNowDisabled || sessionButton}>
                                <FontAwesomeIcon icon={faCreditCard} className="me-2" />
                                Pay Now
                            </Button>
                        </Card.Body>
                    </Card>
                )}
            </Container>
        </div>
    );
};

export default ApplicationTracking;


