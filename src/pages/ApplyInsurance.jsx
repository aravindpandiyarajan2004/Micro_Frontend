// // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // import axios from 'axios';
// // // // // // // // // // import Swal from 'sweetalert2';
// // // // // // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // // // // // import '../styles/ApplyInsurance.css'; // Ensure to create and use appropriate CSS
// // // // // // // // // // import ApplicantNavbar from '../components/ApplicantNavbar';

// // // // // // // // // // const ApplyInsurance = () => {
// // // // // // // // // //   const [inputData, setInputData] = useState({
// // // // // // // // // //     insuranceDate: '',
// // // // // // // // // //     healthIssue: 'no', // Default value for health issue
// // // // // // // // // //     status: 'pending', // Default value for status
// // // // // // // // // //     reports: null, // For file upload
// // // // // // // // // //   });
// // // // // // // // // //   const [errors, setErrors] = useState({});
// // // // // // // // // //   const [submitting, setSubmitting] = useState(false);
// // // // // // // // // //   const [policyNumber, setPolicyNumber] = useState('');
// // // // // // // // // //   const navigate = useNavigate();

// // // // // // // // // //   const handleChange = (e) => {
// // // // // // // // // //     const { name, value, type, files } = e.target;
// // // // // // // // // //     if (type === 'file') {
// // // // // // // // // //       setInputData((prevData) => ({
// // // // // // // // // //         ...prevData,
// // // // // // // // // //         [name]: files[0],
// // // // // // // // // //       }));
// // // // // // // // // //     } else if (type === 'radio') {
// // // // // // // // // //       setInputData((prevData) => ({
// // // // // // // // // //         ...prevData,
// // // // // // // // // //         [name]: value,
// // // // // // // // // //       }));
// // // // // // // // // //     } else {
// // // // // // // // // //       setInputData((prevData) => ({
// // // // // // // // // //         ...prevData,
// // // // // // // // // //         [name]: value,
// // // // // // // // // //       }));
// // // // // // // // // //     }

// // // // // // // // // //     // Clear the error message for the changed field
// // // // // // // // // //     setErrors((prevErrors) => ({
// // // // // // // // // //       ...prevErrors,
// // // // // // // // // //       [name]: '',
// // // // // // // // // //     }));
// // // // // // // // // //   };

// // // // // // // // // //   const validateValues = () => {
// // // // // // // // // //     const newErrors = {};

// // // // // // // // // //     // Validate each field
// // // // // // // // // //     if (!inputData.insuranceDate) newErrors.insuranceDate = 'Insurance date is required.';
// // // // // // // // // //     if (!inputData.reports) newErrors.reports = 'ID Proof is required.';

// // // // // // // // // //     if (inputData.reports) {
// // // // // // // // // //       const allowedFormats = ['application/pdf', 'image/jpeg'];
// // // // // // // // // //       if (!allowedFormats.includes(inputData.reports.type)) newErrors.reports = 'ID Proof must be a PDF or JPG file.';
// // // // // // // // // //     }

// // // // // // // // // //     setErrors(newErrors);
// // // // // // // // // //     return Object.keys(newErrors).length === 0;
// // // // // // // // // //   };

// // // // // // // // // //   const handleSubmit = async (e) => {
// // // // // // // // // //     e.preventDefault();
// // // // // // // // // //     setSubmitting(true);

// // // // // // // // // //     if (!validateValues()) {
// // // // // // // // // //       setSubmitting(false);
// // // // // // // // // //       return;
// // // // // // // // // //     }

// // // // // // // // // //     // Generate a unique policy number for each submission
// // // // // // // // // //     const generatedPolicyNumber = Math.floor(Math.random() * 1000000);
// // // // // // // // // //     setPolicyNumber(generatedPolicyNumber);

// // // // // // // // // //     // Retrieve the applicant ID from session storage
// // // // // // // // // //     const applicantId = sessionStorage.getItem('applicantId');
// // // // // // // // // //     if (!applicantId) {
// // // // // // // // // //       Swal.fire({
// // // // // // // // // //         title: 'Error',
// // // // // // // // // //         text: 'Applicant ID not found in session storage.',
// // // // // // // // // //         icon: 'error',
// // // // // // // // // //       });
// // // // // // // // // //       setSubmitting(false);
// // // // // // // // // //       return;
// // // // // // // // // //     }

// // // // // // // // // //     const formData = new FormData();
// // // // // // // // // //     Object.keys(inputData).forEach((key) => {
// // // // // // // // // //       if (inputData[key]) {
// // // // // // // // // //         formData.append(key, inputData[key]);
// // // // // // // // // //       }
// // // // // // // // // //     });
// // // // // // // // // //     formData.append('policyNumber', generatedPolicyNumber); // Include policy number in FormData
// // // // // // // // // //     formData.append('applicantId', applicantId); // Include applicantId as a simple key-value pair

// // // // // // // // // //     try {
// // // // // // // // // //       await axios.post('http://localhost:8027/applyInsurance', formData, {
// // // // // // // // // //         headers: {
// // // // // // // // // //           'Content-Type': 'multipart/form-data',
// // // // // // // // // //         },
// // // // // // // // // //       });

// // // // // // // // // //       Swal.fire({
// // // // // // // // // //         title: 'Application Submitted Successfully!',
// // // // // // // // // //         text: `Your policy number is ${generatedPolicyNumber}.`,
// // // // // // // // // //         icon: 'success',
// // // // // // // // // //       });

// // // // // // // // // //       navigate('/applicant-dash'); // Redirect or perform any other action
// // // // // // // // // //     } catch (err) {
// // // // // // // // // //       console.error('Submit Error:', err);
// // // // // // // // // //       Swal.fire({
// // // // // // // // // //         title: 'Error',
// // // // // // // // // //         text: 'An error occurred. Please try again.',
// // // // // // // // // //         icon: 'error',
// // // // // // // // // //       });
// // // // // // // // // //     } finally {
// // // // // // // // // //       setSubmitting(false);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div>
// // // // // // // // // //       <ApplicantNavbar className="applicant-navbar" />
// // // // // // // // // //       <div className="apply-insurance-form">
// // // // // // // // // //         <h1>Apply for Insurance</h1>
// // // // // // // // // //         <form onSubmit={handleSubmit}>
// // // // // // // // // //           {errors.submit && <div className="alert alert-danger">{errors.submit}</div>}
          
// // // // // // // // // //           <div className="form-group">
// // // // // // // // // //             <label htmlFor="insuranceDate">Insurance Date</label>
// // // // // // // // // //             <input
// // // // // // // // // //               type="date"
// // // // // // // // // //               id="insuranceDate"
// // // // // // // // // //               name="insuranceDate"
// // // // // // // // // //               value={inputData.insuranceDate}
// // // // // // // // // //               onChange={handleChange}
// // // // // // // // // //             />
// // // // // // // // // //             {errors.insuranceDate && <div className="error-message">{errors.insuranceDate}</div>}
// // // // // // // // // //           </div>

// // // // // // // // // //           <div className="form-group">
// // // // // // // // // //             <label>Health Issue</label>
// // // // // // // // // //             <div className="radio-group">
// // // // // // // // // //               <label>
// // // // // // // // // //                 <input
// // // // // // // // // //                   type="radio"
// // // // // // // // // //                   name="healthIssue"
// // // // // // // // // //                   value="yes"
// // // // // // // // // //                   checked={inputData.healthIssue === 'yes'}
// // // // // // // // // //                   onChange={handleChange}
// // // // // // // // // //                 />
// // // // // // // // // //                 Yes
// // // // // // // // // //               </label>
// // // // // // // // // //               <label>
// // // // // // // // // //                 <input
// // // // // // // // // //                   type="radio"
// // // // // // // // // //                   name="healthIssue"
// // // // // // // // // //                   value="no"
// // // // // // // // // //                   checked={inputData.healthIssue === 'no'}
// // // // // // // // // //                   onChange={handleChange}
// // // // // // // // // //                 />
// // // // // // // // // //                 No
// // // // // // // // // //               </label>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>

// // // // // // // // // //           <div className="form-group">
// // // // // // // // // //             <label htmlFor="reports">Upload ID Proof (PDF or JPG only)</label>
// // // // // // // // // //             <input
// // // // // // // // // //               type="file"
// // // // // // // // // //               id="reports"
// // // // // // // // // //               name="reports"
// // // // // // // // // //               onChange={handleChange}
// // // // // // // // // //             />
// // // // // // // // // //             {errors.reports && <div className="error-message">{errors.reports}</div>}
// // // // // // // // // //           </div>

// // // // // // // // // //           <button type="submit" disabled={submitting}>
// // // // // // // // // //             {submitting ? 'Submitting...' : 'Submit'}
// // // // // // // // // //           </button>
// // // // // // // // // //         </form>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default ApplyInsurance;

// // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // import axios from 'axios';
// // // // // // // // // import Swal from 'sweetalert2';
// // // // // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // // // // import '../styles/ApplyInsurance.css'; // Ensure to create and use appropriate CSS
// // // // // // // // // import ApplicantNavbar from '../components/ApplicantNavbar';

// // // // // // // // // const ApplyInsurance = () => {
// // // // // // // // //   const [inputData, setInputData] = useState({
// // // // // // // // //     insuranceDate: '',
// // // // // // // // //     healthIssue: 'no', // Default value for health issue
// // // // // // // // //     status: 'pending', // Default value for status
// // // // // // // // //     reports: null, // For file upload
// // // // // // // // //   });
// // // // // // // // //   const [errors, setErrors] = useState({});
// // // // // // // // //   const [submitting, setSubmitting] = useState(false);
// // // // // // // // //   const [policyNumber, setPolicyNumber] = useState('');
// // // // // // // // //   const navigate = useNavigate();

