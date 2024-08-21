// // // // // // // // // // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // // // // // // // // // import axios from 'axios';
// // // // // // // // // // // // // // // // // // // import '../styles/ApplicationTracking.css';
// // // // // // // // // // // // // // // // // // // import ApplicantNavbar from '../components/ApplicantNavbar';

// // // // // // // // // // // // // // // // // // // const ApplicationTracking = () => {
// // // // // // // // // // // // // // // // // // //   const [application, setApplication] = useState(null);
// // // // // // // // // // // // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // // // // // // // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // // // // // // // // // // // // // //   const [applyInsuranceId, setApplyInsuranceId] = useState(1); 

// // // // // // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // // // // // //     const fetchApplication = async () => {
// // // // // // // // // // // // // // // // // // //       try {
// // // // // // // // // // // // // // // // // // //         const response = await axios.get(`http://localhost:8027/applyInsurance/${applyInsuranceId}`);
// // // // // // // // // // // // // // // // // // //         setApplication(response.data);
// // // // // // // // // // // // // // // // // // //       } catch (err) {
// // // // // // // // // // // // // // // // // // //         setError('Error fetching application details');
// // // // // // // // // // // // // // // // // // //       } finally {
// // // // // // // // // // // // // // // // // // //         setLoading(false);
// // // // // // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // // // // // //     };

// // // // // // // // // // // // // // // // // // //     fetchApplication();
// // // // // // // // // // // // // // // // // // //   }, [applyInsuranceId]);

// // // // // // // // // // // // // // // // // // //   if (loading) return <div className="loading">Loading...</div>;
// // // // // // // // // // // // // // // // // // //   if (error) return <div className="error">{error}</div>;

// // // // // // // // // // // // // // // // // // //   const status = application?.status || 'unknown';

// // // // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // // // //     <div className="application-tracking">
// // // // // // // // // // // // // // // // // // //         {/* <ApplicantNavbar /> */}
// // // // // // // // // // // // // // // // // // //       {application ? (
// // // // // // // // // // // // // // // // // // //         <div className="application-details">
// // // // // // // // // // // // // // // // // // //           <h1>Application Tracking</h1>
// // // // // // // // // // // // // // // // // // //           <div className="detail">
// // // // // // // // // // // // // // // // // // //             <span className="label">Policy Number:</span>
// // // // // // // // // // // // // // // // // // //             <span className="value">{application.policyNumber || 'N/A'}</span>
// // // // // // // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // // // // // // //           <div className="detail">
// // // // // // // // // // // // // // // // // // //             <span className="label">Insurance Date:</span>
// // // // // // // // // // // // // // // // // // //             <span className="value">
// // // // // // // // // // // // // // // // // // //               {application.insuranceDate ? new Date(application.insuranceDate).toLocaleDateString() : 'N/A'}
// // // // // // // // // // // // // // // // // // //             </span>
// // // // // // // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // // // // // // //           <div className="detail">
// // // // // // // // // // // // // // // // // // //             <span className="label">Status:</span>
// // // // // // // // // // // // // // // // // // //             <span className={`status ${status}`}>
// // // // // // // // // // // // // // // // // // //               {status.charAt(0).toUpperCase() + status.slice(1)}
// // // // // // // // // // // // // // // // // // //             </span>
// // // // // // // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // // // // // //       ) : (
// // // // // // // // // // // // // // // // // // //         <div className="no-data">No application data available</div>
// // // // // // // // // // // // // // // // // // //       )}
// // // // // // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // // // // export default ApplicationTracking;

// // // // // // // // // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // // // // // // // // import axios from 'axios';
// // // // // // // // // // // // // // // // // // import '../styles/ApplicationTracking.css';
// // // // // // // // // // // // // // // // // // import ApplicantNavbar from '../components/ApplicantNavbar';

// // // // // // // // // // // // // // // // // // const ApplicationTracking = () => {
// // // // // // // // // // // // // // // // // //   const [application, setApplication] = useState(null);
// // // // // // // // // // // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // // // // // // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // // // // // // // // // // // // //   const [applyInsuranceId, setApplyInsuranceId] = useState(1); 

// // // // // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // // // // //     const fetchApplication = async () => {
// // // // // // // // // // // // // // // // // //       try {
// // // // // // // // // // // // // // // // // //         const response = await axios.get(`http://localhost:8027/applyInsurance/${applyInsuranceId}`);
// // // // // // // // // // // // // // // // // //         setApplication(response.data);
// // // // // // // // // // // // // // // // // //       } catch (err) {
// // // // // // // // // // // // // // // // // //         setError('Error fetching application details');
// // // // // // // // // // // // // // // // // //       } finally {
// // // // // // // // // // // // // // // // // //         setLoading(false);
// // // // // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // // // // //     };

// // // // // // // // // // // // // // // // // //     fetchApplication();
// // // // // // // // // // // // // // // // // //   }, [applyInsuranceId]);

// // // // // // // // // // // // // // // // // //   if (loading) return <div className="loading">Loading...</div>;
// // // // // // // // // // // // // // // // // //   if (error) return <div className="error">{error}</div>;

// // // // // // // // // // // // // // // // // //   const status = application?.status || 'unknown';

// // // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // // //     <div>
// // // // // // // // // // // // // // // // // //       <ApplicantNavbar className="applicant-navbar" />
// // // // // // // // // // // // // // // // // //       <div className="application-tracking">
// // // // // // // // // // // // // // // // // //         {application ? (
// // // // // // // // // // // // // // // // // //           <div className="application-details">
// // // // // // // // // // // // // // // // // //             <h1>Application Tracking</h1>
// // // // // // // // // // // // // // // // // //             <div className="detail">
// // // // // // // // // // // // // // // // // //               <span className="label">Policy Number:</span>
// // // // // // // // // // // // // // // // // //               <span className="value">{application.policyNumber || 'N/A'}</span>
// // // // // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // // // // //             <div className="detail">
// // // // // // // // // // // // // // // // // //               <span className="label">Insurance Date:</span>
// // // // // // // // // // // // // // // // // //               <span className="value">
// // // // // // // // // // // // // // // // // //                 {application.insuranceDate ? new Date(application.insuranceDate).toLocaleDateString() : 'N/A'}
// // // // // // // // // // // // // // // // // //               </span>
// // // // // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // // // // //             <div className="detail">
// // // // // // // // // // // // // // // // // //               <span className="label">Status:</span>
// // // // // // // // // // // // // // // // // //               <span className={`status ${status}`}>
// // // // // // // // // // // // // // // // // //                 {status.charAt(0).toUpperCase() + status.slice(1)}
// // // // // // // // // // // // // // // // // //               </span>
// // // // // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // // // // // //         ) : (
// // // // // // // // // // // // // // // // // //           <div className="no-data">No application data available</div>
// // // // // // // // // // // // // // // // // //         )}
// // // // // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // // // export default ApplicationTracking;

// // // // // // // // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // // // // // // // import axios from 'axios';
// // // // // // // // // // // // // // // // // import '../styles/ApplicationTracking.css';
// // // // // // // // // // // // // // // // // import ApplicantNavbar from '../components/ApplicantNavbar';

// // // // // // // // // // // // // // // // // const ApplicationTracking = () => {
// // // // // // // // // // // // // // // // //   const [application, setApplication] = useState(null);
// // // // // // // // // // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // // // // // // // // // //   const [loading, setLoading] = useState(true);
  
// // // // // // // // // // // // // // // // //   // Retrieve applicant ID from local storage
// // // // // // // // // // // // // // // // //   const applicantId = sessionStorage.getItem('applicantId');

// // // // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // // // //     const fetchApplication = async () => {
// // // // // // // // // // // // // // // // //       if (!applicantId) {
// // // // // // // // // // // // // // // // //         setError('No applicant ID found in local storage');
// // // // // // // // // // // // // // // // //         setLoading(false);
// // // // // // // // // // // // // // // // //         return;
// // // // // // // // // // // // // // // // //       }

// // // // // // // // // // // // // // // // //       try {
// // // // // // // // // // // // // // // // //         const response = await axios.get(`http://localhost:8027/applyInsurance/${applicantId}`);
// // // // // // // // // // // // // // // // //         setApplication(response.data);
// // // // // // // // // // // // // // // // //       } catch (err) {
// // // // // // // // // // // // // // // // //         setError('Error fetching application details');
// // // // // // // // // // // // // // // // //       } finally {
// // // // // // // // // // // // // // // // //         setLoading(false);
// // // // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // // // //     };

// // // // // // // // // // // // // // // // //     fetchApplication();
// // // // // // // // // // // // // // // // //   }, [applicantId]);

// // // // // // // // // // // // // // // // //   if (loading) return <div className="loading">Loading...</div>;
// // // // // // // // // // // // // // // // //   if (error) return <div className="error">{error}</div>;

// // // // // // // // // // // // // // // // //   const status = application?.status || 'unknown';

// // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // //     <div>
// // // // // // // // // // // // // // // // //       <ApplicantNavbar className="applicant-navbar" />
// // // // // // // // // // // // // // // // //       <div className="application-tracking">
// // // // // // // // // // // // // // // // //         {application ? (
// // // // // // // // // // // // // // // // //           <div className="application-details">
// // // // // // // // // // // // // // // // //             <h1>Application Tracking</h1>
// // // // // // // // // // // // // // // // //             <div className="detail">
// // // // // // // // // // // // // // // // //               <span className="label">Policy Number:</span>
// // // // // // // // // // // // // // // // //               <span className="value">{application.policyNumber || 'N/A'}</span>
// // // // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // // // //             <div className="detail">
// // // // // // // // // // // // // // // // //               <span className="label">Insurance Date:</span>
// // // // // // // // // // // // // // // // //               <span className="value">
// // // // // // // // // // // // // // // // //                 {application.insuranceDate ? new Date(application.insuranceDate).toLocaleDateString() : 'N/A'}
// // // // // // // // // // // // // // // // //               </span>
// // // // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // // // //             <div className="detail">
// // // // // // // // // // // // // // // // //               <span className="label">Status:</span>
// // // // // // // // // // // // // // // // //               <span className={`status ${status}`}>
// // // // // // // // // // // // // // // // //                 {status.charAt(0).toUpperCase() + status.slice(1)}
// // // // // // // // // // // // // // // // //               </span>
// // // // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // // // // //         ) : (
// // // // // // // // // // // // // // // // //           <div className="no-data">No application data available</div>
// // // // // // // // // // // // // // // // //         )}
// // // // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // // export default ApplicationTracking;


// // // // // // // // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // // // // // // // import axios from 'axios';
// // // // // // // // // // // // // // // // // import '../styles/ApplicationTracking.css';
// // // // // // // // // // // // // // // // // import ApplicantNavbar from '../components/ApplicantNavbar';

// // // // // // // // // // // // // // // // // const ApplicationTracking = () => {
// // // // // // // // // // // // // // // // //   const [application, setApplication] = useState(null);
// // // // // // // // // // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // // // // // // // // // //   const [loading, setLoading] = useState(true);
  
// // // // // // // // // // // // // // // // //   // Retrieve applicant ID from session storage
// // // // // // // // // // // // // // // // //   const applicantId = sessionStorage.getItem('applicantId');

// // // // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // // // //     const fetchApplication = async () => {
// // // // // // // // // // // // // // // // //       if (!applicantId) {
// // // // // // // // // // // // // // // // //         setError('No applicant ID found in session storage');
// // // // // // // // // // // // // // // // //         setLoading(false);
// // // // // // // // // // // // // // // // //         return;
// // // // // // // // // // // // // // // // //       }

// // // // // // // // // // // // // // // // //       try {
// // // // // // // // // // // // // // // // //         const response = await axios.get(`http://localhost:8027/applyInsurance/${applicantId}`);
// // // // // // // // // // // // // // // // //         setApplication(response.data);
// // // // // // // // // // // // // // // // //       } catch (err) {
// // // // // // // // // // // // // // // // //         setError('Error fetching application details');
// // // // // // // // // // // // // // // // //       } finally {
// // // // // // // // // // // // // // // // //         setLoading(false);
// // // // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // // // //     };

// // // // // // // // // // // // // // // // //     fetchApplication();
// // // // // // // // // // // // // // // // //   }, [applicantId]);

// // // // // // // // // // // // // // // // //   if (loading) return <div className="loading">Loading...</div>;
// // // // // // // // // // // // // // // // //   if (error) return <div className="error">{error}</div>;

// // // // // // // // // // // // // // // // //   const status = application?.status || 'unknown';

// // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // //     <div>
// // // // // // // // // // // // // // // // //       <ApplicantNavbar className="applicant-navbar" />
// // // // // // // // // // // // // // // // //       <div className="application-tracking">
// // // // // // // // // // // // // // // // //         {application ? (
// // // // // // // // // // // // // // // // //           <div className="application-details">
// // // // // // // // // // // // // // // // //             <h1>Application Tracking</h1>
// // // // // // // // // // // // // // // // //             <div className="detail">
// // // // // // // // // // // // // // // // //               <span className="label">Policy Number:</span>
// // // // // // // // // // // // // // // // //               <span className="value">{application.policyNumber || 'N/A'}</span>
// // // // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // // // //             <div className="detail">
// // // // // // // // // // // // // // // // //               <span className="label">Insurance Date:</span>
// // // // // // // // // // // // // // // // //               <span className="value">
// // // // // // // // // // // // // // // // //                 {application.insuranceDate ? new Date(application.insuranceDate).toLocaleDateString() : 'N/A'}
// // // // // // // // // // // // // // // // //               </span>
// // // // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // // // //             <div className="detail">
// // // // // // // // // // // // // // // // //               <span className="label">Status:</span>
// // // // // // // // // // // // // // // // //               <span className={`status ${status}`}>
// // // // // // // // // // // // // // // // //                 {status.charAt(0).toUpperCase() + status.slice(1)}
// // // // // // // // // // // // // // // // //               </span>
// // // // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // // // // //         ) : (
// // // // // // // // // // // // // // // // //           <div className="no-data">No application data available</div>
// // // // // // // // // // // // // // // // //         )}
// // // // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // // export default ApplicationTracking;

// // // // // // // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // // // // // // import axios from 'axios';
// // // // // // // // // // // // // // // // import '../styles/ApplicationTracking.css';
// // // // // // // // // // // // // // // // import ApplicantNavbar from '../components/ApplicantNavbar';

// // // // // // // // // // // // // // // // const ApplicationTracking = () => {
// // // // // // // // // // // // // // // //   const [application, setApplication] = useState(null);
// // // // // // // // // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // // // // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // // // // // // // // // // //   // Retrieve applicant ID from session storage
// // // // // // // // // // // // // // // //   const applicantId = sessionStorage.getItem('applicantId');
// // // // // // // // // // // // // // // //   console.log('Retrieved applicant ID:', applicantId); // Debugging line

// // // // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // // // //     const fetchApplication = async () => {
// // // // // // // // // // // // // // // // //       if (!applicantId) {
// // // // // // // // // // // // // // // // //         setError('No applicant ID found in session storage');
// // // // // // // // // // // // // // // // //         setLoading(false);
// // // // // // // // // // // // // // // // //         return;
// // // // // // // // // // // // // // // // //       }

// // // // // // // // // // // // // // // // //       try {
// // // // // // // // // // // // // // // // //         const response = await axios.get(`http://localhost:8027/applyInsurance/${applicantId}`);
// // // // // // // // // // // // // // // // //         setApplication(response.data);
// // // // // // // // // // // // // // // // //       } catch (err) {
// // // // // // // // // // // // // // // // //         setError('Error fetching application details');
// // // // // // // // // // // // // // // // //       } finally {
// // // // // // // // // // // // // // // // //         setLoading(false);
// // // // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // // // //     };

// // // // // // // // // // // // // // // // //     fetchApplication();
// // // // // // // // // // // // // // // // //   }, [applicantId]);
// // // // // // // // // // // // // // // // useEffect(() => {
// // // // // // // // // // // // // // // //     console.log('useEffect triggered');
// // // // // // // // // // // // // // // //     const fetchApplication = async () => {
// // // // // // // // // // // // // // // //       const applicantId = sessionStorage.getItem('applicantId');
// // // // // // // // // // // // // // // //       console.log('applicantId inside useEffect:', applicantId);
  
// // // // // // // // // // // // // // // //       if (!applicantId) {
// // // // // // // // // // // // // // // //         setError('No applicant ID found in session storage');
// // // // // // // // // // // // // // // //         setLoading(false);
// // // // // // // // // // // // // // // //         return;
// // // // // // // // // // // // // // // //       }
  
// // // // // // // // // // // // // // // //       try {
// // // // // // // // // // // // // // // //         const response = await axios.get(`http://localhost:8027/applyInsurance/${applicantId}`);
// // // // // // // // // // // // // // // //         console.log('API response:', response.data);
// // // // // // // // // // // // // // // //         setApplication(response.data);
// // // // // // // // // // // // // // // //       } catch (err) {
// // // // // // // // // // // // // // // //         console.error('API request error:', err);
// // // // // // // // // // // // // // // //         setError('Error fetching application details');
// // // // // // // // // // // // // // // //       } finally {
// // // // // // // // // // // // // // // //         setLoading(false);
// // // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // // //     };
  
// // // // // // // // // // // // // // // //     fetchApplication();
// // // // // // // // // // // // // // // //   }, []);
  

// // // // // // // // // // // // // // // //   if (loading) return <div className="loading">Loading...</div>;
// // // // // // // // // // // // // // // //   if (error) return <div className="error">{error}</div>;

// // // // // // // // // // // // // // // //   const status = application?.status || 'unknown';

// // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // //     <div>
// // // // // // // // // // // // // // // //       <ApplicantNavbar className="applicant-navbar" />
// // // // // // // // // // // // // // // //       <div className="application-tracking">
// // // // // // // // // // // // // // // //         {application ? (
// // // // // // // // // // // // // // // //           <div className="application-details">
// // // // // // // // // // // // // // // //             <h1>Application Tracking</h1>
// // // // // // // // // // // // // // // //             <div className="detail">
// // // // // // // // // // // // // // // //               <span className="label">Policy Number:</span>
// // // // // // // // // // // // // // // //               <span className="value">{application.policyNumber || 'N/A'}</span>
// // // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // // //             <div className="detail">
// // // // // // // // // // // // // // // //               <span className="label">Insurance Date:</span>
// // // // // // // // // // // // // // // //               <span className="value">
// // // // // // // // // // // // // // // //                 {application.insuranceDate ? new Date(application.insuranceDate).toLocaleDateString() : 'N/A'}
// // // // // // // // // // // // // // // //               </span>
// // // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // // //             <div className="detail">
// // // // // // // // // // // // // // // //               <span className="label">Status:</span>
// // // // // // // // // // // // // // // //               <span className={`status ${status}`}>
// // // // // // // // // // // // // // // //                 {status.charAt(0).toUpperCase() + status.slice(1)}
// // // // // // // // // // // // // // // //               </span>
// // // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // // // //         ) : (
// // // // // // // // // // // // // // // //           <div className="no-data">No application data available</div>
// // // // // // // // // // // // // // // //         )}
// // // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // export default ApplicationTracking;
// // // // // // // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // // // // // // import axios from 'axios';
// // // // // // // // // // // // // // // import '../styles/ApplicationTracking.css';
// // // // // // // // // // // // // // // import ApplicantNavbar from '../components/ApplicantNavbar';

