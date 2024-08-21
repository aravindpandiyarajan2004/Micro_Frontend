

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import '../styles/RiskScore.css'; // Ensure this CSS file is created
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
// import Swal from 'sweetalert2';
// import AdminNavbar from '../components/AdminNavbar';

// const RiskScore = () => {
//   const [applicants, setApplicants] = useState([]);
//   const [applyInsurances, setApplyInsurances] = useState([]);
//   const [selectedApplicantId, setSelectedApplicantId] = useState('');
//   const [selectedApplyInsuranceId, setSelectedApplyInsuranceId] = useState('');
//   const [applicantDetails, setApplicantDetails] = useState(null);
//   const [insuranceDetails, setInsuranceDetails] = useState(null);
//   const [risks, setRisks] = useState([]);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const [applicantsResponse, applyInsurancesResponse, risksResponse] = await Promise.all([
//           axios.get('http://localhost:8027/applicant/all'),
//           axios.get('http://localhost:8027/applyInsurance/all'),
//           axios.get('http://localhost:8027/risk/all')
//         ]);

//         setApplicants(applicantsResponse.data);
//         setApplyInsurances(applyInsurancesResponse.data);
//         setRisks(risksResponse.data);

//         setError('');
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError('Error fetching data.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const fetchApplicantDetails = async () => {
//       if (selectedApplicantId) {
//         try {
//           const response = await axios.get(`http://localhost:8027/applicant/${selectedApplicantId}`);
//           setApplicantDetails(response.data);
//         } catch (error) {
//           console.error('Error fetching applicant details:', error);
//           setError('Error fetching applicant details.');
//         }
//       } else {
//         setApplicantDetails(null);
//       }
//     };

//     const fetchInsuranceDetails = async () => {
//       if (selectedApplyInsuranceId) {
//         try {
//           const response = await axios.get(`http://localhost:8027/applyInsurance/${selectedApplyInsuranceId}`);
//           setInsuranceDetails(response.data);
//         } catch (error) {
//           console.error('Error fetching insurance details:', error);
//           setError('Error fetching insurance details.');
//         }
//       } else {
//         setInsuranceDetails(null);
//       }
//     };

//     fetchApplicantDetails();
//     fetchInsuranceDetails();
//   }, [selectedApplicantId, selectedApplyInsuranceId]);

//   const handleCalculateRisk = async () => {
//     if (!selectedApplicantId || !selectedApplyInsuranceId) {
//       setError('Both Applicant and Apply Insurance selections are required.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const applicant = applicants.find(a => a.id === selectedApplicantId);
//       const insurance = applyInsurances.find(i => i.applyInsuranceId === selectedApplyInsuranceId);

//       if (!applicant || !insurance) {
//         setError('Selected applicant or insurance not found.');
//         return;
//       }

//       // Calculate the risk score
//       const calculateResponse = await axios.post(
//         'http://localhost:8027/risk/calculate',
//         {
//           applicantName: applicant.applicantName,
//           policyNumber: insurance.policyNumber
//         }
//       );

//       const { riskScore, riskType } = calculateResponse.data;

//       // Update the risk score in the database
//       await axios.post('http://localhost:8027/risk/update', {
//         applicantId: selectedApplicantId,
//         applyInsuranceId: selectedApplyInsuranceId,
//         riskScore,
//         riskType
//       });

//       // Refresh the list of risks
//       const risksResponse = await axios.get('http://localhost:8027/risk/all');
//       setRisks(risksResponse.data);

//       setError('');
//     } catch (error) {
//       console.error('Error calculating risk score:', error);
//       setError('Error calculating risk score: ' + error.response?.data?.message || error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDeleteRisk = async (riskId) => {
//     if (!riskId) {
//       console.error('Invalid risk ID');
//       setError('Invalid risk ID.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const result = await Swal.fire({
//         title: 'Are you sure?',
//         text: 'This action cannot be undone!',
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Yes, delete it!',
//       });

//       if (result.isConfirmed) {
//         const response = await axios.delete(`http://localhost:8027/risk/${riskId}`);

//         if (response.data === 'Success') {
//           setRisks(risks.filter(risk => risk.riskId !== riskId));
//           await Swal.fire('Deleted!', 'The risk has been deleted.', 'success');
//         } else {
//           throw new Error('Failed to delete the risk');
//         }
//       }
//     } catch (error) {
//       console.error('Error deleting risk:', error);
//       setError('Error deleting risk: ' + error.response?.data?.message || error.message);
//       await Swal.fire('Error!', 'There was an error deleting the risk.', 'error');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="calculate-risk-score">
//       <AdminNavbar />
//       <h1>Calculate Risk Score</h1>
//       <form onSubmit={(e) => e.preventDefault()}>
//         <div>
//           <label htmlFor="applicantSelect">Select Applicant:</label>
//           <select
//             id="applicantSelect"
//             value={selectedApplicantId}
//             onChange={(e) => setSelectedApplicantId(e.target.value)}
//             disabled={loading}
//           >
//             <option value="">Select an Applicant</option>
//             {applicants.map((applicant) => (
//               <option key={applicant.id} value={applicant.id}>
//                 {applicant.applicantName}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label htmlFor="applyInsuranceSelect">Select Apply Insurance:</label>
//           <select
//             id="applyInsuranceSelect"
//             value={selectedApplyInsuranceId}
//             onChange={(e) => setSelectedApplyInsuranceId(e.target.value)}
//             disabled={loading}
//           >
//             <option value="">Select an Apply Insurance</option>
//             {applyInsurances.map((insurance) => (
//               <option key={insurance.applyInsuranceId} value={insurance.applyInsuranceId}>
//                 {insurance.policyNumber}
//               </option>
//             ))}
//           </select>
//         </div>
//         <button type="button" onClick={handleCalculateRisk} disabled={loading}>
//           {loading ? 'Calculating...' : 'Calculate Risk Score'}
//         </button>
//       </form>
//       {error && <p className="error-message">{error}</p>}
//       {applicantDetails && insuranceDetails && (
//         <div>
//           <h2>Applicant and Insurance Details</h2>
//           <p><strong>Applicant Name:</strong> {applicantDetails.name}</p>
//           <p><strong>Applicant Email:</strong> {applicantDetails.email}</p>
//           <p><strong>Insurance Policy Number:</strong> {insuranceDetails.policyNumber}</p>
//         </div>
//       )}
//       {risks.length > 0 && (
//         <div>
//           <h2>All Risk Scores</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>Applicant Name</th>
//                 <th>Risk Score</th>
//                 <th>Risk Type</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {risks.map((risk) => (
//                 <tr key={risk.riskId}>
//                   <td>{risk.applicants?.applicantName || 'Unknown'}</td>
//                   <td>{risk.riskScore}</td>
//                   <td>{risk.riskType}</td>
//                   <td>
//                     <button onClick={() => handleDeleteRisk(risk.riskId)} disabled={loading}>
//                       <FontAwesomeIcon icon={faTrashAlt} />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RiskScore;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/RiskScore.css'; // Ensure this CSS file is created
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import AdminNavbar from '../components/AdminNavbar';

const RiskScore = () => {
  const [risks, setRisks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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
      setError('Error deleting risk: ' + error.response?.data?.message || error.message);
      await Swal.fire('Error!', 'There was an error deleting the risk.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="risk-score">
      <AdminNavbar />
      <h1 style={{paddingTop:60}}>Risk Scores</h1><hr />
      {error && <p className="error-message">{error}</p>}
      {loading && <p>Loading...</p>}
      {risks.length > 0 ? (
        <div>
          <table>
            <thead>
              <tr>
                <th>Applicant Name</th>
                <th>Risk Score</th>
                <th>Risk Type</th>
              </tr>
            </thead>
            <tbody>
              {risks.map((risk) => (
                <tr key={risk.riskId}>
                  <td>{risk.applicants.applicantName || 'Unknown'}</td>
                  <td>{risk.riskScore}</td>
                  <td>{risk.riskType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No risk scores available.</p>
      )}
    </div>
  );
};

export default RiskScore;