// // // // // // // // //   const handleChange = (e) => {
// // // // // // // // //     const { name, value, type, files } = e.target;
// // // // // // // // //     if (type === 'file') {
// // // // // // // // //       setInputData((prevData) => ({
// // // // // // // // //         ...prevData,
// // // // // // // // //         [name]: files[0],
// // // // // // // // //       }));
// // // // // // // // //     } else if (type === 'radio') {
// // // // // // // // //       setInputData((prevData) => ({
// // // // // // // // //         ...prevData,
// // // // // // // // //         [name]: value,
// // // // // // // // //       }));
// // // // // // // // //     } else {
// // // // // // // // //       setInputData((prevData) => ({
// // // // // // // // //         ...prevData,
// // // // // // // // //         [name]: value,
// // // // // // // // //       }));
// // // // // // // // //     }

// // // // // // // // //     // Clear the error message for the changed field
// // // // // // // // //     setErrors((prevErrors) => ({
// // // // // // // // //       ...prevErrors,
// // // // // // // // //       [name]: '',
// // // // // // // // //     }));
// // // // // // // // //   };

// // // // // // // // //   const validateValues = () => {
// // // // // // // // //     const newErrors = {};

// // // // // // // // //     // Validate each field
// // // // // // // // //     if (!inputData.insuranceDate) newErrors.insuranceDate = 'Insurance date is required.';
// // // // // // // // //     if (!inputData.reports) newErrors.reports = 'ID Proof is required.';

// // // // // // // // //     if (inputData.reports) {
// // // // // // // // //       const allowedFormats = ['application/pdf', 'image/jpeg'];
// // // // // // // // //       if (!allowedFormats.includes(inputData.reports.type)) newErrors.reports = 'ID Proof must be a PDF or JPG file.';
// // // // // // // // //     }

// // // // // // // // //     setErrors(newErrors);
// // // // // // // // //     return Object.keys(newErrors).length === 0;
// // // // // // // // //   };

// // // // // // // // //   const handleSubmit = async (e) => {
// // // // // // // // //     e.preventDefault();
// // // // // // // // //     setSubmitting(true);

// // // // // // // // //     if (!validateValues()) {
// // // // // // // // //       setSubmitting(false);
// // // // // // // // //       return;
// // // // // // // // //     }

// // // // // // // // //     // Generate a unique policy number for each submission
// // // // // // // // //     const generatedPolicyNumber = Math.floor(Math.random() * 1000000);
// // // // // // // // //     setPolicyNumber(generatedPolicyNumber);

// // // // // // // // //     // Retrieve the applicant ID from localStorage
// // // // // // // // //     const applicantId = localStorage.getItem('applicantId');
// // // // // // // // //     if (!applicantId) {
// // // // // // // // //       Swal.fire({
// // // // // // // // //         title: 'Error',
// // // // // // // // //         text: 'Applicant ID not found in local storage.',
// // // // // // // // //         icon: 'error',
// // // // // // // // //       });
// // // // // // // // //       setSubmitting(false);
// // // // // // // // //       return;
// // // // // // // // //     }

// // // // // // // // //     const insuranceId = localStorage.getItem('insuranceId');
// // // // // // // // //     if (!insuranceId) {
// // // // // // // // //       Swal.fire({
// // // // // // // // //         title: 'Error',
// // // // // // // // //         text: 'Insurance ID not found in local storage.',
// // // // // // // // //         icon: 'error',
// // // // // // // // //       });
// // // // // // // // //       setSubmitting(false);
// // // // // // // // //       return;
// // // // // // // // //     }

// // // // // // // // //     const formData = new FormData();
// // // // // // // // //     Object.keys(inputData).forEach((key) => {
// // // // // // // // //       if (inputData[key]) {
// // // // // // // // //         formData.append(key, inputData[key]);
// // // // // // // // //       }
// // // // // // // // //     });
// // // // // // // // //     formData.append('policyNumber', generatedPolicyNumber); // Include policy number in FormData

// // // // // // // // //     // Append applicantId as a simple key-value pair
// // // // // // // // //     formData.append('applicant', JSON.stringify({ applicantId })); 
// // // // // // // // //     formData.append('insurace',JSON.stringify({insuranceId}));

// // // // // // // // //     try {
// // // // // // // // //       await axios.post('http://localhost:8027/applyInsurance', formData, {
// // // // // // // // //         headers: {
// // // // // // // // //           'Content-Type': 'multipart/form-data',
// // // // // // // // //         },
// // // // // // // // //       });

// // // // // // // // //       Swal.fire({
// // // // // // // // //         title: 'Application Submitted Successfully!',
// // // // // // // // //         text: `Your policy number is ${generatedPolicyNumber}.`,
// // // // // // // // //         icon: 'success',
// // // // // // // // //       });

// // // // // // // // //       navigate('/applicant-dash'); // Redirect or perform any other action
// // // // // // // // //     } catch (err) {
// // // // // // // // //       console.error('Submit Error:', err);
// // // // // // // // //       Swal.fire({
// // // // // // // // //         title: 'Error',
// // // // // // // // //         text: 'An error occurred. Please try again.',
// // // // // // // // //         icon: 'error',
// // // // // // // // //       });
// // // // // // // // //     } finally {
// // // // // // // // //       setSubmitting(false);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div>
// // // // // // // // //       <ApplicantNavbar className="applicant-navbar" />
// // // // // // // // //       <div className="apply-insurance-form">
// // // // // // // // //         <h1>Apply for Insurance</h1>
// // // // // // // // //         <form onSubmit={handleSubmit}>
// // // // // // // // //           {errors.submit && <div className="alert alert-danger">{errors.submit}</div>}
          
// // // // // // // // //           <div className="form-group">
// // // // // // // // //             <label htmlFor="insuranceDate">Insurance Date</label>
// // // // // // // // //             <input
// // // // // // // // //               type="date"
// // // // // // // // //               id="insuranceDate"
// // // // // // // // //               name="insuranceDate"
// // // // // // // // //               value={inputData.insuranceDate}
// // // // // // // // //               onChange={handleChange}
// // // // // // // // //             />
// // // // // // // // //             {errors.insuranceDate && <div className="error-message">{errors.insuranceDate}</div>}
// // // // // // // // //           </div>

// // // // // // // // //           <div className="form-group">
// // // // // // // // //             <label>Health Issue</label>
// // // // // // // // //             <div className="radio-group">
// // // // // // // // //               <label>
// // // // // // // // //                 <input
// // // // // // // // //                   type="radio"
// // // // // // // // //                   name="healthIssue"
// // // // // // // // //                   value="yes"
// // // // // // // // //                   checked={inputData.healthIssue === 'yes'}
// // // // // // // // //                   onChange={handleChange}
// // // // // // // // //                 />
// // // // // // // // //                 Yes
// // // // // // // // //               </label>
// // // // // // // // //               <label>
// // // // // // // // //                 <input
// // // // // // // // //                   type="radio"
// // // // // // // // //                   name="healthIssue"
// // // // // // // // //                   value="no"
// // // // // // // // //                   checked={inputData.healthIssue === 'no'}
// // // // // // // // //                   onChange={handleChange}
// // // // // // // // //                 />
// // // // // // // // //                 No
// // // // // // // // //               </label>
// // // // // // // // //             </div>
// // // // // // // // //           </div>

// // // // // // // // //           <div className="form-group">
// // // // // // // // //             <label htmlFor="reports">Upload ID Proof (PDF or JPG only)</label>
// // // // // // // // //             <input
// // // // // // // // //               type="file"
// // // // // // // // //               id="reports"
// // // // // // // // //               name="reports"
// // // // // // // // //               onChange={handleChange}
// // // // // // // // //             />
// // // // // // // // //             {errors.reports && <div className="error-message">{errors.reports}</div>}
// // // // // // // // //           </div>

// // // // // // // // //           <button type="submit" disabled={submitting}>
// // // // // // // // //             {submitting ? 'Submitting...' : 'Submit'}
// // // // // // // // //           </button>
// // // // // // // // //         </form>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default ApplyInsurance;

// // // // // // // // import React, { useState } from 'react';
// // // // // // // // import axios from 'axios';
// // // // // // // // import Swal from 'sweetalert2';
// // // // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // // // import '../styles/ApplyInsurance.css'; // Ensure to create and use appropriate CSS
// // // // // // // // import ApplicantNavbar from '../components/ApplicantNavbar';

// // // // // // // // const ApplyInsurance = () => {
// // // // // // // //   const [inputData, setInputData] = useState({
// // // // // // // //     insuranceDate: '',
// // // // // // // //     healthIssue: 'no', // Default value for health issue
// // // // // // // //     status: 'pending', // Default value for status
// // // // // // // //     reports: null, // For file upload
// // // // // // // //   });
// // // // // // // //   const [errors, setErrors] = useState({});
// // // // // // // //   const [submitting, setSubmitting] = useState(false);
// // // // // // // //   const [policyNumber, setPolicyNumber] = useState('');
// // // // // // // //   const navigate = useNavigate();

// // // // // // // //   const handleChange = (e) => {
// // // // // // // //     const { name, value, type, files } = e.target;
// // // // // // // //     if (type === 'file') {
// // // // // // // //       setInputData((prevData) => ({
// // // // // // // //         ...prevData,
// // // // // // // //         [name]: files[0],
// // // // // // // //       }));
// // // // // // // //     } else if (type === 'radio') {
// // // // // // // //       setInputData((prevData) => ({
// // // // // // // //         ...prevData,
// // // // // // // //         [name]: value,
// // // // // // // //       }));
// // // // // // // //     } else {
// // // // // // // //       setInputData((prevData) => ({
// // // // // // // //         ...prevData,
// // // // // // // //         [name]: value,
// // // // // // // //       }));
// // // // // // // //     }

