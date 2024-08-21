

// // // // import React, { useEffect, useState } from 'react';
// // // // import axios from 'axios';
// // // // import AdminNavbar from '../components/AdminNavbar';
// // // // import '../styles/AdminHome.css'; // Import your CSS

// // // // const AdminHomePage = () => {
// // // //   const [applicantCount, setApplicantCount] = useState(0);
// // // //   const [insuranceCount, setInsuranceCount] = useState(0);
// // // //   const [riskCount, setRiskCount] = useState(0);
// // // //   const [premiumCount, setPremiumCount] = useState(0);
// // // //   const [recentApplications, setRecentApplications] = useState([]);
// // // //   const [recentPayments, setRecentPayments] = useState([]);

// // // //   useEffect(() => {
// // // //     const fetchDashboardData = async () => {
// // // //       try {
// // // //         const [applicantsRes, insurancesRes, risksRes, premiumsRes, applicationsRes, paymentsRes] = await Promise.all([
// // // //           axios.get('http://localhost:8027/admin/applicants'),
// // // //           axios.get('http://localhost:8027/admin/insurances'),
// // // //           axios.get('http://localhost:8027/admin/risks'),
// // // //           axios.get('http://localhost:8027/admin/premiums'),
// // // //           axios.get('http://localhost:8027/admin/applyInsurance'),
// // // //           axios.get('http://localhost:8027/admin/payment')
// // // //         ]);

// // // //         setApplicantCount(applicantsRes.data.length);
// // // //         setInsuranceCount(insurancesRes.data.length);
// // // //         setRiskCount(risksRes.data.length);
// // // //         setPremiumCount(premiumsRes.data.length);
// // // //         setRecentApplications(applicationsRes.data.slice(-5));
// // // //         setRecentPayments(paymentsRes.data.slice(-5));
// // // //       } catch (error) {
// // // //         console.error('Error fetching dashboard data:', error);
// // // //       }
// // // //     };

// // // //     fetchDashboardData();
// // // //   }, []);

// // // //   return (
// // // //     <div className="admin-home-page">
// // // //       <AdminNavbar />
// // // //       <div className="dashboard-content">
// // // //         <h1 className="dashboard-heading">Admin Dashboard</h1>
// // // //         <div className="dashboard-summary">
// // // //           <div className="summary-item">
// // // //             <h2>Total Applicants</h2>
// // // //             <p>{applicantCount}</p>
// // // //           </div>
// // // //           <div className="summary-item">
// // // //             <h2>Total Insurance Policies</h2>
// // // //             <p>{insuranceCount}</p>
// // // //           </div>
// // // //           <div className="summary-item">
// // // //             <h2>Total Risks</h2>
// // // //             <p>{riskCount}</p>
// // // //           </div>
// // // //           <div className="summary-item">
// // // //             <h2>Total Premiums</h2>
// // // //             <p>{premiumCount}</p>
// // // //           </div>
// // // //         </div>
// // // //         <div className="recent-activities">
// // // //           <h2>Recent Applications</h2>
// // // //           <ul>
// // // //             {recentApplications.length ? (
// // // //               recentApplications.map((application, index) => (
// // // //                 <li key={index}>
// // // //                   <strong>Policy Number:</strong> {application.policyNumber} <br />
// // // //                   <strong>Date:</strong> {new Date(application.insuranceDate).toLocaleDateString()} <br />
// // // //                   <strong>Status:</strong> {application.status}
// // // //                 </li>
// // // //               ))
// // // //             ) : (
// // // //               <li>No recent applications</li>
// // // //             )}
// // // //           </ul>
// // // //           <h2>Recent Payments</h2>
// // // //           <ul>
// // // //             {recentPayments.length ? (
// // // //               recentPayments.map((payment, index) => (
// // // //                 <li key={index}>
// // // //                   <strong>Amount:</strong> ${payment.amount} <br />
// // // //                   <strong>Payment Method:</strong> {payment.payMethod} <br />
// // // //                   <strong>Date:</strong> {new Date(payment.payDate).toLocaleDateString()}
// // // //                 </li>
// // // //               ))
// // // //             ) : (
// // // //               <li>No recent payments</li>
// // // //             )}
// // // //           </ul>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AdminHomePage;

