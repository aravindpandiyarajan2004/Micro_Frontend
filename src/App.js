
// // // import React from 'react';
// // // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // // import NavigationBar from './components/Navbar';
// // // import Home from './pages/Home';
// // // import './styles/App.css';

// // // import ApplicantLoginForm from './pages/ApplicantLogin';
// // // import AdminLogin from './pages/AdminLogin';
// // // import ApplicantRegistration from './pages/ApplicantRegister';
// // // import ApplicantHomePage from './pages/ApplicantHome';
// // // import ApplyInsuranceForm from './pages/ApplyInsurance';
// // // import ApplicationTracking from './pages/ApplicationTracking';
// // // import PaymentPage from './pages/PaymentPage';
// // // import AdminHomePage from './pages/AdminHome';
// // // import AdminApplicant from './pages/AdminApplicant';
// // // import AdminApplyInsurance from './pages/AdminApplyInsurance';


// // // function App() {
// // //   return (
// // //     <Router>
// // //       <div className="App">
// // //         {/* <NavigationBar /> */}
// // //         <Routes>
// // //           <Route path="/" element={<Home />} />
// // //           <Route path="/applicant-login" element={<ApplicantLoginForm />} />
// // //           <Route path="/admin-login" element={<AdminLogin />} />
// // //           <Route path="/admin-dash" element={<AdminHomePage/>} />
// // //           <Route path="/register" element={<ApplicantRegistration />} />
// // //           <Route path="/applicant-dash" element={<ApplicantHomePage />} />
// // //           <Route path="/apply-insurance" element={<ApplyInsuranceForm />} />
// // //           <Route path="/application-tracking" element={<ApplicationTracking />} />
// // //           <Route path="/payment" element={<PaymentPage />} />
// // //           <Route path="/applicant-info" element={<AdminApplicant />} />
// // //           <Route paht="/admin-apply-insurance" element={<AdminApplyInsurance />} />
// // //         </Routes>
// // //       </div>
// // //     </Router>
// // //   );
// // // }

// // // export default App;
// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Home from './pages/Home';
// // import ApplicantLoginForm from './pages/ApplicantLogin';
// // import AdminLogin from './pages/AdminLogin';
// // import ApplicantRegistration from './pages/ApplicantRegister';
// // import ApplicantHomePage from './pages/ApplicantHome';
// // import ApplyInsuranceForm from './pages/ApplyInsurance';
// // import ApplicationTracking from './pages/ApplicationTracking';
// // import PaymentPage from './pages/PaymentPage';
// // import AdminHomePage from './pages/AdminHome';
// // import AdminApplicant from './pages/AdminApplicant';
// // import AdminApplyInsurance from './pages/AdminApplyInsurance';
// // import './styles/App.css';
// // import RiskScore from './pages/RiskScore';
// // import PremiumManagement from './pages/PremiumManagement';
// // import AdminPaymentManage from './pages/AdminPaymentManage';
// // import AdminInsuranceManage from './pages/AdminInsuranceManage';

// // function App() {
// //   return (
// //     <Router>
// //       <div className="App">
// //         <Routes>
// //           <Route path="/" element={<Home />} />
// //           <Route path="/applicant-login" element={<ApplicantLoginForm />} />
// //           <Route path="/admin-login" element={<AdminLogin />} />
// //           <Route path="/admin-dash" element={<AdminHomePage />} />
// //           <Route path="/register" element={<ApplicantRegistration />} />
// //           <Route path="/applicant-dash" element={<ApplicantHomePage />} />
// //           <Route path="/apply-insurance" element={<ApplyInsuranceForm />} />
// //           <Route path="/application-tracking" element={<ApplicationTracking />} />
// //           <Route path="/payment" element={<PaymentPage />} />
// //           <Route path="/applicant-info" element={<AdminApplicant />} />
// //           <Route path="/admin-apply-insurance" element={<AdminApplyInsurance />} /> 
// //           <Route path="/risk-calculation" element={<RiskScore />} />
// //           <Route path="/premium-calculation" element={<PremiumManagement />} />
// //           <Route path="/payment-verification" element={<AdminPaymentManage />} />
// //           <Route path="/insurance-admin" element={<AdminInsuranceManage />} />
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Home from './pages/Home';
// import ApplicantLoginForm from './pages/ApplicantLogin';
// import AdminLogin from './pages/AdminLogin';
// import ApplicantRegistration from './pages/ApplicantRegister';
// import ApplicantHomePage from './pages/ApplicantHome';
// import ApplyInsuranceForm from './pages/ApplyInsurance';
// import ApplicationTracking from './pages/ApplicationTracking';
// import PaymentPage from './pages/PaymentPage';
// import AdminHomePage from './pages/AdminHome';
// import AdminApplicant from './pages/AdminApplicant';
// import AdminApplyInsurance from './pages/AdminApplyInsurance';
// import RiskScore from './pages/RiskScore';
// import PremiumManagement from './pages/PremiumManagement';
// import AdminPaymentManage from './pages/AdminPaymentManage';
// import AdminInsuranceManage from './pages/AdminInsuranceManage';
// import ProtectedRoute from './components/ProtectedRoute'; // Import the ProtectedRoute component
// import './styles/App.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           {/* Public routes */}
//           <Route path="/" element={<Home />} />
//           <Route path="/applicant-login" element={<ApplicantLoginForm />} />
//           <Route path="/admin-login" element={<AdminLogin />} />
//           <Route path="/register" element={<ApplicantRegistration />} />