// // // // // // // //     // Clear the error message for the changed field
// // // // // // // //     setErrors((prevErrors) => ({
// // // // // // // //       ...prevErrors,
// // // // // // // //       [name]: '',
// // // // // // // //     }));
// // // // // // // //   };

// // // // // // // //   const validateValues = () => {
// // // // // // // //     const newErrors = {};

// // // // // // // //     // Validate each field
// // // // // // // //     if (!inputData.insuranceDate) newErrors.insuranceDate = 'Insurance date is required.';
// // // // // // // //     if (!inputData.reports) newErrors.reports = 'ID Proof is required.';

// // // // // // // //     if (inputData.reports) {
// // // // // // // //       const allowedFormats = ['application/pdf', 'image/jpeg'];
// // // // // // // //       if (!allowedFormats.includes(inputData.reports.type)) newErrors.reports = 'ID Proof must be a PDF or JPG file.';
// // // // // // // //     }

// // // // // // // //     setErrors(newErrors);
// // // // // // // //     return Object.keys(newErrors).length === 0;
// // // // // // // //   };

// // // // // // // //   const handleSubmit = async (e) => {
// // // // // // // //     e.preventDefault();
// // // // // // // //     setSubmitting(true);

// // // // // // // //     if (!validateValues()) {
// // // // // // // //       setSubmitting(false);
// // // // // // // //       return;
// // // // // // // //     }

// // // // // // // //     // Generate a unique policy number for each submission
// // // // // // // //     const generatedPolicyNumber = Math.floor(Math.random() * 1000000);
// // // // // // // //     setPolicyNumber(generatedPolicyNumber);

// // // // // // // //     // Retrieve the applicant ID from sessionStorage
// // // // // // // //     const applicantId = sessionStorage.getItem('applicantId');
// // // // // // // //     if (!applicantId) {
// // // // // // // //       Swal.fire({
// // // // // // // //         title: 'Error',
// // // // // // // //         text: 'Applicant ID not found in session storage.',
// // // // // // // //         icon: 'error',
// // // // // // // //       });
// // // // // // // //       setSubmitting(false);
// // // // // // // //       return;
// // // // // // // //     }

// // // // // // // //     const insuranceId = sessionStorage.getItem('insuranceId');
// // // // // // // //     if (!insuranceId) {
// // // // // // // //       Swal.fire({
// // // // // // // //         title: 'Error',
// // // // // // // //         text: 'Insurance ID not found in session storage.',
// // // // // // // //         icon: 'error',
// // // // // // // //       });
// // // // // // // //       setSubmitting(false);
// // // // // // // //       return;
// // // // // // // //     }

// // // // // // // //     const formData = new FormData();
// // // // // // // //     Object.keys(inputData).forEach((key) => {
// // // // // // // //       if (inputData[key]) {
// // // // // // // //         formData.append(key, inputData[key]);
// // // // // // // //       }
// // // // // // // //     });
// // // // // // // //     formData.append('policyNumber', generatedPolicyNumber); // Include policy number in FormData

// // // // // // // //     // Append applicantId and insuranceId as JSON strings
// // // // // // // //     formData.append('applicant', JSON.stringify({ applicantId })); 
// // // // // // // //     formData.append('insurance', JSON.stringify({ insuranceId }));

// // // // // // // //     try {
// // // // // // // //       await axios.post('http://localhost:8027/applyInsurance', formData, {
// // // // // // // //         headers: {
// // // // // // // //           'Content-Type': 'multipart/form-data',
// // // // // // // //         },
// // // // // // // //       });

// // // // // // // //       Swal.fire({
// // // // // // // //         title: 'Application Submitted Successfully!',
// // // // // // // //         text: `Your policy number is ${generatedPolicyNumber}.`,
// // // // // // // //         icon: 'success',
// // // // // // // //       });

// // // // // // // //       navigate('/applicant-dash'); // Redirect or perform any other action
// // // // // // // //     } catch (err) {
// // // // // // // //       console.error('Submit Error:', err);
// // // // // // // //       Swal.fire({
// // // // // // // //         title: 'Error',
// // // // // // // //         text: 'An error occurred. Please try again.',
// // // // // // // //         icon: 'error',
// // // // // // // //       });
// // // // // // // //     } finally {
// // // // // // // //       setSubmitting(false);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div>
// // // // // // // //       <ApplicantNavbar className="applicant-navbar" />
// // // // // // // //       <div className="apply-insurance-form">
// // // // // // // //         <h1>Apply for Insurance</h1>
// // // // // // // //         <form onSubmit={handleSubmit}>
// // // // // // // //           {errors.submit && <div className="alert alert-danger">{errors.submit}</div>}
          
// // // // // // // //           <div className="form-group">
// // // // // // // //             <label htmlFor="insuranceDate">Insurance Date</label>
// // // // // // // //             <input
// // // // // // // //               type="date"
// // // // // // // //               id="insuranceDate"
// // // // // // // //               name="insuranceDate"
// // // // // // // //               value={inputData.insuranceDate}
// // // // // // // //               onChange={handleChange}
// // // // // // // //             />
// // // // // // // //             {errors.insuranceDate && <div className="error-message">{errors.insuranceDate}</div>}
// // // // // // // //           </div>

// // // // // // // //           <div className="form-group">
// // // // // // // //             <label>Health Issue</label>
// // // // // // // //             <div className="radio-group">
// // // // // // // //               <label>
// // // // // // // //                 <input
// // // // // // // //                   type="radio"
// // // // // // // //                   name="healthIssue"
// // // // // // // //                   value="yes"
// // // // // // // //                   checked={inputData.healthIssue === 'yes'}
// // // // // // // //                   onChange={handleChange}
// // // // // // // //                 />
// // // // // // // //                 Yes
// // // // // // // //               </label>
// // // // // // // //               <label>
// // // // // // // //                 <input
// // // // // // // //                   type="radio"
// // // // // // // //                   name="healthIssue"
// // // // // // // //                   value="no"
// // // // // // // //                   checked={inputData.healthIssue === 'no'}
// // // // // // // //                   onChange={handleChange}
// // // // // // // //                 />
// // // // // // // //                 No
// // // // // // // //               </label>
// // // // // // // //             </div>
// // // // // // // //           </div>

// // // // // // // //           <div className="form-group">
// // // // // // // //             <label htmlFor="reports">Upload ID Proof (PDF or JPG only)</label>
// // // // // // // //             <input
// // // // // // // //               type="file"
// // // // // // // //               id="reports"
// // // // // // // //               name="reports"
// // // // // // // //               onChange={handleChange}
// // // // // // // //             />
// // // // // // // //             {errors.reports && <div className="error-message">{errors.reports}</div>}
// // // // // // // //           </div>

// // // // // // // //           <button type="submit" disabled={submitting}>
// // // // // // // //             {submitting ? 'Submitting...' : 'Submit'}
// // // // // // // //           </button>
// // // // // // // //         </form>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default ApplyInsurance;

// // // // // // // import React, { useState } from 'react';
// // // // // // // import axios from 'axios';
// // // // // // // import Swal from 'sweetalert2';
// // // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // // import '../styles/ApplyInsurance.css'; // Ensure to create and use appropriate CSS
// // // // // // // import ApplicantNavbar from '../components/ApplicantNavbar';

// // // // // // // const ApplyInsurance = () => {
// // // // // // //   const [inputData, setInputData] = useState({
// // // // // // //     insuranceDate: '',
// // // // // // //     healthIssue: 'no', // Default value for health issue
// // // // // // //     status: 'pending', // Default value for status
// // // // // // //     reports: null, // For file upload
// // // // // // //   });
// // // // // // //   const [errors, setErrors] = useState({});
// // // // // // //   const [submitting, setSubmitting] = useState(false);
// // // // // // //   const [policyNumber, setPolicyNumber] = useState('');
// // // // // // //   const navigate = useNavigate();

// // // // // // //   const handleChange = (e) => {
// // // // // // //     const { name, value, type, files } = e.target;
// // // // // // //     if (type === 'file') {
// // // // // // //       setInputData((prevData) => ({
// // // // // // //         ...prevData,
// // // // // // //         [name]: files[0],
// // // // // // //       }));
// // // // // // //     } else if (type === 'radio') {
// // // // // // //       setInputData((prevData) => ({
// // // // // // //         ...prevData,
// // // // // // //         [name]: value,
// // // // // // //       }));
// // // // // // //     } else {
// // // // // // //       setInputData((prevData) => ({
// // // // // // //         ...prevData,
// // // // // // //         [name]: value,
// // // // // // //       }));
// // // // // // //     }

// // // // // // //     // Clear the error message for the changed field
// // // // // // //     setErrors((prevErrors) => ({
// // // // // // //       ...prevErrors,
// // // // // // //       [name]: '',
// // // // // // //     }));
// // // // // // //   };

// // // // // // //   const validateValues = () => {
// // // // // // //     const newErrors = {};

// // // // // // //     // Validate each field
// // // // // // //     if (!inputData.insuranceDate) newErrors.insuranceDate = 'Insurance date is required.';
// // // // // // //     if (!inputData.reports) newErrors.reports = 'ID Proof is required.';

// // // // // // //     if (inputData.reports) {
// // // // // // //       const allowedFormats = ['application/pdf', 'image/jpeg'];
// // // // // // //       if (!allowedFormats.includes(inputData.reports.type)) newErrors.reports = 'ID Proof must be a PDF or JPG file.';
// // // // // // //     }

// // // // // // //     setErrors(newErrors);
// // // // // // //     return Object.keys(newErrors).length === 0;
// // // // // // //   };

// // // // // // //   const handleSubmit = async (e) => {
// // // // // // //     e.preventDefault();
// // // // // // //     setSubmitting(true);

