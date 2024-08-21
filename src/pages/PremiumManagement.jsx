

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import '../styles/PremiumManagement.css'; // Ensure this CSS file is created
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
// import Swal from 'sweetalert2';
// import AdminNavbar from '../components/AdminNavbar';

// const PremiumManagement = () => {
//   const [totalAmount, setTotalAmount] = useState('');
//   const [applicants, setApplicants] = useState([]);
//   const [selectedApplicantId, setSelectedApplicantId] = useState(null);
//   const [premiums, setPremiums] = useState([]);
//   const [selectedPremium, setSelectedPremium] = useState(null);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         // Fetch premiums
//         const premiumsResponse = await axios.get('http://localhost:8027/premium/all');
//         setPremiums(premiumsResponse.data);

//         // Fetch applicants
//         const applicantsResponse = await axios.get('http://localhost:8027/applicant/all');
//         setApplicants(applicantsResponse.data);

//         // Retrieve applicant ID from local storage
//         const storedApplicantId = localStorage.getItem('selectedApplicantId');
//         const applicantName = localStorage.getItem('applicantName');
//         setSelectedApplicantId(storedApplicantId);

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

//   const handleCalculatePremium = async () => {
//     if (!totalAmount || selectedApplicantId === null) {
//       setError('Total amount and applicant ID are required.');
//       return;
//     }

//     const calculatedValues = {
//       totalAmount: parseFloat(totalAmount),
//       monthly: parseFloat(totalAmount) / 12,
//       quartely: parseFloat(totalAmount) / 4,
//       halfly: parseFloat(totalAmount) / 2,
//       yearly: parseFloat(totalAmount),
//       applicant: { applicantId: selectedApplicantId, applicantName:applicantName }
     
//     };

//     setLoading(true);
//     try {
//       const response = await axios.post('http://localhost:8027/premium', calculatedValues);
//       if (response.data === 'Success') {
//         setPremiums([...premiums, calculatedValues]);
//         setTotalAmount('');
//         setError('');
//       } else {
//         setError('Error adding premium.');
//       }
//     } catch (error) {
//       console.error('Error adding premium:', error);
//       setError('Error adding premium.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleEditPremium = (premium) => {
//     setSelectedPremium(premium);
//     setTotalAmount(premium.totalAmount);
//     setSelectedApplicantId(premium.applicant?.applicantName|| null);
//   };

//   const handleSaveEdit = async () => {
//     if (!selectedPremium || !totalAmount || selectedApplicantId === null) {
//       setError('Select a premium, enter a valid total amount, and select an applicant.');
//       return;
//     }

//     const updatedPremium = {
//       ...selectedPremium,
//       totalAmount: parseFloat(totalAmount),
//       monthly: parseFloat(totalAmount) / 12,
//       quartely: parseFloat(totalAmount) / 4,
//       halfly: parseFloat(totalAmount) / 2,
//       yearly: parseFloat(totalAmount),
//       applicant: { applicantId: selectedApplicantId, applicantName:applicantName }
//     };

