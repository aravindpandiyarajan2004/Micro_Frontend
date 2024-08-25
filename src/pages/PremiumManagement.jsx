



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/PremiumManagement.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus, faSave } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import AdminNavbar from '../components/AdminNavbar';

const PremiumManagement = () => {
  const [totalAmount, setTotalAmount] = useState('');
  const [applicants, setApplicants] = useState([]);
  const [selectedApplicantId, setSelectedApplicantId] = useState('');
  const [premiums, setPremiums] = useState([]);
  const [selectedPremium, setSelectedPremium] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch premiums
        const premiumsResponse = await axios.get('http://localhost:8027/premium/all');
        setPremiums(premiumsResponse.data);

        // Fetch non-premium applicants
        const applicantsResponse = await axios.get('http://localhost:8027/premium/getNonPremiumApplicant');
        setApplicants(applicantsResponse.data);

        // Retrieve applicant details from local storage
        const storedApplicantId = localStorage.getItem('selectedApplicantId');
        setSelectedApplicantId(storedApplicantId || '');

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
    if (!totalAmount || !selectedApplicantId) {
      setError('Total amount and applicant are required.');
      return;
    }

    const selectedApplicant = applicants.find(applicant => applicant.applicantId === selectedApplicantId);

    const calculatedValues = {
      totalAmount: parseFloat(totalAmount),
      monthly: parseFloat(totalAmount) / 12,
      quartely: parseFloat(totalAmount) / 4,
      halfly: parseFloat(totalAmount) / 2,
      yearly: parseFloat(totalAmount),
      applicant: {
        applicantId: selectedApplicant?.applicantId || selectedApplicantId,
      },
    };

    setLoading(true);
    try {
      console.log(calculatedValues);
      const response = await axios.post('http://localhost:8027/premium', calculatedValues);
      if (response.data === 'Success') {
        setPremiums([...premiums, calculatedValues]);
        setTotalAmount('');
        setSelectedApplicantId('');
        setError('');
        window.location.reload();
        // Optionally reload the page or fetch the data again
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
    setSelectedApplicantId(premium.applicant?.applicantId || '');
  };

  const handleSaveEdit = async () => {
    if (!selectedPremium || !totalAmount || !selectedApplicantId) {
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
      applicant: {
        applicantId: selectedApplicantId,
      },
    };

    setLoading(true);
    try {
      const response = await axios.put('http://localhost:8027/premium', updatedPremium);
      if (response.data === 'Success') {
        setPremiums(premiums.map(p => p.premiumId === selectedPremium.premiumId ? updatedPremium : p));
        setSelectedPremium(null);
        setTotalAmount('');
        setSelectedApplicantId('');
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
      <div className="content-wrapper">
        <h1 className="page-title" >Manage Premiums</h1>
        <div className="premium-form">
          <form onSubmit={(e) => e.preventDefault()} className="form-grid">
            <div className="form-group">
              <label htmlFor="totalAmount">Total Amount:</label>
              <input
                id="totalAmount"
                type="number"
                value={totalAmount}
                onChange={(e) => setTotalAmount(e.target.value)}
                disabled={loading}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="applicantName">Applicant Name:</label>
              <select
                id="applicantName"
                value={selectedApplicantId}
                onChange={(e) => setSelectedApplicantId(e.target.value)}
                disabled={loading}
                className="form-select"
              >
                <option value="">Select Applicant</option>
                {applicants.map((applicant) => (
                  <option key={applicant.applicantId} value={applicant.applicantId}>
                    {applicant.applicantName}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-actions">
              <button
                type="button"
                onClick={handleCalculatePremium}
                disabled={loading}
                className="btn btn-primary"
              >
                {loading ? 'Calculating...' : (
                  <>
                    Add Premium
                  </>
                )}
              </button>
              {selectedPremium && (
                <button
                  type="button"
                  onClick={handleSaveEdit}
                  disabled={loading}
                  className="btn btn-success"
                >
                  {loading ? 'Saving...' : (
                    <>
                      <FontAwesomeIcon icon={faSave} /> Save Edit
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
          {error && <p className="error-message">{error}</p>}
        </div>
        {premiums.length > 0 && (
          <div className="premium-list">
            <h2 className="section-title">Premium List</h2>
            <div className="table-responsive">
              <table className="premium-table">
                <thead>
                  <tr>
                    <th>Premium ID</th>
                    <th>Total Amount</th>
                    <th>Monthly</th>
                    <th>Quarterly</th>
                    <th>Half-Yearly</th>
                    <th>Yearly</th>
                    <th>Applicant Name</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {premiums.map((premium) => (
                    <tr key={premium.premiumId}>
                      <td>{premium.premiumId}</td>
                      <td>{premium.totalAmount.toFixed(2)}</td>
                      <td>{premium.monthly.toFixed(2)}</td>
                      <td>{premium.quartely.toFixed(2)}</td>
                      <td>{premium.halfly.toFixed(2)}</td>
                      <td>{premium.yearly.toFixed(2)}</td>
                      <td>{premium.applicant?.applicantName || 'N/A'}</td>
                      <td className="action-buttons">
                        <button
                          onClick={() => handleEditPremium(premium)}
                          disabled={loading}
                          className="btn btn-edit"
                          title="Edit"
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button
                          onClick={() => handleDeletePremium(premium.premiumId)}
                          disabled={loading}
                          className="btn btn-delete"
                          title="Delete"
                        >
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PremiumManagement;