// // // // // // //     if (!validateValues()) {
// // // // // // //       setSubmitting(false);
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     // Generate a unique policy number for each submission
// // // // // // //     const generatedPolicyNumber = Math.floor(Math.random() * 1000000);
// // // // // // //     setPolicyNumber(generatedPolicyNumber);

// // // // // // //     // Retrieve the applicant ID from sessionStorage
// // // // // // //     const applicantId = sessionStorage.getItem('applicantId');
// // // // // // //     if (!applicantId) {
// // // // // // //       Swal.fire({
// // // // // // //         title: 'Error',
// // // // // // //         text: 'Applicant ID not found in session storage.',
// // // // // // //         icon: 'error',
// // // // // // //       });
// // // // // // //       setSubmitting(false);
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     const inusranceId = sessionStorage.getItem('inusranceId');
// // // // // // //     if (!inusranceId) {
// // // // // // //       Swal.fire({
// // // // // // //         title: 'Error',
// // // // // // //         text: 'Insurance ID not found in session storage.',
// // // // // // //         icon: 'error',
// // // // // // //       });
// // // // // // //       setSubmitting(false);
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     const formData = new FormData();
// // // // // // //     Object.keys(inputData).forEach((key) => {
// // // // // // //       if (inputData[key] !== null && inputData[key] !== undefined) {
// // // // // // //         formData.append(key, inputData[key]);
// // // // // // //       }
// // // // // // //     });
// // // // // // //     formData.append('policyNumber', generatedPolicyNumber); // Include policy number in FormData

// // // // // // //     // Append applicantId and insuranceId as JSON strings
// // // // // // //     formData.append('applicant', JSON.stringify({ applicantId })); 
// // // // // // //     formData.append('insurance', JSON.stringify({ inusranceId }));

// // // // // // //     try {
// // // // // // //       console.log('Submitting data:', formData); // Debugging log
// // // // // // //       await axios.post('http://localhost:8027/applyInsurance', formData, {
// // // // // // //         headers: {
// // // // // // //           'Content-Type': 'multipart/form-data',
// // // // // // //         },
// // // // // // //       });

// // // // // // //       Swal.fire({
// // // // // // //         title: 'Application Submitted Successfully!',
// // // // // // //         text: `Your policy number is ${generatedPolicyNumber}.`,
// // // // // // //         icon: 'success',
// // // // // // //       });

// // // // // // //       navigate('/applicant-dash'); // Redirect or perform any other action
// // // // // // //     } catch (err) {
// // // // // // //       console.error('Submit Error:', err);
// // // // // // //       Swal.fire({
// // // // // // //         title: 'Error',
// // // // // // //         text: 'An error occurred. Please try again.',
// // // // // // //         icon: 'error',
// // // // // // //       });
// // // // // // //     } finally {
// // // // // // //       setSubmitting(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div>
// // // // // // //       <ApplicantNavbar className="applicant-navbar" />
// // // // // // //       <div className="apply-insurance-form">
// // // // // // //         <h1>Apply for Insurance</h1>
// // // // // // //         <form onSubmit={handleSubmit}>
// // // // // // //           {errors.submit && <div className="alert alert-danger">{errors.submit}</div>}
          
// // // // // // //           <div className="form-group">
// // // // // // //             <label htmlFor="insuranceDate">Insurance Date</label>
// // // // // // //             <input
// // // // // // //               type="date"
// // // // // // //               id="insuranceDate"
// // // // // // //               name="insuranceDate"
// // // // // // //               value={inputData.insuranceDate}
// // // // // // //               onChange={handleChange}
// // // // // // //             />
// // // // // // //             {errors.insuranceDate && <div className="error-message">{errors.insuranceDate}</div>}
// // // // // // //           </div>

// // // // // // //           <div className="form-group">
// // // // // // //             <label>Health Issue</label>
// // // // // // //             <div className="radio-group">
// // // // // // //               <label>
// // // // // // //                 <input
// // // // // // //                   type="radio"
// // // // // // //                   name="healthIssue"
// // // // // // //                   value="yes"
// // // // // // //                   checked={inputData.healthIssue === 'yes'}
// // // // // // //                   onChange={handleChange}
// // // // // // //                 />
// // // // // // //                 Yes
// // // // // // //               </label>
// // // // // // //               <label>
// // // // // // //                 <input
// // // // // // //                   type="radio"
// // // // // // //                   name="healthIssue"
// // // // // // //                   value="no"
// // // // // // //                   checked={inputData.healthIssue === 'no'}
// // // // // // //                   onChange={handleChange}
// // // // // // //                 />
// // // // // // //                 No
// // // // // // //               </label>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           <div className="form-group">
// // // // // // //             <label htmlFor="reports">Upload ID Proof (PDF or JPG only)</label>
// // // // // // //             <input
// // // // // // //               type="file"
// // // // // // //               id="reports"
// // // // // // //               name="reports"
// // // // // // //               onChange={handleChange}
// // // // // // //             />
// // // // // // //             {errors.reports && <div className="error-message">{errors.reports}</div>}
// // // // // // //           </div>

// // // // // // //           <button type="submit" disabled={submitting}>
// // // // // // //             {submitting ? 'Submitting...' : 'Submit'}
// // // // // // //           </button>
// // // // // // //         </form>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default ApplyInsurance;

// // // // // // import React, { useState } from 'react';
// // // // // // import axios from 'axios';
// // // // // // import Swal from 'sweetalert2';
// // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // import '../styles/ApplyInsurance.css'; // Ensure to create and use appropriate CSS
// // // // // // import ApplicantNavbar from '../components/ApplicantNavbar';

// // // // // // const ApplyInsurance = () => {
// // // // // //   const [inputData, setInputData] = useState({
// // // // // //     insuranceDate: '',
// // // // // //     healthIssue: 'no', // Default value for health issue
// // // // // //     status: 'pending', // Default value for status
// // // // // //     reports: null, // For file upload
// // // // // //   });
// // // // // //   const [errors, setErrors] = useState({});
// // // // // //   const [submitting, setSubmitting] = useState(false);
// // // // // //   const [policyNumber, setPolicyNumber] = useState('');
// // // // // //   const navigate = useNavigate();

// // // // // //   const handleChange = (e) => {
// // // // // //     const { name, value, type, files } = e.target;
// // // // // //     if (type === 'file') {
// // // // // //       setInputData((prevData) => ({
// // // // // //         ...prevData,
// // // // // //         [name]: files[0],
// // // // // //       }));
// // // // // //     } else if (type === 'radio') {
// // // // // //       setInputData((prevData) => ({
// // // // // //         ...prevData,
// // // // // //         [name]: value,
// // // // // //       }));
// // // // // //     } else {
// // // // // //       setInputData((prevData) => ({
// // // // // //         ...prevData,
// // // // // //         [name]: value,
// // // // // //       }));
// // // // // //     }

// // // // // //     // Clear the error message for the changed field
// // // // // //     setErrors((prevErrors) => ({
// // // // // //       ...prevErrors,
// // // // // //       [name]: '',
// // // // // //     }));
// // // // // //   };

// // // // // //   const validateValues = () => {
// // // // // //     const newErrors = {};

// // // // // //     // Validate each field
// // // // // //     if (!inputData.insuranceDate) newErrors.insuranceDate = 'Insurance date is required.';
// // // // // //     if (!inputData.reports) newErrors.reports = 'ID Proof is required.';

// // // // // //     if (inputData.reports) {
// // // // // //       const allowedFormats = ['application/pdf', 'image/jpeg'];
// // // // // //       if (!allowedFormats.includes(inputData.reports.type)) newErrors.reports = 'ID Proof must be a PDF or JPG file.';
// // // // // //     }

// // // // // //     setErrors(newErrors);
// // // // // //     return Object.keys(newErrors).length === 0;
// // // // // //   };

// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     setSubmitting(true);

// // // // // //     if (!validateValues()) {
// // // // // //       setSubmitting(false);
// // // // // //       return;
// // // // // //     }

// // // // // //     // Generate a unique policy number for each submission
// // // // // //     const generatedPolicyNumber = Math.floor(Math.random() * 1000000);
// // // // // //     setPolicyNumber(generatedPolicyNumber);

// // // // // //     // Retrieve the applicant ID and insurance ID from sessionStorage
// // // // // //     const applicantId = sessionStorage.getItem('applicantId');
// // // // // //     const inusuranceId = sessionStorage.getItem('inusuranceId');

// // // // // //     if (!applicantId || !inusuranceId) {
// // // // // //       Swal.fire({
// // // // // //         title: 'Error',
// // // // // //         text: 'Applicant ID or Insurance ID not found in session storage.',
// // // // // //         icon: 'error',
// // // // // //       });
// // // // // //       setSubmitting(false);
// // // // // //       return;
// // // // // //     }

// // // // // //     const formData = new FormData();
// // // // // //     Object.keys(inputData).forEach((key) => {
// // // // // //       if (inputData[key] !== null && inputData[key] !== undefined) {
// // // // // //         formData.append(key, inputData[key]);
// // // // // //       }
// // // // // //     });
// // // // // //     formData.append('policyNumber', generatedPolicyNumber); // Include policy number in FormData

// // // // // //     // Append applicantId and insuranceId as simple form data
// // // // // //     formData.append('applicantId', applicantId);
// // // // // //     formData.append('insuranceId', inusuranceId);

// // // // // //     try {
// // // // // //       console.log('Submitting data:', formData); // Debugging log
// // // // // //       await axios.post('http://localhost:8027/applyInsurance', formData, {
// // // // // //         headers: {
// // // // // //           'Content-Type': 'multipart/form-data',
// // // // // //         },
// // // // // //       });

