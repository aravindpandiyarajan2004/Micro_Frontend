

// import React, { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import { useLocation } from 'react-router-dom';
// import '../styles/PaymentPage.css';
// import ApplicantNavbar from '../components/ApplicantNavbar';

// const PaymentPage = () => {
//   const { register, handleSubmit, formState: { errors }, watch } = useForm();
//   const [submitting, setSubmitting] = useState(false);
//   const [amount, setAmount] = useState(0);
//   const [selectedFrequency, setSelectedFrequency] = useState('yearly');
//   const [premiumId, setPremiumId] = useState(null);
//   const location = useLocation();
//   const premiums = location.state?.premiums || []; // Retrieve premiums from state

//   useEffect(() => {
//     const initialPremium = premiums.find(premium => premium.yearly);
//     setAmount(initialPremium?.yearly || 0);
//     setPremiumId(initialPremium?.premiumId || null);
//   }, [premiums]);

//   const handleFrequencyChange = (event) => {
//     const frequency = event.target.value;
//     setSelectedFrequency(frequency);
//     const selectedPremium = premiums.find(premium => premium[frequency]);
//     setAmount(selectedPremium ? selectedPremium[frequency] : 0);
//     setPremiumId(selectedPremium ? selectedPremium.premiumId : null);
//   };

//   const generateTransactionId = () => {
//     return 'TXN' + Math.floor(Math.random() * 1000000);
//   };

//   const getCurrentDate = () => {
//     const today = new Date();
//     const yyyy = today.getFullYear();
//     const mm = String(today.getMonth() + 1).padStart(2, '0');
//     const dd = String(today.getDate()).padStart(2, '0');
//     return `${yyyy}-${mm}-${dd}`;
//   };

//   const onSubmit = async (data) => {
//     setSubmitting(true);
//     try {
//       const applicantId = sessionStorage.getItem('applicantId');
//       if (!applicantId) {
//         throw new Error('Applicant ID not found in session storage');
//       }

//       const requestData = {
//         ...data,
//         applicant: { applicantId },
//         status: 'successful',
//         amount,
//         premiumId // Ensure premiumId is included
//       };

//       await axios.post('http://localhost:8027/payment', requestData);

//       const transactionId = generateTransactionId();

//       Swal.fire({
//         title: 'Payment Successful!',
//         text: `Transaction ID: ${transactionId}`,
//         icon: 'success',
//       });
//     } catch (err) {
//       Swal.fire({
//         title: 'Payment Error',
//         text: err.response?.data?.message || 'An error occurred during payment. Please try again.',
//         icon: 'error',
//       });
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div>
//       <ApplicantNavbar className="applicant-navbar" />
//       <div className="payment-page">
//         <h1>Payment Page</h1>
//         <form onSubmit={handleSubmit(onSubmit)} className="payment-form">
//           <div className="form-group">
//             <label htmlFor="amount">Amount</label>
//             <input
//               type="number"
//               id="amount"
//               value={amount}
//               readOnly
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="frequency">Frequency</label>
//             <select
//               id="frequency"
//               value={selectedFrequency}
//               onChange={handleFrequencyChange}
//             >
//               <option value="monthly">Monthly</option>
//               <option value="quartely">Quarterly</option>
//               <option value="halfly">Half Yearly</option>
//               <option value="yearly">Yearly</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label htmlFor="payMethod">Payment Method</label>
//             <select id="payMethod" {...register('payMethod', { required: 'Payment method is required' })}>
//               <option value="">Select a payment method</option>
//               <option value="creditCard">Credit Card</option>
//               <option value="upi">UPI</option>
//             </select>
//             {errors.payMethod && <div className="error-message">{errors.payMethod.message}</div>}
//           </div>

//           {watch('payMethod') === 'creditCard' && (
//             <>
//               <div className="form-group">
//                 <label htmlFor="cardNumber">Credit Card Number</label>
//                 <input
//                   type="text"
//                   id="cardNumber"
//                   {...register('cardNumber', {
//                     required: 'Credit Card Number is required',
//                     pattern: {
//                       value: /^\d{16}$/,
//                       message: 'Credit Card Number must be 16 digits'
//                     }
//                   })}
//                 />
//                 {errors.cardNumber && <div className="error-message">{errors.cardNumber.message}</div>}
//               </div>

//               <div className="form-group">
//                 <label htmlFor="cvv">CVV</label>
//                 <input
//                   type="text"
//                   id="cvv"
//                   {...register('cvv', {
//                     required: 'CVV is required',
//                     pattern: {
//                       value: /^\d{3}$/,
//                       message: 'CVV must be 3 digits'
//                     }
//                   })}
//                 />
//                 {errors.cvv && <div className="error-message">{errors.cvv.message}</div>}
//               </div>
//             </>
//           )}

//           {watch('payMethod') === 'upi' && (
//             <>
//               <div className="form-group">
//                 <label htmlFor="upiId">UPI ID</label>
//                 <input
//                   type="text"
//                   id="upiId"
//                   {...register('upiId', {
//                     required: 'UPI ID is required',
//                     pattern: {
//                       value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/,
//                       message: 'UPI ID must be in the format "username@bankname"'
//                     }
//                   })}
//                 />
//                 {errors.upiId && <div className="error-message">{errors.upiId.message}</div>}
//               </div>
//             </>
//           )}

