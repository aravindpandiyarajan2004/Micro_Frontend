
// // // // // import React, { useEffect, useState } from 'react';
// // // // // import axios from 'axios';
// // // // // import Swal from 'sweetalert2';
// // // // // import '../styles/AdminApplyInsurance.css';
// // // // // import AdminNavbar from '../components/AdminNavbar';

// // // // // const AdminApplyInsurance = () => {
// // // // //     const [applications, setApplications] = useState([]);
// // // // //     const [selectedApplication, setSelectedApplication] = useState(null);
// // // // //     const [riskScores, setRiskScores] = useState([]);
// // // // //     const [loading, setLoading] = useState(false);

// // // // //     useEffect(() => {
// // // // //         fetchApplications();
// // // // //         // Check if there's an application ID in local storage
// // // // //         const storedApplicantId = localStorage.getItem('selectedApplicantId');
// // // // //         if (storedApplicantId) {
// // // // //             // Fetch application details using the stored ID if needed
// // // // //             const fetchStoredApplication = async () => {
// // // // //                 try {
// // // // //                     const response = await axios.get(`http://localhost:8027/admin/applyInsurance/${storedApplicantId}`);
// // // // //                     setSelectedApplication(response.data);
// // // // //                     // Optionally, fetch risk score here or on-demand
// // // // //                 } catch (error) {
// // // // //                     console.error('Error fetching stored application:', error);
// // // // //                 }
// // // // //             };

// // // // //             fetchStoredApplication();
// // // // //         }
// // // // //     }, []);

// // // // //     const fetchApplications = async () => {
// // // // //         try {
// // // // //             const response = await axios.get('http://localhost:8027/admin/applyInsurance');
// // // // //             setApplications(response.data);
// // // // //         } catch (error) {
// // // // //             console.error('Error fetching applications:', error);
// // // // //         }
// // // // //     };

// // // // //     const handleStatusChange = async (newStatus,applicantId) => {
// // // // //         if (!selectedApplication) return;

// // // // //         try {
// // // // //             await axios.put(`http://localhost:8027/admin/applyInsurance/${selectedApplication.applyInsuranceId}`, {
// // // // //                 ...selectedApplication,
// // // // //                 status: newStatus,
// // // // //             });

// // // // //             await axios.post(`http://localhost:8027/applyInsurance/sendEmail/${applicantId}/${newStatus}`)
// // // // //             Swal.fire({
// // // // //                 title: 'Status Updated',
// // // // //                 text: `Application status has been updated to ${newStatus}.`,
// // // // //                 icon: 'success',
// // // // //                 confirmButtonText: 'OK'
// // // // //             });
// // // // //             fetchApplications(); // Refresh the applications list
// // // // //             setSelectedApplication(null); // Clear selection
// // // // //         } catch (error) {
// // // // //             console.error('Error updating status:', error);
// // // // //             Swal.fire({
// // // // //                 title: 'Error',
// // // // //                 text: 'There was an error updating the status.',
// // // // //                 icon: 'error',
// // // // //                 confirmButtonText: 'OK'
// // // // //             });
// // // // //         }
// // // // //     };

// // // // //     const handleCalculateRisk = async () => {
// // // // //         const applicantId = localStorage.getItem('selectedApplicantId');
// // // // //         if (!applicantId) {
// // // // //             Swal.fire({
// // // // //                 title: 'Error',
// // // // //                 text: 'No applicant ID found in local storage.',
// // // // //                 icon: 'error',
// // // // //                 confirmButtonText: 'OK'
// // // // //             });
// // // // //             return;
// // // // //         }

// // // // //         setLoading(true);
// // // // //         try {
// // // // //             console.log('Fetching risk score for applicant ID:', applicantId);
// // // // //             const response = await axios.get(`http://localhost:8027/risk/calculate/${applicantId}/${selectedApplication.applyInsuranceId}`);
// // // // //             console.log('Risk Calculation Response:', response.data); // Debugging output
// // // // //             setRiskScores([response.data]); // Assuming the response is a single risk object
// // // // //             Swal.fire({
// // // // //                 title: 'Risk Calculation Successful',
// // // // //                 text: 'The risk score has been calculated successfully.',
// // // // //                 icon: 'success',
// // // // //                 confirmButtonText: 'OK'
// // // // //             }).then(() => {
// // // // //                 // Optionally, you can also redirect or navigate
// // // // //                 window.location.href = '/risk-calculation';
// // // // //             });
// // // // //         } catch (error) {
// // // // //             console.error('Error calculating risk score:', error);
// // // // //             Swal.fire({
// // // // //                 title: 'Error',
// // // // //                 text: 'There was an error calculating the risk score.',
// // // // //                 icon: 'error',
// // // // //                 confirmButtonText: 'OK'
// // // // //             });
// // // // //         } finally {
// // // // //             setLoading(false);
// // // // //         }
// // // // //     };

// // // // //     return (
// // // // //         <div className="admin-manage-applications">
// // // // //             <AdminNavbar />
// // // // //             <h1>Manage Insurance Applications</h1>
// // // // //             <table>
// // // // //                 <thead>
// // // // //                     <tr>
// // // // //                         <th>ID</th>
// // // // //                         <th>Applicant Name</th>
// // // // //                         <th>Insurance Date</th>
// // // // //                         <th>Policy Number</th>
// // // // //                         <th>Status</th>
// // // // //                         <th>Actions</th>
// // // // //                     </tr>
// // // // //                 </thead>
// // // // //                 <tbody>
// // // // //                     {applications.map((app,index) => (
// // // // //                         <tr key={index}>
// // // // //                             <td>{index+1}</td>
// // // // //                             <td>{app.applicant.applicantName}</td>
// // // // //                             <td>{app.insuranceDate}</td>
// // // // //                             <td>{app.policyNumber}</td>
// // // // //                             <td>{app.status}</td>
// // // // //                             <td>
// // // // //                                 <button
// // // // //                                     className="accept-button"
// // // // //                                     onClick={() => {
// // // // //                                         setSelectedApplication(app);
// // // // //                                         handleStatusChange('Approved',app.applicant.applicantId);
// // // // //                                     }}
// // // // //                                 >
// // // // //                                     Accept
// // // // //                                 </button>
// // // // //                                 <button
// // // // //                                     className="reject-button"
// // // // //                                     onClick={() => {
// // // // //                                         setSelectedApplication(app);
// // // // //                                         handleStatusChange('Rejected',app.applicant.applicantId);
// // // // //                                     }}
// // // // //                                 >
// // // // //                                     Reject
// // // // //                                 </button>
// // // // //                                 <button
// // // // //                                     className="risk-calculator-button"
// // // // //                                     onClick={() => {
// // // // //                                         setSelectedApplication(app);
// // // // //                                         handleCalculateRisk();
// // // // //                                     }}
// // // // //                                     disabled={loading}
// // // // //                                 >
// // // // //                                     Risk Calculator
// // // // //                                 </button>
// // // // //                             </td>
// // // // //                         </tr>
// // // // //                     ))}
// // // // //                 </tbody>
// // // // //             </table>
// // // // //             {riskScores.length > 0 && (
// // // // //                 <div>
// // // // //                     <h2>Risk Scores</h2>
// // // // //                     <table>
// // // // //                         <thead>
// // // // //                             <tr>
// // // // //                                 <th>Applicant Name</th>
// // // // //                                 <th>Risk Score</th>
// // // // //                                 <th>Risk Type</th>
// // // // //                             </tr>
// // // // //                         </thead>
// // // // //                         <tbody>
// // // // //                             {riskScores.map((risk, index) => (
// // // // //                                 <tr key={index}>
// // // // //                                     <td>{risk.applicantName || 'Unknown'}</td>
// // // // //                                     <td>{risk.riskScore}</td>
// // // // //                                     <td>{risk.riskType}</td>
// // // // //                                 </tr>
// // // // //                             ))}
// // // // //                         </tbody>
// // // // //                     </table>
// // // // //                 </div>
// // // // //             )}
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default AdminApplyInsurance;