// // // // // //       Swal.fire({
// // // // // //         title: 'Application Submitted Successfully!',
// // // // // //         text: `Your policy number is ${generatedPolicyNumber}.`,
// // // // // //         icon: 'success',
// // // // // //       });

// // // // // //       navigate('/applicant-dash'); // Redirect or perform any other action
// // // // // //     } catch (err) {
// // // // // //       console.error('Submit Error:', err);
// // // // // //       Swal.fire({
// // // // // //         title: 'Error',
// // // // // //         text: 'An error occurred. Please try again.',
// // // // // //         icon: 'error',
// // // // // //       });
// // // // // //     } finally {
// // // // // //       setSubmitting(false);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div>
// // // // // //       <ApplicantNavbar className="applicant-navbar" />
// // // // // //       <div className="apply-insurance-form">
// // // // // //         <h1>Apply for Insurance</h1>
// // // // // //         <form onSubmit={handleSubmit}>
// // // // // //           {errors.submit && <div className="alert alert-danger">{errors.submit}</div>}
          
// // // // // //           <div className="form-group">
// // // // // //             <label htmlFor="insuranceDate">Insurance Date</label>
// // // // // //             <input
// // // // // //               type="date"
// // // // // //               id="insuranceDate"
// // // // // //               name="insuranceDate"
// // // // // //               value={inputData.insuranceDate}
// // // // // //               onChange={handleChange}
// // // // // //             />
// // // // // //             {errors.insuranceDate && <div className="error-message">{errors.insuranceDate}</div>}
// // // // // //           </div>

// // // // // //           <div className="form-group">
// // // // // //             <label>Health Issue</label>
// // // // // //             <div className="radio-group">
// // // // // //               <label>
// // // // // //                 <input
// // // // // //                   type="radio"
// // // // // //                   name="healthIssue"
// // // // // //                   value="yes"
// // // // // //                   checked={inputData.healthIssue === 'yes'}
// // // // // //                   onChange={handleChange}
// // // // // //                 />
// // // // // //                 Yes
// // // // // //               </label>
// // // // // //               <label>
// // // // // //                 <input
// // // // // //                   type="radio"
// // // // // //                   name="healthIssue"
// // // // // //                   value="no"
// // // // // //                   checked={inputData.healthIssue === 'no'}
// // // // // //                   onChange={handleChange}
// // // // // //                 />
// // // // // //                 No
// // // // // //               </label>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           <div className="form-group">
// // // // // //             <label htmlFor="reports">Upload ID Proof (PDF or JPG only)</label>
// // // // // //             <input
// // // // // //               type="file"
// // // // // //               id="reports"
// // // // // //               name="reports"
// // // // // //               onChange={handleChange}
// // // // // //             />
// // // // // //             {errors.reports && <div className="error-message">{errors.reports}</div>}
// // // // // //           </div>

// // // // // //           <button type="submit" disabled={submitting}>
// // // // // //             {submitting ? 'Submitting...' : 'Submit'}
// // // // // //           </button>
// // // // // //         </form>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default ApplyInsurance;


// // // // // import React, { useState } from 'react';
// // // // // import axios from 'axios';
// // // // // import Swal from 'sweetalert2';
// // // // // import { useNavigate } from 'react-router-dom';
// // // // // import '../styles/ApplyInsurance.css'; // Ensure to create and use appropriate CSS
// // // // // import ApplicantNavbar from '../components/ApplicantNavbar';

// // // // // const ApplyInsurance = () => {
// // // // //   const [inputData, setInputData] = useState({
// // // // //     insuranceDate: '',
// // // // //     healthIssue: 'no', // Default value for health issue
// // // // //     status: 'pending', // Default value for status
// // // // //     reports: null, // For file upload
// // // // //   });
// // // // //   const [errors, setErrors] = useState({});
// // // // //   const [submitting, setSubmitting] = useState(false);
// // // // //   const [policyNumber, setPolicyNumber] = useState('');
// // // // //   const navigate = useNavigate();

// // // // //   const handleChange = (e) => {
// // // // //     const { name, value, type, files } = e.target;
// // // // //     if (type === 'file') {
// // // // //       setInputData((prevData) => ({
// // // // //         ...prevData,
// // // // //         [name]: files[0],
// // // // //       }));
// // // // //     } else if (type === 'radio') {
// // // // //       setInputData((prevData) => ({
// // // // //         ...prevData,
// // // // //         [name]: value,
// // // // //       }));
// // // // //     } else {
// // // // //       setInputData((prevData) => ({
// // // // //         ...prevData,
// // // // //         [name]: value,
// // // // //       }));
// // // // //     }

// // // // //     // Clear the error message for the changed field
// // // // //     setErrors((prevErrors) => ({
// // // // //       ...prevErrors,
// // // // //       [name]: '',
// // // // //     }));
// // // // //   };

// // // // //   const validateValues = () => {
// // // // //     const newErrors = {};

// // // // //     // Validate each field
// // // // //     if (!inputData.insuranceDate) newErrors.insuranceDate = 'Insurance date is required.';
// // // // //     if (!inputData.reports) newErrors.reports = 'ID Proof is required.';

// // // // //     if (inputData.reports) {
// // // // //       const allowedFormats = ['application/pdf', 'image/jpeg'];
// // // // //       if (!allowedFormats.includes(inputData.reports.type)) newErrors.reports = 'ID Proof must be a PDF or JPG file.';
// // // // //     }

// // // // //     setErrors(newErrors);
// // // // //     return Object.keys(newErrors).length === 0;
// // // // //   };

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();
// // // // //     setSubmitting(true);

// // // // //     if (!validateValues()) {
// // // // //       setSubmitting(false);
// // // // //       return;
// // // // //     }

// // // // //     // Generate a unique policy number for each submission
// // // // //     const generatedPolicyNumber = Math.floor(Math.random() * 1000000);
// // // // //     setPolicyNumber(generatedPolicyNumber);

// // // // //     // Retrieve the applicant ID and insurance ID from sessionStorage
// // // // //     const applicantId = sessionStorage.getItem('applicantId');
// // // // //     const inusranceId = sessionStorage.getItem('inusranceId');

// // // // //     if (!applicantId || !inusranceId) {
// // // // //       Swal.fire({
// // // // //         title: 'Error',
// // // // //         text: 'Applicant ID or Insurance ID not found in session storage.',
// // // // //         icon: 'error',
// // // // //       });
// // // // //       setSubmitting(false);
// // // // //       return;
// // // // //     }

// // // // //     const formData = new FormData();
// // // // //     Object.keys(inputData).forEach((key) => {
// // // // //       if (inputData[key] !== null && inputData[key] !== undefined) {
// // // // //         formData.append(key, inputData[key]);
// // // // //       }
// // // // //     });
// // // // //     formData.append('policyNumber', generatedPolicyNumber); // Include policy number in FormData
// // // // //     // formData.append('applicantId', applicantId);
// // // // //     formData.append('applicantId',JSON.stringify({ applicantId }));
// // // // //    // formData.append('inusranceId', inusranceId);
// // // // //    formData.append('inusranceId',JSON.stringify({inusranceId}));

// // // // //     // Log FormData contents for debugging
// // // // //     for (let pair of formData.entries()) {
// // // // //       console.log(pair[0], pair[1]); // Logs key-value pairs in FormData
// // // // //     }

// // // // //     try {
// // // // //       await axios.post('http://localhost:8027/applyInsurance', formData, {
// // // // //         headers: {
// // // // //           'Content-Type': 'multipart/form-data',
// // // // //         },
// // // // //       });

// // // // //       Swal.fire({
// // // // //         title: 'Application Submitted Successfully!',
// // // // //         text: `Your policy number is ${generatedPolicyNumber}.`,
// // // // //         icon: 'success',
// // // // //       });

// // // // //       navigate('/applicant-dash'); // Redirect or perform any other action
// // // // //     } catch (err) {
// // // // //       console.error('Submit Error:', err);
// // // // //       Swal.fire({
// // // // //         title: 'Error',
// // // // //         text: 'An error occurred. Please try again.',
// // // // //         icon: 'error',
// // // // //       });
// // // // //     } finally {
// // // // //       setSubmitting(false);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div>
// // // // //       <ApplicantNavbar className="applicant-navbar" />
// // // // //       <div className="apply-insurance-form">
// // // // //         <h1>Apply for Insurance</h1>
// // // // //         <form onSubmit={handleSubmit}>
// // // // //           {errors.submit && <div className="alert alert-danger">{errors.submit}</div>}
          
// // // // //           <div className="form-group">
// // // // //             <label htmlFor="insuranceDate">Insurance Date</label>
// // // // //             <input
// // // // //               type="date"
// // // // //               id="insuranceDate"
// // // // //               name="insuranceDate"
// // // // //               value={inputData.insuranceDate}
// // // // //               onChange={handleChange}
// // // // //             />
// // // // //             {errors.insuranceDate && <div className="error-message">{errors.insuranceDate}</div>}
// // // // //           </div>

// // // // //           <div className="form-group">
// // // // //             <label>Health Issue</label>
// // // // //             <div className="radio-group">
// // // // //               <label>
// // // // //                 <input
// // // // //                   type="radio"
// // // // //                   name="healthIssue"
// // // // //                   value="yes"
// // // // //                   checked={inputData.healthIssue === 'yes'}
// // // // //                   onChange={handleChange}
// // // // //                 />
// // // // //                 Yes
// // // // //               </label>
// // // // //               <label>
// // // // //                 <input
// // // // //                   type="radio"
// // // // //                   name="healthIssue"
// // // // //                   value="no"
// // // // //                   checked={inputData.healthIssue === 'no'}
// // // // //                   onChange={handleChange}
// // // // //                 />
// // // // //                 No
// // // // //               </label>
// // // // //             </div>
// // // // //           </div>