// // // import React, { useEffect, useState } from 'react';
// // // import axios from 'axios';
// // // import AdminNavbar from '../components/AdminNavbar';
// // // import '../styles/AdminHome.css'; // Import your CSS

// // // const AdminHomePage = () => {
// // //   const [applicantCount, setApplicantCount] = useState(0);
// // //   const [insuranceCount, setInsuranceCount] = useState(0);
// // //   const [riskCount, setRiskCount] = useState(0);
// // //   const [premiumCount, setPremiumCount] = useState(0);
// // //   const [recentApplications, setRecentApplications] = useState([]);
// // //   const [recentPayments, setRecentPayments] = useState([]);
// // //   const [approvedInsurances, setApprovedInsurances] = useState([]);
// // //   const [rejectedInsurances, setRejectedInsurances] = useState([]);
// // //   const [pendingInsurances, setPendingInsurances] = useState([]);
// // //   const [selectedInsurances, setSelectedInsurances] = useState([]);
// // //   const [statusFilter, setStatusFilter] = useState('all'); // 'approved', 'rejected', 'pending', 'all'

// // //   useEffect(() => {
// // //     const fetchDashboardData = async () => {
// // //       try {
// // //         const [applicantsRes, insurancesRes, risksRes, premiumsRes, applicationsRes, paymentsRes] = await Promise.all([
// // //           axios.get('http://localhost:8027/admin/applicants'),
// // //           axios.get('http://localhost:8027/admin/insurances'),
// // //           axios.get('http://localhost:8027/admin/risks'),
// // //           axios.get('http://localhost:8027/admin/premiums'),
// // //           axios.get('http://localhost:8027/admin/applyInsurance'),
// // //           axios.get('http://localhost:8027/admin/payment')
// // //         ]);

// // //         setApplicantCount(applicantsRes.data.length);
// // //         setInsuranceCount(insurancesRes.data.length);
// // //         setRiskCount(risksRes.data.length);
// // //         setPremiumCount(premiumsRes.data.length);
// // //         setRecentApplications(applicationsRes.data.slice(-5));
// // //         setRecentPayments(paymentsRes.data.slice(-5));

// // //         // Separate insurances by status
// // //         setApprovedInsurances(insurancesRes.data.filter(insurance => insurance.status === 'approved'));
// // //         setRejectedInsurances(insurancesRes.data.filter(insurance => insurance.status === 'rejected'));
// // //         setPendingInsurances(insurancesRes.data.filter(insurance => insurance.status === 'pending'));
// // //       } catch (error) {
// // //         console.error('Error fetching dashboard data:', error);
// // //       }
// // //     };

// // //     fetchDashboardData();
// // //   }, []);

// // //   // Filter insurance records based on selected status
// // //   useEffect(() => {
// // //     switch (statusFilter) {
// // //       case 'approved':
// // //         setSelectedInsurances(approvedInsurances);
// // //         break;
// // //       case 'rejected':
// // //         setSelectedInsurances(rejectedInsurances);
// // //         break;
// // //       case 'pending':
// // //         setSelectedInsurances(pendingInsurances);
// // //         break;
// // //       default:
// // //         setSelectedInsurances([...approvedInsurances, ...rejectedInsurances, ...pendingInsurances]);
// // //     }
// // //   }, [statusFilter, approvedInsurances, rejectedInsurances, pendingInsurances]);

// // //   return (
// // //     <div className="admin-home-page">
// // //       <AdminNavbar />
// // //       <div className="dashboard-content">
// // //         <h1 className="dashboard-heading">Admin Dashboard</h1>
// // //         <div className="dashboard-summary">
// // //           <div className="summary-item">
// // //             <h2>Total Applicants</h2>
// // //             <p>{applicantCount}</p>
// // //           </div>
// // //           <div className="summary-item">
// // //             <h2>Total Insurance Policies</h2>
// // //             <p>{insuranceCount}</p>
// // //           </div>
// // //           <div className="summary-item">
// // //             <h2>Total Risks</h2>
// // //             <p>{riskCount}</p>
// // //           </div>
// // //           <div className="summary-item">
// // //             <h2>Total Premiums</h2>
// // //             <p>{premiumCount}</p>
// // //           </div>
// // //         </div>
        
