// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import '../styles/ApplicantNavbar.css'; // Ensure to add appropriate styling

// // const Navbar = () => {
// //     const [isNavOpen, setIsNavOpen] = useState(false);

// //     const toggleNav = () => setIsNavOpen(!isNavOpen);

// //     return (
// //         <nav className="navbar">
// //             <div className="navbar-container">
// //                 <Link to="/" className="navbar-logo">
// //                     <img
// //                         src="https://i.pinimg.com/236x/83/1e/85/831e85e0f7a0e9232fc05d7b0f7bb790.jpg"
// //                         width="50"
// //                         height="50"
// //                         className="navbar-logo-img"
// //                         alt="Health Insurance Logo"
// //                     />
// //                     Health Insurance
// //                 </Link>
// //                 <button className="nav-toggle" onClick={toggleNav}>
// //                     ☰
// //                 </button>
// //                 <ul className={`nav-menu ${isNavOpen ? 'active' : ''}`}>
// //                     <li className="nav-item">
// //                         <Link to="/apply-insurance" className="nav-links">Apply Insurance</Link>
// //                     </li>
// //                     <li className="nav-item">
// //                         <Link to="/application-tracking" className="nav-links">Application Tracking</Link>
// //                     </li>
// //                     <li className="nav-item">
// //                         <Link to="/payment" className="nav-links">Payment</Link>
// //                     </li>
// //                     <li className="nav-item">
// //                         <Link to="/applicant-login" className="nav-links">Logout</Link>
// //                     </li>
// //                 </ul>
// //             </div>
// //         </nav>
// //     );
// // };

// // export default Navbar;
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import '../styles/ApplicantNavbar.css'; // Ensure to add appropriate styling

// const Navbar = () => {
//     const [isNavOpen, setIsNavOpen] = useState(false);
//     const navigate = useNavigate();

//     const toggleNav = () => setIsNavOpen(!isNavOpen);

//     const handleLogout = () => {
//         // Remove applicant ID from local storage
//         localStorage.removeItem('applicantId');
        
//         // Optionally, show a logout confirmation message
//         Swal.fire({
//             icon: 'success',
//             title: 'Logged out successfully',
//             timer: 2000,
//             showConfirmButton: false,
//         });

//         // Navigate to the login page
//         navigate('/applicant-login');
//     };

//     return (
//         <nav className="navbar">
//             <div className="navbar-container">
//                 <Link to="/applicant-dash" className="navbar-logo">
//                     <img
//                         src="https://i.pinimg.com/236x/83/1e/85/831e85e0f7a0e9232fc05d7b0f7bb790.jpg"
//                         width="50"
//                         height="50"
//                         className="navbar-logo-img"
//                         alt="Health Insurance Logo"
//                     />
//                     Health Insurance
//                 </Link>
//                 <button className="nav-toggle" onClick={toggleNav}>
//                     ☰
//                 </button>
//                 <ul className={`nav-menu ${isNavOpen ? 'active' : ''}`}>
//                     <li className="nav-item">
//                         <Link to="/apply-insurance" className="nav-links">Apply Insurance</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to="/application-tracking" className="nav-links">Application Tracking</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to="/payment" className="nav-links">Payment</Link>
//                     </li>
//                     <li className="nav-item">
//                         <button className="nav-links" onClick={handleLogout}>Logout</button>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

// src/components/ApplicantNavbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout'; // Import the Logout component
import '../styles/ApplicantNavbar.css'; // Ensure to add appropriate styling

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
                        <Logout role="applicantId" /> {/* Use Logout component with applicantId */}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default ApplicantNavbar;
