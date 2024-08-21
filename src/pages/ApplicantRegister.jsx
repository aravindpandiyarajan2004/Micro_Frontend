

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert2
import '../styles/ApplicantRegister.css'; // Ensure to add appropriate styling

const ApplicantRegistration = () => {
  const [inputData, setInputData] = useState({
    applicantName: '',
    email: '',
    mobile: '',
    age: '',
    address: '',
    dob: '',
    password: '',
    confirmPassword: '',
    occupation: '',
    income: '',
    gender: '',
    idProof: null, // For file upload
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setInputData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setInputData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }

    // Clear the error message for the changed field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validateValues = () => {
    const newErrors = {};

    // Validate each field
    if (!inputData.applicantName) newErrors.applicantName = 'Name is required.';
    if (!inputData.email) newErrors.email = 'Email is required.';
    if (!inputData.mobile) newErrors.mobile = 'Mobile number is required.';
    if (!inputData.age) newErrors.age = 'Age is required.';
    if (!inputData.dob) newErrors.dob = 'Date of Birth is required.';
    if (!inputData.password) newErrors.password = 'Password is required.';
    if (!inputData.confirmPassword) newErrors.confirmPassword = 'Confirm Password is required.';
    if (!inputData.idProof) newErrors.idProof = 'ID Proof is required.';

    if (inputData.mobile && inputData.mobile.length !== 10) newErrors.mobile = 'Mobile number must be 10 digits long.';
    if (inputData.age && (inputData.age < 0 || inputData.age > 120)) newErrors.age = 'Age must be a valid number between 0 and 120.';
    if (inputData.password && inputData.confirmPassword && inputData.password !== inputData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match.';

    if (inputData.idProof) {
      const allowedFormats = ['application/pdf', 'image/jpeg'];
      if (!allowedFormats.includes(inputData.idProof.type)) newErrors.idProof = 'ID Proof must be a PDF or JPG file.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!validateValues()) {
      setSubmitting(false);
      return;
    }

    const formData = new FormData();
    Object.keys(inputData).forEach((key) => {
      if (inputData[key]) {
        formData.append(key, inputData[key]);
      }
    });

    try {
      // Logging the FormData contents (for debugging)
      for (let pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }

      await axios.post('http://localhost:8027/applicant', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Display success message
      Swal.fire({
        title: 'Registered Successfully!',
        icon: 'success',
      });

      // Navigate to login page after successful registration
      navigate('/applicant-login');
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
    <div className="registration-container">
      <form onSubmit={handleSubmit}>
        <h1>Applicant Registration</h1>
        {errors.submit && <div className="alert alert-danger">{errors.submit}</div>}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="applicantName">Name</label>
            <input
              type="text"
              id="applicantName"
              name="applicantName"
              value={inputData.applicantName}
              onChange={handleChange}
            />
            {errors.applicantName && <div className="error-message">{errors.applicantName}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={inputData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={inputData.mobile}
              onChange={handleChange}
            />
            {errors.mobile && <div className="error-message">{errors.mobile}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={inputData.age}
              onChange={handleChange}
            />
            {errors.age && <div className="error-message">{errors.age}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={inputData.address}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={inputData.dob}
              onChange={handleChange}
            />
            {errors.dob && <div className="error-message">{errors.dob}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={inputData.password}
              onChange={handleChange}
            />
            {errors.password && <div className="error-message">{errors.password}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={inputData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="occupation">Occupation</label>
            <input
              type="text"
              id="occupation"
              name="occupation"
              value={inputData.occupation}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="income">Income</label>
            <input
              type="text"
              id="income"
              name="income"
              value={inputData.income}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              value={inputData.gender}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="idProof">ID Proof (PDF or JPG only)</label>
            <input
              type="file"
              id="idProof"
              name="idProof"
              onChange={handleChange}
            />
            {errors.idProof && <div className="error-message">{errors.idProof}</div>}
          </div>
        </div>
        <button type="submit" disabled={submitting}>
          {submitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default ApplicantRegistration;

