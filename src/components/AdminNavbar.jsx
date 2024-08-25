
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import '../styles/AdminNavbar.css';


const AdminNavbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => setIsNavOpen(!isNavOpen);
    return (

        <nav className="admin-navbar">
            <div className="admin-navbar-container" >
                <Link to="/admin-dash" className="admin-navbar-logo" >
                    <img
                        src="https://i.pinimg.com/236x/83/1e/85/831e85e0f7a0e9232fc05d7b0f7bb790.jpg"
                        width="50"
                        height="50"
                        className="admin-navbar-logo-img"
                        alt="Admin Logo"

                    />
                    Admin Dashboard
                </Link>
                <button className="admin-nav-toggle" onClick={toggleNav}>
                    ☰
                </button>
                <ul className={`admin-nav-menu ${isNavOpen ? 'active' : ''}`}>
                    <li className="admin-nav-item">
                        <Link to="/applicant-info" className="admin-nav-links">Applicant Info</Link>
                    </li>
                    <li className="admin-nav-item">
                        <Link to="/insurance-admin" className="admin-nav-links">Insurance</Link>
                    </li>
                    <li className="admin-nav-item">
                        <Link to="/admin-apply-insurance" className="admin-nav-links">Manage Insurance</Link>
                    </li>
                    <li className="admin-nav-item">
                        <Link to="/risk-calculation" className="admin-nav-links">Risk Calculation</Link>
                    </li>
                    <li className="admin-nav-item">
                        <Link to="/premium-calculation" className="admin-nav-links">Premium Calculation</Link>
                    </li>
                    <li className="admin-nav-item">
                        <Link to="/payment-verification" className="admin-nav-links">Payment Verification</Link>
                    </li>
                    <li className="admin-nav-item" id="admin-button" >
                        <Logout role="adminId" />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default AdminNavbar;




