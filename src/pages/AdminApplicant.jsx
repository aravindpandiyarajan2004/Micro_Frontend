

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
        localStorage.setItem('selectedApplicantId', applicant.applicantId);
        localStorage.setItem('applicantName', applicant.applicantName);
        localStorage.setItem('email', applicant.email);

        Swal.fire({
            title: 'Applicant Details',
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h3>Applicant Information</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold;">ID:</td>
              <td style="padding: 8px;">${applicant.applicantId}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Name:</td>
              <td style="padding: 8px;">${applicant.applicantName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Email:</td>
              <td style="padding: 8px;">${applicant.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Mobile:</td>
              <td style="padding: 8px;">${applicant.mobile}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Age:</td>
              <td style="padding: 8px;">${applicant.age}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Address:</td>
              <td style="padding: 8px;">${applicant.address}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Date of Birth:</td>
              <td style="padding: 8px;">${applicant.dob}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Occupation:</td>
              <td style="padding: 8px;">${applicant.occupation}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Income:</td>
              <td style="padding: 8px;">${applicant.income}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Gender:</td>
              <td style="padding: 8px;">${applicant.gender}</td>
            </tr>
          </table>
        </div>
      `,
            showCloseButton: true,
            showConfirmButton: false,
            width: '600px',
            customClass: {
                container: 'swal2-container',
                popup: 'swal2-popup',
                title: 'swal2-title',
                content: 'swal2-content'
            }
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
        if (fileType && fileType.includes('image')) {
            return faFileImage;
        } else if (fileType && fileType.includes('pdf')) {
            return faFilePdf;
        } else {
            return faFileAlt;
        }
    };

    return (
        <div className="applicant-details-page">
            <AdminNavbar />
            <div className="applicant-content">
                <h1 className="applicant-heading">Applicant Details</h1><hr />
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