// // // // // // import React, { useEffect, useState } from 'react';
// // // // // // import axios from 'axios';
// // // // // // import Swal from 'sweetalert2';
// // // // // // import '../styles/AdminApplyInsurance.css';
// // // // // // import AdminNavbar from '../components/AdminNavbar';

// // // // // // const AdminApplyInsurance = () => {
// // // // // //     const [applications, setApplications] = useState([]);
// // // // // //     const [selectedApplication, setSelectedApplication] = useState(null);
// // // // // //     const [riskScores, setRiskScores] = useState([]);
// // // // // //     const [loading, setLoading] = useState(false);

// // // // // //     useEffect(() => {
// // // // // //         fetchApplications();
// // // // // //         const storedApplicantId = localStorage.getItem('selectedApplicantId');
// // // // // //         // const applicantName = localStorage.getItem('applicantName');
// // // // // //         // const email = localStorage.getItem('email');
// // // // // //         if (storedApplicantId) {
// // // // // //             const fetchStoredApplication = async () => {
// // // // // //                 try {
// // // // // //                     const response = await axios.get(`http://localhost:8027/admin/applyInsurance/${storedApplicantId}`);
// // // // // //                     setSelectedApplication(response.data);
// // // // // //                 } catch (error) {
// // // // // //                     console.error('Error fetching stored application:', error);
// // // // // //                 }
// // // // // //             };

// // // // // //             fetchStoredApplication();
// // // // // //         }
// // // // // //     }, []);

// // // // // //     const fetchApplications = async () => {
// // // // // //         try {
// // // // // //             const response = await axios.get('http://localhost:8027/admin/applyInsurance');
// // // // // //             setApplications(response.data);
// // // // // //         } catch (error) {
// // // // // //             console.error('Error fetching applications:', error);
// // // // // //         }
// // // // // //     };

// // // // // //     const handleStatusChange = async (newStatus) => {
// // // // // //         if (!selectedApplication) return;

// // // // // //         try {
// // // // // //             await axios.put(`http://localhost:8027/admin/applyInsurance/${selectedApplication.applyInsuranceId}`, {
// // // // // //                 ...selectedApplication,
// // // // // //                 status: newStatus,
// // // // // //             });

// // // // // //             // Send email notification
// // // // // //             await sendEmailNotification(newStatus);

// // // // // //             Swal.fire({
// // // // // //                 title: 'Status Updated',
// // // // // //                 text: `Application status has been updated to ${newStatus}.`,
// // // // // //                 icon: 'success',
// // // // // //                 confirmButtonText: 'OK'
// // // // // //             });

// // // // // //             fetchApplications();
// // // // // //             setSelectedApplication(null);
// // // // // //         } catch (error) {
// // // // // //             console.error('Error updating status:', error);
// // // // // //             Swal.fire({
// // // // // //                 title: 'Error',
// // // // // //                 text: 'There was an error updating the status.',
// // // // // //                 icon: 'error',
// // // // // //                 confirmButtonText: 'OK'
// // // // // //             });
// // // // // //         }
// // // // // //     };

// // // // // //     const sendEmailNotification = async (status) => {
// // // // // //         if (!selectedApplication) return;

// // // // // //         const applicantName = selectedApplication.applicantName;
// // // // // //         const applicantEmail = selectedApplication.email; // Make sure this field is available
// // // // // //         const premiumDetailsUrl = ''; // You need to generate or provide this URL if applicable

// // // // // //         try {
// // // // // //             const response = await axios.post('http://localhost:8027/applyInsurance/sendEmail', {
// // // // // //                 from: 'noreply@yourdomain.com', // Change this to your actual sender email
// // // // // //                 to: applicantEmail,
// // // // // //                 subject: 'Insurance Application Status Update',
// // // // // //                 body: `
// // // // // //                     <p>Dear ${applicantName},</p>
// // // // // //                     <p>Your insurance application was ${status}.</p>
// // // // // //                     ${status === 'Approved'
// // // // // //                         ? `<p>Kindly find your premium amount details in the attached PDF: <a href="${premiumDetailsUrl}">Premium Details</a></p>`
// // // // // //                         : `<p>Your application did not meet our criteria because your risk score is high. Thank you for understanding.</p>`
// // // // // //                     }
// // // // // //                     <p>Please check your dashboard for further details.</p>
// // // // // //                     <p>Thank you.</p>
// // // // // //                 `
// // // // // //             });

// // // // // //             if (response.status === 200) {
// // // // // //                 console.log('Email sent successfully');
// // // // // //             }
// // // // // //         } catch (error) {
// // // // // //             console.error('Error sending email:', error);
// // // // // //             Swal.fire({
// // // // // //                 title: 'Error',
// // // // // //                 text: 'There was an error sending the email.',
// // // // // //                 icon: 'error',
// // // // // //                 confirmButtonText: 'OK'
// // // // // //             });
// // // // // //         }
// // // // // //     };

// // // // // //     const handleCalculateRisk = async () => {
// // // // // //         const applicantId = localStorage.getItem('selectedApplicantId');
// // // // // //         if (!applicantId) {
// // // // // //             Swal.fire({
// // // // // //                 title: 'Error',
// // // // // //                 text: 'No applicant ID found in local storage.',
// // // // // //                 icon: 'error',
// // // // // //                 confirmButtonText: 'OK'
// // // // // //             });
// // // // // //             return;
// // // // // //         }

// // // // // //         setLoading(true);
// // // // // //         try {
// // // // // //             console.log('Fetching risk score for applicant ID:', applicantId);
// // // // // //             const response = await axios.get(`http://localhost:8027/risk/calculate/${applicantId}/${selectedApplication.applyInsuranceId}`);
// // // // // //             console.log('Risk Calculation Response:', response.data);
// // // // // //             setRiskScores([response.data]);
// // // // // //             Swal.fire({
// // // // // //                 title: 'Risk Calculation Successful',
// // // // // //                 text: 'The risk score has been calculated successfully.',
// // // // // //                 icon: 'success',
// // // // // //                 confirmButtonText: 'OK'
// // // // // //             }).then(() => {
// // // // // //                 window.location.href = '/risk-calculation';
// // // // // //             });
// // // // // //         } catch (error) {
// // // // // //             console.error('Error calculating risk score:', error);
// // // // // //             Swal.fire({
// // // // // //                 title: 'Error',
// // // // // //                 text: 'There was an error calculating the risk score.',
// // // // // //                 icon: 'error',
// // // // // //                 confirmButtonText: 'OK'
// // // // // //             });
// // // // // //         } finally {
// // // // // //             setLoading(false);
// // // // // //         }
// // // // // //     };