// // // // // // // // // // // // // // // const ApplicationTracking = () => {
// // // // // // // // // // // // // // //   const [application, setApplication] = useState(null);
// // // // // // // // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // // // // // // // //   const [loading, setLoading] = useState(false);

// // // // // // // // // // // // // // //   const fetchApplication = async () => {
// // // // // // // // // // // // // // //     setLoading(true);
// // // // // // // // // // // // // // //     const applicantId = sessionStorage.getItem('applicantId');
// // // // // // // // // // // // // // //     console.log('applicantId:', applicantId);

// // // // // // // // // // // // // // //     if (!applicantId) {
// // // // // // // // // // // // // // //       setError('No applicant ID found in session storage');
// // // // // // // // // // // // // // //       setLoading(false);
// // // // // // // // // // // // // // //       return;
// // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // //     try {
// // // // // // // // // // // // // // //       const response = await axios.get(`http://localhost:8027/applyInsurance/${applicantId}`);
// // // // // // // // // // // // // // //       console.log('API response:', response.data);
// // // // // // // // // // // // // // //       setApplication(response.data);
// // // // // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // // // // //       console.error('API request error:', err);
// // // // // // // // // // // // // // //       setError('Error fetching application details');
// // // // // // // // // // // // // // //     } finally {
// // // // // // // // // // // // // // //       setLoading(false);
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // //     <div>
// // // // // // // // // // // // // // //       <ApplicantNavbar className="applicant-navbar" />
// // // // // // // // // // // // // // //       <button onClick={fetchApplication}>Fetch Application Data</button>
// // // // // // // // // // // // // // //       {loading && <div className="loading">Loading...</div>}
// // // // // // // // // // // // // // //       {error && <div className="error">{error}</div>}
// // // // // // // // // // // // // // //       {application && (
// // // // // // // // // // // // // // //         <div className="application-tracking">
// // // // // // // // // // // // // // //           <div className="application-details">
// // // // // // // // // // // // // // //             <h1>Application Tracking</h1>
// // // // // // // // // // // // // // //             <div className="detail">
// // // // // // // // // // // // // // //               <span className="label">Policy Number:</span>
// // // // // // // // // // // // // // //               <span className="value">{application.policyNumber || 'N/A'}</span>
// // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // //             <div className="detail">
// // // // // // // // // // // // // // //               <span className="label">Insurance Date:</span>
// // // // // // // // // // // // // // //               <span className="value">
// // // // // // // // // // // // // // //                 {application.insuranceDate ? new Date(application.insuranceDate).toLocaleDateString() : 'N/A'}
// // // // // // // // // // // // // // //               </span>
// // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // //             <div className="detail">
// // // // // // // // // // // // // // //               <span className="label">Status:</span>
// // // // // // // // // // // // // // //               <span className={`status ${application.status || 'unknown'}`}>
// // // // // // // // // // // // // // //                 {application.status ? application.status.charAt(0).toUpperCase() + application.status.slice(1) : 'Unknown'}
// // // // // // // // // // // // // // //               </span>
// // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // //       )}
// // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // export default ApplicationTracking;

// // // // // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // // // // import axios from 'axios';
// // // // // // // // // // // // // // import '../styles/ApplicationTracking.css';
// // // // // // // // // // // // // // import ApplicantNavbar from '../components/ApplicantNavbar';

// // // // // // // // // // // // // // const ApplicationTracking = () => {
// // // // // // // // // // // // // //   const [application, setApplication] = useState(null);
// // // // // // // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // //     const fetchApplication = async () => {
// // // // // // // // // // // // // //       const applicantId = sessionStorage.getItem('applicantId');
// // // // // // // // // // // // // //       console.log('applicantId:', applicantId);

// // // // // // // // // // // // // //       if (!applicantId) {
// // // // // // // // // // // // // //         setError('No applicant ID found in session storage');
// // // // // // // // // // // // // //         setLoading(false);
// // // // // // // // // // // // // //         return;
// // // // // // // // // // // // // //       }

// // // // // // // // // // // // // //       try {
// // // // // // // // // // // // // //         const response = await axios.get(`http://localhost:8027/applyInsurance/${applicantId}`);
// // // // // // // // // // // // // //         console.log('API response:', response.data);
// // // // // // // // // // // // // //         setApplication(response.data);
// // // // // // // // // // // // // //       } catch (err) {
// // // // // // // // // // // // // //         console.error('API request error:', err);
// // // // // // // // // // // // // //         setError('Error fetching application details');
// // // // // // // // // // // // // //       } finally {
// // // // // // // // // // // // // //         setLoading(false);
// // // // // // // // // // // // // //       }
// // // // // // // // // // // // // //     };

// // // // // // // // // // // // // //     fetchApplication();
// // // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <div>
// // // // // // // // // // // // // //       <ApplicantNavbar className="applicant-navbar" />
// // // // // // // // // // // // // //       {loading && <div className="loading">Loading...</div>}
// // // // // // // // // // // // // //       {error && <div className="error">{error}</div>}
// // // // // // // // // // // // // //       {application && (
// // // // // // // // // // // // // //         <div className="application-tracking">
// // // // // // // // // // // // // //           <div className="application-details">
// // // // // // // // // // // // // //             <h1>Application Tracking</h1>
// // // // // // // // // // // // // //             <div className="detail">
// // // // // // // // // // // // // //               <span className="label">Policy Number:</span>
// // // // // // // // // // // // // //               <span className="value">{application.policyNumber || 'N/A'}</span>
// // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // //             <div className="detail">
// // // // // // // // // // // // // //               <span className="label">Insurance Date:</span>
// // // // // // // // // // // // // //               <span className="value">
// // // // // // // // // // // // // //                 {application.insuranceDate ? new Date(application.insuranceDate).toLocaleDateString() : 'N/A'}
// // // // // // // // // // // // // //               </span>
// // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // //             <div className="detail">
// // // // // // // // // // // // // //               <span className="label">Status:</span>
// // // // // // // // // // // // // //               <span className={`status ${application.status || 'unknown'}`}>
// // // // // // // // // // // // // //                 {application.status ? application.status.charAt(0).toUpperCase() + application.status.slice(1) : 'Unknown'}
// // // // // // // // // // // // // //               </span>
// // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       )}
// // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // export default ApplicationTracking;

// // // // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // // // import axios from 'axios';
// // // // // // // // // // // // // import '../styles/ApplicationTracking.css';
// // // // // // // // // // // // // import ApplicantNavbar from '../components/ApplicantNavbar';

// // // // // // // // // // // // // const ApplicationTracking = () => {
// // // // // // // // // // // // //   const [application, setApplication] = useState(null);
// // // // // // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // // // // // // // //   // Retrieve applicant ID from session storage
// // // // // // // // // // // // //   const applicantId = sessionStorage.getItem('applicantId');

// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     const fetchApplication = async () => {
// // // // // // // // // // // // //       if (!applicantId) {
// // // // // // // // // // // // //         setError('No applicant ID found in session storage');
// // // // // // // // // // // // //         setLoading(false);
// // // // // // // // // // // // //         return;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       try {
// // // // // // // // // // // // //         const response = await axios.get("http://localhost:8027/applyInsurance/all");
// // // // // // // // // // // // //         const allApplications = response.data;

// // // // // // // // // // // // //         // Find the specific application by applicantId
// // // // // // // // // // // // //         const applicantApplication = allApplications.find(app => app.id === applicantId);
        
// // // // // // // // // // // // //         if (applicantApplication) {
// // // // // // // // // // // // //           setApplication(applicantApplication);
// // // // // // // // // // // // //         } else {
// // // // // // // // // // // // //           setError('Application not found');
// // // // // // // // // // // // //         }
// // // // // // // // // // // // //       } catch (err) {
// // // // // // // // // // // // //         setError('Error fetching application details');
// // // // // // // // // // // // //       } finally {
// // // // // // // // // // // // //         setLoading(false);
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //     };

// // // // // // // // // // // // //     fetchApplication();
// // // // // // // // // // // // //   }, [applicantId]);

// // // // // // // // // // // // //   if (loading) return <div className="loading">Loading...</div>;
// // // // // // // // // // // // //   if (error) return <div className="error">{error}</div>;

// // // // // // // // // // // // //   const status = application?.status || 'unknown';

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div>
// // // // // // // // // // // // //       <ApplicantNavbar className="applicant-navbar" />
// // // // // // // // // // // // //       <div className="application-tracking">
// // // // // // // // // // // // //         {application ? (
// // // // // // // // // // // // //           <div className="application-details">
// // // // // // // // // // // // //             <h1>Application Tracking</h1>
// // // // // // // // // // // // //             <div className="detail">
// // // // // // // // // // // // //               <span className="label">Policy Number:</span>
// // // // // // // // // // // // //               <span className="value">{application.policyNumber || 'N/A'}</span>
// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //             <div className="detail">
// // // // // // // // // // // // //               <span className="label">Insurance Date:</span>
// // // // // // // // // // // // //               <span className="value">
// // // // // // // // // // // // //                 {application.insuranceDate ? new Date(application.insuranceDate).toLocaleDateString() : 'N/A'}
// // // // // // // // // // // // //               </span>
// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //             <div className="detail">
// // // // // // // // // // // // //               <span className="label">Status:</span>
// // // // // // // // // // // // //               <span className={`status ${status}`}>
// // // // // // // // // // // // //                 {status.charAt(0).toUpperCase() + status.slice(1)}
// // // // // // // // // // // // //               </span>
// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //         ) : (
// // // // // // // // // // // // //           <div className="no-data">No application data available</div>
// // // // // // // // // // // // //         )}
// // // // // // // // // // // // //       </div>
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default ApplicationTracking;

// // // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // // import axios from 'axios';
// // // // // // // // // // // // import '../styles/ApplicationTracking.css';
// // // // // // // // // // // // import ApplicantNavbar from '../components/ApplicantNavbar';

// // // // // // // // // // // // const ApplicationTracking = () => {
// // // // // // // // // // // //   const [application, setApplication] = useState(null);
// // // // // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // // // // // // //   // Retrieve applicant ID from session storage
// // // // // // // // // // // //   const applicantId = sessionStorage.getItem('applicantId');
// // // // // // // // // // // //   if (!applicantId) {
// // // // // // // // // // // //     throw new Error('Applicant ID not found in local storage');
// // // // // // // // // // // //   }

// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     const fetchApplication = async () => {
// // // // // // // // // // // // //       if (!applicantId) {
// // // // // // // // // // // // //         setError('No applicant ID found in session storage');
// // // // // // // // // // // // //         setLoading(false);
// // // // // // // // // // // // //         return;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       try {
// // // // // // // // // // // // //         const response = await axios.get("http://localhost:8027/applyInsurance/all");
// // // // // // // // // // // // //         const allApplications = response.data;

// // // // // // // // // // // // //         console.log('Fetched Applications:', allApplications); // Debugging log
// // // // // // // // // // // // //         console.log('Applicant ID:', applicantId); // Debugging log

// // // // // // // // // // // // //         // Find the specific application by applicantId
// // // // // // // // // // // // //         const applicantApplication = allApplications.find(app => app.id === applicantId);

// // // // // // // // // // // // //         if (applicantApplication) {
// // // // // // // // // // // // //           setApplication(applicantApplication);
// // // // // // // // // // // // //         } else {
// // // // // // // // // // // // //           setError('Application not found');
// // // // // // // // // // // // //         }
// // // // // // // // // // // // //       } catch (err) {
// // // // // // // // // // // // //         console.error('Error fetching application details:', err); // Debugging log
// // // // // // // // // // // // //         setError('Error fetching application details');
// // // // // // // // // // // // //       } finally {
// // // // // // // // // // // // //         setLoading(false);
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //     };

// // // // // // // // // // // // //     fetchApplication();
// // // // // // // // // // // // //   }, [applicantId]);

// // // // // // // // // // // //   if (loading) return <div className="loading">Loading...</div>;
// // // // // // // // // // // //   if (error) return <div className="error">{error}</div>;

