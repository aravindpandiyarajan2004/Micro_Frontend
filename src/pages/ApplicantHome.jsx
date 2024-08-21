// // // import React from 'react';
// // // import ApplicantNavbar from '../components/ApplicantNavbar';
// // // import '../styles/ApplicantHome.css'; // Ensure to add appropriate styling

// // // const ApplicantHomePage = () => {
// // //     return (
// // //         <div className="applicant-home">
// // //             <ApplicantNavbar />
// // //             <main className="main-content">
// // //                 <section className="policy-info">
// // //                     <h1>Health Insurance Policies</h1>
// // //                     <p>Welcome to our Health Insurance portal. We offer a range of health insurance plans tailored to meet your needs. Explore our schemes below:</p>
// // //                     <div className="schemes">
// // //                         <div className="scheme">
// // //                             <h2>Scheme A</h2>
// // //                             <p>Comprehensive coverage with low premiums. Includes hospital stays, doctor visits, and routine check-ups.</p>
// // //                         </div>
// // //                         <div className="scheme">
// // //                             <h2>Scheme B</h2>
// // //                             <p>Extended coverage with additional benefits. Includes dental care, vision care, and wellness programs.</p>
// // //                         </div>
// // //                         <div className="scheme">
// // //                             <h2>Scheme C</h2>
// // //                             <p>Premium coverage with extensive benefits. Includes international coverage, alternative medicine, and annual health screenings.</p>
// // //                         </div>
// // //                     </div>
// // //                 </section>
// // //             </main>
// // //             <footer className="footer">
// // //                 <p>&copy; 2024 InsuranceApp. All rights reserved.</p>
// // //                 <p>Privacy Policy | Terms of Service</p>
// // //             </footer>
// // //         </div>
// // //     );
// // // };

// // // export default ApplicantHomePage;

// // import React from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import ApplicantNavbar from '../components/ApplicantNavbar';
// // import '../styles/ApplicantHome.css'; // Ensure to add appropriate styling

// // const ApplicantHomePage = () => {
// //     const navigate = useNavigate();

// //     const handleSchemeClick = (scheme) => {
// //         // Store the selected scheme in session storage
// //         sessionStorage.setItem('selectedScheme', scheme);

// //         // Navigate to the Apply Insurance page
// //         navigate('/apply-insurance');
// //     };

// //     return (
// //         <div className="applicant-home">
// //             <ApplicantNavbar />
// //             <main className="main-content">
// //                 <section className="policy-info">
// //                     <h1>Health Insurance Policies</h1>
// //                     <p>Welcome to our Health Insurance portal. We offer a range of health insurance plans tailored to meet your needs. Explore our schemes below:</p>
// //                     <div className="schemes">
// //                         <div className="scheme" onClick={() => handleSchemeClick('Scheme A')}>
// //                             <h2>Scheme A</h2>
// //                             <p>Comprehensive coverage with low premiums. Includes hospital stays, doctor visits, and routine check-ups.</p>
// //                         </div>
// //                         <div className="scheme" onClick={() => handleSchemeClick('Scheme B')}>
// //                             <h2>Scheme B</h2>
// //                             <p>Extended coverage with additional benefits. Includes dental care, vision care, and wellness programs.</p>
// //                         </div>
// //                         <div className="scheme" onClick={() => handleSchemeClick('Scheme C')}>
// //                             <h2>Scheme C</h2>
// //                             <p>Premium coverage with extensive benefits. Includes international coverage, alternative medicine, and annual health screenings.</p>
// //                         </div>
// //                     </div>
// //                 </section>
// //             </main>
// //             <footer className="footer">
// //                 <p>&copy; 2024 InsuranceApp. All rights reserved.</p>
// //                 <p>Privacy Policy | Terms of Service</p>
// //             </footer>
// //         </div>
// //     );
// // };

// // export default ApplicantHomePage;

