

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../styles/ApplicantRegister.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

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
        idProof: null,
    });

    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState('');
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

        if (name === 'age') {
            const currentYear = new Date().getFullYear();
            const dobYear = currentYear - parseInt(value, 10);
            const currentDob = inputData.dob ? new Date(inputData.dob) : new Date();
            const dob = new Date(dobYear, currentDob.getMonth(), currentDob.getDate()).toISOString().split('T')[0];
            setInputData((prevData) => ({
                ...prevData,
                dob,
            }));
        }

        if (name === 'dob') {
            const currentYear = new Date().getFullYear();
            const parts = value.split('-');
            if (parts.length === 3) {
                const dobYear = parseInt(parts[0], 10);
                const age = currentYear - dobYear;
                setInputData((prevData) => ({
                    ...prevData,
                    age: age.toString(),
                }));
            }
        }

        if (name === 'password') {
            const password = value;
            const hasUppercase = /[A-Z]/.test(password);
            const hasLowercase = /[a-z]/.test(password);
            const hasNumber = /\d/.test(password);
            const hasSpecial = /[!@#$%^&*()_+{}\[\]:;"'<>,.?/~`|\\-]/.test(password);
            const isLengthValid = password.length >= 6;

            if (isLengthValid && hasUppercase && hasLowercase && hasNumber && hasSpecial) {
                setPasswordStrength('Strong');
            } else {
                setPasswordStrength('Weak');
            }
        }

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };

    const validateValues = () => {
        const newErrors = {};

        if (!inputData.applicantName) newErrors.applicantName = 'Name is required.';
        if (!inputData.email) newErrors.email = 'Email is required.';
        if (!inputData.mobile) newErrors.mobile = 'Mobile number is required.';
        if (!inputData.age) newErrors.age = 'Age is required.';
        if (!inputData.dob) newErrors.dob = 'Date of Birth is required.';
        if (!inputData.password) newErrors.password = 'Password is required.';
        if (!inputData.confirmPassword) newErrors.confirmPassword = 'Confirm Password is required.';
        if (!inputData.address) newErrors.address = 'Address is required.';
        if (!inputData.occupation) newErrors.occupation = 'Occupation is required.';
        if (!inputData.income) newErrors.income = 'Income is required.';
        if (!inputData.gender) newErrors.gender = 'Gender must be selected.';
        if (!inputData.idProof) newErrors.idProof = 'ID Proof is required.';

        if (inputData.applicantName && /[^a-zA-Z\s]/.test(inputData.applicantName)) {
            newErrors.applicantName = 'Name should contain only alphabets.';
        }

        if (inputData.mobile && (!/^\d{10}$/.test(inputData.mobile))) {
            newErrors.mobile = 'Mobile number must be 10 digits long and contain only numbers.';
        }

        if (inputData.age && (inputData.age < 18 || inputData.age > 80)) {
            newErrors.age = 'Age must be between 18 and 80.';
        }

        if (inputData.password) {
            const password = inputData.password;
            const hasUppercase = /[A-Z]/.test(password);
            const hasLowercase = /[a-z]/.test(password);
            const hasNumber = /\d/.test(password);
            const hasSpecial = /[!@#$%^&*()_+{}\[\]:;"'<>,.?/~`|\\-]/.test(password);
            const isLengthValid = password.length >= 6;

            if (!isLengthValid) {
                newErrors.password = 'Password must be at least 6 characters long.';
            } else if (!hasUppercase || !hasLowercase || !hasNumber || !hasSpecial) {
                newErrors.password = 'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.';
            }
        }

        if (inputData.password && inputData.confirmPassword && inputData.password !== inputData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match.';
        }

        if (inputData.idProof) {
            const allowedFormats = ['application/pdf', 'image/jpeg'];
            if (!allowedFormats.includes(inputData.idProof.type)) {
                newErrors.idProof = 'ID Proof must be a PDF or JPG file.';
            }
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

        if (passwordStrength === 'Weak') {
            Swal.fire({
                title: 'Weak Password',
                text: 'Password must be at least 6 characters long, with 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.',
                icon: 'warning',
            });
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
            await axios.post('http://localhost:8027/applicant', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            Swal.fire({
                title: 'Registered Successfully!',
                icon: 'success',
            });

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

    const getPasswordStrengthColor = () => {
        return passwordStrength === 'Strong' ? 'green' : 'red';
    };

    return (
        <div className="registration-wrapper">
            <button
                type="button"
                className="back-button"
                onClick={() => navigate('/')}
            >
                <FontAwesomeIcon icon={faArrowLeft} /> Back
            </button>
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
                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={inputData.address}
                                onChange={handleChange}
                            />
                            {errors.address && <div className="error-message">{errors.address}</div>}
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
                            {errors.occupation && <div className="error-message">{errors.occupation}</div>}
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
                            {errors.income && <div className="error-message">{errors.income}</div>}
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
                            {errors.gender && <div className="error-message">{errors.gender}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="idProof">ID Proof</label>
                            <input
                                type="file"
                                id="idProof"
                                name="idProof"
                                onChange={handleChange}
                            />
                            {errors.idProof && <div className="error-message">{errors.idProof}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={inputData.password}
                                onChange={handleChange}
                                style={{ borderColor: getPasswordStrengthColor() }}
                            />
                            {errors.password && <div className="error-message">{errors.password}</div>}
                            {inputData.password && (
                                <div className="password-strength" style={{ color: getPasswordStrengthColor() }}>
                                    Password Strength: {passwordStrength}
                                </div>
                            )}
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
                            <button type="submit" disabled={submitting} style={{ backgroundColor: 'blue' }}>
                                {submitting ? 'Submitting...' : 'Submit'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ApplicantRegistration;