//     setLoading(true);
//     try {
//       const response = await axios.put('http://localhost:8027/premium', updatedPremium);
//       if (response.data === 'Success') {
//         setPremiums(premiums.map(p => p.premiumId === selectedPremium.premiumId ? updatedPremium : p));
//         setSelectedPremium(null);
//         setTotalAmount('');
//         setSelectedApplicantId(null);
//         setError('');
//       } else {
//         setError('Error updating premium.');
//       }
//     } catch (error) {
//       console.error('Error updating premium:', error);
//       setError('Error updating premium.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDeletePremium = async (premiumId) => {
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
//         const response = await axios.delete(`http://localhost:8027/premium/${premiumId}`);
//         if (response.data === 'Success') {
//           setPremiums(premiums.filter(premium => premium.premiumId !== premiumId));
//           await Swal.fire('Deleted!', 'The premium has been deleted.', 'success');
//         } else {
//           setError('Error deleting premium.');
//         }
//       }
//     } catch (error) {
//       console.error('Error deleting premium:', error);
//       setError('Error deleting premium.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="premium-management">
//       <AdminNavbar />
//       <h1>Manage Premiums</h1>
//       <form onSubmit={(e) => e.preventDefault()}>
//         <div>
//           <label htmlFor="totalAmount">Total Amount:</label>
//           <input
//             id="totalAmount"
//             type="number"
//             value={totalAmount}
//             onChange={(e) => setTotalAmount(e.target.value)}
//             disabled={loading}
//           />
//         </div>
//         <div>
//           <label htmlFor="applicantId">Applicant Name:</label>
//           <input
//             id="applicantId"
//             type="text"
//             value={applicantName || ''}
//             readOnly
//           />
//         </div>
//         <button type="button" onClick={handleCalculatePremium} disabled={loading}>
//           {loading ? 'Calculating...' : 'Add Premium'}
//         </button>
//         {selectedPremium && (
//           <button type="button" onClick={handleSaveEdit} disabled={loading}>
//             {loading ? 'Saving...' : 'Save Edit'}
//           </button>
//         )}
//       </form>
//       {error && <p className="error-message">{error}</p>}
//       {premiums.length > 0 && (
//         <div>
//           <h2>Premium List</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>Premium ID</th>
//                 <th>Total Amount</th>
//                 <th>Monthly</th>
//                 <th>Quarterly</th>
//                 <th>Halfly</th>
//                 <th>Yearly</th>
//                 <th>Applicant Name</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {premiums.map((premium) => (
//                 <tr key={premium.premiumId}>
//                   <td>{premium.premiumId}</td>
//                   <td>{premium.totalAmount}</td>
//                   <td>{premium.monthly}</td>
//                   <td>{premium.quartely}</td>
//                   <td>{premium.halfly}</td>
//                   <td>{premium.yearly}</td>
//                   <td>{premium.applicant?.applicantName || 'N/A'}</td>
//                   <td>
//                     <button onClick={() => handleEditPremium(premium)} disabled={loading}>
//                       <FontAwesomeIcon icon={faEdit} />
//                     </button>
//                     <button onClick={() => handleDeletePremium(premium.premiumId)} disabled={loading}>
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

// export default PremiumManagement;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/PremiumManagement.css'; // Ensure this CSS file is created
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import AdminNavbar from '../components/AdminNavbar';