// // //         {/* Insurance Status Filters */}
// // //         <div className="insurance-filters">
// // //           <button onClick={() => setStatusFilter('all')}>All</button>
// // //           <button onClick={() => setStatusFilter('approved')}>Approved</button>
// // //           <button onClick={() => setStatusFilter('rejected')}>Rejected</button>
// // //           <button onClick={() => setStatusFilter('pending')}>Pending</button>
// // //         </div>

// // //         {/* Display selected insurance records */}
// // //         <div className="insurance-records">
// // //           <h2>Insurance Records</h2>
// // //           {selectedInsurances.length ? (
// // //             <ul>
// // //               {selectedInsurances.map((insurance, index) => (
// // //                 <li key={index}>
// // //                   <strong>Policy Number:</strong> {insurance.policyNumber} <br />
// // //                   <strong>Date:</strong> {new Date(insurance.insuranceDate).toLocaleDateString()} <br />
// // //                   <strong>Status:</strong> {insurance.status}
// // //                 </li>
// // //               ))
// // //             </ul>
// // //           ) : (
// // //             <p>No records found for the selected status</p>
// // //           )}
// // //         </div>

// // //         {/* Recent Applications and Payments */}
// // //         <div className="recent-activities">
// // //           <h2>Recent Applications</h2>
// // //           <ul>
// // //             {recentApplications.length ? (
// // //               recentApplications.map((application, index) => (
// // //                 <li key={index}>
// // //                   <strong>Policy Number:</strong> {application.policyNumber} <br />
// // //                   <strong>Date:</strong> {new Date(application.insuranceDate).toLocaleDateString()} <br />
// // //                   <strong>Status:</strong> {application.status}
// // //                 </li>
// // //               ))
// // //             ) : (
// // //               <li>No recent applications</li>
// // //             )}
// // //           </ul>

// // //           <h2>Recent Payments</h2>
// // //           <ul>
// // //             {recentPayments.length ? (
// // //               recentPayments.map((payment, index) => (
// // //                 <li key={index}>
// // //                   <strong>Amount:</strong> ${payment.amount} <br />
// // //                   <strong>Payment Method:</strong> {payment.payMethod} <br />
// // //                   <strong>Date:</strong> {new Date(payment.payDate).toLocaleDateString()}
// // //                 </li>
// // //               ))
// // //             ) : (
// // //               <li>No recent payments</li>
// // //             )}
// // //           </ul>
// // //         </div>

// // //         {/* Navigate to Manage Insurance Page */}
// // //         <div className="manage-insurance">
// // //           <button onClick={() => window.location.href = '/manage-insurance'}>
// // //             Manage Insurance
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default AdminHomePage;

// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import AdminNavbar from '../components/AdminNavbar';
// // import '../styles/AdminHome.css'; // Import your CSS

// // const AdminHomePage = () => {
// //   const [applicantCount, setApplicantCount] = useState(0);
// //   const [insuranceCount, setInsuranceCount] = useState(0);
// //   const [riskCount, setRiskCount] = useState(0);
// //   const [premiumCount, setPremiumCount] = useState(0);
// //   const [recentApplications, setRecentApplications] = useState([]);
// //   const [recentPayments, setRecentPayments] = useState([]);
// //   const [approvedInsurances, setApprovedInsurances] = useState([]);
// //   const [rejectedInsurances, setRejectedInsurances] = useState([]);
// //   const [pendingInsurances, setPendingInsurances] = useState([]);
// //   const [selectedInsurances, setSelectedInsurances] = useState([]);
// //   const [statusFilter, setStatusFilter] = useState('all'); // 'approved', 'rejected', 'pending', 'all'