// // // // // //     return (
// // // // // //         <div className="admin-manage-applications">
// // // // // //             <AdminNavbar />
// // // // // //             <h1>Manage Insurance Applications</h1>
// // // // // //             <table>
// // // // // //                 <thead>
// // // // // //                     <tr>
// // // // // //                         <th>ID</th>
// // // // // //                         <th>Insurance Date</th>
// // // // // //                         <th>Policy Number</th>
// // // // // //                         <th>Status</th>
// // // // // //                         <th>Actions</th>
// // // // // //                     </tr>
// // // // // //                 </thead>
// // // // // //                 <tbody>
// // // // // //                     {applications.map((app) => (
// // // // // //                         <tr key={app.applyInsuranceId}>
// // // // // //                             <td>{app.applyInsuranceId}</td>
// // // // // //                             <td>{app.insuranceDate}</td>
// // // // // //                             <td>{app.policyNumber}</td>
// // // // // //                             <td>{app.status}</td>
// // // // // //                             <td>
// // // // // //                                 <button
// // // // // //                                     className="accept-button"
// // // // // //                                     onClick={() => {
// // // // // //                                         setSelectedApplication(app);
// // // // // //                                         handleStatusChange('Approved');
// // // // // //                                     }}
// // // // // //                                 >
// // // // // //                                     Accept
// // // // // //                                 </button>
// // // // // //                                 <button
// // // // // //                                     className="reject-button"
// // // // // //                                     onClick={() => {
// // // // // //                                         setSelectedApplication(app);
// // // // // //                                         handleStatusChange('Rejected');
// // // // // //                                     }}
// // // // // //                                 >
// // // // // //                                     Reject
// // // // // //                                 </button>
// // // // // //                                 <button
// // // // // //                                     className="risk-calculator-button"
// // // // // //                                     onClick={() => {
// // // // // //                                         setSelectedApplication(app);
// // // // // //                                         handleCalculateRisk();
// // // // // //                                     }}
// // // // // //                                     disabled={loading}
// // // // // //                                 >
// // // // // //                                     Risk Calculator
// // // // // //                                 </button>
// // // // // //                             </td>
// // // // // //                         </tr>
// // // // // //                     ))}
// // // // // //                 </tbody>
// // // // // //             </table>
// // // // // //             {riskScores.length > 0 && (
// // // // // //                 <div>
// // // // // //                     <h2>Risk Scores</h2>
// // // // // //                     <table>
// // // // // //                         <thead>
// // // // // //                             <tr>
// // // // // //                                 <th>Applicant Name</th>
// // // // // //                                 <th>Risk Score</th>
// // // // // //                                 <th>Risk Type</th>
// // // // // //                             </tr>
// // // // // //                         </thead>
// // // // // //                         <tbody>
// // // // // //                             {riskScores.map((risk, index) => (
// // // // // //                                 <tr key={index}>
// // // // // //                                     <td>{risk.applicantName || 'Unknown'}</td>
// // // // // //                                     <td>{risk.riskScore}</td>
// // // // // //                                     <td>{risk.riskType}</td>
// // // // // //                                 </tr>
// // // // // //                             ))}
// // // // // //                         </tbody>
// // // // // //                     </table>
// // // // // //                 </div>
// // // // // //             )}
// // // // // //         </div>
// // // // // //     );
// // // // // // };

// // // // // // export default AdminApplyInsurance;


// // // // // // import React, { useEffect, useState } from 'react';
// // // // // // import axios from 'axios';
// // // // // // import Swal from 'sweetalert2';
// // // // // // import '../styles/AdminApplyInsurance.css'; // Ensure this CSS file is created
// // // // // // import AdminNavbar from '../components/AdminNavbar';

// // // // // // const AdminApplyInsurance = () => {
// // // // // //     const [applications, setApplications] = useState([]);
// // // // // //     const [selectedApplication, setSelectedApplication] = useState(null);
// // // // // //     const [riskScores, setRiskScores] = useState([]);
// // // // // //     const [loading, setLoading] = useState(false);

// // // // // //     useEffect(() => {
// // // // // //         fetchApplications();
// // // // // //         // Check if there's an application ID in local storage
// // // // // //         const storedApplicantId = localStorage.getItem('selectedApplicantId');
// // // // // //         if (storedApplicantId) {
// // // // // //             // Fetch application details using the stored ID if needed
// // // // // //             const fetchStoredApplication = async () => {
// // // // // //                 try {
// // // // // //                     const response = await axios.get(`http://localhost:8027/admin/applyInsurance/${storedApplicantId}`);
// // // // // //                     console.log(response);
// // // // // //                     setSelectedApplication(response.data);
// // // // // //                     // Optionally, fetch risk score here or on-demand
// // // // // //                 } catch (error) {
// // // // // //                     console.error('Error fetching stored application:', error);
// // // // // //                 }
// // // // // //             };

// // // // // //             fetchStoredApplication();
// // // // // //         }
// // // // // //     }, []);

// // // // // //     const fetchApplications = async () => {
// // // // // //         try {
// // // // // //             const response = await axios.get('http://localhost:8027/admin/applyInsurance');
// // // // // //             setApplications(response.data);
// // // // // //         } catch (error) {
// // // // // //             console.error('Error fetching applications:', error);
// // // // // //         }
// // // // // //     };

// // // // // //     const handleStatusChange = async (newStatus) => {
// // // // // //         if (!selectedApplication) return;

// // // // // //         try {
// // // // // //             // Update application status
// // // // // //             await axios.put(`http://localhost:8027/admin/applyInsurance/${selectedApplication.applyInsuranceId}`, {
// // // // // //                 ...selectedApplication,
// // // // // //                 status: newStatus,
// // // // // //             });

// // // // // //             if (newStatus === 'Approved') {
// // // // // //                 // Fetch premium details
// // // // // //                 const premiumResponse = await axios.get(`http://localhost:8027/premium/${selectedApplication.applyInsuranceId}`);
// // // // // //                 const premiumDetails = premiumResponse.data;

// // // // // //                 // Send email notification
// // // // // //                 await axios.post('http://localhost:8027/applyInsurance/sendEmail', {
// // // // // //                     from: 'noreply@yourdomain.com',
// // // // // //                     to: localStorage.getItem('email'),
// // // // // //                     subject: 'Insurance Application Approved',
// // // // // //                     body: `
// // // // // //                         Dear ${localStorage.getItem('applicantName')},

// // // // // //                         Your insurance application was approved. Please find the premium details below:

// // // // // //                         Total Amount: ${premiumDetails.totalAmount}
// // // // // //                         Monthly: ${premiumDetails.monthly}
// // // // // //                         Quarterly: ${premiumDetails.quartely}
// // // // // //                         Half-Yearly: ${premiumDetails.halfly}
// // // // // //                         Yearly: ${premiumDetails.yearly}

// // // // // //                         Kindly check your dashboard for more information. If you are interested, please acknowledge us.

// // // // // //                         Thank you!
// // // // // //                     `
// // // // // //                 });
// // // // // //             } else if (newStatus === 'Rejected') {
// // // // // //                 // Send rejection email notification
// // // // // //                 await axios.post('http://localhost:8027/applyInsurance/sendEmail', {
// // // // // //                     from: 'noreply@yourdomain.com',
// // // // // //                     to: localStorage.getItem('email'),
// // // // // //                     subject: 'Insurance Application Rejected',
// // // // // //                     body: `
// // // // // //                         Dear ${localStorage.getItem('applicantName')},

// // // // // //                         Your insurance application did not meet our criteria because your risk score is high.

// // // // // //                         Thank you for your interest.

// // // // // //                         Regards,
// // // // // //                         Insurance Team
// // // // // //                     `
// // // // // //                 });
// // // // // //             }

// // // // // //             Swal.fire({
// // // // // //                 title: 'Status Updated',
// // // // // //                 text: `Application status has been updated to ${newStatus}.`,
// // // // // //                 icon: 'success',
// // // // // //                 confirmButtonText: 'OK'
// // // // // //             });
// // // // // //             fetchApplications(); // Refresh the applications list
// // // // // //             setSelectedApplication(null); // Clear selection
// // // // // //         } catch (error) {
// // // // // //             console.error('Error updating status or sending email:', error);
// // // // // //             Swal.fire({
// // // // // //                 title: 'Error',
// // // // // //                 text: 'There was an error updating the status or sending the email.',
// // // // // //                 icon: 'error',
// // // // // //                 confirmButtonText: 'OK'
// // // // // //             });
// // // // // //         }
// // // // // //     };