// // // // //           <div className="form-group">
// // // // //             <label htmlFor="reports">Upload ID Proof (PDF or JPG only)</label>
// // // // //             <input
// // // // //               type="file"
// // // // //               id="reports"
// // // // //               name="reports"
// // // // //               onChange={handleChange}
// // // // //             />
// // // // //             {errors.reports && <div className="error-message">{errors.reports}</div>}
// // // // //           </div>

// // // // //           <button type="submit" disabled={submitting}>
// // // // //             {submitting ? 'Submitting...' : 'Submit'}
// // // // //           </button>
// // // // //         </form>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ApplyInsurance;


// // // // import React, { useState } from 'react';
// // // // import axios from 'axios';
// // // // import Swal from 'sweetalert2';
// // // // import { useNavigate } from 'react-router-dom';
// // // // import '../styles/ApplyInsurance.css';
// // // // import ApplicantNavbar from '../components/ApplicantNavbar';

// // // // const ApplyInsurance = () => {
// // // //   const [inputData, setInputData] = useState({
// // // //     insuranceDate: '',
// // // //     healthIssue: 'no',
// // // //     status: 'pending',
// // // //     reports: null,
// // // //   });
// // // //   const [errors, setErrors] = useState({});
// // // //   const [submitting, setSubmitting] = useState(false);
// // // //   const [policyNumber, setPolicyNumber] = useState('');
// // // //   const navigate = useNavigate();

// // // //   const handleChange = (e) => {
// // // //     const { name, value, type, files } = e.target;
// // // //     if (type === 'file') {
// // // //       setInputData((prevData) => ({
// // // //         ...prevData,
// // // //         [name]: files[0],
// // // //       }));
// // // //     } else if (type === 'radio') {
// // // //       setInputData((prevData) => ({
// // // //         ...prevData,
// // // //         [name]: value,
// // // //       }));
// // // //     } else {
// // // //       setInputData((prevData) => ({
// // // //         ...prevData,
// // // //         [name]: value,
// // // //       }));
// // // //     }

// // // //     setErrors((prevErrors) => ({
// // // //       ...prevErrors,
// // // //       [name]: '',
// // // //     }));
// // // //   };

// // // //   const validateValues = () => {
// // // //     const newErrors = {};
// // // //     if (!inputData.insuranceDate) newErrors.insuranceDate = 'Insurance date is required.';
// // // //     if (!inputData.reports) newErrors.reports = 'ID Proof is required.';
// // // //     if (inputData.reports) {
// // // //       const allowedFormats = ['application/pdf', 'image/jpeg'];
// // // //       if (!allowedFormats.includes(inputData.reports.type)) newErrors.reports = 'ID Proof must be a PDF or JPG file.';
// // // //     }
// // // //     setErrors(newErrors);
// // // //     return Object.keys(newErrors).length === 0;
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     setSubmitting(true);

// // // //     if (!validateValues()) {
// // // //       setSubmitting(false);
// // // //       return;
// // // //     }

// // // //     const generatedPolicyNumber = Math.floor(Math.random() * 1000000);
// // // //     setPolicyNumber(generatedPolicyNumber);

// // // //     const applicantId = sessionStorage.getItem('applicantId');
// // // //     const inusranceId = sessionStorage.getItem('inusranceId');

// // // //     if (!applicantId || !inusranceId) {
// // // //       Swal.fire({
// // // //         title: 'Error',
// // // //         text: 'Applicant ID or Insurance ID not found in session storage.',
// // // //         icon: 'error',
// // // //       });
// // // //       setSubmitting(false);
// // // //       return;
// // // //     }

// // // //     const formData = new FormData();
// // // //     Object.keys(inputData).forEach((key) => {
// // // //       if (inputData[key] !== null && inputData[key] !== undefined) {
// // // //         formData.append(key, inputData[key]);
// // // //       }
// // // //     });
// // // //     formData.append('policyNumber', generatedPolicyNumber);
// // // //     formData.append('applicantId', JSON.stringify({applicantId}));
// // // //     // formData.append('inusranceId', JSON.stringify({inusranceId}));
// // // //     formData.append('inusranceId',JSON.stringify({inusranceId}));

// // // //     try {
// // // //       console.log('Submitting data:', Array.from(formData.entries())); // Log FormData for debugging
// // // //       await axios.post('http://localhost:8027/applyInsurance', formData, {
// // // //         headers: {
// // // //           'Content-Type': 'multipart/form-data',
// // // //         },
// // // //       });

// // // //       Swal.fire({
// // // //         title: 'Application Submitted Successfully!',
// // // //         text: `Your policy number is ${generatedPolicyNumber}.`,
// // // //         icon: 'success',
// // // //       });

// // // //       navigate('/applicant-dash');
// // // //     } catch (err) {
// // // //       console.error('Submit Error:', err);
// // // //       Swal.fire({
// // // //         title: 'Error',
// // // //         text: 'An error occurred. Please try again.',
// // // //         icon: 'error',
// // // //       });
// // // //     } finally {
// // // //       setSubmitting(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <ApplicantNavbar className="applicant-navbar" />
// // // //       <div className="apply-insurance-form">
// // // //         <h1>Apply for Insurance</h1>
// // // //         <form onSubmit={handleSubmit}>
// // // //           {errors.submit && <div className="alert alert-danger">{errors.submit}</div>}
          
// // // //           <div className="form-group">
// // // //             <label htmlFor="insuranceDate">Insurance Date</label>
// // // //             <input
// // // //               type="date"
// // // //               id="insuranceDate"
// // // //               name="insuranceDate"
// // // //               value={inputData.insuranceDate}
// // // //               onChange={handleChange}
// // // //             />
// // // //             {errors.insuranceDate && <div className="error-message">{errors.insuranceDate}</div>}
// // // //           </div>

// // // //           <div className="form-group">
// // // //             <label>Health Issue</label>
// // // //             <div className="radio-group">
// // // //               <label>
// // // //                 <input
// // // //                   type="radio"
// // // //                   name="healthIssue"
// // // //                   value="yes"
// // // //                   checked={inputData.healthIssue === 'yes'}
// // // //                   onChange={handleChange}
// // // //                 />
// // // //                 Yes
// // // //               </label>
// // // //               <label>
// // // //                 <input
// // // //                   type="radio"
// // // //                   name="healthIssue"
// // // //                   value="no"
// // // //                   checked={inputData.healthIssue === 'no'}
// // // //                   onChange={handleChange}
// // // //                 />
// // // //                 No
// // // //               </label>
// // // //             </div>
// // // //           </div>

// // // //           <div className="form-group">
// // // //             <label htmlFor="reports">Upload ID Proof (PDF or JPG only)</label>
// // // //             <input
// // // //               type="file"
// // // //               id="reports"
// // // //               name="reports"
// // // //               onChange={handleChange}
// // // //             />
// // // //             {errors.reports && <div className="error-message">{errors.reports}</div>}
// // // //           </div>

// // // //           <button type="submit" disabled={submitting}>
// // // //             {submitting ? 'Submitting...' : 'Submit'}
// // // //           </button>
// // // //         </form>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ApplyInsurance;

// // // import React, { useState } from 'react';
// // // import axios from 'axios';
// // // import Swal from 'sweetalert2';
// // // import { useNavigate } from 'react-router-dom';
// // // import '../styles/ApplyInsurance.css';
// // // import ApplicantNavbar from '../components/ApplicantNavbar';

// // // const ApplyInsurance = () => {
// // //   const [inputData, setInputData] = useState({
// // //     insuranceDate: '',
// // //     healthIssue: 'no',
// // //     status: 'pending',
// // //     reports: null,
// // //   });
// // //   const [errors, setErrors] = useState({});
// // //   const [submitting, setSubmitting] = useState(false);
// // //   const [policyNumber, setPolicyNumber] = useState('');
// // //   const navigate = useNavigate();

// // //   const handleChange = (e) => {
// // //     const { name, value, type, files } = e.target;
// // //     if (type === 'file') {
// // //       setInputData((prevData) => ({
// // //         ...prevData,
// // //         [name]: files[0],
// // //       }));
// // //     } else if (type === 'radio') {
// // //       setInputData((prevData) => ({
// // //         ...prevData,
// // //         [name]: value,
// // //       }));
// // //     } else {
// // //       setInputData((prevData) => ({
// // //         ...prevData,
// // //         [name]: value,
// // //       }));
// // //     }

// // //     setErrors((prevErrors) => ({
// // //       ...prevErrors,
// // //       [name]: '',
// // //     }));
// // //   };

// // //   const validateValues = () => {
// // //     const newErrors = {};
// // //     if (!inputData.insuranceDate) newErrors.insuranceDate = 'Insurance date is required.';
// // //     if (!inputData.reports) newErrors.reports = 'ID Proof is required.';
// // //     if (inputData.reports) {
// // //       const allowedFormats = ['application/pdf', 'image/jpeg'];
// // //       if (!allowedFormats.includes(inputData.reports.type)) newErrors.reports = 'ID Proof must be a PDF or JPG file.';
// // //     }
// // //     setErrors(newErrors);
// // //     return Object.keys(newErrors).length === 0;
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setSubmitting(true);

// // //     if (!validateValues()) {
// // //       setSubmitting(false);
// // //       return;
// // //     }

// // //     const generatedPolicyNumber = Math.floor(Math.random() * 1000000);
// // //     setPolicyNumber(generatedPolicyNumber);

// // //     const applicantId = sessionStorage.getItem('applicantId');
// // //     const inusranceId = parseInt(sessionStorage.getItem('inusranceId'), 10); // Fixed typo from 'inusranceId' to 'insuranceId'