// //   useEffect(() => {
// //     const fetchDashboardData = async () => {
// //       try {
// //         const [applicantsRes, insurancesRes, risksRes, premiumsRes, applicationsRes, paymentsRes] = await Promise.all([
// //           axios.get('http://localhost:8027/admin/applicants'),
// //           axios.get('http://localhost:8027/admin/insurances'),
// //           axios.get('http://localhost:8027/admin/risks'),
// //           axios.get('http://localhost:8027/admin/premiums'),
// //           axios.get('http://localhost:8027/admin/applyInsurance'),
// //           axios.get('http://localhost:8027/admin/payment')
// //         ]);

// //         setApplicantCount(applicantsRes.data.length);
// //         setInsuranceCount(insurancesRes.data.length);
// //         setRiskCount(risksRes.data.length);
// //         setPremiumCount(premiumsRes.data.length);
// //         setRecentApplications(applicationsRes.data.slice(-5));
// //         setRecentPayments(paymentsRes.data.slice(-5));

// //         // Separate insurances by status
// //         setApprovedInsurances(insurancesRes.data.filter(insurance => insurance.status === 'approved'));
// //         setRejectedInsurances(insurancesRes.data.filter(insurance => insurance.status === 'rejected'));
// //         setPendingInsurances(insurancesRes.data.filter(insurance => insurance.status === 'pending'));
// //       } catch (error) {
// //         console.error('Error fetching dashboard data:', error);
// //       }
// //     };

// //     fetchDashboardData();
// //   }, []);

// //   // Filter insurance records based on selected status
// //   useEffect(() => {
// //     switch (statusFilter) {
// //       case 'approved':
// //         setSelectedInsurances(approvedInsurances);
// //         break;
// //       case 'rejected':
// //         setSelectedInsurances(rejectedInsurances);
// //         break;
// //       case 'pending':
// //         setSelectedInsurances(pendingInsurances);
// //         break;
// //       default:
// //         setSelectedInsurances([...approvedInsurances, ...rejectedInsurances, ...pendingInsurances]);
// //     }
// //   }, [statusFilter, approvedInsurances, rejectedInsurances, pendingInsurances]);

// //   return (
// //     <div className="admin-home-page">
// //       <AdminNavbar />
// //       <div className="dashboard-content">
// //         <h1 className="dashboard-heading">Admin Dashboard</h1>
// //         <div className="dashboard-summary">
// //           <div className="summary-item">
// //             <h2>Total Applicants</h2>
// //             <p>{applicantCount}</p>
// //           </div>
// //           <div className="summary-item">
// //             <h2>Total Insurance Policies</h2>
// //             <p>{insuranceCount}</p>
// //           </div>
// //           <div className="summary-item">
// //             <h2>Total Risks</h2>
// //             <p>{riskCount}</p>
// //           </div>
// //           <div className="summary-item">
// //             <h2>Total Premiums</h2>
// //             <p>{premiumCount}</p>
// //           </div>
// //         </div>
        
// //         {/* Insurance Status Filters */}
// //         <div className="insurance-filters">
// //           <button onClick={() => setStatusFilter('all')}>All</button>
// //           <button onClick={() => setStatusFilter('approved')}>Approved</button>
// //           <button onClick={() => setStatusFilter('rejected')}>Rejected</button>
// //           <button onClick={() => setStatusFilter('pending')}>Pending</button>
// //         </div>

// //         {/* Display selected insurance records */}
// //         <div className="insurance-records">
// //           <h2>Insurance Records</h2>
// //           {selectedInsurances.length ? (
// //             <ul>
// //               {selectedInsurances.map((insurance, index) => (
// //                 <li key={index}>
// //                   <strong>Policy Number:</strong> {insurance.policyNumber} <br />
// //                   <strong>Date:</strong> {new Date(insurance.insuranceDate).toLocaleDateString()} <br />
// //                   <strong>Status:</strong> {insurance.status}
// //                 </li>
// //               ))}
// //             </ul>
// //           ) : (
// //             <p>No records found for the selected status</p>
// //           )}
// //         </div>