// // // // // //     const handleCalculateRisk = async () => {
// // // // // //         const applicantId = localStorage.getItem('selectedApplicantId');
// // // // // //         if (!applicantId) {
// // // // // //             Swal.fire({
// // // // // //                 title: 'Error',
// // // // // //                 text: 'No applicant ID found in local storage.',
// // // // // //                 icon: 'error',
// // // // // //                 confirmButtonText: 'OK'
// // // // // //             });
// // // // // //             return;
// // // // // //         }

// // // // // //         setLoading(true);
// // // // // //         try {
// // // // // //             console.log('Fetching risk score for applicant ID:', applicantId);
// // // // // //             const response = await axios.get(`http://localhost:8027/risk/calculate/${applicantId}/${selectedApplication.applyInsuranceId}`);
// // // // // //             console.log('Risk Calculation Response:', response.data); // Debugging output
// // // // // //             setRiskScores([response.data]); // Assuming the response is a single risk object
// // // // // //             Swal.fire({
// // // // // //                 title: 'Risk Calculation Successful',
// // // // // //                 text: 'The risk score has been calculated successfully.',
// // // // // //                 icon: 'success',
// // // // // //                 confirmButtonText: 'OK'
// // // // // //             }).then(() => {
// // // // // //                 // Optionally, you can also redirect or navigate
// // // // // //                 window.location.href = '/risk-calculation';
// // // // // //             });
// // // // // //         } catch (error) {
// // // // // //             console.error('Error calculating risk score:', error);
// // // // // //             Swal.fire({
// // // // // //                 title: 'Error',
// // // // // //                 text: 'There was an error calculating the risk score.',
// // // // // //                 icon: 'error',
// // // // // //                 confirmButtonText: 'OK'
// // // // // //             });
// // // // // //         } finally {
// // // // // //             setLoading(false);
// // // // // //         }
// // // // // //     };

// // // // // //     return (
// // // // // //         <div className="admin-manage-applications">
// // // // // //             <AdminNavbar />
// // // // // //             <h1>Manage Insurance Applications</h1>
// // // // // //             <table>
// // // // // //                 <thead>
// // // // // //                     <tr>
// // // // // //                         <th>ID</th>
// // // // // //                         <th>Insurance Date</th>
// // // // // //                         <th>Policy Number</th>
// // // // // //                         <th>Status</th>
// // // // // //                         <th>Actions</th>
// // // // // //                     </tr>
// // // // // //                 </thead>
// // // // // //                 <tbody>
// // // // // //                     {applications.map((app) => (
// // // // // //                         <tr key={app.applyInsuranceId}>
// // // // // //                             <td>{app.applyInsuranceId}</td>
// // // // // //                             <td>{app.insuranceDate}</td>
// // // // // //                             <td>{app.policyNumber}</td>
// // // // // //                             <td>{app.status}</td>
// // // // // //                             <td>
// // // // // //                                 <button
// // // // // //                                     className="accept-button"
// // // // // //                                     onClick={() => {
// // // // // //                                         setSelectedApplication(app);
// // // // // //                                         handleStatusChange('Approved');
// // // // // //                                     }}
// // // // // //                                 >
// // // // // //                                     Accept
// // // // // //                                 </button>
// // // // // //                                 <button
// // // // // //                                     className="reject-button"
// // // // // //                                     onClick={() => {
// // // // // //                                         setSelectedApplication(app);
// // // // // //                                         handleStatusChange('Rejected');
// // // // // //                                     }}
// // // // // //                                 >
// // // // // //                                     Reject
// // // // // //                                 </button>
// // // // // //                                 <button
// // // // // //                                     className="risk-calculator-button"
// // // // // //                                     onClick={() => {
// // // // // //                                         setSelectedApplication(app);
// // // // // //                                         handleCalculateRisk();
// // // // // //                                     }}
// // // // // //                                     disabled={loading}
// // // // // //                                 >
// // // // // //                                     Risk Calculator
// // // // // //                                 </button>
// // // // // //                             </td>
// // // // // //                         </tr>
// // // // // //                     ))}
// // // // // //                 </tbody>
// // // // // //             </table>
// // // // // //             {riskScores.length > 0 && (
// // // // // //                 <div>
// // // // // //                     <h2>Risk Scores</h2>
// // // // // //                     <table>
// // // // // //                         <thead>
// // // // // //                             <tr>
// // // // // //                                 <th>Applicant Name</th>
// // // // // //                                 <th>Risk Score</th>
// // // // // //                                 <th>Risk Type</th>
// // // // // //                             </tr>
// // // // // //                         </thead>
// // // // // //                         <tbody>
// // // // // //                             {riskScores.map((risk, index) => (
// // // // // //                                 <tr key={index}>
// // // // // //                                     <td>{risk.applicantName || 'Unknown'}</td>
// // // // // //                                     <td>{risk.riskScore}</td>
// // // // // //                                     <td>{risk.riskType}</td>
// // // // // //                                 </tr>
// // // // // //                             ))}
// // // // // //                         </tbody>
// // // // // //                     </table>
// // // // // //                 </div>
// // // // // //             )}
// // // // // //         </div>
// // // // // //     );
// // // // // // };

// // // // // // export default AdminApplyInsurance;

// // // // // // import React, { useEffect, useState } from 'react';
// // // // // // import axios from 'axios';
// // // // // // import Swal from 'sweetalert2';
// // // // // // import '../styles/AdminApplyInsurance.css';
// // // // // // import AdminNavbar from '../components/AdminNavbar';

// // // // // // const AdminApplyInsurance = () => {
// // // // // //     const [applications, setApplications] = useState([]);
// // // // // //     const [selectedApplication, setSelectedApplication] = useState(null);
// // // // // //     const [riskScores, setRiskScores] = useState([]);
// // // // // //     const [loading, setLoading] = useState(false);
// // // // // //     const [riskCalculated, setRiskCalculated] = useState(false);

// // // // // //     useEffect(() => {
// // // // // //         fetchApplications();

// // // // // //         // Check if there's an application ID in local storage
// // // // // //         const storedApplicantId = localStorage.getItem('selectedApplicantId');
// // // // // //         if (storedApplicantId) {
// // // // // //             // Fetch application details using the stored ID if needed
// // // // // //             const fetchStoredApplication = async () => {
// // // // // //                 try {
// // // // // //                     const response = await axios.get(`http://localhost:8027/admin/applyInsurance/${storedApplicantId}`);
// // // // // //                     setSelectedApplication(response.data);
// // // // // //                 } catch (error) {
// // // // // //                     console.error('Error fetching stored application:', error);
// // // // // //                 }
// // // // // //             };

// // // // // //             fetchStoredApplication();
// // // // // //         }
// // // // // //     }, []);

// // // // // //     const fetchApplications = async () => {
// // // // // //         try {
// // // // // //             const response = await axios.get('http://localhost:8027/admin/applyInsurance');
// // // // // //             setApplications(response.data);
// // // // // //         } catch (error) {
// // // // // //             console.error('Error fetching applications:', error);
// // // // // //         }
// // // // // //     };

// // // // // //     const handleStatusChange = async (newStatus) => {
// // // // // //         if (!selectedApplication) return;

// // // // // //         try {
// // // // // //             await axios.put(`http://localhost:8027/admin/applyInsurance/${selectedApplication.applyInsuranceId}`, {
// // // // // //                 ...selectedApplication,
// // // // // //                 status: newStatus,
// // // // // //             });

