

import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import NavigationBar from '../components/Navbar';
import '../styles/Home.css';

function Home() {

    const handleLearnMoreClick = () => {
        window.location.href = "/";
    }
    return (
        <div className="container-fluid home-container">
            <NavigationBar />

            <section className="hero-section">
                <Row className="justify-content-center text-center">
                    <Col md={12}>
                        <img
                            src="https://img.freepik.com/premium-vector/health-insurance-protection-care-medical-with-decorated-small-people-character-filling-medical-documents-healthcare-concept-flat_126283-2442.jpg?semt=ais_hybrid"
                            alt="Healthcare"
                            className="img-fluid hero-image"
                        />
                        <h1 id="welcome" className="mt-4">Welcome to Health Insurance</h1>
                        <p className="lead">Get the best health insurance policies tailored to your needs.</p>
                        <Button variant="primary" href="/register" size="lg" className="mt-3" style={{ width: 300 }}>Register as Applicant</Button>
                    </Col>
                </Row>
            </section>

            <section className="info-section py-5">
                <Container>
                    <Row className="text-center">
                        <Col md={4}>
                            <div className="info-card">
                                <img
                                    src="https://w7.pngwing.com/pngs/400/750/png-transparent-health-insurance-health-care-life-insurance-others-blue-logo-insurance-thumbnail.png"
                                    alt="Secure Your Health"
                                    className="info-icon mb-3"
                                />
                                <h3>Secure Your Health</h3>
                                <p>Ensure comprehensive coverage for you and your family.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="info-card">
                                <img
                                    src="https://media.istockphoto.com/id/1363270862/vector/24-7-service-24-7-open-concept-with-arrow-icon-support-service-24-hours-a-day-and-7-days-a.jpg?s=612x612&w=0&k=20&c=yzSS66i7iXU1zdVUhsO6bdYKDXcUmGn6c05w-ok-Row="
                                    alt="24X7 Support"
                                    className="info-icon mb-3"
                                />
                                <h3>24X7 Dedicated Support</h3>
                                <p>Our team is here to assist you round the clock.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="info-card">
                                <img
                                    src="https://cdn.policyx.com/images/network-hospital-232021.png"
                                    alt="Cashless Network"
                                    className="info-icon mb-3"
                                />
                                <h3>10,000+ Cashless Network Hospitals</h3>
                                <p>Access a wide network of hospitals with cashless facilities.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="policies-section py-5 bg-light">
                <Container>
                    <h2 className="text-center mb-5">Our Health Care Policies</h2>
                    <Row>
                        {['Family Floater', 'Individual Health', 'Critical Illness', 'Senior Citizen'].map((policy, index) => (
                            <Col md={3} key={index}>
                                <Card className="h-100 policy-card">
                                    <Card.Body>
                                        <Card.Title>{policy}</Card.Title>
                                        <Card.Text>
                                            Comprehensive coverage tailored for {policy.toLowerCase()} needs.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Button variant="outline-primary" size="sm" onClick={handleLearnMoreClick}>Learn More</Button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <section className="trusted-customers py-5">
                <Container className="text-center">
                    <img
                        src="https://thumbs.dreamstime.com/b/family-happy-union-heart-shaped-health-care-medical-logo-family-parent-kids-green-love-parenting-care-symbol-icon-design-139685628.jpg"
                        alt="Trusted Customers"
                        className="trusted-customers-img mb-4"
                    />
                    <h2>Trusted by Happy Customers</h2>
                    <p className="lead">Join thousands of satisfied customers who have secured their health with us.</p>
                </Container>
            </section>

            <footer className="footer bg-dark text-light py-4">
                <Container className="text-center">
                    <p>&copy; 2024 Health Insurance. All rights reserved.</p>
                    <p><a href="/terms" className="text-light">Terms and Conditions</a> | <a href="/privacy" className="text-light">Privacy Policy</a></p>
                </Container>
            </footer>
        </div>
    );
}

export default Home;