// // src/pages/ApplicantHomePage.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import ApplicantNavbar from '../components/ApplicantNavbar';
// import '../styles/ApplicantHome.css'; // Ensure to add appropriate styling

// const ApplicantHomePage = () => {
//     const navigate = useNavigate();

//     const handleSchemeClick = (scheme, id) => {
//         // Store both the selected scheme and its ID in session storage
//         sessionStorage.setItem('selectedScheme', scheme);
//         sessionStorage.setItem('insuranceId', id);

//         // Navigate to the Apply Insurance page
//         navigate('/apply-insurance');
//     };

//     return (
//         <div className="applicant-home">
//             <ApplicantNavbar />
//             <main className="main-content">
//                 <section className="policy-info">
//                     <h1>Health Insurance Policies</h1>
//                     <p>Welcome to our Health Insurance portal. We offer a range of health insurance plans tailored to meet your needs. Explore our schemes below:</p>
//                     <div className="schemes">
//                         <div className="scheme" onClick={() => handleSchemeClick('Scheme A', '1')}>
//                             <h2>Scheme A</h2>
//                             <p>Comprehensive coverage with low premiums. Includes hospital stays, doctor visits, and routine check-ups.</p>
//                         </div>
//                         <div className="scheme" onClick={() => handleSchemeClick('Scheme B', '2')}>
//                             <h2>Scheme B</h2>
//                             <p>Extended coverage with additional benefits. Includes dental care, vision care, and wellness programs.</p>
//                         </div>
//                         <div className="scheme" onClick={() => handleSchemeClick('Scheme C', '3')}>
//                             <h2>Scheme C</h2>
//                             <p>Premium coverage with extensive benefits. Includes international coverage, alternative medicine, and annual health screenings.</p>
//                         </div>
//                     </div>
//                 </section>
//             </main>
//             <footer className="footer">
//                 <p>&copy; 2024 InsuranceApp. All rights reserved.</p>
//                 <p>Privacy Policy | Terms of Service</p>
//             </footer>
//         </div>
//     );
// };

// export default ApplicantHomePage;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ApplicantNavbar from '../components/ApplicantNavbar';
import '../styles/ApplicantHome.css';

const ApplicantHomePage = () => {
  const [schemes, setSchemes] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSchemes = async () => {
      try {
        const response = await axios.get('http://localhost:8027/insurance/all');
        setSchemes(response.data);
        setError('');
      } catch (error) {
        console.error('Error fetching schemes:', error);
        setError('Error fetching insurance schemes.');
      }
    };

    fetchSchemes();
  }, []);

  const handleSchemeClick = (scheme, inusranceId) => {
    // Store both the selected scheme and its ID in session storage
    sessionStorage.setItem('selectedScheme', scheme);
    sessionStorage.setItem('inusranceId', inusranceId);

    // Navigate to the Apply Insurance page
    navigate('/apply-insurance');
  };

  return (
    <div className="applicant-home">
      <ApplicantNavbar />
      <main className="main-content">
        <section className="policy-info">
          <h1 style={{marginTop:50}}>Health Insurance Policies</h1>
          <p>Welcome to our Health Insurance portal. We offer a range of health insurance plans tailored to meet your needs. Explore our schemes below:</p>
          {error && <p className="error-message">{error}</p>}
          <div className="schemes">
            {schemes.length > 0 ? (
              schemes.map((scheme) => (
                <div className="scheme" key={scheme.inusranceId} onClick={() => handleSchemeClick(scheme.insuranceName, scheme.inusranceId)}>
                  <h2>{scheme.insuranceName}</h2>
                  <p>{scheme.description}</p>
                </div>
              ))
            ) : (
              <p>No insurance schemes available.</p>
            )}
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 InsuranceApp. All rights reserved.</p>
        <p>Privacy Policy | Terms of Service</p>
      </footer>
    </div>
  );
};

export default ApplicantHomePage;