// // // // // //             await axios.post(`http://localhost:8027/applyInsurance/sendEmail/${selectedApplication.applicant.applicantId}/${newStatus}`);
            
// // // // // //             Swal.fire({
// // // // // //                 title: 'Status Updated',
// // // // // //                 text: `Application status has been updated to ${newStatus}.`,
// // // // // //                 icon: 'success',
// // // // // //                 confirmButtonText: 'OK'
// // // // // //             });

// // // // // //             fetchApplications(); // Refresh the applications list
// // // // // //             setSelectedApplication(null); // Clear selection
// // // // // //             setRiskCalculated(false); // Reset risk calculation status
// // // // // //         } catch (error) {
// // // // // //             console.error('Error updating status:', error);
// // // // // //             Swal.fire({
// // // // // //                 title: 'Error',
// // // // // //                 text: 'There was an error updating the status.',
// // // // // //                 icon: 'error',
// // // // // //                 confirmButtonText: 'OK'
// // // // // //             });
// // // // // //         }
// // // // // //     };

// // // // // //     const handleCalculateRisk = async () => {
// // // // // //         const applicantId = localStorage.getItem('selectedApplicantId');
// // // // // //         if (!applicantId) {
// // // // // //             Swal.fire({
// // // // // //                 title: 'Error',
// // // // // //                 text: 'No applicant ID found in local storage.',
// // // // // //                 icon: 'error',
// // // // // //                 confirmButtonText: 'OK'
// // // // // //             });
// // // // // //             return;
// // // // // //         }

// // // // // //         setLoading(true);
// // // // // //         try {
// // // // // //             console.log('Fetching risk score for applicant ID:', applicantId);
// // // // // //             const response = await axios.get(`http://localhost:8027/risk/calculate/${applicantId}/${selectedApplication.applyInsuranceId}`);
// // // // // //             console.log('Risk Calculation Response:', response.data); // Debugging output
// // // // // //             setRiskScores([response.data]); // Assuming the response is a single risk object
// // // // // //             setRiskCalculated(true); // Indicate that risk score calculation is done
// // // // // //             Swal.fire({
// // // // // //                 title: 'Risk Calculation Successful',
// // // // // //                 text: 'The risk score has been calculated successfully.',
// // // // // //                 icon: 'success',
// // // // // //                 confirmButtonText: 'OK'
// // // // // //             });
// // // // // //         } catch (error) {
// // // // // //             console.error('Error calculating risk score:', error);
// // // // // //             Swal.fire({
// // // // // //                 title: 'Error',
// // // // // //                 text: 'There was an error calculating the risk score.',
// // // // // //                 icon: 'error',
// // // // // //                 confirmButtonText: 'OK'
// // // // // //             });
// // // // // //         } finally {
// // // // // //             setLoading(false);
// // // // // //         }
// // // // // //     };

// // // // // //     return (
// // // // // //         <div className="admin-manage-applications">
// // // // // //             <AdminNavbar />
// // // // // //             <h1>Manage Insurance Applications</h1>
// // // // // //             <table>
// // // // // //                 <thead>
// // // // // //                     <tr>
// // // // // //                         <th>ID</th>
// // // // // //                         <th>Applicant Name</th>
// // // // // //                         <th>Insurance Date</th>
// // // // // //                         <th>Policy Number</th>
// // // // // //                         <th>Status</th>
// // // // // //                         <th>Actions</th>
// // // // // //                     </tr>
// // // // // //                 </thead>
// // // // // //                 <tbody>
// // // // // //                     {applications.map((app, index) => (
// // // // // //                         <tr key={index}>
// // // // // //                             <td>{index + 1}</td>
// // // // // //                             <td>{app.applicant.applicantName}</td>
// // // // // //                             <td>{app.insuranceDate}</td>
// // // // // //                             <td>{app.policyNumber}</td>
// // // // // //                             <td>{app.status}</td>
// // // // // //                             <td>
// // // // // //                                 <button
// // // // // //                                     className="accept-button"
// // // // // //                                     onClick={() => {
// // // // // //                                         setSelectedApplication(app);
// // // // // //                                         handleStatusChange('Approved');
// // // // // //                                     }}
// // // // // //                                     disabled={!riskCalculated}
// // // // // //                                 >
// // // // // //                                     Accept
// // // // // //                                 </button>
// // // // // //                                 <button
// // // // // //                                     className="reject-button"
// // // // // //                                     onClick={() => {
// // // // // //                                         setSelectedApplication(app);
// // // // // //                                         handleStatusChange('Rejected');
// // // // // //                                     }}
// // // // // //                                     disabled={!riskCalculated}
// // // // // //                                 >
// // // // // //                                     Reject
// // // // // //                                 </button>
// // // // // //                                 <button
// // // // // //                                     className="risk-calculator-button"
// // // // // //                                     onClick={() => {
// // // // // //                                         setSelectedApplication(app);
// // // // // //                                         handleCalculateRisk();
// // // // // //                                     }}
// // // // // //                                     disabled={loading}
// // // // // //                                 >
// // // // // //                                     Risk Calculator
// // // // // //                                 </button>
// // // // // //                             </td>
// // // // // //                         </tr>
// // // // // //                     ))}
// // // // // //                 </tbody>
// // // // // //             </table>
// // // // // //             {riskScores.length > 0 && (
// // // // // //                 <div>
// // // // // //                     <h2>Risk Scores</h2>
// // // // // //                     <table>
// // // // // //                         <thead>
// // // // // //                             <tr>
// // // // // //                                 <th>Applicant Name</th>
// // // // // //                                 <th>Risk Score</th>
// // // // // //                                 <th>Risk Type</th>
// // // // // //                             </tr>
// // // // // //                         </thead>
// // // // // //                         <tbody>
// // // // // //                             {riskScores.map((risk, index) => (
// // // // // //                                 <tr key={index}>
// // // // // //                                     <td>{risk.applicantName || 'Unknown'}</td>
// // // // // //                                     <td>{risk.riskScore}</td>
// // // // // //                                     <td>{risk.riskType}</td>
// // // // // //                                 </tr>
// // // // // //                             ))}
// // // // // //                         </tbody>
// // // // // //                     </table>
// // // // // //                 </div>
// // // // // //             )}
// // // // // //         </div>
// // // // // //     );
// // // // // // };

// // // // // // export default AdminApplyInsurance;

// // // // import React, { useEffect, useState } from 'react';
// // // // import axios from 'axios';
// // // // import Swal from 'sweetalert2';
// // // // import '../styles/AdminApplyInsurance.css';
// // // // import AdminNavbar from '../components/AdminNavbar';

// // // // const AdminApplyInsurance = () => {
// // // //     const [applications, setApplications] = useState([]);
// // // //     const [selectedApplication, setSelectedApplication] = useState(null);
// // // //     const [riskScores, setRiskScores] = useState([]);
// // // //     const [loading, setLoading] = useState(false);
// // // //     const [riskCalculated, setRiskCalculated] = useState(false);

// // // //     useEffect(() => {
// // // //         fetchApplications();
// // // //         const storedApplicantId = localStorage.getItem('selectedApplicantId');
// // // //         if (storedApplicantId) {
// // // //             const fetchStoredApplication = async () => {
// // // //                 try {
// // // //                     const response = await axios.get(`http://localhost:8027/admin/applyInsurance/${storedApplicantId}`);
// // // //                     setSelectedApplication(response.data);
// // // //                     // Optionally, fetch risk score here or on-demand
// // // //                 } catch (error) {
// // // //                     console.error('Error fetching stored application:', error);
// // // //                 }
// // // //             };

// // // //             fetchStoredApplication();
// // // //         }
// // // //     }, []);