//           {/* Protected routes for applicants */}
//           <Route path="/applicant-dash" element={<ProtectedRoute element={<ApplicantHomePage />} role="applicantId" />} />
//           <Route path="/apply-insurance" element={<ProtectedRoute element={<ApplyInsuranceForm />} role="applicantId" />} />
//           <Route path="/application-tracking" element={<ProtectedRoute element={<ApplicationTracking />} role="applicantId" />} />
//           <Route path="/payment" element={<ProtectedRoute element={<PaymentPage />} role="applicantId" />} />

//           {/* Protected routes for admins */}
//           <Route path="/admin-dash" element={<ProtectedRoute element={<AdminHomePage />} role="adminId" />} />
//           <Route path="/applicant-info" element={<ProtectedRoute element={<AdminApplicant />} role="adminId" />} />
//           <Route path="/admin-apply-insurance" element={<ProtectedRoute element={<AdminApplyInsurance />} role="adminId" />} />
//           <Route path="/risk-calculation" element={<ProtectedRoute element={<RiskScore />} role="adminId" />} />
//           <Route path="/premium-calculation" element={<ProtectedRoute element={<PremiumManagement />} role="adminId" />} />
//           <Route path="/payment-verification" element={<ProtectedRoute element={<AdminPaymentManage />} role="adminId" />} />
//           <Route path="/insurance-admin" element={<ProtectedRoute element={<AdminInsuranceManage />} role="adminId" />} />

//           {/* Redirect to login if route is not found */}
//           <Route path="*" element={<Navigate to="/applicant-login" />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }


// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ApplicantLoginForm from './pages/ApplicantLogin';
import AdminLogin from './pages/AdminLogin';
import ApplicantRegistration from './pages/ApplicantRegister';
import ApplicantHomePage from './pages/ApplicantHome';
import ApplyInsuranceForm from './pages/ApplyInsurance';
import ApplicationTracking from './pages/ApplicationTracking';
import PaymentPage from './pages/PaymentPage';
import AdminHomePage from './pages/AdminHome';
import AdminApplicant from './pages/AdminApplicant';
import AdminApplyInsurance from './pages/AdminApplyInsurance';
import RiskScore from './pages/RiskScore';
import PremiumManagement from './pages/PremiumManagement';
import AdminPaymentManage from './pages/AdminPaymentManage';
import AdminInsuranceManage from './pages/AdminInsuranceManage';
import ProtectedRoute from './components/ProtectedRoute';
import './styles/App.css';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/applicant-login" element={<ApplicantLoginForm />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/register" element={<ApplicantRegistration />} />

          {/* Protected routes for applicants */}
          <Route path="/applicant-dash" element={<ProtectedRoute element={<ApplicantHomePage />} role="applicant" />} />
          <Route path="/apply-insurance" element={<ProtectedRoute element={<ApplyInsuranceForm />} role="applicant" />} />
          <Route path="/application-tracking" element={<ProtectedRoute element={<ApplicationTracking />} role="applicant" />} />
          <Route path="/payment" element={<ProtectedRoute element={<PaymentPage />} role="applicant" />} />

          {/* Protected routes for admins */}
          <Route path="/admin-dash" element={<ProtectedRoute element={<AdminHomePage />} role="admin" />} />
          <Route path="/applicant-info" element={<ProtectedRoute element={<AdminApplicant />} role="admin" />} />
          <Route path="/admin-apply-insurance" element={<ProtectedRoute element={<AdminApplyInsurance />} role="admin" />} />
          <Route path="/risk-calculation" element={<ProtectedRoute element={<RiskScore />} role="admin" />} />
          <Route path="/premium-calculation" element={<ProtectedRoute element={<PremiumManagement />} role="admin" />} />
          <Route path="/payment-verification" element={<ProtectedRoute element={<AdminPaymentManage />} role="admin" />} />
          <Route path="/insurance-admin" element={<ProtectedRoute element={<AdminInsuranceManage />} role="admin" />} />

          {/* Redirect to login if route is not found */}
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