// // // // // // // // // // // //   const status = application?.status || 'unknown';

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div>
// // // // // // // // // // // //       <ApplicantNavbar className="applicant-navbar" />
// // // // // // // // // // // //       <div className="application-tracking">
// // // // // // // // // // // //         {application ? (
// // // // // // // // // // // //           <div className="application-details">
// // // // // // // // // // // //             <h1>Application Tracking</h1>
// // // // // // // // // // // //             <div className="detail">
// // // // // // // // // // // //               <span className="label">Policy Number:</span>
// // // // // // // // // // // //               <span className="value">{application.policyNumber || 'N/A'}</span>
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //             <div className="detail">
// // // // // // // // // // // //               <span className="label">Insurance Date:</span>
// // // // // // // // // // // //               <span className="value">
// // // // // // // // // // // //                 {application.insuranceDate ? new Date(application.insuranceDate).toLocaleDateString() : 'N/A'}
// // // // // // // // // // // //               </span>
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //             <div className="detail">
// // // // // // // // // // // //               <span className="label">Status:</span>
// // // // // // // // // // // //               <span className={`status ${status}`}>
// // // // // // // // // // // //                 {status.charAt(0).toUpperCase() + status.slice(1)}
// // // // // // // // // // // //               </span>
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         ) : (
// // // // // // // // // // // //           <div className="no-data">No application data available</div>
// // // // // // // // // // // //         )}
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default ApplicationTracking;

// // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // import axios from 'axios';
// // // // // // // // // // // import '../styles/ApplicationTracking.css';
// // // // // // // // // // // import ApplicantNavbar from '../components/ApplicantNavbar';

// // // // // // // // // // // const ApplicationTracking = () => {
// // // // // // // // // // //   const [application, setApplication] = useState(null);
// // // // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // // // // // //   // Retrieve applicant ID from session storage
// // // // // // // // // // //   const applicantId = sessionStorage.getItem('applicantId');

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     const fetchApplications = async () => {
// // // // // // // // // // //       if (!applicantId) {
// // // // // // // // // // //         setError('No applicant ID found in session storage');
// // // // // // // // // // //         setLoading(false);
// // // // // // // // // // //         return;
// // // // // // // // // // //       }

// // // // // // // // // // //       try {
// // // // // // // // // // //         // Fetch all applications from the backend
// // // // // // // // // // //         const response = await axios.get("http://localhost:8027/applyInsurance/all");
// // // // // // // // // // //         const allApplications = response.data;

// // // // // // // // // // //         // Find the specific application by applicantId
// // // // // // // // // // //         const applicantApplication = allApplications.find(app => app.applicantId === applicantId);

// // // // // // // // // // //         if (applicantApplication) {
// // // // // // // // // // //           setApplication(applicantApplication);
// // // // // // // // // // //         } else {
// // // // // // // // // // //           setError('Application not found');
// // // // // // // // // // //         }
// // // // // // // // // // //       } catch (err) {
// // // // // // // // // // //         console.error('Error fetching application details:', err);
// // // // // // // // // // //         setError('Error fetching application details');
// // // // // // // // // // //       } finally {
// // // // // // // // // // //         setLoading(false);
// // // // // // // // // // //       }
// // // // // // // // // // //     };

// // // // // // // // // // //     fetchApplications();
// // // // // // // // // // //   }, [applicantId]);

// // // // // // // // // // //   if (loading) return <div className="loading">Loading...</div>;
// // // // // // // // // // //   if (error) return <div className="error">{error}</div>;

// // // // // // // // // // //   const status = application?.status || 'unknown';

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div>
// // // // // // // // // // //       <ApplicantNavbar className="applicant-navbar" />
// // // // // // // // // // //       <div className="application-tracking">
// // // // // // // // // // //         {application ? (
// // // // // // // // // // //           <div className="application-details">
// // // // // // // // // // //             <h1>Application Tracking</h1>
// // // // // // // // // // //             <div className="detail">
// // // // // // // // // // //               <span className="label">Policy Number:</span>
// // // // // // // // // // //               <span className="value">{application.policyNumber || 'N/A'}</span>
// // // // // // // // // // //             </div>
// // // // // // // // // // //             <div className="detail">
// // // // // // // // // // //               <span className="label">Insurance Date:</span>
// // // // // // // // // // //               <span className="value">
// // // // // // // // // // //                 {application.insuranceDate ? new Date(application.insuranceDate).toLocaleDateString() : 'N/A'}
// // // // // // // // // // //               </span>
// // // // // // // // // // //             </div>
// // // // // // // // // // //             <div className="detail">
// // // // // // // // // // //               <span className="label">Status:</span>
// // // // // // // // // // //               <span className={`status ${status}`}>
// // // // // // // // // // //                 {status.charAt(0).toUpperCase() + status.slice(1)}
// // // // // // // // // // //               </span>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         ) : (
// // // // // // // // // // //           <div className="no-data">No application data available</div>
// // // // // // // // // // //         )}
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default ApplicationTracking;

// // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // import axios from 'axios';
// // // // // // // // // // import '../styles/ApplicationTracking.css';
// // // // // // // // // // import ApplicantNavbar from '../components/ApplicantNavbar';

// // // // // // // // // // const ApplicationTracking = () => {
// // // // // // // // // //   const [application, setApplication] = useState(null);
// // // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // // // // //   // Retrieve applicant ID from session storage
// // // // // // // // // //   const applicantId = sessionStorage.getItem('applicantId');

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const fetchApplications = async () => {
// // // // // // // // // //       if (!applicantId) {
// // // // // // // // // //         setError('No applicant ID found in session storage');
// // // // // // // // // //         setLoading(false);
// // // // // // // // // //         return;
// // // // // // // // // //       }

// // // // // // // // // //       try {
// // // // // // // // // //         // Fetch all applications from the backend
// // // // // // // // // //         const response = await axios.get("http://localhost:8027/applyInsurance/all");

// // // // // // // // // //         // Verify if response data is an array and contains objects with applicantId
// // // // // // // // // //         if (Array.isArray(response.data)) {
// // // // // // // // // //           const allApplications = response.data;

// // // // // // // // // //           // Find the specific application by applicantId
// // // // // // // // // //           const applicantApplication = allApplications.find(app => app.applicantId === applicantId);

// // // // // // // // // //           if (applicantApplication) {
// // // // // // // // // //             setApplication(applicantApplication);
// // // // // // // // // //           } else {
// // // // // // // // // //             setError('Application not found');
// // // // // // // // // //           }
// // // // // // // // // //         } else {
// // // // // // // // // //           setError('Unexpected response format');
// // // // // // // // // //         }
// // // // // // // // // //       } catch (err) {
// // // // // // // // // //         console.error('Error fetching application details:', err);
// // // // // // // // // //         setError('Error fetching application details');
// // // // // // // // // //       } finally {
// // // // // // // // // //         setLoading(false);
// // // // // // // // // //       }
// // // // // // // // // //     };

// // // // // // // // // //     fetchApplications();
// // // // // // // // // //   }, [applicantId]);

// // // // // // // // // //   if (loading) return <div className="loading">Loading...</div>;
// // // // // // // // // //   if (error) return <div className="error">{error}</div>;

// // // // // // // // // //   const status = application?.status || 'unknown';

// // // // // // // // // //   return (
// // // // // // // // // //     <div>
// // // // // // // // // //       <ApplicantNavbar className="applicant-navbar" />
// // // // // // // // // //       <div className="application-tracking">
// // // // // // // // // //         {application ? (
// // // // // // // // // //           <div className="application-details">
// // // // // // // // // //             <h1>Application Tracking</h1>
// // // // // // // // // //             <div className="detail">
// // // // // // // // // //               <span className="label">Policy Number:</span>
// // // // // // // // // //               <span className="value">{application.policyNumber || 'N/A'}</span>
// // // // // // // // // //             </div>
// // // // // // // // // //             <div className="detail">
// // // // // // // // // //               <span className="label">Insurance Date:</span>
// // // // // // // // // //               <span className="value">
// // // // // // // // // //                 {application.insuranceDate ? new Date(application.insuranceDate).toLocaleDateString() : 'N/A'}
// // // // // // // // // //               </span>
// // // // // // // // // //             </div>
// // // // // // // // // //             <div className="detail">
// // // // // // // // // //               <span className="label">Status:</span>
// // // // // // // // // //               <span className={`status ${status}`}>
// // // // // // // // // //                 {status.charAt(0).toUpperCase() + status.slice(1)}
// // // // // // // // // //               </span>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         ) : (
// // // // // // // // // //           <div className="no-data">No application data available</div>
// // // // // // // // // //         )}
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default ApplicationTracking;


// // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // import axios from 'axios';
// // // // // // // // // import '../styles/ApplicationTracking.css';
// // // // // // // // // import ApplicantNavbar from '../components/ApplicantNavbar';

// // // // // // // // // const ApplicationTracking = () => {
// // // // // // // // //   const [application, setApplication] = useState(null);
// // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // // // //   // Retrieve applicant ID from session storage
// // // // // // // // //   const applicantId = sessionStorage.getItem('applicantId');

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const fetchApplications = async () => {
// // // // // // // // //       if (!applicantId) {
// // // // // // // // //         setError('No applicant ID found in session storage');
// // // // // // // // //         setLoading(false);
// // // // // // // // //         return;
// // // // // // // // //       }

// // // // // // // // //       try {
// // // // // // // // //         // Fetch all applications from the backend
// // // // // // // // //         const response = await axios.get("http://localhost:8027/applyInsurance/all");
// // // // // // // // //         console.log('API Response:', response.data); // Debugging log
// // // // // // // // //         const allApplications = response.data;

// // // // // // // // //         // Verify if data is an array
// // // // // // // // //         if (Array.isArray(allApplications)) {
// // // // // // // // //           // Adjust field names based on actual data structure
// // // // // // // // //           const applicantApplication = allApplications.find(app => app.applicantId === applicantId);

// // // // // // // // //           if (applicantApplication) {
// // // // // // // // //             setApplication(applicantApplication);
// // // // // // // // //           } else {
// // // // // // // // //             setError('Application not found');
// // // // // // // // //           }
// // // // // // // // //         } else {
// // // // // // // // //           setError('Unexpected response format');
// // // // // // // // //         }
// // // // // // // // //       } catch (err) {
// // // // // // // // //         console.error('Error fetching application details:', err);
// // // // // // // // //         setError('Error fetching application details');
// // // // // // // // //       } finally {
// // // // // // // // //         setLoading(false);
// // // // // // // // //       }
// // // // // // // // //     };

// // // // // // // // //     fetchApplications();
// // // // // // // // //   }, [applicantId]);

// // // // // // // // //   if (loading) return <div className="loading">Loading...</div>;
// // // // // // // // //   if (error) return <div className="error">{error}</div>;

// // // // // // // // //   const status = application?.status || 'unknown';

// // // // // // // // //   return (
// // // // // // // // //     <div>
// // // // // // // // //       <ApplicantNavbar className="applicant-navbar" />
// // // // // // // // //       <div className="application-tracking">
// // // // // // // // //         {application ? (
// // // // // // // // //           <div className="application-details">
// // // // // // // // //             <h1>Application Tracking</h1>
// // // // // // // // //             <div className="detail">
// // // // // // // // //               <span className="label">Policy Number:</span>
// // // // // // // // //               <span className="value">{application.policyNumber || 'N/A'}</span>
// // // // // // // // //             </div>
// // // // // // // // //             <div className="detail">
// // // // // // // // //               <span className="label">Insurance Date:</span>
// // // // // // // // //               <span className="value">
// // // // // // // // //                 {application.insuranceDate ? new Date(application.insuranceDate).toLocaleDateString() : 'N/A'}
// // // // // // // // //               </span>
// // // // // // // // //             </div>
// // // // // // // // //             <div className="detail">
// // // // // // // // //               <span className="label">Status:</span>
// // // // // // // // //               <span className={`status ${status}`}>
// // // // // // // // //                 {status.charAt(0).toUpperCase() + status.slice(1)}
// // // // // // // // //               </span>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         ) : (
// // // // // // // // //           <div className="no-data">No application data available</div>
// // // // // // // // //         )}
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default ApplicationTracking;


// // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // import axios from 'axios';
// // // // // // // // import '../styles/ApplicationTracking.css';
// // // // // // // // import ApplicantNavbar from '../components/ApplicantNavbar';

// // // // // // // // const ApplicationTracking = () => {
// // // // // // // //   const [application, setApplication] = useState(null);
// // // // // // // //   const [error, setError] = useState(null);
// // // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // // //   // Retrieve applicant ID from session storage
// // // // // // // //   const applicantId = sessionStorage.getItem('applicantId');

// // // // // // // //   useEffect(() => {
// // // // // // // //     const fetchApplications = async () => {
// // // // // // // //       if (!applicantId) {
// // // // // // // //         setError('No applicant ID found in session storage');
// // // // // // // //         setLoading(false);
// // // // // // // //         return;
// // // // // // // //       }

// // // // // // // //       try {
// // // // // // // //         // Fetch all applications from the backend
// // // // // // // //         const response = await axios.get("http://localhost:8027/applyInsurance/all");
// // // // // // // //         console.log('API Response:', response.data); // Debugging log

// // // // // // // //         // Ensure the response data is an array
// // // // // // // //         if (Array.isArray(response.data)) {
// // // // // // // //           const allApplications = response.data;
// // // // // // // //           // Adjust field names based on actual data structure
// // // // // // // //           const applicantApplication = allApplications.find(app => app.applicantId === applicantId);

// // // // // // // //           if (applicantApplication) {
// // // // // // // //             setApplication(applicantApplication);
// // // // // // // //           } else {
// // // // // // // //             setError('Application not found');
// // // // // // // //           }
// // // // // // // //         } else {
// // // // // // // //           setError('Unexpected response format');
// // // // // // // //         }
// // // // // // // //       } catch (err) {
// // // // // // // //         console.error('Error fetching application details:', err);
// // // // // // // //         setError('Error fetching application details');
// // // // // // // //       } finally {
// // // // // // // //         setLoading(false);
// // // // // // // //       }
// // // // // // // //     };

// // // // // // // //     fetchApplications();
// // // // // // // //   }, [applicantId]);

// // // // // // // //   if (loading) return <div className="loading">Loading...</div>;
// // // // // // // //   if (error) return <div className="error">{error}</div>;

// // // // // // // //   const status = application?.status || 'unknown';

// // // // // // // //   return (
// // // // // // // //     <div>
// // // // // // // //       <ApplicantNavbar className="applicant-navbar" />
// // // // // // // //       <div className="application-tracking">
// // // // // // // //         {application ? (
// // // // // // // //           <div className="application-details">
// // // // // // // //             <h1>Application Tracking</h1>
// // // // // // // //             <div className="detail">
// // // // // // // //               <span className="label">Policy Number:</span>
// // // // // // // //               <span className="value">{application.policyNumber || 'N/A'}</span>
// // // // // // // //             </div>
// // // // // // // //             <div className="detail">
// // // // // // // //               <span className="label">Insurance Date:</span>
// // // // // // // //               <span className="value">
// // // // // // // //                 {application.insuranceDate ? new Date(application.insuranceDate).toLocaleDateString() : 'N/A'}
// // // // // // // //               </span>
// // // // // // // //             </div>
// // // // // // // //             <div className="detail">
// // // // // // // //               <span className="label">Status:</span>
// // // // // // // //               <span className={`status ${status}`}>
// // // // // // // //                 {status.charAt(0).toUpperCase() + status.slice(1)}
// // // // // // // //               </span>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         ) : (
// // // // // // // //           <div className="no-data">No application data available</div>
// // // // // // // //         )}
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default ApplicationTracking;


// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import axios from 'axios';
// // // // // // import '../styles/ApplicationTracking.css';
// // // // // // import ApplicantNavbar from '../components/ApplicantNavbar';

// // // // // // const ApplicationTracking = () => {
// // // // // //   const [application, setApplication] = useState(null);
// // // // // //   const [error, setError] = useState(null);
// // // // // //   const [loading, setLoading] = useState(true);

// // // // // //   // Retrieve applicant ID from session storage
// // // // // //   const applicantId = sessionStorage.getItem('applicantId');

// // // // // //   useEffect(() => {
// // // // // //     const fetchApplication = async () => {
// // // // // //       if (!applicantId) {
// // // // // //         setError('No applicant ID found in session storage');
// // // // // //         setLoading(false);
// // // // // //         return;
// // // // // //       }

// // // // // //       try {
// // // // // //         // Fetch application details for the specific applicant
// // // // // //         const response = await axios.get(`http://localhost:8027/applyInsurance/getInsuranceDetails/${applicantId}`);
// // // // // //         console.log('API Response:', response.data); // Debugging log

// // // // // //         // Verify the response data
// // // // // //         if (response.data) {
// // // // // //           setApplication(response.data);
// // // // // //         } else {
// // // // // //           setError('No application data found for this applicant ID');
// // // // // //         }
// // // // // //       } catch (err) {
// // // // // //         console.error('Error fetching application details:', err);
// // // // // //         setError('Error fetching application details');
// // // // // //       } finally {
// // // // // //         setLoading(false);
// // // // // //       }
// // // // // //     };

// // // // // //     fetchApplication();
// // // // // //   }, [applicantId]);

// // // // // //   if (loading) return <div className="loading">Loading...</div>;
// // // // // //   if (error) return <div className="error">{error}</div>;

// // // // // //   const status = application?.status || 'unknown';

// // // // // //   return (
// // // // // //     <div>
// // // // // //       <ApplicantNavbar className="applicant-navbar" />
// // // // // //       <div className="application-tracking">
// // // // // //         {application ? (
// // // // // //           <div className="application-details">
// // // // // //             <h1>Application Tracking</h1>
// // // // // //             <div className="detail">
// // // // // //               <span className="label">Policy Number:</span>
// // // // // //               <span className="value">{application.policyNumber || 'N/A'}</span>
// // // // // //             </div>
// // // // // //             <div className="detail">
// // // // // //               <span className="label">Insurance Date:</span>
// // // // // //               <span className="value">
// // // // // //                 {application.insuranceDate ? new Date(application.insuranceDate).toLocaleDateString() : 'N/A'}
// // // // // //               </span>
// // // // // //             </div>
// // // // // //             <div className="detail">
// // // // // //               <span className="label">Status:</span>
// // // // // //               <span className={`status ${status}`}>
// // // // // //                 {status.charAt(0).toUpperCase() + status.slice(1)}
// // // // // //               </span>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         ) : (
// // // // // //           <div className="no-data">No application data available</div>
// // // // // //         )}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default ApplicationTracking;
// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import axios from 'axios';
// // // // // // // import '../styles/ApplicationTracking.css';
// // // // // // // import ApplicantNavbar from '../components/ApplicantNavbar';

// // // // // // // const ApplicationTracking = () => {
// // // // // // //   const [application, setApplication] = useState(null);
// // // // // // //   const [error, setError] = useState(null);
// // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // //   // Retrieve applyInsuranceId from session storage
// // // // // // //   const applyInsuranceId = sessionStorage.getItem('applyInsuranceId');

// // // // // // //   useEffect(() => {
// // // // // // //     const fetchApplication = async () => {
// // // // // // //       if (!applyInsuranceId) {
// // // // // // //         setError('No application ID found in session storage');
// // // // // // //         setLoading(false);
// // // // // // //         return;
// // // // // // //       }

// // // // // // //       try {
// // // // // // //         // Fetch application details for the specific application ID
// // // // // // //         const response = await axios.get(`http://localhost:8027/applyInsurance/${applyInsuranceId}`);
// // // // // // //         console.log('API Response:', response.data); // Debugging log

// // // // // // //         // Verify the response data
// // // // // // //         if (response.data) {
// // // // // // //           setApplication(response.data);
// // // // // // //         } else {
// // // // // // //           setError('No application data found for this ID');
// // // // // // //         }
// // // // // // //       } catch (err) {
// // // // // // //         console.error('Error fetching application details:', err);
// // // // // // //         setError('Error fetching application details');
// // // // // // //       } finally {
// // // // // // //         setLoading(false);
// // // // // // //       }
// // // // // // //     };

// // // // // // //     fetchApplication();
// // // // // // //   }, [applyInsuranceId]);

// // // // // // //   if (loading) return <div className="loading">Loading...</div>;
// // // // // // //   if (error) return <div className="error">{error}</div>;

// // // // // // //   const status = application?.status || 'unknown';

// // // // // // //   return (
// // // // // // //     <div>
// // // // // // //       <ApplicantNavbar className="applicant-navbar" />
// // // // // // //       <div className="application-tracking">
// // // // // // //         {application ? (
// // // // // // //           <div className="application-details">
// // // // // // //             <h1>Application Tracking</h1>
// // // // // // //             <div className="detail">
// // // // // // //               <span className="label">Policy Number:</span>
// // // // // // //               <span className="value">{application.policyNumber || 'N/A'}</span>
// // // // // // //             </div>
// // // // // // //             <div className="detail">
// // // // // // //               <span className="label">Insurance Date:</span>
// // // // // // //               <span className="value">
// // // // // // //                 {application.insuranceDate ? new Date(application.insuranceDate).toLocaleDateString() : 'N/A'}
// // // // // // //               </span>
// // // // // // //             </div>
// // // // // // //             <div className="detail">
// // // // // // //               <span className="label">Status:</span>
// // // // // // //               <span className={`status ${status}`}>
// // // // // // //                 {status.charAt(0).toUpperCase() + status.slice(1)}
// // // // // // //               </span>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         ) : (
// // // // // // //           <div className="no-data">No application data available</div>
// // // // // // //         )}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default ApplicationTracking;

// // // // // import React, { useState, useEffect } from 'react';
// // // // // import axios from 'axios';
// // // // // import '../styles/ApplicationTracking.css';
// // // // // import ApplicantNavbar from '../components/ApplicantNavbar';

// // // // // const ApplicationTracking = () => {
// // // // //   const [application, setApplication] = useState(null);
// // // // //   const [premiums, setPremiums] = useState([]);
// // // // //   const [error, setError] = useState(null);
// // // // //   const [loading, setLoading] = useState(true);

// // // // //   const applicantId = sessionStorage.getItem('applicantId');

// // // // //   useEffect(() => {
// // // // //     const fetchApplication = async () => {
// // // // //       if (!applicantId) {
// // // // //         setError('No applicant ID found in session storage');
// // // // //         setLoading(false);
// // // // //         return;
// // // // //       }

// // // // //       try {
// // // // //         // Fetch application details
// // // // //         const appResponse = await axios.get(`http://localhost:8027/applyInsurance/getInsuranceDetails/${applicantId}`);
// // // // //         console.log('API Response:', appResponse.data); // Debugging log

// // // // //         if (appResponse.data) {
// // // // //           setApplication(appResponse.data);
// // // // //         } else {
// // // // //           setError('No application data found for this applicant ID');
// // // // //         }

// // // // //         // Fetch premium details
// // // // //         const premiumResponse = await axios.get(`http://localhost:8027/premium/getByApplicant/${applicantId}`);
// // // // //         setPremiums(premiumResponse.data);
// // // // //       } catch (err) {
// // // // //         console.error('Error fetching data:', err);
// // // // //         setError('Error fetching data');
// // // // //       } finally {
// // // // //         setLoading(false);
// // // // //       }
// // // // //     };

// // // // //     fetchApplication();
// // // // //   }, [applicantId]);

// // // // //   if (loading) return <div className="loading">Loading...</div>;
// // // // //   if (error) return <div className="error">{error}</div>;

// // // // //   const status = application?.status || 'unknown';

// // // // //   return (
// // // // //     <div>
// // // // //       <ApplicantNavbar className="applicant-navbar" />
// // // // //       <div className="application-tracking">
// // // // //         <h1>Application Tracking</h1>
// // // // //         {application ? (
// // // // //           <div className="application-details">
// // // // //             <div className="detail">
// // // // //               <span className="label">Policy Number:</span>
// // // // //               <span className="value">{application.policyNumber || 'N/A'}</span>
// // // // //             </div>
// // // // //             <div className="detail">
// // // // //               <span className="label">Insurance Date:</span>
// // // // //               <span className="value">
// // // // //                 {application.insuranceDate ? new Date(application.insuranceDate).toLocaleDateString() : 'N/A'}
// // // // //               </span>
// // // // //             </div>
// // // // //             <div className="detail">
// // // // //               <span className="label">Status:</span>
// // // // //               <span className={`status ${status}`}>
// // // // //                 {status.charAt(0).toUpperCase() + status.slice(1)}
// // // // //               </span>
// // // // //             </div>
// // // // //           </div>
// // // // //         ) : (
// // // // //           <div className="no-data">No application data available</div>
// // // // //         )}
        
// // // // //         {premiums.length > 0 && (
// // // // //           <div className="premium-details">
// // // // //             <h2>Premium Details</h2>
// // // // //             <ul>
// // // // //               {premiums.map((premium) => (
// // // // //                 <li key={premium.premiumId}>
// // // // //                   <span className="label">Premium ID:</span>
// // // // //                   <span className="value">{premium.premiumId}</span>
// // // // //                   <span className="label">Total Amount:</span>
// // // // //                   <span className="value">{premium.totalAmount}</span>
// // // // //                   <span className="label">Monthly:</span>
// // // // //                   <span className="value">{premium.monthly}</span>
// // // // //                   <span className="label">Quarterly:</span>
// // // // //                   <span className="value">{premium.quartely}</span>
// // // // //                   <span className="label">Halfly:</span>
// // // // //                   <span className="value">{premium.halfly}</span>
// // // // //                   <span className="label">Yearly:</span>
// // // // //                   <span className="value">{premium.yearly}</span>
// // // // //                 </li>
// // // // //               ))}
// // // // //             </ul>
// // // // //           </div>
// // // // //         )}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ApplicationTracking;

// // // // import React, { useState, useEffect } from 'react';
// // // // import axios from 'axios';
// // // // import '../styles/ApplicationTracking.css';
// // // // import ApplicantNavbar from '../components/ApplicantNavbar';

// // // // const ApplicationTracking = () => {
// // // //   const [application, setApplication] = useState(null);
// // // //   const [premiums, setPremiums] = useState([]);
// // // //   const [error, setError] = useState(null);
// // // //   const [loading, setLoading] = useState(true);

// // // //   const applicantId = sessionStorage.getItem('applicantId');

// // // //   useEffect(() => {
// // // //     const fetchApplication = async () => {
// // // //       if (!applicantId) {
// // // //         setError('No applicant ID found in session storage');
// // // //         setLoading(false);
// // // //         return;
// // // //       }

// // // //       try {
// // // //         // Fetch application details
// // // //         const appResponse = await axios.get(`http://localhost:8027/applyInsurance/getInsuranceDetails/${applicantId}`);
// // // //         console.log('API Response:', appResponse.data); // Debugging log

// // // //         if (appResponse.data) {
// // // //           setApplication(appResponse.data);
// // // //         } else {
// // // //           setError('No application data found for this applicant ID');
// // // //         }

// // // //         // Fetch premium details
// // // //         const premiumResponse = await axios.get(`http://localhost:8027/premium/getByApplicant/${applicantId}`);
// // // //         setPremiums(premiumResponse.data);
// // // //       } catch (err) {
// // // //         console.error('Error fetching data:', err);
// // // //         setError('Error fetching data');
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchApplication();
// // // //   }, [applicantId]);

// // // //   if (loading) return <div className="loading">Loading...</div>;
// // // //   if (error) return <div className="error">{error}</div>;

// // // //   const status = application?.status || 'unknown';

// // // //   return (
// // // //     <div>
// // // //       <ApplicantNavbar className="applicant-navbar" />
// // // //       <div className="application-tracking">
// // // //         <h1>Application Tracking</h1>
// // // //         {application ? (
// // // //           <div className="application-details">
// // // //             <div className="detail">
// // // //               <span className="label">Policy Number:</span>
// // // //               <span className="value">{application.policyNumber || 'N/A'}</span>
// // // //             </div>
// // // //             <div className="detail">
// // // //               <span className="label">Insurance Date:</span>
// // // //               <span className="value">
// // // //                 {application.insuranceDate ? new Date(application.insuranceDate).toLocaleDateString() : 'N/A'}
// // // //               </span>
// // // //             </div>
// // // //             <div className="detail">
// // // //               <span className="label">Status:</span>
// // // //               <span className={`status ${status}`}>
// // // //                 {status.charAt(0).toUpperCase() + status.slice(1)}
// // // //               </span>
// // // //             </div>
// // // //           </div>
// // // //         ) : (
// // // //           <div className="no-data">No application data available</div>
// // // //         )}
        
// // // //         {premiums.length > 0 && (
// // // //           <div className="premium-details">
// // // //             <h2>Premium Details</h2>
// // // //             <table>
// // // //               <thead>
// // // //                 <tr>
// // // //                   <th>Premium ID</th>
// // // //                   <th>Total Amount</th>
// // // //                   <th>Monthly</th>
// // // //                   <th>Quarterly</th>
// // // //                   <th>Halfly</th>
// // // //                   <th>Yearly</th>
// // // //                 </tr>
// // // //               </thead>
// // // //               <tbody>
// // // //                 {premiums.map((premium) => (
// // // //                   <tr key={premium.premiumId}>
// // // //                     <td>{premium.premiumId}</td>
// // // //                     <td>{premium.totalAmount}</td>
// // // //                     <td>{premium.monthly}</td>
// // // //                     <td>{premium.quartely}</td>
// // // //                     <td>{premium.halfly}</td>
// // // //                     <td>{premium.yearly}</td>
// // // //                   </tr>
// // // //                 ))}
// // // //               </tbody>
// // // //             </table>
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ApplicationTracking;

// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import { useNavigate } from 'react-router-dom';
// // // import '../styles/ApplicationTracking.css';
// // // import ApplicantNavbar from '../components/ApplicantNavbar';

// // // const ApplicationTracking = () => {
// // //   const [application, setApplication] = useState(null);
// // //   const [premiums, setPremiums] = useState([]);
// // //   const [error, setError] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [selectedFrequency, setSelectedFrequency] = useState('monthly'); // Default to monthly
// // //   const navigate = useNavigate();
// // //   const applicantId = sessionStorage.getItem('applicantId');

// // //   useEffect(() => {
// // //     const fetchApplication = async () => {
// // //       if (!applicantId) {
// // //         setError('No applicant ID found in session storage');
// // //         setLoading(false);
// // //         return;
// // //       }

// // //       try {
// // //         // Fetch application details
// // //         const appResponse = await axios.get(`http://localhost:8027/applyInsurance/getInsuranceDetails/${applicantId}`);
// // //         console.log('API Response:', appResponse.data); // Debugging log

// // //         if (appResponse.data) {
// // //           setApplication(appResponse.data);
// // //         } else {
// // //           setError('No application data found for this applicant ID');
// // //         }

// // //         // Fetch premium details
// // //         const premiumResponse = await axios.get(`http://localhost:8027/premium/getByApplicant/${applicantId}`);
// // //         setPremiums(premiumResponse.data);
// // //       } catch (err) {
// // //         console.error('Error fetching data:', err);
// // //         setError('Error fetching data');
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchApplication();
// // //   }, [applicantId]);

// // //   const handlePayNow = () => {
// // //     if (selectedFrequency && premiums.length > 0) {
// // //       const selectedPremium = premiums.find(premium => premium[selectedFrequency]);
// // //       if (selectedPremium) {
// // //         navigate('/payment', {
// // //           state: { amount: selectedPremium[selectedFrequency] }
// // //         });
// // //       } else {
// // //         setError('Selected frequency not found in premium details');
// // //       }
// // //     } else {
// // //       setError('Please select a payment frequency');
// // //     }
// // //   };

// // //   if (loading) return <div className="loading">Loading...</div>;
// // //   if (error) return <div className="error">{error}</div>;

// // //   const status = application?.status || 'unknown';

// // //   return (
// // //     <div>
// // //       <ApplicantNavbar className="applicant-navbar" />
// // //       <div className="application-tracking">
// // //         <h1>Application Tracking</h1>
// // //         {application ? (
// // //           <div className="application-details">
// // //             <div className="detail">
// // //               <span className="label">Policy Number:</span>
// // //               <span className="value">{application.policyNumber || 'N/A'}</span>
// // //             </div>
// // //             <div className="detail">
// // //               <span className="label">Insurance Date:</span>
// // //               <span className="value">
// // //                 {application.insuranceDate ? new Date(application.insuranceDate).toLocaleDateString() : 'N/A'}
// // //               </span>
// // //             </div>
// // //             <div className="detail">
// // //               <span className="label">Status:</span>
// // //               <span className={`status ${status}`}>
// // //                 {status.charAt(0).toUpperCase() + status.slice(1)}
// // //               </span>
// // //             </div>
// // //           </div>
// // //         ) : (
// // //           <div className="no-data">No application data available</div>
// // //         )}
        
// // //         {premiums.length > 0 && (
// // //           <div className="premium-details">
// // //             <h2>Premium Details</h2>
// // //             <table>
// // //               <thead>
// // //                 <tr>
// // //                   <th>Premium ID</th>
// // //                   <th>Total Amount</th>
// // //                   <th>Monthly</th>
// // //                   <th>Quarterly</th>
// // //                   <th>Half Yearly</th>
// // //                   <th>Yearly</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 {premiums.map((premium) => (
// // //                   <tr key={premium.premiumId}>
// // //                     <td>{premium.premiumId}</td>
// // //                     <td>{premium.totalAmount}</td>
// // //                     <td>{premium.monthly}</td>
// // //                     <td>{premium.quartely}</td>
// // //                     <td>{premium.halfly}</td>
// // //                     <td>{premium.yearly}</td>
// // //                   </tr>
// // //                 ))}
// // //               </tbody>
// // //             </table>
// // //             <div className="payment-options">
// // //               <label>
// // //                 <input
// // //                   type="radio"
// // //                   name="frequency"
// // //                   value="monthly"
// // //                   checked={selectedFrequency === 'monthly'}
// // //                   onChange={() => setSelectedFrequency('monthly')}
// // //                 />
// // //                 Monthly
// // //               </label>
// // //               <label>
// // //                 <input
// // //                   type="radio"
// // //                   name="frequency"
// // //                   value="quartely"
// // //                   checked={selectedFrequency === 'quartely'}
// // //                   onChange={() => setSelectedFrequency('quartely')}
// // //                 />
// // //                 Quarterly
// // //               </label>
// // //               <label>
// // //                 <input
// // //                   type="radio"
// // //                   name="frequency"
// // //                   value="halfly"
// // //                   checked={selectedFrequency === 'halfly'}
// // //                   onChange={() => setSelectedFrequency('halfly')}
// // //                 />
// // //                 Half Yearly
// // //               </label>
// // //               <label>
// // //                 <input
// // //                   type="radio"
// // //                   name="frequency"
// // //                   value="yearly"
// // //                   checked={selectedFrequency === 'yearly'}
// // //                   onChange={() => setSelectedFrequency('yearly')}
// // //                 />
// // //                 Yearly
// // //               </label>
// // //               <button onClick={handlePayNow}>Pay Now</button>
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ApplicationTracking;

// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';
// // import '../styles/ApplicationTracking.css';
// // import ApplicantNavbar from '../components/ApplicantNavbar';

// // const ApplicationTracking = () => {
// //   const [application, setApplication] = useState(null);
// //   const [premiums, setPremiums] = useState([]);
// //   const [error, setError] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const navigate = useNavigate();
// //   const applicantId = sessionStorage.getItem('applicantId');

// //   useEffect(() => {
// //     const fetchApplication = async () => {
// //       if (!applicantId) {
// //         setError('No applicant ID found in session storage');
// //         setLoading(false);
// //         return;
// //       }

// //       try {
// //         // Fetch application details
// //         const appResponse = await axios.get(`http://localhost:8027/applyInsurance/getInsuranceDetails/${applicantId}`);
// //         console.log('API Response:', appResponse.data);

// //         if (appResponse.data) {
// //           setApplication(appResponse.data);
// //         } else {
// //           setError('No application data found for this applicant ID');
// //         }

// //         // Fetch premium details
// //         const premiumResponse = await axios.get(`http://localhost:8027/premium/getByApplicant/${applicantId}`);
// //         setPremiums(premiumResponse.data);
// //       } catch (err) {
// //         console.error('Error fetching data:', err);
// //         setError('Error fetching data');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchApplication();
// //   }, [applicantId]);

// //   const handlePayNow = () => {
// //     if (premiums.length > 0) {
// //       const yearlyPremium = premiums.find(premium => premium.yearly)?.yearly;
// //       navigate('/payment', {
// //         state: { amount: yearlyPremium || 0 }
// //       });
// //     } else {
// //       setError('No premium details available');
// //     }
// //   };

// //   if (loading) return <div className="loading">Loading...</div>;
// //   if (error) return <div className="error">{error}</div>;

// //   const status = application?.status || 'unknown';

// //   return (
// //     <div>
// //       <ApplicantNavbar className="applicant-navbar" />
// //       <div className="application-tracking">
// //         <h1>Application Tracking</h1>
// //         {application ? (
// //           <div className="application-details">
// //             <div className="detail">
// //               <span className="label">Policy Number:</span>
// //               <span className="value">{application.policyNumber || 'N/A'}</span>
// //             </div>
// //             <div className="detail">
// //               <span className="label">Insurance Date:</span>
// //               <span className="value">
// //                 {application.insuranceDate ? new Date(application.insuranceDate).toLocaleDateString() : 'N/A'}
// //               </span>
// //             </div>
// //             <div className="detail">
// //               <span className="label">Status:</span>
// //               <span className={`status ${status}`}>
// //                 {status.charAt(0).toUpperCase() + status.slice(1)}
// //               </span>
// //             </div>
// //           </div>
// //         ) : (
// //           <div className="no-data">No application data available</div>
// //         )}
        
// //         {premiums.length > 0 && (
// //           <div className="premium-details">
// //             <h2>Premium Details</h2>
// //             <table>
// //               <thead>
// //                 <tr>
// //                   <th>Premium ID</th>
// //                   <th>Total Amount</th>
// //                   <th>Monthly</th>
// //                   <th>Quarterly</th>
// //                   <th>Half Yearly</th>
// //                   <th>Yearly</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {premiums.map((premium) => (
// //                   <tr key={premium.premiumId}>
// //                     <td>{premium.premiumId}</td>
// //                     <td>{premium.totalAmount}</td>
// //                     <td>{premium.monthly}</td>
// //                     <td>{premium.quartely}</td>
// //                     <td>{premium.halfly}</td>
// //                     <td>{premium.yearly}</td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //             <button onClick={handlePayNow}>Pay Now</button>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ApplicationTracking;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import '../styles/ApplicationTracking.css';
// import ApplicantNavbar from '../components/ApplicantNavbar';

// const ApplicationTracking = () => {
//   const [application, setApplication] = useState(null);
//   const [premiums, setPremiums] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const applicantId = sessionStorage.getItem('applicantId');

//   useEffect(() => {
//     const fetchApplication = async () => {
//       if (!applicantId) {
//         setError('No applicant ID found in session storage');
//         setLoading(false);
//         return;
//       }

//       try {
//         // Fetch application details
//         const appResponse = await axios.get(`http://localhost:8027/applyInsurance/getInsuranceDetails/${applicantId}`);
//         console.log('API Response:', appResponse.data);

//         if (appResponse.data) {
//           setApplication(appResponse.data);
//         } else {
//           setError('No application data found for this applicant ID');
//         }

//         // Fetch premium details
//         const premiumResponse = await axios.get(`http://localhost:8027/premium/getByApplicant/${applicantId}`);
//         setPremiums(premiumResponse.data);
//       } catch (err) {
//         console.error('Error fetching data:', err);
//         setError('Error fetching data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchApplication();
//   }, [applicantId]);

//   const handlePayNow = () => {
//     if (premiums.length > 0) {
//       navigate('/payment', {
//         state: { premiums } // Pass the entire premiums array
//       });
//     } else {
//       setError('No premium details available');
//     }
//   };

//   if (loading) return <div className="loading">Loading...</div>;
//   if (error) return <div className="error">{error}</div>;

//   const status = application?.status || 'unknown';

//   return (
//     <div>
//       <ApplicantNavbar className="applicant-navbar" />
//       <div className="application-tracking">
//         <h1>Application Tracking</h1>
//         {application ? (
//           <div className="application-details">
//             <div className="detail">
//               <span className="label">Policy Number:</span>
//               <span className="value">{application.policyNumber || 'N/A'}</span>
//             </div>
//             <div className="detail">
//               <span className="label">Insurance Date:</span>
//               <span className="value">
//                 {application.insuranceDate ? new Date(application.insuranceDate).toLocaleDateString() : 'N/A'}
//               </span>
//             </div>
//             <div className="detail">
//               <span className="label">Status:</span>
//               <span className={`status ${status}`}>
//                 {status.charAt(0).toUpperCase() + status.slice(1)}
//               </span>
//             </div>
//           </div>
//         ) : (
//           <div className="no-data">No application data available</div>
//         )}
        
//         {premiums.length > 0 && (
//           <div className="premium-details">
//             <h2>Premium Details</h2>
//             <table>
//               <thead>
//                 <tr>
//                   <th>Premium ID</th>
//                   <th>Total Amount</th>
//                   <th>Monthly</th>
//                   <th>Quarterly</th>
//                   <th>Half Yearly</th>
//                   <th>Yearly</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {premiums.map((premium) => (
//                   <tr key={premium.premiumId}>
//                     <td>{premium.premiumId}</td>
//                     <td>{premium.totalAmount}</td>
//                     <td>{premium.monthly}</td>
//                     <td>{premium.quartely}</td>
//                     <td>{premium.halfly}</td>
//                     <td>{premium.yearly}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             <button onClick={handlePayNow}>Pay Now</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ApplicationTracking;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/ApplicationTracking.css';
import ApplicantNavbar from '../components/ApplicantNavbar';

const ApplicationTracking = () => {
  const [application, setApplication] = useState(null);
  const [premiums, setPremiums] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const applicantId = sessionStorage.getItem('applicantId');

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
        setApplication(appResponse.data);

        // Fetch premium details
        const premiumResponse = await axios.get(`http://localhost:8027/premium/getByApplicant/${applicantId}`);
        setPremiums(premiumResponse.data);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchApplication();
  }, [applicantId]);

  const handlePayNow = () => {
    if (premiums.length > 0) {
      navigate('/payment', {
        state: { premiums } // Pass the entire premiums array
      });
    } else {
      setError('No premium details available');
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  const status = application?.status || 'unknown';

  return (
    <div>
      <ApplicantNavbar className="applicant-navbar" />
      <div className="application-tracking" >
        <h1>Application Tracking</h1><hr/>
        {application ? (
          <div className="application-details">
            <div className="detail">
              <span className="label" style={{paddingLeft:'630px'}}>Policy Number:</span>
              <span className="value" style={{paddingRight:'630px'}}>{application.policyNumber || 'N/A'}</span>
            </div>
            <div className="detail">
              <span className="label"  style={{paddingLeft:'630px'}}>Insurance Date:</span>
              <span className="value" style={{paddingRight:'610px'}}>
                {application.insuranceDate ? new Date(application.insuranceDate).toLocaleDateString() : 'N/A'}
              </span>
            </div>
            <div className="detail">
              <span className="label"  style={{paddingLeft:'630px'}}>Status:</span>
              <span className={`status ${status}`} style={{paddingRight:'610px'}}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </span>
            </div>
          </div>
        ) : (
          <div className="no-data">No application data available</div>
        )}
        
        {premiums.length > 0 && (
          <div className="premium-details">
            <h2>Premium Details</h2>
            <table>
              <thead>
                <tr>
                  <th>Premium ID</th>
                  <th>Total Amount</th>
                  <th>Monthly</th>
                  <th>Quarterly</th>
                  <th>Half Yearly</th>
                  <th>Yearly</th>
                </tr>
              </thead>
              <tbody>
                {premiums.map((premium) => (
                  <tr key={premium.premiumId}>
                    <td>{premium.premiumId}</td>
                    <td>{premium.totalAmount}</td>
                    <td>{premium.monthly}</td>
                    <td>{premium.quartely}</td> {/* Corrected typo */}
                    <td>{premium.halfly}</td> {/* Corrected typo */}
                    <td>{premium.yearly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={handlePayNow} style={{backgroundColor:'blue',width:'120px'}}>Pay Now</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationTracking;