// // // //     const fetchApplications = async () => {
// // // //         try {
// // // //             const response = await axios.get('http://localhost:8027/admin/applyInsurance');
// // // //             setApplications(response.data);
// // // //         } catch (error) {
// // // //             console.error('Error fetching applications:', error);
// // // //         }
// // // //     };

// // // //     const handleStatusChange = async (newStatus, applicantId) => {
// // // //         if (!selectedApplication) return;

// // // //         try {
// // // //             await axios.put(`http://localhost:8027/admin/applyInsurance/${selectedApplication.applyInsuranceId}`, {
// // // //                 ...selectedApplication,
// // // //                 status: newStatus,
// // // //             });

// // // //             await axios.post(`http://localhost:8027/applyInsurance/sendEmail/${applicantId}/${newStatus}`);
// // // //             Swal.fire({
// // // //                 title: 'Status Updated',
// // // //                 text: `Application status has been updated to ${newStatus}.`,
// // // //                 icon: 'success',
// // // //                 confirmButtonText: 'OK'
// // // //             });
// // // //             fetchApplications(); // Refresh the applications list
// // // //             setSelectedApplication(null); // Clear selection
// // // //         } catch (error) {
// // // //             console.error('Error updating status:', error);
// // // //             Swal.fire({
// // // //                 title: 'Error',
// // // //                 text: 'There was an error updating the status.',
// // // //                 icon: 'error',
// // // //                 confirmButtonText: 'OK'
// // // //             });
// // // //         }
// // // //     };

// // // //     const handleCalculateRisk = async () => {
// // // //         const applicantId = localStorage.getItem('selectedApplicantId');
// // // //         if (!applicantId) {
// // // //             Swal.fire({
// // // //                 title: 'Error',
// // // //                 text: 'No applicant ID found in local storage.',
// // // //                 icon: 'error',
// // // //                 confirmButtonText: 'OK'
// // // //             });
// // // //             return;
// // // //         }

// // // //         setLoading(true);
// // // //         try {
// // // //             const response = await axios.get(`http://localhost:8027/risk/calculate/${applicantId}/${selectedApplication.applyInsuranceId}`);
// // // //             setRiskScores([response.data]); // Assuming the response is a single risk object
// // // //             setRiskCalculated(true); // Set risk as calculated
// // // //             Swal.fire({
// // // //                 title: 'Risk Calculation Successful',
// // // //                 text: 'The risk score has been calculated successfully.',
// // // //                 icon: 'success',
// // // //                 confirmButtonText: 'OK'
// // // //             }).then(() => {
// // // //                 window.location.href = '/risk-calculation';
// // // //             });
// // // //         } catch (error) {
// // // //             console.error('Error calculating risk score:', error);
// // // //             Swal.fire({
// // // //                 title: 'Error',
// // // //                 text: 'There was an error calculating the risk score.',
// // // //                 icon: 'error',
// // // //                 confirmButtonText: 'OK'
// // // //             });
// // // //         } finally {
// // // //             setLoading(false);
// // // //         }
// // // //     };

// // // //     return (
// // // //         <div className="admin-manage-applications">
// // // //             <AdminNavbar />
// // // //             <h1>Manage Insurance Applications</h1>
// // // //             <table>
// // // //                 <thead>
// // // //                     <tr>
// // // //                         <th>ID</th>
// // // //                         <th>Applicant Name</th>
// // // //                         <th>Insurance Date</th>
// // // //                         <th>Policy Number</th>
// // // //                         <th>Status</th>
// // // //                         <th>Actions</th>
// // // //                     </tr>
// // // //                 </thead>
// // // //                 <tbody>
// // // //                     {applications.map((app, index) => (
// // // //                         <tr key={index}>
// // // //                             <td>{index + 1}</td>
// // // //                             <td>{app.applicant.applicantName}</td>
// // // //                             <td>{app.insuranceDate}</td>
// // // //                             <td>{app.policyNumber}</td>
// // // //                             <td>{app.status}</td>
// // // //                             <td>
// // // //                                 <button
// // // //                                     className="accept-button"
// // // //                                     onClick={() => {
// // // //                                         setSelectedApplication(app);
// // // //                                         handleStatusChange('Approved', app.applicant.applicantId);
// // // //                                     }}
// // // //                                 >
// // // //                                     Accept
// // // //                                 </button>
// // // //                                 <button
// // // //                                     className="reject-button"
// // // //                                     onClick={() => {
// // // //                                         setSelectedApplication(app);
// // // //                                         handleStatusChange('Rejected', app.applicant.applicantId);
// // // //                                     }}
// // // //                                 >
// // // //                                     Reject
// // // //                                 </button>
// // // //                                 <button
// // // //                                     className="risk-calculator-button"
// // // //                                     onClick={() => {
// // // //                                         setSelectedApplication(app);
// // // //                                         handleCalculateRisk();
// // // //                                     }}
// // // //                                     disabled={loading || riskCalculated}
// // // //                                 >
// // // //                                     Risk Calculator
// // // //                                 </button>
// // // //                             </td>
// // // //                         </tr>
// // // //                     ))}
// // // //                 </tbody>
// // // //             </table>
// // // //             {riskScores.length > 0 && (
// // // //                 <div>
// // // //                     <h2>Risk Scores</h2>
// // // //                     <table>
// // // //                         <thead>
// // // //                             <tr>
// // // //                                 <th>Applicant Name</th>
// // // //                                 <th>Risk Score</th>
// // // //                                 <th>Risk Type</th>
// // // //                             </tr>
// // // //                         </thead>
// // // //                         <tbody>
// // // //                             {riskScores.map((risk, index) => (
// // // //                                 <tr key={index}>
// // // //                                     <td>{risk.applicantName || 'Unknown'}</td>
// // // //                                     <td>{risk.riskScore}</td>
// // // //                                     <td>{risk.riskType}</td>
// // // //                                 </tr>
// // // //                             ))}
// // // //                         </tbody>
// // // //                     </table>
// // // //                 </div>
// // // //             )}
// // // //         </div>
// // // //     );
// // // // };

// // // // export default AdminApplyInsurance;
// // // import React, { useEffect, useState } from 'react';
// // // import axios from 'axios';
// // // import Swal from 'sweetalert2';
// // // import '../styles/AdminApplyInsurance.css'; // Ensure this CSS file exists
// // // import AdminNavbar from '../components/AdminNavbar';

// // // const AdminApplyInsurance = () => {
// // //     const [applications, setApplications] = useState([]);
// // //     const [selectedApplication, setSelectedApplication] = useState(null);
// // //     const [riskScores, setRiskScores] = useState([]);
// // //     const [loading, setLoading] = useState(false);

// // //     useEffect(() => {
// // //         fetchApplications();
// // //         // Check if there's an application ID in local storage
// // //         const storedApplicantId = localStorage.getItem('selectedApplicantId');
// // //         if (storedApplicantId) {
// // //             // Fetch application details using the stored ID if needed
// // //             const fetchStoredApplication = async () => {
// // //                 try {
// // //                     const response = await axios.get(`http://localhost:8027/admin/applyInsurance/${storedApplicantId}`);
// // //                     setSelectedApplication(response.data);
// // //                     // Optionally, fetch risk score here or on-demand
// // //                 } catch (error) {
// // //                     console.error('Error fetching stored application:', error);
// // //                 }
// // //             };

// // //             fetchStoredApplication();
// // //         }
// // //     }, []);

// // //     const fetchApplications = async () => {
// // //         try {
// // //             const response = await axios.get('http://localhost:8027/admin/applyInsurance');
// // //             setApplications(response.data);
// // //         } catch (error) {
// // //             console.error('Error fetching applications:', error);
// // //         }
// // //     };