const PremiumManagement = () => {
  const [totalAmount, setTotalAmount] = useState('');
  const [applicants, setApplicants] = useState([]);
  const [selectedApplicantName, setSelectedApplicantName] = useState(null);
  const [premiums, setPremiums] = useState([]);
  const [selectedPremium, setSelectedPremium] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const selectedApplicantId = localStorage.getItem('selectedApplicantId');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch premiums
        const premiumsResponse = await axios.get('http://localhost:8027/premium/all');
        setPremiums(premiumsResponse.data);

        // Fetch applicants
        const applicantsResponse = await axios.get('http://localhost:8027/applicant/all');
        setApplicants(applicantsResponse.data);

        // Retrieve applicant details from local storage
        const storedApplicantName = localStorage.getItem('applicantName');
        setSelectedApplicantName(storedApplicantName);

        setError('');
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCalculatePremium = async () => {
    if (!totalAmount || !selectedApplicantName) {
      setError('Total amount and applicant name are required.');
      return;
    }

    const calculatedValues = {

      totalAmount: parseFloat(totalAmount),
      monthly: parseFloat(totalAmount) / 12,
      quartely: parseFloat(totalAmount) / 4,
      halfly: parseFloat(totalAmount) / 2,
      yearly: parseFloat(totalAmount),
      applicant: { applicantName: selectedApplicantName },
      applicant : {applicantId : selectedApplicantId},
    };

    setLoading(true);
    try {
        console.log(calculatedValues);
      const response = await axios.post('http://localhost:8027/premium', calculatedValues);
      if (response.data === 'Success') {
        setPremiums([...premiums, calculatedValues]);
        setTotalAmount('');
        setError('');
        window.location.reload();
      } else {
        setError('Error adding premium.');
      }
    } catch (error) {
      console.error('Error adding premium:', error);
      setError('Error adding premium.');
    } finally {
      setLoading(false);
    }
  };

  const handleEditPremium = (premium) => {
    setSelectedPremium(premium);
    setTotalAmount(premium.totalAmount);
    setSelectedApplicantName(premium.applicant?.applicantName || null);
  };

  const handleSaveEdit = async () => {
    if (!selectedPremium || !totalAmount || !selectedApplicantName) {
      setError('Select a premium, enter a valid total amount, and select an applicant.');
      return;
    }

    const updatedPremium = {
      ...selectedPremium,
      totalAmount: parseFloat(totalAmount),
      monthly: parseFloat(totalAmount) / 12,
      quartely: parseFloat(totalAmount) / 4,
      halfly: parseFloat(totalAmount) / 2,
      yearly: parseFloat(totalAmount),
      applicant: { applicantName: selectedApplicantName }
    };

    setLoading(true);
    try {
      const response = await axios.put('http://localhost:8027/premium', updatedPremium);
      if (response.data === 'Success') {
        setPremiums(premiums.map(p => p.premiumId === selectedPremium.premiumId ? updatedPremium : p));
        setSelectedPremium(null);
        setTotalAmount('');
        setSelectedApplicantName(null);
        setError('');
      } else {
        setError('Error updating premium.');
      }
    } catch (error) {
      console.error('Error updating premium:', error);
      setError('Error updating premium.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePremium = async (premiumId) => {
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
        const response = await axios.delete(`http://localhost:8027/premium/${premiumId}`);
        if (response.data === 'Success') {
          setPremiums(premiums.filter(premium => premium.premiumId !== premiumId));
          await Swal.fire('Deleted!', 'The premium has been deleted.', 'success');
        } else {
          setError('Error deleting premium.');
        }
      }
    } catch (error) {
      console.error('Error deleting premium:', error);
      setError('Error deleting premium.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="premium-management">
      <AdminNavbar />
      <h1>Manage Premiums</h1><hr/>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="totalAmount">Total Amount:</label>
          <input
            id="totalAmount"
            type="number"
            value={totalAmount}
            onChange={(e) => setTotalAmount(e.target.value)}
            disabled={loading}
          />
        </div>
        <div>
          <label htmlFor="applicantName">Applicant Name:</label>
          <input
            id="applicantName"
            type="text"
            value={selectedApplicantName || ''}
            readOnly
          />
        </div>
        <button type="button" onClick={handleCalculatePremium} disabled={loading}>
          {loading ? 'Calculating...' : 'Add Premium'}
        </button>
        {selectedPremium && (
          <button type="button" onClick={handleSaveEdit} disabled={loading}>
            {loading ? 'Saving...' : 'Save Edit'}
          </button>
        )}
      </form>
      {error && <p className="error-message">{error}</p>}
      {premiums.length > 0 && (
        <div>
          <h2>Premium List</h2>
          <table>
            <thead>
              <tr>
                <th>Premium ID</th>
                <th>Total Amount</th>
                <th>Monthly</th>
                <th>Quarterly</th>
                <th>Halfly</th>
                <th>Yearly</th>
                <th>Applicant Name</th>
                <th>Actions</th>
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
                  <td>{premium.applicant?.applicantName || 'N/A'}</td>
                  <td >
                    
                      <FontAwesomeIcon icon={faEdit} onClick={() => handleEditPremium(premium)} disabled={loading} style={{color:'orange',fontSize:'30px'}}/>
                    
                    
                      <FontAwesomeIcon icon={faTrashAlt}  onClick={() => handleDeletePremium(premium.premiumId)} disabled={loading} style={{color:'red',fontSize:'30px',marginLeft:'27px'}}/>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PremiumManagement;

