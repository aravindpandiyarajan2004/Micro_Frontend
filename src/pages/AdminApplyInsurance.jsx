

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import '../styles/AdminApplyInsurance.css';
// import AdminNavbar from '../components/AdminNavbar';

// const AdminApplyInsurance = () => {
//     const [applications, setApplications] = useState([]);
//     const [selectedApplication, setSelectedApplication] = useState(null);
//     const [riskScores, setRiskScores] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [riskCalculatedMap, setRiskCalculatedMap] = useState({});

//     useEffect(() => {
//         fetchApplications();
//         const storedApplicantId = localStorage.getItem('selectedApplicantId');
//         if (storedApplicantId) {
//             const fetchStoredApplication = async () => {
//                 try {
//                     const response = await axios.get(`http://localhost:8027/admin/applyInsurance/${storedApplicantId}`);
//                     setSelectedApplication(response.data);

//                     // Check if risk is calculated
//                     const isCalculated = await checkIfRiskCalculated(storedApplicantId);
//                     setRiskCalculatedMap(prevMap => ({ ...prevMap, [storedApplicantId]: isCalculated }));
//                 } catch (error) {
//                     console.error('Error fetching stored application:', error);
//                 }
//             };
//             fetchStoredApplication();
//         }
//     }, []);

//     const fetchApplications = async () => {
//         try {
//             const response = await axios.get('http://localhost:8027/admin/applyInsurance');
//             setApplications(response.data);
//         } catch (error) {
//             console.error('Error fetching applications:', error);
//         }
//     };

//     const checkIfRiskCalculated = async (applicantId) => {
//         try {
//             const response = await axios.get(`http://localhost:8027/admin/risk-calculated/${applicantId}`);
//             return response.data; // This will be a boolean indicating if the risk is calculated
//         } catch (error) {
//             console.error('Error checking risk calculation status:', error);
//             return false;
//         }
//     };

//     const handleStatusChange = async (newStatus, applicantId) => {
//         if (!selectedApplication) return;

//         try {
//             await axios.put(`http://localhost:8027/admin/applyInsurance/${selectedApplication.applyInsuranceId}`, {
//                 ...selectedApplication,
//                 status: newStatus,
//             });

//             await axios.post(`http://localhost:8027/applyInsurance/sendEmail/${applicantId}/${newStatus}`);
//             Swal.fire({
//                 title: 'Status Updated',
//                 text: `Application status has been updated to ${newStatus}.`,
//                 icon: 'success',
//                 confirmButtonText: 'OK'
//             });
//             fetchApplications(); // Refresh the applications list
//             setSelectedApplication(null); // Clear selection
//         } catch (error) {
//             console.error('Error updating status:', error);
//             Swal.fire({
//                 title: 'Error',
//                 text: 'There was an error updating the status.',
//                 icon: 'error',
//                 confirmButtonText: 'OK'
//             });
//         }
//     };

//     const handleCalculateRisk = async () => {
//         const applicantId = localStorage.getItem('selectedApplicantId');
//         if (!applicantId) {
//             Swal.fire({
//                 title: 'Error',
//                 text: 'No applicant ID found in local storage.',
//                 icon: 'error',
//                 confirmButtonText: 'OK'
//             });
//             return;
//         }

