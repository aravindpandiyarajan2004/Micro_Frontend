

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/AdminInsuranceManage.css';
import Swal from 'sweetalert2';
import AdminNavbar from '../components/AdminNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Form, Button, Table, Alert, Spinner } from 'react-bootstrap';

const AdminInsuranceManage = () => {
    const [insuranceName, setInsuranceName] = useState('');
    const [description, setDescription] = useState('');
    const [ageCriteria, setAgeCriteria] = useState(''); // New state for age criteria
    const [insurances, setInsurances] = useState([]);
    const [selectedInsurance, setSelectedInsurance] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [validationErrors, setValidationErrors] = useState({
        insuranceName: '',
        description: ''
    });

    useEffect(() => {
        const fetchInsurances = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://localhost:8027/insurance/all');
                setInsurances(response.data);
                setError('');
            } catch (error) {
                console.error('Error fetching insurances:', error);
                setError('Error fetching insurances.');
            } finally {
                setLoading(false);
            }
        };

        fetchInsurances();
    }, []);

    const validateInputs = () => {
        let isValid = true;
        let errors = { insuranceName: '', description: '' };

        if (!insuranceName) {
            errors.insuranceName = 'Insurance name is required.';
            isValid = false;
        }
        if (!description) {
            errors.description = 'Description is required.';
            isValid = false;
        }

        setValidationErrors(errors);
        return isValid;
    };

    const handleAddInsurance = async () => {
        if (!validateInputs()) return;

        const newInsurance = {
            insuranceName,
            description,
        };

        setLoading(true);
        try {
            const response = await axios.post('http://localhost:8027/insurance', newInsurance);
            if (response.data === 'Success') {
                setInsurances([...insurances, newInsurance]);
                setInsuranceName('');
                setDescription('');
                setAgeCriteria('');
                setError('');
                window.location.reload();
            } else {
                setError('Error adding insurance.');
            }
        } catch (error) {
            console.error('Error adding insurance:', error);
            setError('Error adding insurance.');
        } finally {
            setLoading(false);
        }
    };

    const handleEditInsurance = (insurance) => {
        setSelectedInsurance(insurance);
        setInsuranceName(insurance.insuranceName);
        setDescription(insurance.description);
        setValidationErrors({
            insuranceName: '',
            description: ''
        });
    };

    const handleSaveEdit = async () => {
        if (!selectedInsurance || !validateInputs()) return;

        const updatedInsurance = {
            ...selectedInsurance,
            insuranceName,
            description,
        };

        setLoading(true);
        try {
            const response = await axios.put('http://localhost:8027/insurance', updatedInsurance);
            if (response.data === 'Success') {
                setInsurances(insurances.map(i => i.inusranceId === selectedInsurance.inusranceId ? updatedInsurance : i));
                setSelectedInsurance(null);
                setInsuranceName('');
                setDescription('');
                setValidationErrors({
                    insuranceName: '',
                    description: ''
                });
                setError('');
            } else {
                setError('Error updating insurance.');
            }
        } catch (error) {
            console.error('Error updating insurance:', error);
            setError('Error updating insurance.');
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteInsurance = async (insuranceId) => {
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
                const response = await axios.delete(`http://localhost:8027/insurance/${insuranceId}`);
                if (response.data === 'Success') {
                    setInsurances(insurances.filter(i => i.inusranceId !== insuranceId));
                    await Swal.fire('Deleted!', 'The insurance has been deleted.', 'success');
                } else {
                    setError('Error deleting insurance.');
                }
            }
        } catch (error) {
            console.error('Error deleting insurance:', error);
            setError('Error deleting insurance.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="insurance-management">
            <AdminNavbar />
            <Container className="mt-4">
                <h1 className="text-center mb-4" style={{ marginTop: 80 }}>Manage Health Insurance</h1>
                <hr className="mb-5" />
                
                <Row className="justify-content-center">
                    <Col md={8}>
                        <Form onSubmit={(e) => e.preventDefault()} className="insurance-form">
                            <Form.Group className="mb-3">
                                <Form.Label>Insurance Scheme Name:</Form.Label>
                                <Form.Control 
                                    type="text"
                                    value={insuranceName}
                                    onChange={(e) => setInsuranceName(e.target.value)}
                                    disabled={loading}
                                    isInvalid={!!validationErrors.insuranceName}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {validationErrors.insuranceName}
                                </Form.Control.Feedback>
                            </Form.Group>
                            
                            <Form.Group className="mb-3">
                                <Form.Label>Description:</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    disabled={loading}
                                    isInvalid={!!validationErrors.description}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {validationErrors.description}
                                </Form.Control.Feedback>
                            </Form.Group>
                            
                            <div className="d-flex justify-content-between">
                                <Button 
                                    variant="primary" 
                                    onClick={handleAddInsurance} 
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <Spinner animation="border" size="sm" />
                                    ) : (
                                        'Add Insurance'
                                    )}
                                </Button>
                                
                                {selectedInsurance && (
                                    <Button 
                                        variant="success" 
                                        onClick={handleSaveEdit} 
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <Spinner animation="border" size="sm" />
                                        ) : (
                                            'Save Edit'
                                        )}
                                    </Button>
                                )}
                            </div>
                        </Form>
                        
                        {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
                    </Col>
                </Row>
                
                {insurances.length > 0 && (
                    <div className="mt-5">
                        <h2 className="text-center mb-4">Insurance List</h2>
                        <Table striped bordered hover responsive>
                            <thead className="bg-primary text-white">
                                <tr>
                                    <th>Insurance ID</th>
                                    <th>Insurance Name</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {insurances.map((insurance) => (
                                    <tr key={insurance.inusranceId}>
                                        <td>{insurance.inusranceId}</td>
                                        <td>{insurance.insuranceName}</td>
                                        <td>{insurance.description}</td>
                                        <td>
                                            <Button
                                                variant="warning"
                                                size="sm"
                                                onClick={() => handleEditInsurance(insurance)}
                                                disabled={loading}
                                                className="me-2"
                                            >
                                                <FontAwesomeIcon icon={faEdit} />
                                            </Button>
                                            <Button
                                                variant="danger"
                                                size="sm"
                                                onClick={() => handleDeleteInsurance(insurance.inusranceId)}
                                                disabled={loading}
                                            >
                                                <FontAwesomeIcon icon={faTrashAlt} />
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                )}
            </Container>
        </div>
    );
};

export default AdminInsuranceManage;