// //         {/* Recent Applications and Payments */}
// //         <div className="recent-activities">
// //           <h2>Recent Applications</h2>
// //           <ul>
// //             {recentApplications.length ? (
// //               recentApplications.map((application, index) => (
// //                 <li key={index}>
// //                   <strong>Policy Number:</strong> {application.policyNumber} <br />
// //                   <strong>Date:</strong> {new Date(application.insuranceDate).toLocaleDateString()} <br />
// //                   <strong>Status:</strong> {application.status}
// //                 </li>
// //               ))
// //             ) : (
// //               <li>No recent applications</li>
// //             )}
// //           </ul>

// //           <h2>Recent Payments</h2>
// //           <ul>
// //             {recentPayments.length ? (
// //               recentPayments.map((payment, index) => (
// //                 <li key={index}>
// //                   <strong>Amount:</strong> ${payment.amount} <br />
// //                   <strong>Payment Method:</strong> {payment.payMethod} <br />
// //                   <strong>Date:</strong> {new Date(payment.payDate).toLocaleDateString()}
// //                 </li>
// //               ))
// //             ) : (
// //               <li>No recent payments</li>
// //             )}
// //           </ul>
// //         </div>

// //         {/* Navigate to Manage Insurance Page */}
// //         <div className="manage-insurance">
// //           <button onClick={() => window.location.href = '/admin-apply-insurance'}>
// //             Manage Insurance
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminHomePage;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import AdminNavbar from '../components/AdminNavbar';
// import '../styles/AdminHome.css'; // Import your CSS