//         setLoading(true);
//         try {
//             console.log('Fetching risk score for applicant ID:', applicantId);
//             const response = await axios.get(`http://localhost:8027/risk/calculate/${applicantId}/${selectedApplication.applyInsuranceId}`);
//             console.log('Risk Calculation Response:', response.data); // Debugging output
//             setRiskScores([response.data]); // Assuming the response is a single risk object
//             Swal.fire({
//                 title: 'Risk Calculation Successful',
//                 text: 'The risk score has been calculated successfully.',
//                 icon: 'success',
//                 confirmButtonText: 'OK'
//             }).then(() => {
//                 // Optionally, you can also redirect or navigate
//                 window.location.href = '/risk-calculation';
//             });
//         } catch (error) {
//             console.error('Error calculating risk score:', error);
//             Swal.fire({
//                 title: 'Error',
//                 text: 'There was an error calculating the risk score.',
//                 icon: 'error',
//                 confirmButtonText: 'OK'
//             });
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="admin-manage-applications">
//             <AdminNavbar />
//             <h1>Manage Insurance Applications</h1><hr/>
//             <table style={{width:"1000px",marginLeft:'220px'}}>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Applicant Name</th>
//                         <th>Insurance Date</th>
//                         <th>Policy Number</th>
//                         <th>Status</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {applications.map((app, index) => (
//                         <tr key={index}>
//                             <td>{index + 1}</td>
//                             <td>{app.applicant.applicantName}</td>
//                             <td>{app.insuranceDate}</td>
//                             <td>{app.policyNumber}</td>
//                             <td>{app.status}</td>
//                             <td>
//                                 <button
//                                     className="accept-button"
//                                     onClick={() => {
//                                         setSelectedApplication(app);
//                                         handleStatusChange('Approved', app.applicant.applicantId);
//                                     }}
//                                     style={{width:'230px',marginLeft:'45px'}}
//                                 >
//                                     Accept
//                                 </button>
//                                 <button
//                                     className="reject-button"
//                                     onClick={() => {
//                                         setSelectedApplication(app);
//                                         handleStatusChange('Rejected', app.applicant.applicantId);
//                                     }}
//                                     style={{width:'230px',marginTop:'7px',marginLeft:'45px'}}
//                                 >
//                                     Reject
//                                 </button>
//                                 <button
//                                     className="risk-calculator-button"
//                                     onClick={() => {
//                                         setSelectedApplication(app);
//                                         handleCalculateRisk();
//                                     }}
//                                     style={{width:'230px',marginTop:'7px',marginLeft:'45px'}}
//                                     disabled={riskCalculatedMap[app.applicant.applicantId] || loading}
//                                 >
//                                     Risk Calculator
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             {riskScores.length > 0 && (
//                 <div>
//                     <h2>Risk Scores</h2>
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Applicant Name</th>
//                                 <th>Risk Score</th>
//                                 <th>Risk Type</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {riskScores.map((risk, index) => (
//                                 <tr key={index}>
//                                     <td>{risk.applicantName || 'Unknown'}</td>
//                                     <td>{risk.riskScore}</td>
//                                     <td>{risk.riskType}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AdminApplyInsurance;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../styles/AdminApplyInsurance.css';
import AdminNavbar from '../components/AdminNavbar';
import { Container, Table, Button, Badge, Spinner } from 'react-bootstrap';

const AdminApplyInsurance = () => {
    const [applications, setApplications] = useState([]);
    const [selectedApplication, setSelectedApplication] = useState(null);
    const [riskScores, setRiskScores] = useState([]);
    const [loading, setLoading] = useState(false);
    const [riskCalculatedMap, setRiskCalculatedMap] = useState({});
    const [initialButton, setInitialButton] = useState(false);
    const [riskCalc, setRiskCalc] = useState(0);

    useEffect(() => {
        fetchApplications();
        const storedApplicantId = localStorage.getItem('selectedApplicantId');
        if (storedApplicantId) {
            const fetchStoredApplication = async () => {
                try {
                    const response = await axios.get(`http://localhost:8027/admin/applyInsurance/${storedApplicantId}`);
                    setSelectedApplication(response.data);

                    // Check if risk is calculated
                    const isCalculated = await checkIfRiskCalculated(storedApplicantId);
                    setRiskCalculatedMap(prevMap => ({ ...prevMap, [storedApplicantId]: isCalculated }));
                } catch (error) {
                    console.error('Error fetching stored application:', error);
                }
            };
            fetchStoredApplication();
        }
    }, []);

    const fetchApplications = async () => {
        try {
            const response = await axios.get('http://localhost:8027/admin/applyInsurance');
            setApplications(response.data);
        } catch (error) {
            console.error('Error fetching applications:', error);
        }
    };

    const checkIfRiskCalculated = async (applicantId) => {
        try {
            const response = await axios.get(`http://localhost:8027/admin/risk-calculated/${applicantId}`);
            return response.data; // This will be a boolean indicating if the risk is calculated
        } catch (error) {
            console.error('Error checking risk calculation status:', error);
            return false;
        }
    };



    const handleStatusChange = async (newStatus, applicantId) => {
        if (!selectedApplication) return;

        // Show loading alert
        const loadingSwal = Swal.fire({
            title: 'Updating Status...',
            text: 'Please wait while we update the status.',
            allowOutsideClick: false,
            showConfirmButton: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }

        });

        try {
            // Update the application status
            await axios.put(`http://localhost:8027/admin/applyInsurance/${selectedApplication.applyInsuranceId}`, {
                ...selectedApplication,
                status: newStatus,
            });

            // Send email notification
            await axios.post(`http://localhost:8027/applyInsurance/sendEmail/${applicantId}/${newStatus}`);

            // Close the loading alert and show success message
            await loadingSwal.close();
            Swal.fire({
                title: 'Status Updated',
                text: `Application status has been updated to ${newStatus}.`,
                icon: 'success',
                confirmButtonText: 'OK'
            });

            // Refresh the applications list and clear selection
            fetchApplications();
            setSelectedApplication(null);
        } catch (error) {
            // Close the loading alert and show error message
            await loadingSwal.close();
            Swal.fire({
                title: 'Error',
                text: 'There was an error updating the status.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            console.error('Error updating status:', error);
        }
    };


    const handleCalculateRisk = async (app) => {
        const applicantId = localStorage.getItem('selectedApplicantId');
        if (!applicantId) {
            Swal.fire({
                title: 'Error',
                text: 'No applicant ID found in local storage.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }

        console.log(app.applicant.applicantId);

        // sessionStorage.setItem("ristCalcuilateApplicants", app.applicant.applicantId)

        setLoading(true);
        try {
            console.log('Fetching risk score for applicant ID:', applicantId);
            const response = await axios.get(`http://localhost:8027/risk/calculate/${applicantId}/${selectedApplication.applyInsuranceId}`);
            console.log('Risk Calculation Response:', response.data); // Debugging output
            setRiskScores([response.data]); // Assuming the response is a single risk object
            Swal.fire({
                title: 'Risk Calculation Successful',
                text: 'The risk score has been calculated successfully.',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                // Optionally, you can also redirect or navigate
                setInitialButton(true)
                window.location.href = '/risk-calculation';
            });
        } catch (error) {
            console.error('Error calculating risk score:', error);
            // Swal.fire({
            //     title: 'Error',
            //     text: 'There was an error calculating the risk score.',
            //     icon: 'error',
            //     confirmButtonText: 'OK'
            // });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin-manage-applications">
            <AdminNavbar />
            <Container className="mt-5">
                <h1 className="text-center mb-4">Manage Insurance Applications</h1>
                <div className="table-responsive">
                    <Table striped bordered hover className="shadow-sm">
                        <thead className="bg-primary text-white">
                            <tr>
                                <th>ID</th>
                                <th>Applicant Name</th>
                                <th>Insurance Date</th>
                                <th>Policy Number</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications.map((app, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{app.applicant.applicantName}</td>
                                    <td>{app.insuranceDate}</td>
                                    <td>{app.policyNumber}</td>
                                    <td>
                                        <Badge bg={app.status === 'Approved' ? 'success' : app.status === 'Rejected' ? 'danger' : 'warning'}>
                                            {app.status}
                                        </Badge>
                                    </td>
                                    <td>
                                        <div className="d-flex flex-column">
                                            <Button
                                                variant="success"
                                                className="mb-2"
                                                onClick={() => {
                                                    setSelectedApplication(app);
                                                    handleStatusChange('Approved', app.applicant.applicantId);
                                                }}
                                                disabled={app.status !== 'pending'}
                                            >
                                                Accept
                                            </Button>
                                            <Button
                                                variant="danger"
                                                className="mb-2"
                                                onClick={() => {
                                                    setSelectedApplication(app);
                                                    handleStatusChange('Rejected', app.applicant.applicantId);
                                                }}
                                                disabled={app.status !== 'pending'}
                                            >
                                                Reject
                                            </Button>
                                            <Button
                                                variant="info"
                                                onClick={() => {
                                                    setSelectedApplication(app);
                                                    handleCalculateRisk(app);
                                                }}
                                                disabled={app.status !== 'pending'}
                                            >
                                                {loading ? (
                                                    <>
                                                        <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                                                        <span className="visually-hidden">Loading...</span>
                                                    </>
                                                ) : (
                                                    'Risk Calculator'
                                                )}
                                            </Button>


                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>

                {riskScores.length > 0 && (
                    <div className="mt-5">
                        <h2 className="text-center mb-4">Risk Scores</h2>
                        <Table striped bordered hover className="shadow-sm">
                            <thead className="bg-secondary text-white">
                                <tr>
                                    <th>Applicant Name</th>
                                    <th>Risk Score</th>
                                    <th>Risk Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {riskScores.map((risk, index) => (
                                    <tr key={index}>
                                        <td>{risk.applicantName || 'Unknown'}</td>
                                        <td>{risk.riskScore}</td>
                                        <td>
                                            <Badge bg={risk.riskType === 'High' ? 'danger' : risk.riskType === 'Medium' ? 'warning' : 'success'}>
                                                {risk.riskType}
                                            </Badge>
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

export default AdminApplyInsurance;