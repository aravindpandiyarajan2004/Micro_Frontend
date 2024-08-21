

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNavbar from '../components/AdminNavbar';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faFilePdf, faFileImage, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/AdminApplicant.css';

const AdminApplicant = () => {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const response = await axios.get('http://localhost:8027/admin/applicants');
        setApplicants(response.data);
      } catch (error) {
        console.error('Error fetching applicants:', error);
      }
    };

    fetchApplicants();
  }, []);

  const showDetails = (applicant) => {
    // Store the applicant ID in local storage
    localStorage.setItem('selectedApplicantId', applicant.applicantId);
    localStorage.setItem('applicantName', applicant.applicantName);
    localStorage.setItem('email', applicant.email);

    Swal.fire({
      title: 'Applicant Details',
      html: `
        <p><strong>ID:</strong> ${applicant.applicantId}</p>
        <p><strong>Name:</strong> ${applicant.applicantName}</p>
        <p><strong>Email:</strong> ${applicant.email}</p>
        <p><strong>Mobile:</strong> ${applicant.mobile}</p>
        <p><strong>Age:</strong> ${applicant.age}</p>
        <p><strong>Address:</strong> ${applicant.address}</p>
        <p><strong>Date of Birth:</strong> ${applicant.dob}</p>
        <p><strong>Occupation:</strong> ${applicant.occupation}</p>
        <p><strong>Income:</strong> ${applicant.income}</p>
        <p><strong>Gender:</strong> ${applicant.gender}</p>
      `,
      showCloseButton: true,
      showConfirmButton: false,
      width: '600px'
    });
  };

  const viewIdProof = (idProof) => {
    if (idProof) {
      Swal.fire({
        title: "ID Proof",
        imageUrl: `data:image/png;base64,${idProof}`,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "ID Proof"
      });
    } else {
      Swal.fire({
        title: 'No ID Proof',
        text: 'No ID proof available for this applicant.',
        icon: 'info'
      });
    }
  };

  const getFileIcon = (fileType) => {
    // Default icon if fileType is undefined or doesn't match known types
    const defaultIcon = faFileAlt;

    if (fileType && fileType.includes('image')) {
      return faFileImage;
    } else if (fileType && fileType.includes('pdf')) {
      return faFilePdf;
    } else {
      return defaultIcon;
    }
  };

  return (
    <div className="applicant-details-page">
      <AdminNavbar />
      <div className="applicant-content">
        <h1 className="applicant-heading">Applicant Details</h1><hr/>
        {applicants.length > 0 ? (
          <table className="applicant-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>ID Proof</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {applicants.map(applicant => (
                <tr key={applicant.applicantId}>
                  <td>{applicant.applicantId}</td>
                  <td>{applicant.applicantName}</td>
                  <td>{applicant.email}</td>
                  <td>{applicant.age}</td>
                  <td>
                    <button
                      onClick={() => viewIdProof(applicant.idProof)}
                      className="view-button"
                    >
                      <FontAwesomeIcon icon={getFileIcon(applicant.idProofType)} />
                    </button>
                  </td>
                  <td>
                    <button onClick={() => showDetails(applicant)} className="view-button">
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No applicants found</p>
        )}
      </div>
    </div>
  );
};

export default AdminApplicant;


