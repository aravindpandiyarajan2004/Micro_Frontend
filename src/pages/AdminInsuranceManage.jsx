

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/AdminInsuranceManage.css'; // Ensure this CSS file is created
import Swal from 'sweetalert2';
import AdminNavbar from '../components/AdminNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const AdminInsuranceManage = () => {
  const [insuranceName, setInsuranceName] = useState('');
  const [description, setDescription] = useState('');
  const [ageCriteria, setAgeCriteria] = useState(''); // New state for age criteria
  const [insurances, setInsurances] = useState([]);
  const [selectedInsurance, setSelectedInsurance] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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

  const handleAddInsurance = async () => {
    if (!insuranceName || !description) {
      setError('Insurance name, description, and age criteria are required.');
      return;
    }

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
   // setAgeCriteria(insurance.ageCriteria); // Set age criteria for editing
  };

  const handleSaveEdit = async () => {
    if (!selectedInsurance || !insuranceName || !description ) {
      setError('Select an insurance and provide valid details.');
      return;
    }

    const updatedInsurance = {
      ...selectedInsurance,
      insuranceName,
      description,
      //ageCriteria // Include age criteria
    };

    setLoading(true);
    try {
      const response = await axios.put('http://localhost:8027/insurance', updatedInsurance);
      if (response.data === 'Success') {
        setInsurances(insurances.map(i => i.inusranceId === selectedInsurance.inusranceId ? updatedInsurance : i));
        setSelectedInsurance(null);
        setInsuranceName('');
        setDescription('');
        // setAgeCriteria('');
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
      <h1>Manage Health Insurance</h1><hr/>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="insuranceName">Insurance Name:</label>
          <select
            id="ageCriteria"
            value={insuranceName}
            onChange={(e) => setInsuranceName(e.target.value)}
            disabled={loading}
          >
            <option value="">Select Age Criteria</option>
            <option value="18-30">18-30</option>
            <option value="31-45">31-45</option>
            <option value="46-65">46-65</option>
          </select>
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={loading}
          />
        </div>
       
        <button type="button" onClick={handleAddInsurance} disabled={loading}>
          {loading ? 'Adding...' : 'Add Insurance'}
        </button>
        {selectedInsurance && (
          <button type="button" onClick={handleSaveEdit} disabled={loading}>
            {loading ? 'Saving...' : 'Save Edit'}
          </button>
        )}
      </form>
      {error && <p className="error-message">{error}</p>}
      {insurances.length > 0 && (
        <div>
          <h2>Insurance List</h2>
          <table>
            <thead>
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
                  {/* <td>
                    <button onClick={() => handleEditInsurance(insurance)} disabled={loading}>
                      Edit
                    </button>
                    <button onClick={() => handleDeleteInsurance(insurance.inusranceId)} disabled={loading}>
                      Delete
                    </button>
                  </td> */}
                   <td>
                 
                      <FontAwesomeIcon icon={faEdit} onClick={() => handleEditInsurance(insurance)} disabled={loading} style={{color:'orange',fontSize:'30px'}}/>
               
                
                      <FontAwesomeIcon icon={faTrashAlt} onClick={() => handleDeleteInsurance(insurance.insuranceId)} disabled={loading} style={{color:'red',fontSize:'30px',marginLeft:'27px'}} />
                 
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

export default AdminInsuranceManage;