// // //     const handleStatusChange = async (newStatus, applicantId) => {
// // //         if (!selectedApplication) return;

// // //         try {
// // //             await axios.put(`http://localhost:8027/admin/applyInsurance/${selectedApplication.applyInsuranceId}`, {
// // //                 ...selectedApplication,
// // //                 status: newStatus,
// // //             });

// // //             await axios.post(`http://localhost:8027/applyInsurance/sendEmail/${applicantId}/${newStatus}`);
// // //             Swal.fire({
// // //                 title: 'Status Updated',
// // //                 text: `Application status has been updated to ${newStatus}.`,
// // //                 icon: 'success',
// // //                 confirmButtonText: 'OK'
// // //             });
// // //             fetchApplications(); // Refresh the applications list
// // //             setSelectedApplication(null); // Clear selection
// // //         } catch (error) {
// // //             console.error('Error updating status:', error);
// // //             Swal.fire({
// // //                 title: 'Error',
// // //                 text: 'There was an error updating the status.',
// // //                 icon: 'error',
// // //                 confirmButtonText: 'OK'
// // //             });
// // //         }
// // //     };

// // //     const handleCalculateRisk = async () => {
// // //         if (!selectedApplication) return;

// // //         const applicantId = localStorage.getItem('selectedApplicantId');
// // //         if (!applicantId) {
// // //             Swal.fire({
// // //                 title: 'Error',
// // //                 text: 'No applicant ID found in local storage.',
// // //                 icon: 'error',
// // //                 confirmButtonText: 'OK'
// // //             });
// // //             return;
// // //         }

// // //         if (selectedApplication.riskCalculated) {
// // //             Swal.fire({
// // //                 title: 'Error',
// // //                 text: 'Risk score has already been calculated for this application.',
// // //                 icon: 'error',
// // //                 confirmButtonText: 'OK'
// // //             });
// // //             return;
// // //         }

// // //         setLoading(true);
// // //         try {
// // //             const response = await axios.get(`http://localhost:8027/risk/calculate/${applicantId}/${selectedApplication.applyInsuranceId}`);
// // //             setRiskScores([response.data]); // Assuming the response is a single risk object
// // //             // Update the application to indicate that risk has been calculated
// // //             await axios.put(`http://localhost:8027/admin/applyInsurance/${selectedApplication.applyInsuranceId}`, {
// // //                 ...selectedApplication,
// // //                 riskCalculated: true,
// // //             });
// // //             Swal.fire({
// // //                 title: 'Risk Calculation Successful',
// // //                 text: 'The risk score has been calculated successfully.',
// // //                 icon: 'success',
// // //                 confirmButtonText: 'OK'
// // //             }).then(() => {
// // //                 window.location.href = '/risk-calculation'; // Redirect or navigate as needed
// // //             });
// // //         } catch (error) {
// // //             console.error('Error calculating risk score:', error);
// // //             Swal.fire({
// // //                 title: 'Error',
// // //                 text: 'There was an error calculating the risk score.',
// // //                 icon: 'error',
// // //                 confirmButtonText: 'OK'
// // //             });
// // //         } finally {
// // //             setLoading(false);
// // //         }
// // //     };

// // //     return (
// // //         <div className="admin-manage-applications">
// // //             <AdminNavbar />
// // //             <h1>Manage Insurance Applications</h1>
// // //             <table>
// // //                 <thead>
// // //                     <tr>
// // //                         <th>ID</th>
// // //                         <th>Applicant Name</th>
// // //                         <th>Insurance Date</th>
// // //                         <th>Policy Number</th>
// // //                         <th>Status</th>
// // //                         <th>Actions</th>
// // //                     </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                     {applications.map((app, index) => (
// // //                         <tr key={index}>
// // //                             <td>{index + 1}</td>
// // //                             <td>{app.applicant.applicantName}</td>
// // //                             <td>{app.insuranceDate}</td>
// // //                             <td>{app.policyNumber}</td>
// // //                             <td>{app.status}</td>
// // //                             <td>
// // //                                 <button
// // //                                     className="accept-button"
// // //                                     onClick={() => {
// // //                                         setSelectedApplication(app);
// // //                                         handleStatusChange('Approved', app.applicant.applicantId);
// // //                                     }}
// // //                                 >
// // //                                     Accept
// // //                                 </button>
// // //                                 <button
// // //                                     className="reject-button"
// // //                                     onClick={() => {
// // //                                         setSelectedApplication(app);
// // //                                         handleStatusChange('Rejected', app.applicant.applicantId);
// // //                                     }}
// // //                                 >
// // //                                     Reject
// // //                                 </button>
// // //                                 <button
// // //                                     className="risk-calculator-button"
// // //                                     onClick={() => {
// // //                                         setSelectedApplication(app);
// // //                                         handleCalculateRisk();
// // //                                     }}
// // //                                     disabled={loading || app.riskCalculated} // Disable if risk already calculated
// // //                                 >
// // //                                     Risk Calculator
// // //                                 </button>
// // //                             </td>
// // //                         </tr>
// // //                     ))}
// // //                 </tbody>
// // //             </table>
// // //             {riskScores.length > 0 && (
// // //                 <div>
// // //                     <h2>Risk Scores</h2>
// // //                     <table>
// // //                         <thead>
// // //                             <tr>
// // //                                 <th>Applicant Name</th>
// // //                                 <th>Risk Score</th>
// // //                                 <th>Risk Type</th>
// // //                             </tr>
// // //                         </thead>
// // //                         <tbody>
// // //                             {riskScores.map((risk, index) => (
// // //                                 <tr key={index}>
// // //                                     <td>{risk.applicantName || 'Unknown'}</td>
// // //                                     <td>{risk.riskScore}</td>
// // //                                     <td>{risk.riskType}</td>
// // //                                 </tr>
// // //                             ))}
// // //                         </tbody>
// // //                     </table>
// // //                 </div>
// // //             )}
// // //         </div>
// // //     );
// // // };

// // // export default AdminApplyInsurance;

// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import Swal from 'sweetalert2';
// // import '../styles/AdminApplyInsurance.css';
// // import AdminNavbar from '../components/AdminNavbar';

// // const AdminApplyInsurance = () => {
// //     const [applications, setApplications] = useState([]);
// //     const [selectedApplication, setSelectedApplication] = useState(null);
// //     const [riskScores, setRiskScores] = useState([]);
// //     const [loading, setLoading] = useState(false);
// //     const [isRiskCalculated, setIsRiskCalculated] = useState(false);

// //     useEffect(() => {
// //         fetchApplications();
// //         const storedApplicantId = localStorage.getItem('selectedApplicantId');
// //         if (storedApplicantId) {
// //             const fetchStoredApplication = async () => {
// //                 try {
// //                     const response = await axios.get(`http://localhost:8027/admin/applyInsurance/${storedApplicantId}`);
// //                     setSelectedApplication(response.data);
// //                     checkRiskStatus(storedApplicantId);
// //                 } catch (error) {
// //                     console.error('Error fetching stored application:', error);
// //                 }
// //             };
// //             fetchStoredApplication();
// //         }
// //     }, []);

// //     const fetchApplications = async () => {
// //         try {
// //             const response = await axios.get('http://localhost:8027/admin/applyInsurance');
// //             setApplications(response.data);
// //         } catch (error) {
// //             console.error('Error fetching applications:', error);
// //         }
// //     };

// //     const checkRiskStatus = async (applicationId) => {
// //         try {
// //             const response = await axios.get(`http://localhost:8027/risk/isRiskCalculated/${applicationId}`);
// //             setIsRiskCalculated(response.data);
// //         } catch (error) {
// //             console.error('Error checking risk status:', error);
// //         }
// //     };

