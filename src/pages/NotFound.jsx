// pages/NotFound.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <img src="https://flexdata.accuratesoftware.online/assets/images/not-found/6358482.jpg" height={30} width={500}/>
      <button onClick={() => navigate('/applicant-login')} style={{width:200, marginLeft:600,borderRadius:10}}>Go to Login Page</button>
    </div>
  );
};

export default NotFound;
