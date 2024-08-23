

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
//         setApplication(appResponse.data);

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
//       <div className="application-tracking" >
//         <h1>Application Tracking</h1><hr/>
//         {application ? (
//           <div className="application-details">
//             <div className="detail">
//               <span className="label" style={{paddingLeft:'630px'}}>Policy Number:</span>
//               <span className="value" style={{paddingRight:'630px'}}>{application.policyNumber || 'N/A'}</span>
//             </div>
//             <div className="detail">
//               <span className="label"  style={{paddingLeft:'630px'}}>Insurance Date:</span>
//               <span className="value" style={{paddingRight:'610px'}}>
//                 {application.insuranceDate ? new Date(application.insuranceDate).toLocaleDateString() : 'N/A'}
//               </span>
//             </div>
//             <div className="detail">
//               <span className="label"  style={{paddingLeft:'630px'}}>Status:</span>
//               <span className={`status ${status}`} style={{paddingRight:'610px'}}>
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
//                     <td>{premium.quartely}</td> {/* Corrected typo */}
//                     <td>{premium.halfly}</td> {/* Corrected typo */}
//                     <td>{premium.yearly}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             <button onClick={handlePayNow} style={{backgroundColor:'blue',width:'120px'}}>Pay Now</button>
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
import { Container, Card, Table, Button, Alert, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faSpinner, faCreditCard } from '@fortawesome/free-solid-svg-icons';

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
                console.log('API Response:', appResponse.data);
        
                if (appResponse.data) {
                  setApplication(appResponse.data);
                } else {
                  setError('No application data found for this applicant ID');
                }
        
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

  if (loading) return (
    <div className="loading-spinner">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
  
  if (error) return <Alert variant="danger">{error}</Alert>;

  const status = application?.status || 'unknown';

  return (
    <div className="application-tracking-page">
      <ApplicantNavbar />
      <Container className="mt-4">
        <h1 className="text-center mb-4" style={{marginTop:90}}>Application Tracking</h1>
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
                  <span className={`status-badge ${status}`}>
                    <FontAwesomeIcon icon={status === 'approved' ? faCheckCircle : status === 'rejected' ? faTimesCircle : faSpinner} />
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
                      <td>{premium.quartely}</td>
                      <td>{premium.halfly}</td>
                      <td>{premium.yearly}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Button variant="primary" onClick={handlePayNow} className="mt-3">
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