//           <div className="form-group">
//             <label htmlFor="payDate">Payment Date</label>
//             <input
//               type="date"
//               id="payDate"
//               {...register('payDate', { required: 'Payment date is required' })}
//               min={getCurrentDate()}
//             />
//             {errors.payDate && <div className="error-message">{errors.payDate.message}</div>}
//           </div>

//           <button type="submit" disabled={submitting}>
//             {submitting ? 'Processing...' : 'Pay Now'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PaymentPage;

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';
import '../styles/PaymentPage.css';
import ApplicantNavbar from '../components/ApplicantNavbar';

const PaymentPage = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [amount, setAmount] = useState(0);
  const [selectedFrequency, setSelectedFrequency] = useState('yearly');
  const [premiumId, setPremiumId] = useState(null);
  const location = useLocation();
  const premiums = location.state?.premiums || []; // Retrieve premiums from state

  useEffect(() => {
    const initialPremium = premiums.find(premium => premium.yearly);
    setAmount(initialPremium?.yearly || 0);
    setPremiumId(initialPremium?.premiumId || null);
  }, [premiums]);

  const handleFrequencyChange = (event) => {
    const frequency = event.target.value;
    setSelectedFrequency(frequency);
    const selectedPremium = premiums.find(premium => premium[frequency]);
    setAmount(selectedPremium ? selectedPremium[frequency] : 0);
    setPremiumId(selectedPremium ? selectedPremium.premiumId : null);
  };

  const generateTransactionId = () => {
    return 'TXN' + Math.floor(Math.random() * 1000000);
  };

  const getCurrentDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      const applicantId = sessionStorage.getItem('applicantId');
      if (!applicantId) {
        throw new Error('Applicant ID not found in local storage');
      }

      const requestData = {
        ...data,
        applicant: { applicantId },
        status: 'successful',
        amount,
        premiumId // Include the premiumId in the request data
      };

      await axios.post('http://localhost:8027/payment', requestData);

      const transactionId = generateTransactionId();

      Swal.fire({
        title: 'Payment Successful!',
        text: `Transaction ID: ${transactionId}`,
        icon: 'success',
      });
    } catch (err) {
      Swal.fire({
        title: 'Payment Error',
        text: err.response?.data?.message || 'An error occurred during payment. Please try again.',
        icon: 'error',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <ApplicantNavbar className="applicant-navbar" />
      <div className="payment-page" style={{marginBottom:500, boxShadow:'2px 2px 6px black'}}>
        <h1 >Payment Page</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="payment-form">
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={amount}
              readOnly
            />
          </div>

          <div className="form-group">
            <label htmlFor="frequency">Frequency</label>
            <select
              id="frequency"
              value={selectedFrequency}
              onChange={handleFrequencyChange}
            >
              <option value="monthly">Monthly</option>
              <option value="quartely">Quarterly</option> {/* Corrected typo */}
              <option value="halfly">Half Yearly</option> {/* Corrected typo */}
              <option value="yearly">Yearly</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="payMethod">Payment Method</label>
            <select id="payMethod" {...register('payMethod', { required: 'Payment method is required' })}>
              <option value="">Select a payment method</option>
              <option value="creditCard">Credit Card</option>
              <option value="upi">UPI</option>
            </select>
            {errors.payMethod && <div className="error-message">{errors.payMethod.message}</div>}
          </div>

          {watch('payMethod') === 'creditCard' && (
            <>
              <div className="form-group">
                <label htmlFor="cardNumber">Credit Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  {...register('cardNumber', {
                    required: 'Credit Card Number is required',
                    pattern: {
                      value: /^\d{16}$/,
                      message: 'Credit Card Number must be 16 digits'
                    }
                  })}
                />
                {errors.cardNumber && <div className="error-message">{errors.cardNumber.message}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  {...register('cvv', {
                    required: 'CVV is required',
                    pattern: {
                      value: /^\d{3}$/,
                      message: 'CVV must be 3 digits'
                    }
                  })}
                />
                {errors.cvv && <div className="error-message">{errors.cvv.message}</div>}
              </div>
            </>
          )}

          {watch('payMethod') === 'upi' && (
            <>
              <div className="form-group">
                <label htmlFor="upiId">UPI ID</label>
                <input
                  type="text"
                  id="upiId"
                  {...register('upiId', {
                    required: 'UPI ID is required',
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/,
                      message: 'UPI ID must be in the format "username@bankname"'
                    }
                  })}
                />
                {errors.upiId && <div className="error-message">{errors.upiId.message}</div>}
              </div>
            </>
          )}

          <div className="form-group">
            <label htmlFor="payDate">Payment Date</label>
            <input
              type="date"
              id="payDate"
              {...register('payDate', { required: 'Payment date is required' })}
              min={getCurrentDate()}
            />
            {errors.payDate && <div className="error-message">{errors.payDate.message}</div>}
          </div>

          <button type="submit" disabled={submitting} style={{backgroundColor:'blue'}}>
            {submitting ? 'Processing...' : 'Pay Now'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;

