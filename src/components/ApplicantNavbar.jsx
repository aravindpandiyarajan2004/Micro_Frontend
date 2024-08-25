
import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import '../styles/ApplicantNavbar.css';

const ApplicantNavbar = () => {
    return (
        <nav className="applicant-navbar">
            <div className="applicant-navbar-container">
                <Link to="/applicant-dash" className="applicant-navbar-logo">
                    <img
                        src="https://i.pinimg.com/236x/83/1e/85/831e85e0f7a0e9232fc05d7b0f7bb790.jpg"
                        width="50"
                        height="50"
                        className="applicant-navbar-logo-img"
                        alt="Health Insurance Logo"
                    />
                    Health Insurance
                </Link>
                <ul className="applicant-nav-menu">
                    {/* <li className="applicant-nav-item" style={{marginLeft:'150px'}}> */}
                    <li className="applicant-nav-item" >
                        <Link to="/apply-insurance" className="applicant-nav-links">Apply Insurance</Link>
                    </li>
                    <li className="applicant-nav-item">
                        <Link to="/application-tracking" className="applicant-nav-links">Application Tracking</Link>
                    </li>
                    <li className="applicant-nav-item">
                        <Link to="/payment" className="applicant-nav-links">Payment</Link>
                    </li>
                    {/* <li className="applicant-nav-item" style={{marginLeft:'520px'}}> */}
                    <li className="applicant-nav-item" >
                        <Logout role="applicantId" />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default ApplicantNavbar;
