// pages/NotFound.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <button onClick={() => navigate('/applicant-login')}>Go to Login Page</button>
    </div>
  );
};

export default NotFound;
