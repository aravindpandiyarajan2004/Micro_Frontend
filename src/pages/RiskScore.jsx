

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/RiskScore.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { Container, Table, Button, Alert } from 'react-bootstrap';
import AdminNavbar from '../components/AdminNavbar';
import { useNavigate } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const RiskScore = () => {
    const [risks, setRisks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRisks = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://localhost:8027/risk/all');
                setRisks(response.data);
                setError('');
            } catch (error) {
                console.error('Error fetching risks:', error);
                setError('Error fetching risks.');
            } finally {
                setLoading(false);
            }
        };

        fetchRisks();
    }, []);

    const handleDeleteRisk = async (riskId) => {
        if (!riskId) {
            console.error('Invalid risk ID');
            setError('Invalid risk ID.');
            return;
        }

        setLoading(true);
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: 'This action cannot be undone!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!',
            });

            if (result.isConfirmed) {
                const response = await axios.delete(`http://localhost:8027/risk/${riskId}`);

                if (response.data === 'Success') {
                    setRisks(risks.filter(risk => risk.riskId !== riskId));
                    await Swal.fire('Deleted!', 'The risk has been deleted.', 'success');
                } else {
                    throw new Error('Failed to delete the risk');
                }
            }
        } catch (error) {
            console.error('Error deleting risk:', error);
            setError('Error deleting risk: ' + (error.response?.data?.message || error.message));
            await Swal.fire('Error!', 'There was an error deleting the risk.', 'error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="risk-score">
            <AdminNavbar />
            <Container className="my-4">
                <h1 className="mb-4" style={{ marginTop: 70 }}>Risk Scores</h1><hr />
                {error && <Alert variant="danger">{error}</Alert>}
                {loading && <div className="text-center"><p>Loading...</p></div>}
                {risks.length > 0 ? (
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Applicant Name</th>
                                <th>Risk Score</th>
                                <th>Risk Type</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {risks.map((risk) => (
                                <tr key={risk.riskId}>
                                    <td>{risk.applicants?.applicantName || 'Unknown'}</td>
                                    <td>{risk.riskScore}</td>
                                    <td>{risk.riskType}</td>
                                    <td>
                                        <Button
                                            variant="danger"
                                            onClick={() => handleDeleteRisk(risk.riskId)}
                                            aria-label="Delete"
                                        >
                                            <FontAwesomeIcon icon={faTrashAlt} />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                ) : (
                    <Alert variant="info">No risk scores available.</Alert>
                )}
            </Container>

            <button
                style={{ width: 300, marginLeft: 600 }}
                type="button"
                className="back-button"
                onClick={() => navigate('/premium-calculation')}
            >
                Calculate Premium
                <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
            </button>
        </div>
    );
};

export default RiskScore;