// // //     if (!applicantId || !inusranceId) {
// // //       Swal.fire({
// // //         title: 'Error',
// // //         text: 'Applicant ID or Insurance ID not found in session storage.',
// // //         icon: 'error',
// // //       });
// // //       setSubmitting(false);
// // //       return;
// // //     }

// // //     const formData = new FormData();
// // //     Object.keys(inputData).forEach((key) => {
// // //       if (inputData[key] !== null && inputData[key] !== undefined) {
// // //         formData.append(key, inputData[key]);
// // //       }
// // //     });

// // //     formData.append('policyNumber', generatedPolicyNumber);
// // //     formData.append('applicantId', applicantId); // Directly append the applicantId
// // //     formData.append('inusranceId', inusranceId); // Directly append the insuranceId

// // //     try {
// // //       console.log('Submitting data:', Array.from(formData.entries())); // Log FormData for debugging
// // //       await axios.post('http://localhost:8027/applyInsurance', formData, {
// // //         headers: {
// // //           'Content-Type': 'multipart/form-data',
// // //         },
// // //       });

// // //       Swal.fire({
// // //         title: 'Application Submitted Successfully!',
// // //         text: `Your policy number is ${generatedPolicyNumber}.`,
// // //         icon: 'success',
// // //       });

// // //       navigate('/applicant-dash');
// // //     } catch (err) {
// // //       console.error('Submit Error:', err);
// // //       Swal.fire({
// // //         title: 'Error',
// // //         text: 'An error occurred. Please try again.',
// // //         icon: 'error',
// // //       });
// // //     } finally {
// // //       setSubmitting(false);
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <ApplicantNavbar className="applicant-navbar" />
// // //       <div className="apply-insurance-form">
// // //         <h1>Apply for Insurance</h1>
// // //         <form onSubmit={handleSubmit}>
// // //           {errors.submit && <div className="alert alert-danger">{errors.submit}</div>}
          
// // //           <div className="form-group">
// // //             <label htmlFor="insuranceDate">Insurance Date</label>
// // //             <input
// // //               type="date"
// // //               id="insuranceDate"
// // //               name="insuranceDate"
// // //               value={inputData.insuranceDate}
// // //               onChange={handleChange}
// // //             />
// // //             {errors.insuranceDate && <div className="error-message">{errors.insuranceDate}</div>}
// // //           </div>

// // //           <div className="form-group">
// // //             <label>Health Issue</label>
// // //             <div className="radio-group">
// // //               <label>
// // //                 <input
// // //                   type="radio"
// // //                   name="healthIssue"
// // //                   value="yes"
// // //                   checked={inputData.healthIssue === 'yes'}
// // //                   onChange={handleChange}
// // //                 />
// // //                 Yes
// // //               </label>
// // //               <label>
// // //                 <input
// // //                   type="radio"
// // //                   name="healthIssue"
// // //                   value="no"
// // //                   checked={inputData.healthIssue === 'no'}
// // //                   onChange={handleChange}
// // //                 />
// // //                 No
// // //               </label>
// // //             </div>
// // //           </div>

// // //           <div className="form-group">
// // //             <label htmlFor="reports">Upload ID Proof (PDF or JPG only)</label>
// // //             <input
// // //               type="file"
// // //               id="reports"
// // //               name="reports"
// // //               onChange={handleChange}
// // //             />
// // //             {errors.reports && <div className="error-message">{errors.reports}</div>}
// // //           </div>

// // //           <button type="submit" disabled={submitting}>
// // //             {submitting ? 'Submitting...' : 'Submit'}
// // //           </button>
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ApplyInsurance;

// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import Swal from 'sweetalert2';
// // import { useNavigate } from 'react-router-dom';
// // import '../styles/ApplyInsurance.css';
// // import ApplicantNavbar from '../components/ApplicantNavbar';

// // const ApplyInsurance = () => {
// //   const [inputData, setInputData] = useState({
// //     insuranceDate: '',
// //     healthIssue: 'no',
// //     status: 'pending',
// //     reports: null,
// //   });
// //   const [errors, setErrors] = useState({});
// //   const [submitting, setSubmitting] = useState(false);
// //   const [policyNumber, setPolicyNumber] = useState('');
// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     const { name, value, type, files } = e.target;
// //     if (type === 'file') {
// //       setInputData((prevData) => ({
// //         ...prevData,
// //         [name]: files[0],
// //       }));
// //     } else if (type === 'radio') {
// //       setInputData((prevData) => ({
// //         ...prevData,
// //         [name]: value,
// //       }));
// //     } else {
// //       setInputData((prevData) => ({
// //         ...prevData,
// //         [name]: value,
// //       }));
// //     }

// //     setErrors((prevErrors) => ({
// //       ...prevErrors,
// //       [name]: '',
// //     }));
// //   };

// //   const validateValues = () => {
// //     const newErrors = {};
// //     if (!inputData.insuranceDate) newErrors.insuranceDate = 'Insurance date is required.';
// //     if (!inputData.reports) newErrors.reports = 'ID Proof is required.';
// //     if (inputData.reports) {
// //       const allowedFormats = ['application/pdf', 'image/jpeg'];
// //       if (!allowedFormats.includes(inputData.reports.type)) newErrors.reports = 'ID Proof must be a PDF or JPG file.';
// //     }
// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   const sendEmail = async (emailData) => {
// //     try {
// //       await axios.post('http://localhost:8027/applyInsurance/sendEmail', emailData);
// //     } catch (err) {
// //       console.error('Email Send Error:', err);
// //       Swal.fire({
// //         title: 'Error',
// //         text: 'Failed to send confirmation email. Please try again.',
// //         icon: 'error',
// //       });
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setSubmitting(true);

// //     if (!validateValues()) {
// //       setSubmitting(false);
// //       return;
// //     }

// //     const generatedPolicyNumber = Math.floor(Math.random() * 1000000);
// //     setPolicyNumber(generatedPolicyNumber);

// //     const applicantId = sessionStorage.getItem('applicantId');
// //     const  inusranceId = parseInt(sessionStorage.getItem('inusranceId'), 10); // Corrected typo 'inusranceId' to 'insuranceId'

// //     if (!applicantId || !inusranceId) {
// //       Swal.fire({
// //         title: 'Error',
// //         text: 'Applicant ID or Insurance ID not found in session storage.',
// //         icon: 'error',
// //       });
// //       setSubmitting(false);
// //       return;
// //     }

// //     const formData = new FormData();
// //     Object.keys(inputData).forEach((key) => {
// //       if (inputData[key] !== null && inputData[key] !== undefined) {
// //         formData.append(key, inputData[key]);
// //       }
// //     });

// //     formData.append('policyNumber', generatedPolicyNumber);
// //     formData.append('applicantId', applicantId);
// //     formData.append('inusranceId', inusranceId);

// //     try {
// //       console.log('Submitting data:', Array.from(formData.entries())); // Log FormData for debugging
// //       await axios.post('http://localhost:8027/applyInsurance', formData, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data',
// //         },
// //       });

// //       // Send confirmation email
// //       const emailData = {
// //         from: 'noreply@yourdomain.com', // Replace with appropriate sender email
// //         to: sessionStorage.getItem('email'), // Get recipient email from sessionStorage or another source
// //         subject: 'Insurance Application Received',
// //         body: `Your insurance application has been successfully submitted. Your policy number is ${generatedPolicyNumber}. We are currently reviewing your application and will get back to you shortly. Thank you!`,
// //       };
// //       await sendEmail(emailData);

// //       Swal.fire({
// //         title: 'Application Submitted Successfully!',
// //         text: `Your policy number is ${generatedPolicyNumber}.`,
// //         icon: 'success',
// //       });

// //       navigate('/applicant-dash');
// //     } catch (err) {
// //       console.error('Submit Error:', err);
// //       Swal.fire({
// //         title: 'Error',
// //         text: 'An error occurred. Please try again.',
// //         icon: 'error',
// //       });
// //     } finally {
// //       setSubmitting(false);
// //     }
// //   };

// //   return (
// //     <div>
// //       <ApplicantNavbar className="applicant-navbar" />
// //       <div className="apply-insurance-form">
// //         <h1>Apply for Insurance</h1>
// //         <form onSubmit={handleSubmit}>
// //           {errors.submit && <div className="alert alert-danger">{errors.submit}</div>}
          
// //           <div className="form-group">
// //             <label htmlFor="insuranceDate">Insurance Date</label>
// //             <input
// //               type="date"
// //               id="insuranceDate"
// //               name="insuranceDate"
// //               value={inputData.insuranceDate}
// //               onChange={handleChange}
// //             />
// //             {errors.insuranceDate && <div className="error-message">{errors.insuranceDate}</div>}
// //           </div>

// //           <div className="form-group">
// //             <label>Health Issue</label>
// //             <div className="radio-group">
// //               <label>
// //                 <input
// //                   type="radio"
// //                   name="healthIssue"
// //                   value="yes"
// //                   checked={inputData.healthIssue === 'yes'}
// //                   onChange={handleChange}
// //                 />
// //                 Yes
// //               </label>
// //               <label>
// //                 <input
// //                   type="radio"
// //                   name="healthIssue"
// //                   value="no"
// //                   checked={inputData.healthIssue === 'no'}
// //                   onChange={handleChange}
// //                 />
// //                 No
// //               </label>
// //             </div>
// //           </div>

// //           <div className="form-group">
// //             <label htmlFor="reports">Upload ID Proof (PDF or JPG only)</label>
// //             <input
// //               type="file"
// //               id="reports"
// //               name="reports"
// //               onChange={handleChange}
// //             />
// //             {errors.reports && <div className="error-message">{errors.reports}</div>}
// //           </div>

// //           <button type="submit" disabled={submitting}>
// //             {submitting ? 'Submitting...' : 'Submit'}
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ApplyInsurance;