// //     const handleCalculateRisk = async () => {
// //         const applicantId = localStorage.getItem('selectedApplicantId');
// //         if (!applicantId) {
// //             Swal.fire({
// //                 title: 'Error',
// //                 text: 'No applicant ID found in local storage.',
// //                 icon: 'error',
// //                 confirmButtonText: 'OK'
// //             });
// //             return;
// //         }

// //         setLoading(true);
// //         try {
// //             const response = await axios.get(`http://localhost:8027/risk/calculateRisk/${selectedApplication.applyInsuranceId}`);
// //             setRiskScores([response.data]);
// //             Swal.fire({
// //                 title: 'Risk Calculation Successful',
// //                 text: 'The risk score has been calculated successfully.',
// //                 icon: 'success',
// //                 confirmButtonText: 'OK'
// //             }).then(() => {
// //                 // Optionally, you can also redirect or navigate
// //                 window.location.href = '/risk-calculation';
// //             });
// //         } catch (error) {
// //             console.error('Error calculating risk score:', error);
// //             Swal.fire({
// //                 title: 'Error',
// //                 text: 'There was an error calculating the risk score.',
// //                 icon: 'error',
// //                 confirmButtonText: 'OK'
// //             });
// //         } finally {
// //             setLoading(false);
// //             checkRiskStatus(selectedApplication.applyInsuranceId); // Update risk status after calculation
// //         }
// //     };

// //     return (
// //         <div className="admin-manage-applications">
// //             <AdminNavbar />
// //             <h1>Manage Insurance Applications</h1>
// //             <table>
// //                 <thead>
// //                     <tr>
// //                         <th>ID</th>
// //                         <th>Applicant Name</th>
// //                         <th>Insurance Date</th>
// //                         <th>Policy Number</th>
// //                         <th>Status</th>
// //                         <th>Actions</th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {applications.map((app, index) => (
// //                         <tr key={index}>
// //                             <td>{index + 1}</td>
// //                             <td>{app.applicant.applicantName}</td>
// //                             <td>{app.insuranceDate}</td>
// //                             <td>{app.policyNumber}</td>
// //                             <td>{app.status}</td>
// //                             <td>
// //                                 <button
// //                                     className="accept-button"
// //                                     onClick={() => {
// //                                         setSelectedApplication(app);
// //                                         handleStatusChange('Approved', app.applicant.applicantId);
// //                                     }}
// //                                 >
// //                                     Accept
// //                                 </button>
// //                                 <button
// //                                     className="reject-button"
// //                                     onClick={() => {
// //                                         setSelectedApplication(app);
// //                                         handleStatusChange('Rejected', app.applicant.applicantId);
// //                                     }}
// //                                 >
// //                                     Reject
// //                                 </button>
// //                                 <button
// //                                     className="risk-calculator-button"
// //                                     onClick={() => {
// //                                         setSelectedApplication(app);
// //                                         handleCalculateRisk();
// //                                     }}
// //                                     disabled={isRiskCalculated || loading}
// //                                 >
// //                                     Risk Calculator
// //                                 </button>
// //                             </td>
// //                         </tr>
// //                     ))}
// //                 </tbody>
// //             </table>
// //             {riskScores.length > 0 && (
// //                 <div>
// //                     <h2>Risk Scores</h2>
// //                     <table>
// //                         <thead>
// //                             <tr>
// //                                 <th>Applicant Name</th>
// //                                 <th>Risk Score</th>
// //                                 <th>Risk Type</th>
// //                             </tr>
// //                         </thead>
// //                         <tbody>
// //                             {riskScores.map((risk, index) => (
// //                                 <tr key={index}>
// //                                     <td>{risk.applicantName || 'Unknown'}</td>
// //                                     <td>{risk.riskScore}</td>
// //                                     <td>{risk.riskType}</td>
// //                                 </tr>
// //                             ))}
// //                         </tbody>
// //                     </table>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default AdminApplyInsurance;

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
//         // Check if there's an application ID in local storage
//         const storedApplicantId = localStorage.getItem('selectedApplicantId');
//         if (storedApplicantId) {
//             const fetchStoredApplication = async () => {
//                 try {
//                     const response = await axios.get(`http://localhost:8027/admin/applyInsurance/${storedApplicantId}`);
//                     setSelectedApplication(response.data);
//                     // Fetch risk status
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
//             <h1>Manage Insurance Applications</h1>
//             <table>
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
//                                 >
//                                     Accept
//                                 </button>
//                                 <button
//                                     className="reject-button"
//                                     onClick={() => {
//                                         setSelectedApplication(app);
//                                         handleStatusChange('Rejected', app.applicant.applicantId);
//                                     }}
//                                 >
//                                     Reject
//                                 </button>
//                                 <button
//                                     className="risk-calculator-button"
//                                     onClick={() => {
//                                         setSelectedApplication(app);
//                                         handleCalculateRisk();
//                                     }}
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

const AdminApplyInsurance = () => {
    const [applications, setApplications] = useState([]);
    const [selectedApplication, setSelectedApplication] = useState(null);
    const [riskScores, setRiskScores] = useState([]);
    const [loading, setLoading] = useState(false);
    const [riskCalculatedMap, setRiskCalculatedMap] = useState({});

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

        try {
            await axios.put(`http://localhost:8027/admin/applyInsurance/${selectedApplication.applyInsuranceId}`, {
                ...selectedApplication,
                status: newStatus,
            });

            await axios.post(`http://localhost:8027/applyInsurance/sendEmail/${applicantId}/${newStatus}`);
            Swal.fire({
                title: 'Status Updated',
                text: `Application status has been updated to ${newStatus}.`,
                icon: 'success',
                confirmButtonText: 'OK'
            });
            fetchApplications(); // Refresh the applications list
            setSelectedApplication(null); // Clear selection
        } catch (error) {
            console.error('Error updating status:', error);
            Swal.fire({
                title: 'Error',
                text: 'There was an error updating the status.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    const handleCalculateRisk = async () => {
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
                window.location.href = '/risk-calculation';
            });
        } catch (error) {
            console.error('Error calculating risk score:', error);
            Swal.fire({
                title: 'Error',
                text: 'There was an error calculating the risk score.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin-manage-applications">
            <AdminNavbar />
            <h1>Manage Insurance Applications</h1><hr/>
            <table style={{width:"1000px",marginLeft:'220px'}}>
                <thead>
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
                            <td>{app.status}</td>
                            <td>
                                <button
                                    className="accept-button"
                                    onClick={() => {
                                        setSelectedApplication(app);
                                        handleStatusChange('Approved', app.applicant.applicantId);
                                    }}
                                    style={{width:'230px',marginLeft:'45px'}}
                                >
                                    Accept
                                </button>
                                <button
                                    className="reject-button"
                                    onClick={() => {
                                        setSelectedApplication(app);
                                        handleStatusChange('Rejected', app.applicant.applicantId);
                                    }}
                                    style={{width:'230px',marginTop:'7px',marginLeft:'45px'}}
                                >
                                    Reject
                                </button>
                                <button
                                    className="risk-calculator-button"
                                    onClick={() => {
                                        setSelectedApplication(app);
                                        handleCalculateRisk();
                                    }}
                                    style={{width:'230px',marginTop:'7px',marginLeft:'45px'}}
                                    disabled={riskCalculatedMap[app.applicant.applicantId] || loading}
                                >
                                    Risk Calculator
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {riskScores.length > 0 && (
                <div>
                    <h2>Risk Scores</h2>
                    <table>
                        <thead>
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
                                    <td>{risk.riskType}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AdminApplyInsurance;

