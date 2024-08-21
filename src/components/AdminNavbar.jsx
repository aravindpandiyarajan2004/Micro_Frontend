// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import '../styles/AdminNavbar.css'; // Ensure to add appropriate styling

// const AdminNavbar = () => {
//     const [isNavOpen, setIsNavOpen] = useState(false);
//     const navigate = useNavigate();
//     const toggleNav = () => setIsNavOpen(!isNavOpen);

//     const handleLogout = () => {
//         // Remove applicant ID from local storage
//         localStorage.removeItem('selectedApplicantId');
        
//         // Optionally, show a logout confirmation message
//         Swal.fire({
//             icon: 'success',
//             title: 'Logged out successfully',
//             timer: 2000,
//             showConfirmButton: false,
//         });

//         // Navigate to the login page
//         navigate('/admin-login');
//     };

//     return (
//         <nav className="navbar">
//             <div className="navbar-container">
//                 <Link to="/admin-dash" className="navbar-logo">
//                     <img
//                         src="https://i.pinimg.com/236x/83/1e/85/831e85e0f7a0e9232fc05d7b0f7bb790.jpg"
//                         width="50"
//                         height="50"
//                         className="navbar-logo-img"
//                         alt="Admin Logo"
//                     />
//                     Admin Dashboard
//                 </Link>
//                 <button className="nav-toggle" onClick={toggleNav}>
//                     ☰
//                 </button>
//                 <ul className={`nav-menu ${isNavOpen ? 'active' : ''}`}>
//                     <li className="nav-item">
//                         <Link to="/applicant-info" className="nav-links">Applicant Info</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to="/insurance-admin" className="nav-links">Insurance</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to="/admin-apply-insurance" className="nav-links">Manage Insurance</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to="/risk-calculation" className="nav-links">Risk Calculation</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to="/premium-calculation" className="nav-links">Premium Calculation</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to="/payment-verification" className="nav-links">Payment Verification</Link>
//                     </li>
//                     <li className="nav-item">
//                         <button className="nav-links" onClick={handleLogout}>Logout</button>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// };

// export default AdminNavbar;

import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import Logout from './Logout'; // Import the Logout component
import '../styles/AdminNavbar.css'; // Ensure to add appropriate styling


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
                    <li className="admin-nav-item" >
                        <Logout role="adminId"/> 
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default AdminNavbar;