// import React, { useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';
// import '../styles/ApplyInsurance.css';
// import ApplicantNavbar from '../components/ApplicantNavbar';

// const ApplyInsurance = () => {
//   const [inputData, setInputData] = useState({
//     insuranceDate: '',
//     healthIssue: 'no',
//     status: 'pending',
//     reports: null,
//   });
//   const [errors, setErrors] = useState({});
//   const [submitting, setSubmitting] = useState(false);
//   const [policyNumber, setPolicyNumber] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     if (type === 'file') {
//       setInputData((prevData) => ({
//         ...prevData,
//         [name]: files[0],
//       }));
//     } else if (type === 'radio') {
//       setInputData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     } else {
//       setInputData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     }

//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: '',
//     }));
//   };

//   const validateValues = () => {
//     const newErrors = {};
//     if (!inputData.insuranceDate) newErrors.insuranceDate = 'Insurance date is required.';
//     if (!inputData.reports) newErrors.reports = 'ID Proof is required.';
//     if (inputData.reports) {
//       const allowedFormats = ['application/pdf', 'image/jpeg'];
//       if (!allowedFormats.includes(inputData.reports.type)) newErrors.reports = 'ID Proof must be a PDF or JPG file.';
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const sendEmail = async (emailData) => {
//     try {
//       await axios.post('http://localhost:8027/applyInsurance/sendEmail', null, {
//         params: emailData,
//       });
//     } catch (err) {
//       console.error('Email Send Error:', err);
//       Swal.fire({
//         title: 'Error',
//         text: 'Failed to send confirmation email. Please try again.',
//         icon: 'error',
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);

//     if (!validateValues()) {
//       setSubmitting(false);
//       return;
//     }

//     const generatedPolicyNumber = Math.floor(Math.random() * 1000000);
//     setPolicyNumber(generatedPolicyNumber);

//     const applicantId = sessionStorage.getItem('applicantId');
//     const inusranceId = parseInt(sessionStorage.getItem('inusranceId'), 10);

//     if (!applicantId || !inusranceId) {
//       Swal.fire({
//         title: 'Error',
//         text: 'Applicant ID or Insurance ID not found in session storage.',
//         icon: 'error',
//       });
//       setSubmitting(false);
//       return;
//     }

//     const formData = new FormData();
//     Object.keys(inputData).forEach((key) => {
//       if (inputData[key] !== null && inputData[key] !== undefined) {
//         formData.append(key, inputData[key]);
//       }
//     });

//     formData.append('policyNumber', generatedPolicyNumber);
//     formData.append('applicantId', applicantId);
//     formData.append('inusranceId', inusranceId);

//     try {
//       console.log('Submitting data:', Array.from(formData.entries()));
//       await axios.post('http://localhost:8027/applyInsurance', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       // Send confirmation email
//       const emailData = {
//         from: 'noreply@yourdomain.com',
//         to: sessionStorage.getItem('email'), // Ensure this value is set in session storage
//         subject: 'Insurance Application Received',
//         body: `Your insurance application has been successfully submitted. Your policy number is ${generatedPolicyNumber}. We are currently reviewing your application and will get back to you shortly. Thank you!`,
//       };
//       await sendEmail(emailData);

//       Swal.fire({
//         title: 'Application Submitted Successfully! Mail Sent',
//         text: `Your policy number is ${generatedPolicyNumber}.`,
//         icon: 'success',
//       });

//       navigate('/applicant-dash');
//     } catch (err) {
//       console.error('Submit Error:', err);
//       Swal.fire({
//         title: 'Error',
//         text: 'An error occurred. Please try again.',
//         icon: 'error',
//       });
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div>
//       <ApplicantNavbar className="applicant-navbar" />
//       <div className="apply-insurance-form">
//         <h1>Apply for Insurance</h1>
//         <form onSubmit={handleSubmit}>
//           {errors.submit && <div className="alert alert-danger">{errors.submit}</div>}
          
//           <div className="form-group">
//             <label htmlFor="insuranceDate">Insurance Date</label>
//             <input
//               type="date"
//               id="insuranceDate"
//               name="insuranceDate"
//               value={inputData.insuranceDate}
//               onChange={handleChange}
//             />
//             {errors.insuranceDate && <div className="error-message">{errors.insuranceDate}</div>}
//           </div>

//           <div className="form-group">
//             <label>Health Issue</label>
//             <div className="radio-group">
//               <label>
//                 <input
//                   type="radio"
//                   name="healthIssue"
//                   value="yes"
//                   checked={inputData.healthIssue === 'yes'}
//                   onChange={handleChange}
//                 />
//                 Yes
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="healthIssue"
//                   value="no"
//                   checked={inputData.healthIssue === 'no'}
//                   onChange={handleChange}
//                 />
//                 No
//               </label>
//             </div>
//           </div>

//           <div className="form-group">
//             <label htmlFor="reports">Medical Records(PDF or JPG only)</label>
//             <input
//               type="file"
//               id="reports"
//               name="reports"
//               onChange={handleChange}
//             />
//             {errors.reports && <div className="error-message">{errors.reports}</div>}
//           </div>

//           <button type="submit" disabled={submitting}>
//             {submitting ? 'Submitting...' : 'Submit'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ApplyInsurance;

import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import '../styles/ApplyInsurance.css';
import ApplicantNavbar from '../components/ApplicantNavbar';

const ApplyInsurance = () => {
  const [inputData, setInputData] = useState({
    insuranceDate: '',
    healthIssue: 'no',
    status: 'pending',
    reports: null,
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [policyNumber, setPolicyNumber] = useState('');
  const navigate = useNavigate();

  // Function to get the current date in yyyy-mm-dd format
  const getCurrentDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setInputData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else if (type === 'radio') {
      setInputData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      setInputData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validateValues = () => {
    const newErrors = {};
    if (!inputData.insuranceDate) newErrors.insuranceDate = 'Insurance date is required.';
    if (!inputData.reports) newErrors.reports = 'ID Proof is required.';
    if (inputData.reports) {
      const allowedFormats = ['application/pdf', 'image/jpeg'];
      if (!allowedFormats.includes(inputData.reports.type)) newErrors.reports = 'ID Proof must be a PDF or JPG file.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = async (emailData) => {
    try {
      await axios.post('http://localhost:8027/applyInsurance/sendEmail', null, {
        params: emailData,
      });
    } catch (err) {
      console.error('Email Send Error:', err);
      Swal.fire({
        title: 'Error',
        text: 'Failed to send confirmation email. Please try again.',
        icon: 'error',
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!validateValues()) {
      setSubmitting(false);
      return;
    }

    const generatedPolicyNumber = Math.floor(Math.random() * 1000000);
    setPolicyNumber(generatedPolicyNumber);

    const applicantId = sessionStorage.getItem('applicantId');
    const inusranceId = parseInt(sessionStorage.getItem('inusranceId'), 10);

    if (!applicantId || !inusranceId) {
      Swal.fire({
        title: 'Error',
        text: 'Applicant ID or Insurance ID not found in session storage.',
        icon: 'error',
      });
      setSubmitting(false);
      return;
    }

    const formData = new FormData();
    Object.keys(inputData).forEach((key) => {
      if (inputData[key] !== null && inputData[key] !== undefined) {
        formData.append(key, inputData[key]);
      }
    });

    formData.append('policyNumber', generatedPolicyNumber);
    formData.append('applicantId', applicantId);
    formData.append('inusranceId', inusranceId);

    try {
      console.log('Submitting data:', Array.from(formData.entries()));
      await axios.post('http://localhost:8027/applyInsurance', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Send confirmation email
      const emailData = {
        from: 'noreply@yourdomain.com',
        to: sessionStorage.getItem('email'), // Ensure this value is set in session storage
        subject: 'Insurance Application Received',
        body: `Your insurance application has been successfully submitted. Your policy number is ${generatedPolicyNumber}. We are currently reviewing your application and will get back to you shortly. Thank you!`,
      };
      await sendEmail(emailData);

      Swal.fire({
        title: 'Application Submitted Successfully! Mail Sent',
        text: `Your policy number is ${generatedPolicyNumber}.`,
        icon: 'success',
      });

      navigate('/applicant-dash');
    } catch (err) {
      console.error('Submit Error:', err);
      Swal.fire({
        title: 'Error',
        text: 'An error occurred. Please try again.',
        icon: 'error',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <ApplicantNavbar className="applicant-navbar" />
      <div className="apply-insurance-form" style={{boxShadow:'2px 2px 6px black'}}>
        <h1 style={{marginTop:50}}>Insurance Form</h1>
        <form onSubmit={handleSubmit}>
          {errors.submit && <div className="alert alert-danger">{errors.submit}</div>}
          
          <div className="form-group">
            <label htmlFor="insuranceDate">Insurance Date</label>
            <input
              type="date"
              id="insuranceDate"
              name="insuranceDate"
              value={inputData.insuranceDate}
              onChange={handleChange}
              min={getCurrentDate()} // Set the minimum selectable date to the current date
            />
            {errors.insuranceDate && <div className="error-message">{errors.insuranceDate}</div>}
          </div>

          <div className="form-group">
            <label>Health Issue</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="healthIssue"
                  value="yes"
                  checked={inputData.healthIssue === 'yes'}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="healthIssue"
                  value="no"
                  checked={inputData.healthIssue === 'no'}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="reports">Medical Records (PDF or JPG only)</label>
            <input
              type="file"
              id="reports"
              name="reports"
              onChange={handleChange}
            />
            {errors.reports && <div className="error-message">{errors.reports}</div>}
          </div>

          <button type="submit" disabled={submitting} style={{backgroundColor:'blue'}}>
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyInsurance;