// const AdminHomePage = () => {
//   const [applicantCount, setApplicantCount] = useState(0);
//   const [insuranceCount, setInsuranceCount] = useState(0);
//   const [riskCount, setRiskCount] = useState(0);
//   const [premiumCount, setPremiumCount] = useState(0);
//   const [recentApplications, setRecentApplications] = useState([]);
//   const [recentPayments, setRecentPayments] = useState([]);
//   const [insurances, setInsurances] = useState([]);
//   const [selectedInsurances, setSelectedInsurances] = useState([]);
//   const [statusFilter, setStatusFilter] = useState('all'); // 'approved', 'rejected', 'pending', 'all'

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         const [
//           applicantsRes,
//           insurancesRes,
//           risksRes,
//           premiumsRes,
//           applicationsRes,
//           paymentsRes,
//         ] = await Promise.all([
//           axios.get('http://localhost:8027/admin/applicants'),
//           axios.get('http://localhost:8027/admin/insurances'),
//           axios.get('http://localhost:8027/admin/risks'),
//           axios.get('http://localhost:8027/admin/premiums'),
//           axios.get('http://localhost:8027/admin/applyInsurance'),
//           axios.get('http://localhost:8027/admin/payment'),
//         ]);

//         setApplicantCount(applicantsRes.data.length);
//         setInsuranceCount(insurancesRes.data.length);
//         setRiskCount(risksRes.data.length);
//         setPremiumCount(premiumsRes.data.length);
//         setRecentApplications(applicationsRes.data.slice(-5));
//         setRecentPayments(paymentsRes.data.slice(-5));
//         setInsurances(insurancesRes.data);

//         // Filter insurances based on initial filter
//         filterInsurances('all');
//       } catch (error) {
//         console.error('Error fetching dashboard data:', error);
//       }
//     };

//     fetchDashboardData();
//   }, []);

//   const filterInsurances = (status) => {
//     if (status === 'all') {
//       setSelectedInsurances(insurances);
//     } else {
//       setSelectedInsurances(insurances.filter((insurance) => insurance.status === status));
//     }
//     setStatusFilter(status);
//   };

//   return (
//     <div className="admin-home-page">
//       <AdminNavbar />
//       <div className="dashboard-content">
//         <h1 className="dashboard-heading">Admin Dashboard</h1>
//         <div className="dashboard-summary">
//           <div className="summary-item">
//             <h2>Total Applicants</h2>
//             <p>{applicantCount}</p>
//           </div>
//           <div className="summary-item">
//             <h2>Total Insurance Policies</h2>
//             <p>{insuranceCount}</p>
//           </div>
//           <div className="summary-item">
//             <h2>Total Risks</h2>
//             <p>{riskCount}</p>
//           </div>
//           <div className="summary-item">
//             <h2>Total Premiums</h2>
//             <p>{premiumCount}</p>
//           </div>
//         </div>

//         {/* Insurance Status Filters */}
//         <div className="insurance-filters">
//           <button onClick={() => filterInsurances('all')} className={statusFilter === 'all' ? 'active' : ''}>
//             All
//           </button>
//           <button onClick={() => filterInsurances('approved')} className={statusFilter === 'approved' ? 'active' : ''}>
//             Approved
//           </button>
//           <button onClick={() => filterInsurances('rejected')} className={statusFilter === 'rejected' ? 'active' : ''}>
//             Rejected
//           </button>
//           <button onClick={() => filterInsurances('pending')} className={statusFilter === 'pending' ? 'active' : ''}>
//             Pending
//           </button>
//         </div>

//         {/* Display selected insurance records */}
//         <div className="insurance-records">
//           <h2>Insurance Records</h2>
//           {selectedInsurances.length ? (
//             <ul>
//               {selectedInsurances.map((insurance, index) => (
//                 <li key={index} className={`insurance-item ${insurance.status}`}>
//                   <strong>Policy Number:</strong> {insurance.policyNumber} <br />
//                   <strong>Date:</strong> {new Date(insurance.insuranceDate).toLocaleDateString()} <br />
//                   <strong>Status:</strong> {insurance.status}
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No records found for the selected status</p>
//           )}
//         </div>

//         {/* Recent Applications and Payments */}
//         <div className="recent-activities">
//           <h2>Recent Applications</h2>
//           <ul>
//             {recentApplications.length ? (
//               recentApplications.map((application, index) => (
//                 <li key={index}>
//                   <strong>Policy Number:</strong> {application.policyNumber} <br />
//                   <strong>Date:</strong> {new Date(application.insuranceDate).toLocaleDateString()} <br />
//                   <strong>Status:</strong> {application.status}
//                 </li>
//               ))
//             ) : (
//               <li>No recent applications</li>
//             )}
//           </ul>

//           <h2>Recent Payments</h2>
//           <ul>
//             {recentPayments.length ? (
//               recentPayments.map((payment, index) => (
//                 <li key={index}>
//                   <strong>Amount:</strong> ${payment.amount} <br />
//                   <strong>Payment Method:</strong> {payment.payMethod} <br />
//                   <strong>Date:</strong> {new Date(payment.payDate).toLocaleDateString()}
//                 </li>
//               ))
//             ) : (
//               <li>No recent payments</li>
//             )}
//           </ul>
//         </div>

//         {/* Navigate to Manage Insurance Page */}
//         <div className="manage-insurance">
//           <button onClick={() => window.location.href = '/manage-insurance'}>
//             Manage Insurance
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminHomePage;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNavbar from '../components/AdminNavbar';
import '../styles/AdminHome.css'; // Import your CSS

const AdminHomePage = () => {
  const [applicantCount, setApplicantCount] = useState(0);
  const [insuranceCount, setInsuranceCount] = useState(0);
  const [riskCount, setRiskCount] = useState(0);
  const [premiumCount, setPremiumCount] = useState(0);
  const [recentApplications, setRecentApplications] = useState([]);
  const [recentPayments, setRecentPayments] = useState([]);
  const [selectedInsurances, setSelectedInsurances] = useState([]);
  const [statusFilter, setStatusFilter] = useState('all'); // 'approved', 'rejected', 'pending', 'all'

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [applicantsRes, insurancesRes, risksRes, premiumsRes, applicationsRes, paymentsRes] = await Promise.all([
          axios.get('http://localhost:8027/admin/applicants'),
          axios.get('http://localhost:8027/admin/insurances'),
          axios.get('http://localhost:8027/admin/risks'),
          axios.get('http://localhost:8027/admin/premiums'),
          axios.get('http://localhost:8027/admin/applyInsurance'),
          axios.get('http://localhost:8027/admin/payment')
        ]);

        setApplicantCount(applicantsRes.data.length);
        setInsuranceCount(insurancesRes.data.length);
        setRiskCount(risksRes.data.length);
        setPremiumCount(premiumsRes.data.length);
        setRecentApplications(applicationsRes.data.slice(-5));
        setRecentPayments(paymentsRes.data.slice(-5));

        // Fetch insurance records based on initial filter
        fetchInsuranceRecords('all');
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchDashboardData();
  }, []);

  const fetchInsuranceRecords = async (status) => {
    try {
      const response = await axios.get(`http://localhost:8027/applyInsurance/status/${status}`);
      setSelectedInsurances(response.data);
    } catch (error) {
      console.error('Error fetching insurance records:', error);
    }
  };

  const filterInsurances = (status) => {
    setStatusFilter(status);
    fetchInsuranceRecords(status);
  };

  return (
    // <div className="admin-home-page">
    //   <AdminNavbar />
    //   <div className="dashboard-content">
    //     <h1 className="dashboard-heading">Admin Dashboard</h1>
    //     <div className="dashboard-summary">
    //       <div className="summary-item" style={{    transition: 'transform 0.3s ease'}}>
    //         <h2>Total Applicants</h2>
    //         <p>{applicantCount}</p>
    //       </div>
    //       <div className="summary-item">
    //         <h2>Total Insurance Policies</h2>
    //         <p>{insuranceCount}</p>
    //       </div>
    //       <div className="summary-item">
    //         <h2>Total Risks</h2>
    //         <p>{riskCount}</p>
    //       </div>
    //       <div className="summary-item">
    //         <h2>Total Premiums</h2>
    //         <p>{premiumCount}</p>
    //       </div>
    //     </div>

    //     {/* Insurance Status Filters */}
    //     <div className="insurance-filters" style={{display:'flex'}}>
    //       {/* <button onClick={() => filterInsurances('all')} className={statusFilter === 'all' ? 'active' : ''}>
    //         All
    //       </button> */}
    //       <button onClick={() => filterInsurances('approved')} className={statusFilter === 'approved' ? 'active' : ''} style={{width:'550px'}}>
    //         Approved
    //       </button>
    //       <button onClick={() => filterInsurances('rejected')} className={statusFilter === 'rejected' ? 'active' : ''} style={{width:'550px'}}>
    //         Rejected
    //       </button>
    //       <button onClick={() => filterInsurances('pending')} className={statusFilter === 'pending' ? 'active' : ''} style={{width:'550px'}}>
    //         Pending
    //       </button>
    //     </div>

    //     {/* Display selected insurance records */}
    //     <div className="insurance-records" >
    //       <h2>Insurance Records</h2>
    //       {selectedInsurances.length ? (
    //         <ul>
    //           {selectedInsurances.map((insurance, index) => (
    //             <li key={index} className={`insurance-item ${insurance.status}`}>
    //               <strong>Policy Number:</strong> {insurance.policyNumber} <br />
    //               <strong>Date:</strong> {new Date(insurance.insuranceDate).toLocaleDateString()} <br />
    //               <strong>Status:</strong> {insurance.status}
    //             </li>
    //           ))}
    //         </ul>
    //       ) : (
    //         <p>No records found for the selected status</p>
    //       )}
    //     </div>

    //     {/* Recent Applications and Payments */}
    //     {/* <div className="recent-activities">
    //       <h2>Recent Applications</h2>
    //       <ul>
    //         {recentApplications.length ? (
    //           recentApplications.map((application, index) => (
    //             <li key={index}>
    //               <strong>Policy Number:</strong> {application.policyNumber} <br />
    //               <strong>Date:</strong> {new Date(application.insuranceDate).toLocaleDateString()} <br />
    //               <strong>Status:</strong> {application.status}
    //             </li>
    //           ))
    //         ) : (
    //           <li>No recent applications</li>
    //         )}
    //       </ul>

    //       <h2>Recent Payments</h2>
    //       <ul>
    //         {recentPayments.length ? (
    //           recentPayments.map((payment, index) => (
    //             <li key={index}>
    //               <strong>Amount:</strong> ${payment.amount} <br />
    //               <strong>Payment Method:</strong> {payment.payMethod} <br />
    //               <strong>Date:</strong> {new Date(payment.payDate).toLocaleDateString()}
    //             </li>
    //           ))
    //         ) : (
    //           <li>No recent payments</li>
    //         )}
    //       </ul>
    //     </div> */}

    //     {/* Navigate to Manage Insurance Page */}
    //     <div className="manage-insurance" style={{paddingLeft:'620px'}}>
    //       <button onClick={() => window.location.href = '/admin-apply-insurance'} style={{width:'250px'}}>
    //         Manage Insurance
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <div className="admin-home-page">
      <AdminNavbar />
      <div className="dashboard-content">
        <h1 className="dashboard-heading">Admin Dashboard</h1>
        <div className="dashboard-summary">
          <div className="summary-item" onClick={() => window.location.href = '/applicant-info'} style={{ transition: 'transform 0.3s ease',backgroundColor:'#B5C0D0' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <h2>Total Applicants</h2>
            <p>{applicantCount}</p>
          </div>
          <div className="summary-item" onClick={() => window.location.href = '/insurance-admin'} style={{ transition: 'transform 0.3s ease' ,backgroundColor:'#B5C0D0'}} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <h2>Total Insurance Policies</h2>
            <p>{insuranceCount}</p>
          </div>
          <div className="summary-item" onClick={() => window.location.href = '/risk-calculation'} style={{ transition: 'transform 0.3s ease',backgroundColor:'#B5C0D0' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <h2>Total Risks</h2>
            <p>{riskCount}</p>
          </div>
          <div className="summary-item" onClick={() => window.location.href = '/premium-calculation'} style={{ transition: 'transform 0.3s ease',backgroundColor:'#B5C0D0' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <h2>Total Premiums</h2>
            <p>{premiumCount}</p>
          </div>
        </div>

        {/* Insurance Status Filters */}
        <div className="insurance-filters" style={{ display: 'flex' }}>
          <button onClick={() => filterInsurances('approved')} className={statusFilter === 'approved' ? 'active' : ''} style={{ width: '550px', backgroundColor:'green' }}>
            Approved
          </button>
          <button onClick={() => filterInsurances('rejected')} className={statusFilter === 'rejected' ? 'active' : ''} style={{ width: '550px', backgroundColor:'red' }}>
            Rejected
          </button>
          <button onClick={() => filterInsurances('pending')} className={statusFilter === 'pending' ? 'active' : ''} style={{ width: '550px', backgroundColor:'orange' }}>
            Pending
          </button>
        </div>

        {/* Display selected insurance records */}
        <div className="insurance-records">
          <h2>Insurance Records</h2>
          {selectedInsurances.length ? (
            <ul>
              {selectedInsurances.map((insurance, index) => (
                <li key={index} className={`insurance-item ${insurance.status}`}>
                  <strong>Policy Number:</strong> {insurance.policyNumber} <br />
                  <strong>Date:</strong> {new Date(insurance.insuranceDate).toLocaleDateString()} <br />
                  <strong>Status:</strong> {insurance.status}
                </li>
              ))}
            </ul>
          ) : (
            // <p>
            //     No records found for the selected status</p>
            <img src='https://img.freepik.com/free-vector/search-concept-illustration_114360-156.jpg' height={370} width={370} style={{marginLeft:'520px'}}></img>
            
          )}
        </div>

        {/* Navigate to Manage Insurance Page */}
        <div className="manage-insurance" style={{ paddingLeft: '620px' }}>
          <button onClick={() => window.location.href = '/admin-apply-insurance'} style={{ width: '250px' }}>
            Manage Insurance
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;


