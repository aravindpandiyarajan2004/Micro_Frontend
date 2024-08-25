
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
