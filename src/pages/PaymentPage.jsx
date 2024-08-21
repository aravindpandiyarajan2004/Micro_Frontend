

// // // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // // import { useForm } from 'react-hook-form';
// // // // // // // // // // // import axios from 'axios';
// // // // // // // // // // // import Swal from 'sweetalert2';
// // // // // // // // // // // import '../styles/PaymentPage.css'; // Import your CSS
// // // // // // // // // // // import ApplicantNavbar from '../components/ApplicantNavbar';

// // // // // // // // // // // const PaymentPage = () => {
// // // // // // // // // // //   const { register, handleSubmit, formState: { errors }, watch } = useForm();
// // // // // // // // // // //   const [submitting, setSubmitting] = useState(false);
// // // // // // // // // // //   const selectedPayMethod = watch('payMethod'); // Watch the selected payment method

// // // // // // // // // // //   const generateTransactionId = () => {
// // // // // // // // // // //     return 'TXN' + Math.floor(Math.random() * 1000000);
// // // // // // // // // // //   };

// // // // // // // // // // //   const onSubmit = async (data) => {
// // // // // // // // // // //     setSubmitting(true);
// // // // // // // // // // //     try {
// // // // // // // // // // //       // Include status in the request data
// // // // // // // // // // //       data.status = 'successful'; // Set status to successful

// // // // // // // // // // //       const response = await axios.post('http://localhost:8027/payment', data);

// // // // // // // // // // //       // Generate a transaction ID
// // // // // // // // // // //       const transactionId = generateTransactionId();

// // // // // // // // // // //       Swal.fire({
// // // // // // // // // // //         title: 'Payment Successful!',
// // // // // // // // // // //         text: `Transaction ID: ${transactionId}`,
// // // // // // // // // // //         icon: 'success',
// // // // // // // // // // //       });
// // // // // // // // // // //     } catch (err) {
// // // // // // // // // // //       Swal.fire({
// // // // // // // // // // //         title: 'Payment Error',
// // // // // // // // // // //         text: 'An error occurred during payment. Please try again.',
// // // // // // // // // // //         icon: 'error',
// // // // // // // // // // //       });
// // // // // // // // // // //     } finally {
// // // // // // // // // // //       setSubmitting(false);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div>
// // // // // // // // // // //       <ApplicantNavbar className="applicant-navbar" />
// // // // // // // // // // //       <div className="payment-page">
// // // // // // // // // // //         <h1>Payment Page</h1>
// // // // // // // // // // //         <form onSubmit={handleSubmit(onSubmit)} className="payment-form">
// // // // // // // // // // //           <div className="form-group">
// // // // // // // // // // //             <label htmlFor="amount">Amount</label>
// // // // // // // // // // //             <input
// // // // // // // // // // //               type="number"
// // // // // // // // // // //               id="amount"
// // // // // // // // // // //               {...register('amount', { required: 'Amount is required' })}
// // // // // // // // // // //             />
// // // // // // // // // // //             {errors.amount && <div className="error-message">{errors.amount.message}</div>}
// // // // // // // // // // //           </div>

// // // // // // // // // // //           <div className="form-group">
// // // // // // // // // // //             <label htmlFor="payMethod">Payment Method</label>
// // // // // // // // // // //             <select id="payMethod" {...register('payMethod', { required: 'Payment method is required' })}>
// // // // // // // // // // //               <option value="">Select a payment method</option>
// // // // // // // // // // //               <option value="creditCard">Credit Card</option>
// // // // // // // // // // //               <option value="upi">UPI</option>
// // // // // // // // // // //               <option value="bankTransfer">Bank Transfer</option>
// // // // // // // // // // //             </select>
// // // // // // // // // // //             {errors.payMethod && <div className="error-message">{errors.payMethod.message}</div>}
// // // // // // // // // // //           </div>

// // // // // // // // // // //           {selectedPayMethod === 'creditCard' && (
// // // // // // // // // // //             <>
// // // // // // // // // // //               <div className="form-group">
// // // // // // // // // // //                 <label htmlFor="cardNumber">Credit Card Number</label>
// // // // // // // // // // //                 <input
// // // // // // // // // // //                   type="text"
// // // // // // // // // // //                   id="cardNumber"
// // // // // // // // // // //                   {...register('cardNumber', {
// // // // // // // // // // //                     required: 'Credit Card Number is required',
// // // // // // // // // // //                     pattern: {
// // // // // // // // // // //                       value: /^\d{16}$/,
// // // // // // // // // // //                       message: 'Credit Card Number must be 16 digits'
// // // // // // // // // // //                     }
// // // // // // // // // // //                   })}
// // // // // // // // // // //                 />
// // // // // // // // // // //                 {errors.cardNumber && <div className="error-message">{errors.cardNumber.message}</div>}
// // // // // // // // // // //               </div>

// // // // // // // // // // //               <div className="form-group">
// // // // // // // // // // //                 <label htmlFor="cvv">CVV</label>
// // // // // // // // // // //                 <input
// // // // // // // // // // //                   type="text"
// // // // // // // // // // //                   id="cvv"
// // // // // // // // // // //                   {...register('cvv', {
// // // // // // // // // // //                     required: 'CVV is required',
// // // // // // // // // // //                     pattern: {
// // // // // // // // // // //                       value: /^\d{3}$/,
// // // // // // // // // // //                       message: 'CVV must be 3 digits'
// // // // // // // // // // //                     }
// // // // // // // // // // //                   })}
// // // // // // // // // // //                 />
// // // // // // // // // // //                 {errors.cvv && <div className="error-message">{errors.cvv.message}</div>}
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </>
// // // // // // // // // // //           )}

// // // // // // // // // // //           {selectedPayMethod === 'upi' && (
// // // // // // // // // // //             <>
// // // // // // // // // // //               <div className="form-group">
// // // // // // // // // // //                 <label htmlFor="upiId">UPI ID</label>
// // // // // // // // // // //                 <input
// // // // // // // // // // //                   type="text"
// // // // // // // // // // //                   id="upiId"
// // // // // // // // // // //                   {...register('upiId', {
// // // // // // // // // // //                     required: 'UPI ID is required',
// // // // // // // // // // //                     pattern: {
// // // // // // // // // // //                       value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/,
// // // // // // // // // // //                       message: 'UPI ID must be in the format "username@bankname"'
// // // // // // // // // // //                     }
// // // // // // // // // // //                   })}
// // // // // // // // // // //                 />
// // // // // // // // // // //                 {errors.upiId && <div className="error-message">{errors.upiId.message}</div>}
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </>
// // // // // // // // // // //           )}

// // // // // // // // // // //           {selectedPayMethod === 'bankTransfer' && (
// // // // // // // // // // //             <>
// // // // // // // // // // //               <div className="form-group">
// // // // // // // // // // //                 <label htmlFor="accountNumber">Bank Account Number</label>
// // // // // // // // // // //                 <input
// // // // // // // // // // //                   type="text"
// // // // // // // // // // //                   id="accountNumber"
// // // // // // // // // // //                   {...register('accountNumber', {
// // // // // // // // // // //                     required: 'Bank Account Number is required',
// // // // // // // // // // //                     pattern: {
// // // // // // // // // // //                       value: /^\d{12}$/,
// // // // // // // // // // //                       message: 'Bank Account Number must be 12 digits'
// // // // // // // // // // //                     }
// // // // // // // // // // //                   })}
// // // // // // // // // // //                 />
// // // // // // // // // // //                 {errors.accountNumber && <div className="error-message">{errors.accountNumber.message}</div>}
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </>
// // // // // // // // // // //           )}

// // // // // // // // // // //           <div className="form-group">
// // // // // // // // // // //             <label htmlFor="payDate">Payment Date</label>
// // // // // // // // // // //             <input
// // // // // // // // // // //               type="date"
// // // // // // // // // // //               id="payDate"
// // // // // // // // // // //               {...register('payDate', { required: 'Payment date is required' })}
// // // // // // // // // // //             />
// // // // // // // // // // //             {errors.payDate && <div className="error-message">{errors.payDate.message}</div>}
// // // // // // // // // // //           </div>

// // // // // // // // // // //           <button type="submit" disabled={submitting}>
// // // // // // // // // // //             {submitting ? 'Processing...' : 'Pay Now'}
// // // // // // // // // // //           </button>
// // // // // // // // // // //         </form>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default PaymentPage;

// // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // import { useForm } from 'react-hook-form';
// // // // // // // // // // import axios from 'axios';
// // // // // // // // // // import Swal from 'sweetalert2';
// // // // // // // // // // import '../styles/PaymentPage.css'; // Import your CSS
// // // // // // // // // // import ApplicantNavbar from '../components/ApplicantNavbar';

// // // // // // // // // // const PaymentPage = () => {
// // // // // // // // // //   const { register, handleSubmit, formState: { errors }, watch } = useForm();
// // // // // // // // // //   const [submitting, setSubmitting] = useState(false);
// // // // // // // // // //   const selectedPayMethod = watch('payMethod'); // Watch the selected payment method

// // // // // // // // // //   const generateTransactionId = () => {
// // // // // // // // // //     return 'TXN' + Math.floor(Math.random() * 1000000);
// // // // // // // // // //   };

// // // // // // // // // //   const onSubmit = async (data) => {
// // // // // // // // // //     setSubmitting(true);
// // // // // // // // // //     try {
// // // // // // // // // //       // Retrieve the applicant ID from local storage
// // // // // // // // // //       const applicantId = localStorage.getItem('applicantId');
// // // // // // // // // //       if (!applicantId) {
// // // // // // // // // //         throw new Error('Applicant ID not found in local storage');
// // // // // // // // // //       }

// // // // // // // // // //       // Include the applicant ID and status in the request data
// // // // // // // // // //       const requestData = {
// // // // // // // // // //         ...data,
// // // // // // // // // //         applicantId, // Add the applicant ID to the request data
// // // // // // // // // //         status: 'successful', // Set status to successful
// // // // // // // // // //       };

// // // // // // // // // //       const response = await axios.post('http://localhost:8027/payment', requestData);

// // // // // // // // // //       // Generate a transaction ID
// // // // // // // // // //       const transactionId = generateTransactionId();

// // // // // // // // // //       Swal.fire({
// // // // // // // // // //         title: 'Payment Successful!',
// // // // // // // // // //         text: `Transaction ID: ${transactionId}`,
// // // // // // // // // //         icon: 'success',
// // // // // // // // // //       });
// // // // // // // // // //     } catch (err) {
// // // // // // // // // //       Swal.fire({
// // // // // // // // // //         title: 'Payment Error',
// // // // // // // // // //         text: err.response?.data?.message || 'An error occurred during payment. Please try again.',
// // // // // // // // // //         icon: 'error',
// // // // // // // // // //       });
// // // // // // // // // //     } finally {
// // // // // // // // // //       setSubmitting(false);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div>
// // // // // // // // // //       <ApplicantNavbar className="applicant-navbar" />
// // // // // // // // // //       <div className="payment-page">
// // // // // // // // // //         <h1>Payment Page</h1>
// // // // // // // // // //         <form onSubmit={handleSubmit(onSubmit)} className="payment-form">
// // // // // // // // // //           <div className="form-group">
// // // // // // // // // //             <label htmlFor="amount">Amount</label>
// // // // // // // // // //             <input
// // // // // // // // // //               type="number"
// // // // // // // // // //               id="amount"
// // // // // // // // // //               {...register('amount', { required: 'Amount is required' })}
// // // // // // // // // //             />
// // // // // // // // // //             {errors.amount && <div className="error-message">{errors.amount.message}</div>}
// // // // // // // // // //           </div>

// // // // // // // // // //           <div className="form-group">
// // // // // // // // // //             <label htmlFor="payMethod">Payment Method</label>
// // // // // // // // // //             <select id="payMethod" {...register('payMethod', { required: 'Payment method is required' })}>
// // // // // // // // // //               <option value="">Select a payment method</option>
// // // // // // // // // //               <option value="creditCard">Credit Card</option>
// // // // // // // // // //               <option value="upi">UPI</option>
// // // // // // // // // //               <option value="bankTransfer">Bank Transfer</option>
// // // // // // // // // //             </select>
// // // // // // // // // //             {errors.payMethod && <div className="error-message">{errors.payMethod.message}</div>}
// // // // // // // // // //           </div>

// // // // // // // // // //           {selectedPayMethod === 'creditCard' && (
// // // // // // // // // //             <>
// // // // // // // // // //               <div className="form-group">
// // // // // // // // // //                 <label htmlFor="cardNumber">Credit Card Number</label>
// // // // // // // // // //                 <input
// // // // // // // // // //                   type="text"
// // // // // // // // // //                   id="cardNumber"
// // // // // // // // // //                   {...register('cardNumber', {
// // // // // // // // // //                     required: 'Credit Card Number is required',
// // // // // // // // // //                     pattern: {
// // // // // // // // // //                       value: /^\d{16}$/,
// // // // // // // // // //                       message: 'Credit Card Number must be 16 digits'
// // // // // // // // // //                     }
// // // // // // // // // //                   })}
// // // // // // // // // //                 />
// // // // // // // // // //                 {errors.cardNumber && <div className="error-message">{errors.cardNumber.message}</div>}
// // // // // // // // // //               </div>

// // // // // // // // // //               <div className="form-group">
// // // // // // // // // //                 <label htmlFor="cvv">CVV</label>
// // // // // // // // // //                 <input
// // // // // // // // // //                   type="text"
// // // // // // // // // //                   id="cvv"
// // // // // // // // // //                   {...register('cvv', {
// // // // // // // // // //                     required: 'CVV is required',
// // // // // // // // // //                     pattern: {
// // // // // // // // // //                       value: /^\d{3}$/,
// // // // // // // // // //                       message: 'CVV must be 3 digits'
// // // // // // // // // //                     }
// // // // // // // // // //                   })}
// // // // // // // // // //                 />
// // // // // // // // // //                 {errors.cvv && <div className="error-message">{errors.cvv.message}</div>}
// // // // // // // // // //               </div>
// // // // // // // // // //             </>
// // // // // // // // // //           )}

// // // // // // // // // //           {selectedPayMethod === 'upi' && (
// // // // // // // // // //             <>
// // // // // // // // // //               <div className="form-group">
// // // // // // // // // //                 <label htmlFor="upiId">UPI ID</label>
// // // // // // // // // //                 <input
// // // // // // // // // //                   type="text"
// // // // // // // // // //                   id="upiId"
// // // // // // // // // //                   {...register('upiId', {
// // // // // // // // // //                     required: 'UPI ID is required',
// // // // // // // // // //                     pattern: {
// // // // // // // // // //                       value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/,
// // // // // // // // // //                       message: 'UPI ID must be in the format "username@bankname"'
// // // // // // // // // //                     }
// // // // // // // // // //                   })}
// // // // // // // // // //                 />
// // // // // // // // // //                 {errors.upiId && <div className="error-message">{errors.upiId.message}</div>}
// // // // // // // // // //               </div>
// // // // // // // // // //             </>
// // // // // // // // // //           )}

// // // // // // // // // //           {selectedPayMethod === 'bankTransfer' && (
// // // // // // // // // //             <>
// // // // // // // // // //               <div className="form-group">
// // // // // // // // // //                 <label htmlFor="accountNumber">Bank Account Number</label>
// // // // // // // // // //                 <input
// // // // // // // // // //                   type="text"
// // // // // // // // // //                   id="accountNumber"
// // // // // // // // // //                   {...register('accountNumber', {
// // // // // // // // // //                     required: 'Bank Account Number is required',
// // // // // // // // // //                     pattern: {
// // // // // // // // // //                       value: /^\d{12}$/,
// // // // // // // // // //                       message: 'Bank Account Number must be 12 digits'
// // // // // // // // // //                     }
// // // // // // // // // //                   })}
// // // // // // // // // //                 />
// // // // // // // // // //                 {errors.accountNumber && <div className="error-message">{errors.accountNumber.message}</div>}
// // // // // // // // // //               </div>
// // // // // // // // // //             </>
// // // // // // // // // //           )}

// // // // // // // // // //           <div className="form-group">
// // // // // // // // // //             <label htmlFor="payDate">Payment Date</label>
// // // // // // // // // //             <input
// // // // // // // // // //               type="date"
// // // // // // // // // //               id="payDate"
// // // // // // // // // //               {...register('payDate', { required: 'Payment date is required' })}
// // // // // // // // // //             />
// // // // // // // // // //             {errors.payDate && <div className="error-message">{errors.payDate.message}</div>}
// // // // // // // // // //           </div>

// // // // // // // // // //           <button type="submit" disabled={submitting}>
// // // // // // // // // //             {submitting ? 'Processing...' : 'Pay Now'}
// // // // // // // // // //           </button>
// // // // // // // // // //         </form>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default PaymentPage;

// // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // import { useForm } from 'react-hook-form';
// // // // // // // // // import axios from 'axios';
// // // // // // // // // import Swal from 'sweetalert2';
// // // // // // // // // import '../styles/PaymentPage.css'; // Import your CSS
// // // // // // // // // import ApplicantNavbar from '../components/ApplicantNavbar';

// // // // // // // // // const PaymentPage = () => {
// // // // // // // // //   const { register, handleSubmit, formState: { errors }, watch } = useForm();
// // // // // // // // //   const [submitting, setSubmitting] = useState(false);
// // // // // // // // //   const selectedPayMethod = watch('payMethod'); // Watch the selected payment method

// // // // // // // // //   const generateTransactionId = () => {
// // // // // // // // //     return 'TXN' + Math.floor(Math.random() * 1000000);
// // // // // // // // //   };

// // // // // // // // //   const onSubmit = async (data) => {
// // // // // // // // //     setSubmitting(true);
// // // // // // // // //     try {
// // // // // // // // //       // Retrieve the applicant ID from local storage
// // // // // // // // //       const applicantId = sessionStorage.getItem('applicantId');
// // // // // // // // //       if (!applicantId) {
// // // // // // // // //         throw new Error('Applicant ID not found in local storage');
// // // // // // // // //       }

// // // // // // // // //       // Include the applicant ID and status in the request data
// // // // // // // // //       const requestData = {
// // // // // // // // //         ...data,
// // // // // // // // //         applicant:{
// // // // // // // // //             applicantId:applicantId
// // // // // // // // //         }, // Add the applicant ID to the request data
// // // // // // // // //         status: 'successful', // Set status to successful
// // // // // // // // //       };

// // // // // // // // //       const response = await axios.post('http://localhost:8027/payment', requestData);

// // // // // // // // //       // Generate a transaction ID
// // // // // // // // //       const transactionId = generateTransactionId();

// // // // // // // // //       Swal.fire({
// // // // // // // // //         title: 'Payment Successful!',
// // // // // // // // //         text: `Transaction ID: ${transactionId}`, // Corrected backticks for template literal
// // // // // // // // //         icon: 'success',
// // // // // // // // //       });
// // // // // // // // //     } catch (err) {
// // // // // // // // //       Swal.fire({
// // // // // // // // //         title: 'Payment Error',
// // // // // // // // //         text: err.response?.data?.message || 'An error occurred during payment. Please try again.',
// // // // // // // // //         icon: 'error',
// // // // // // // // //       });
// // // // // // // // //     } finally {
// // // // // // // // //       setSubmitting(false);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div>
// // // // // // // // //       <ApplicantNavbar className="applicant-navbar" />
// // // // // // // // //       <div className="payment-page">
// // // // // // // // //         <h1>Payment Page</h1>
// // // // // // // // //         <form onSubmit={handleSubmit(onSubmit)} className="payment-form">
// // // // // // // // //           <div className="form-group">
// // // // // // // // //             <label htmlFor="amount">Amount</label>
// // // // // // // // //             <input
// // // // // // // // //               type="number"
// // // // // // // // //               id="amount"
// // // // // // // // //               {...register('amount', { required: 'Amount is required' })}
// // // // // // // // //             />
// // // // // // // // //             {errors.amount && <div className="error-message">{errors.amount.message}</div>}
// // // // // // // // //           </div>

// // // // // // // // //           <div className="form-group">
// // // // // // // // //             <label htmlFor="payMethod">Payment Method</label>
// // // // // // // // //             <select id="payMethod" {...register('payMethod', { required: 'Payment method is required' })}>
// // // // // // // // //               <option value="">Select a payment method</option>
// // // // // // // // //               <option value="creditCard">Credit Card</option>
// // // // // // // // //               <option value="upi">UPI</option>
// // // // // // // // //               <option value="bankTransfer">Bank Transfer</option>
// // // // // // // // //             </select>
// // // // // // // // //             {errors.payMethod && <div className="error-message">{errors.payMethod.message}</div>}
// // // // // // // // //           </div>

// // // // // // // // //           {selectedPayMethod === 'creditCard' && (
// // // // // // // // //             <>
// // // // // // // // //               <div className="form-group">
// // // // // // // // //                 <label htmlFor="cardNumber">Credit Card Number</label>
// // // // // // // // //                 <input
// // // // // // // // //                   type="text"
// // // // // // // // //                   id="cardNumber"
// // // // // // // // //                   {...register('cardNumber', {
// // // // // // // // //                     required: 'Credit Card Number is required',
// // // // // // // // //                     pattern: {
// // // // // // // // //                       value: /^\d{16}$/,
// // // // // // // // //                       message: 'Credit Card Number must be 16 digits'
// // // // // // // // //                     }
// // // // // // // // //                   })}
// // // // // // // // //                 />
// // // // // // // // //                 {errors.cardNumber && <div className="error-message">{errors.cardNumber.message}</div>}
// // // // // // // // //               </div>

// // // // // // // // //               <div className="form-group">
// // // // // // // // //                 <label htmlFor="cvv">CVV</label>
// // // // // // // // //                 <input
// // // // // // // // //                   type="text"
// // // // // // // // //                   id="cvv"
// // // // // // // // //                   {...register('cvv', {
// // // // // // // // //                     required: 'CVV is required',
// // // // // // // // //                     pattern: {
// // // // // // // // //                       value: /^\d{3}$/,
// // // // // // // // //                       message: 'CVV must be 3 digits'
// // // // // // // // //                     }
// // // // // // // // //                   })}
// // // // // // // // //                 />
// // // // // // // // //                 {errors.cvv && <div className="error-message">{errors.cvv.message}</div>}
// // // // // // // // //               </div>
// // // // // // // // //             </>
// // // // // // // // //           )}

// // // // // // // // //           {selectedPayMethod === 'upi' && (
// // // // // // // // //             <>
// // // // // // // // //               <div className="form-group">
// // // // // // // // //                 <label htmlFor="upiId">UPI ID</label>
// // // // // // // // //                 <input
// // // // // // // // //                   type="text"
// // // // // // // // //                   id="upiId"
// // // // // // // // //                   {...register('upiId', {
// // // // // // // // //                     required: 'UPI ID is required',
// // // // // // // // //                     pattern: {
// // // // // // // // //                       value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/,
// // // // // // // // //                       message: 'UPI ID must be in the format "username@bankname"'
// // // // // // // // //                     }
// // // // // // // // //                   })}
// // // // // // // // //                 />
// // // // // // // // //                 {errors.upiId && <div className="error-message">{errors.upiId.message}</div>}
// // // // // // // // //               </div>
// // // // // // // // //             </>
// // // // // // // // //           )}

// // // // // // // // //           {selectedPayMethod === 'bankTransfer' && (
// // // // // // // // //             <>
// // // // // // // // //               <div className="form-group">
// // // // // // // // //                 <label htmlFor="accountNumber">Bank Account Number</label>
// // // // // // // // //                 <input
// // // // // // // // //                   type="text"
// // // // // // // // //                   id="accountNumber"
// // // // // // // // //                   {...register('accountNumber', {
// // // // // // // // //                     required: 'Bank Account Number is required',
// // // // // // // // //                     pattern: {
// // // // // // // // //                       value: /^\d{12}$/,
// // // // // // // // //                       message: 'Bank Account Number must be 12 digits'
// // // // // // // // //                     }
// // // // // // // // //                   })}
// // // // // // // // //                 />
// // // // // // // // //                 {errors.accountNumber && <div className="error-message">{errors.accountNumber.message}</div>}
// // // // // // // // //               </div>
// // // // // // // // //             </>
// // // // // // // // //           )}

// // // // // // // // //           <div className="form-group">
// // // // // // // // //             <label htmlFor="payDate">Payment Date</label>
// // // // // // // // //             <input
// // // // // // // // //               type="date"
// // // // // // // // //               id="payDate"
// // // // // // // // //               {...register('payDate', { required: 'Payment date is required' })}
// // // // // // // // //             />
// // // // // // // // //             {errors.payDate && <div className="error-message">{errors.payDate.message}</div>}
// // // // // // // // //           </div>

// // // // // // // // //           <button type="submit" disabled={submitting}>
// // // // // // // // //             {submitting ? 'Processing...' : 'Pay Now'}
// // // // // // // // //           </button>
// // // // // // // // //         </form>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default PaymentPage;

// // // // // // // // import React, { useState } from 'react';
// // // // // // // // import { useForm } from 'react-hook-form';
// // // // // // // // import axios from 'axios';
// // // // // // // // import Swal from 'sweetalert2';
// // // // // // // // import '../styles/PaymentPage.css'; // Import your CSS
// // // // // // // // import ApplicantNavbar from '../components/ApplicantNavbar';

// // // // // // // // const PaymentPage = () => {
// // // // // // // //   const { register, handleSubmit, formState: { errors }, watch } = useForm();
// // // // // // // //   const [submitting, setSubmitting] = useState(false);
// // // // // // // //   const selectedPayMethod = watch('payMethod'); // Watch the selected payment method

// // // // // // // //   // Function to generate a transaction ID
// // // // // // // //   const generateTransactionId = () => {
// // // // // // // //     return 'TXN' + Math.floor(Math.random() * 1000000);
// // // // // // // //   };

// // // // // // // //   // Function to get the current date in yyyy-mm-dd format
// // // // // // // //   const getCurrentDate = () => {
// // // // // // // //     const today = new Date();
// // // // // // // //     const yyyy = today.getFullYear();
// // // // // // // //     const mm = String(today.getMonth() + 1).padStart(2, '0');
// // // // // // // //     const dd = String(today.getDate()).padStart(2, '0');
// // // // // // // //     return `${yyyy}-${mm}-${dd}`;
// // // // // // // //   };

// // // // // // // //   const onSubmit = async (data) => {
// // // // // // // //     setSubmitting(true);
// // // // // // // //     try {
// // // // // // // //       // Retrieve the applicant ID from local storage
// // // // // // // //       const applicantId = sessionStorage.getItem('applicantId');
// // // // // // // //       if (!applicantId) {
// // // // // // // //         throw new Error('Applicant ID not found in local storage');
// // // // // // // //       }

// // // // // // // //       // Include the applicant ID and status in the request data
// // // // // // // //       const requestData = {
// // // // // // // //         ...data,
// // // // // // // //         applicant:{
// // // // // // // //             applicantId:applicantId
// // // // // // // //         }, // Add the applicant ID to the request data
// // // // // // // //         status: 'successful', // Set status to successful
// // // // // // // //       };

// // // // // // // //       const response = await axios.post('http://localhost:8027/payment', requestData);

// // // // // // // //       // Generate a transaction ID
// // // // // // // //       const transactionId = generateTransactionId();

// // // // // // // //       Swal.fire({
// // // // // // // //         title: 'Payment Successful!',
// // // // // // // //         text: `Transaction ID: ${transactionId}`, // Corrected backticks for template literal
// // // // // // // //         icon: 'success',
// // // // // // // //       });
// // // // // // // //     } catch (err) {
// // // // // // // //       Swal.fire({
// // // // // // // //         title: 'Payment Error',
// // // // // // // //         text: err.response?.data?.message || 'An error occurred during payment. Please try again.',
// // // // // // // //         icon: 'error',
// // // // // // // //       });
// // // // // // // //     } finally {
// // // // // // // //       setSubmitting(false);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div>
// // // // // // // //       <ApplicantNavbar className="applicant-navbar" />
// // // // // // // //       <div className="payment-page">
// // // // // // // //         <h1>Payment Page</h1>
// // // // // // // //         <form onSubmit={handleSubmit(onSubmit)} className="payment-form">
// // // // // // // //           <div className="form-group">
// // // // // // // //             <label htmlFor="amount">Amount</label>
// // // // // // // //             <input
// // // // // // // //               type="number"
// // // // // // // //               id="amount"
// // // // // // // //               {...register('amount', { required: 'Amount is required' })}
// // // // // // // //             />
// // // // // // // //             {errors.amount && <div className="error-message">{errors.amount.message}</div>}
// // // // // // // //           </div>

// // // // // // // //           <div className="form-group">
// // // // // // // //             <label htmlFor="payMethod">Payment Method</label>
// // // // // // // //             <select id="payMethod" {...register('payMethod', { required: 'Payment method is required' })}>
// // // // // // // //               <option value="">Select a payment method</option>
// // // // // // // //               <option value="creditCard">Credit Card</option>
// // // // // // // //               <option value="upi">UPI</option>
// // // // // // // //               <option value="bankTransfer">Bank Transfer</option>
// // // // // // // //             </select>
// // // // // // // //             {errors.payMethod && <div className="error-message">{errors.payMethod.message}</div>}
// // // // // // // //           </div>

// // // // // // // //           {selectedPayMethod === 'creditCard' && (
// // // // // // // //             <>
// // // // // // // //               <div className="form-group">
// // // // // // // //                 <label htmlFor="cardNumber">Credit Card Number</label>
// // // // // // // //                 <input
// // // // // // // //                   type="text"
// // // // // // // //                   id="cardNumber"
// // // // // // // //                   {...register('cardNumber', {
// // // // // // // //                     required: 'Credit Card Number is required',
// // // // // // // //                     pattern: {
// // // // // // // //                       value: /^\d{16}$/,
// // // // // // // //                       message: 'Credit Card Number must be 16 digits'
// // // // // // // //                     }
// // // // // // // //                   })}
// // // // // // // //                 />
// // // // // // // //                 {errors.cardNumber && <div className="error-message">{errors.cardNumber.message}</div>}
// // // // // // // //               </div>

// // // // // // // //               <div className="form-group">
// // // // // // // //                 <label htmlFor="cvv">CVV</label>
// // // // // // // //                 <input
// // // // // // // //                   type="text"
// // // // // // // //                   id="cvv"
// // // // // // // //                   {...register('cvv', {
// // // // // // // //                     required: 'CVV is required',
// // // // // // // //                     pattern: {
// // // // // // // //                       value: /^\d{3}$/,
// // // // // // // //                       message: 'CVV must be 3 digits'
// // // // // // // //                     }
// // // // // // // //                   })}
// // // // // // // //                 />
// // // // // // // //                 {errors.cvv && <div className="error-message">{errors.cvv.message}</div>}
// // // // // // // //               </div>
// // // // // // // //             </>
// // // // // // // //           )}

// // // // // // // //           {selectedPayMethod === 'upi' && (
// // // // // // // //             <>
// // // // // // // //               <div className="form-group">
// // // // // // // //                 <label htmlFor="upiId">UPI ID</label>
// // // // // // // //                 <input
// // // // // // // //                   type="text"
// // // // // // // //                   id="upiId"
// // // // // // // //                   {...register('upiId', {
// // // // // // // //                     required: 'UPI ID is required',
// // // // // // // //                     pattern: {
// // // // // // // //                       value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/,
// // // // // // // //                       message: 'UPI ID must be in the format "username@bankname"'
// // // // // // // //                     }
// // // // // // // //                   })}
// // // // // // // //                 />
// // // // // // // //                 {errors.upiId && <div className="error-message">{errors.upiId.message}</div>}
// // // // // // // //               </div>
// // // // // // // //             </>
// // // // // // // //           )}

// // // // // // // //           {selectedPayMethod === 'bankTransfer' && (
// // // // // // // //             <>
// // // // // // // //               <div className="form-group">
// // // // // // // //                 <label htmlFor="accountNumber">Bank Account Number</label>
// // // // // // // //                 <input
// // // // // // // //                   type="text"
// // // // // // // //                   id="accountNumber"
// // // // // // // //                   {...register('accountNumber', {
// // // // // // // //                     required: 'Bank Account Number is required',
// // // // // // // //                     pattern: {
// // // // // // // //                       value: /^\d{12}$/,
// // // // // // // //                       message: 'Bank Account Number must be 12 digits'
// // // // // // // //                     }
// // // // // // // //                   })}
// // // // // // // //                 />
// // // // // // // //                 {errors.accountNumber && <div className="error-message">{errors.accountNumber.message}</div>}
// // // // // // // //               </div>
// // // // // // // //             </>
// // // // // // // //           )}

// // // // // // // //           <div className="form-group">
// // // // // // // //             <label htmlFor="payDate">Payment Date</label>
// // // // // // // //             <input
// // // // // // // //               type="date"
// // // // // // // //               id="payDate"
// // // // // // // //               {...register('payDate', { required: 'Payment date is required' })}
// // // // // // // //               min={getCurrentDate()} // Set the minimum selectable date to the current date
// // // // // // // //             />
// // // // // // // //             {errors.payDate && <div className="error-message">{errors.payDate.message}</div>}
// // // // // // // //           </div>

// // // // // // // //           <button type="submit" disabled={submitting}>
// // // // // // // //             {submitting ? 'Processing...' : 'Pay Now'}
// // // // // // // //           </button>
// // // // // // // //         </form>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default PaymentPage;


// // // // // // // import React, { useState } from 'react';
// // // // // // // import { useForm } from 'react-hook-form';
// // // // // // // import axios from 'axios';
// // // // // // // import Swal from 'sweetalert2';
// // // // // // // import { useLocation } from 'react-router-dom'; // Import to access navigation state
// // // // // // // import '../styles/PaymentPage.css'; // Import your CSS
// // // // // // // import ApplicantNavbar from '../components/ApplicantNavbar';

// // // // // // // const PaymentPage = () => {
// // // // // // //   const { register, handleSubmit, formState: { errors }, watch } = useForm();
// // // // // // //   const [submitting, setSubmitting] = useState(false);
// // // // // // //   const selectedPayMethod = watch('payMethod'); // Watch the selected payment method
// // // // // // //   const location = useLocation();
// // // // // // //   const amount = location.state?.amount || 0; // Access the amount passed from the previous page

// // // // // // //   // Function to generate a transaction ID
// // // // // // //   const generateTransactionId = () => {
// // // // // // //     return 'TXN' + Math.floor(Math.random() * 1000000);
// // // // // // //   };

// // // // // // //   // Function to get the current date in yyyy-mm-dd format
// // // // // // //   const getCurrentDate = () => {
// // // // // // //     const today = new Date();
// // // // // // //     const yyyy = today.getFullYear();
// // // // // // //     const mm = String(today.getMonth() + 1).padStart(2, '0');
// // // // // // //     const dd = String(today.getDate()).padStart(2, '0');
// // // // // // //     return `${yyyy}-${mm}-${dd}`;
// // // // // // //   };

// // // // // // //   const onSubmit = async (data) => {
// // // // // // //     setSubmitting(true);
// // // // // // //     try {
// // // // // // //       // Retrieve the applicant ID from local storage
// // // // // // //       const applicantId = sessionStorage.getItem('applicantId');
// // // // // // //       if (!applicantId) {
// // // // // // //         throw new Error('Applicant ID not found in local storage');
// // // // // // //       }

// // // // // // //       // Include the applicant ID and status in the request data
// // // // // // //       const requestData = {
// // // // // // //         ...data,
// // // // // // //         applicant: { applicantId },
// // // // // // //         status: 'successful', // Set status to successful
// // // // // // //         amount // Include amount in request data
// // // // // // //       };

// // // // // // //       const response = await axios.post('http://localhost:8027/payment', requestData);

// // // // // // //       // Generate a transaction ID
// // // // // // //       const transactionId = generateTransactionId();

// // // // // // //       Swal.fire({
// // // // // // //         title: 'Payment Successful!',
// // // // // // //         text: `Transaction ID: ${transactionId}`, // Corrected backticks for template literal
// // // // // // //         icon: 'success',
// // // // // // //       });
// // // // // // //     } catch (err) {
// // // // // // //       Swal.fire({
// // // // // // //         title: 'Payment Error',
// // // // // // //         text: err.response?.data?.message || 'An error occurred during payment. Please try again.',
// // // // // // //         icon: 'error',
// // // // // // //       });
// // // // // // //     } finally {
// // // // // // //       setSubmitting(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div>
// // // // // // //       <ApplicantNavbar className="applicant-navbar" />
// // // // // // //       <div className="payment-page">
// // // // // // //         <h1>Payment Page</h1>
// // // // // // //         <form onSubmit={handleSubmit(onSubmit)} className="payment-form">
// // // // // // //           <div className="form-group">
// // // // // // //             <label htmlFor="amount">Amount</label>
// // // // // // //             <input
// // // // // // //               type="number"
// // // // // // //               id="amount"
// // // // // // //               value={amount} // Display the amount received from tracking page
// // // // // // //               readOnly
// // // // // // //             />
// // // // // // //           </div>

// // // // // // //           <div className="form-group">
// // // // // // //             <label htmlFor="payMethod">Payment Method</label>
// // // // // // //             <select id="payMethod" {...register('payMethod', { required: 'Payment method is required' })}>
// // // // // // //               <option value="">Select a payment method</option>
// // // // // // //               <option value="creditCard">Credit Card</option>
// // // // // // //               <option value="upi">UPI</option>
// // // // // // //               <option value="bankTransfer">Bank Transfer</option>
// // // // // // //             </select>
// // // // // // //             {errors.payMethod && <div className="error-message">{errors.payMethod.message}</div>}
// // // // // // //           </div>

// // // // // // //           {selectedPayMethod === 'creditCard' && (
// // // // // // //             <>
// // // // // // //               <div className="form-group">
// // // // // // //                 <label htmlFor="cardNumber">Credit Card Number</label>
// // // // // // //                 <input
// // // // // // //                   type="text"
// // // // // // //                   id="cardNumber"
// // // // // // //                   {...register('cardNumber', {
// // // // // // //                     required: 'Credit Card Number is required',
// // // // // // //                     pattern: {
// // // // // // //                       value: /^\d{16}$/,
// // // // // // //                       message: 'Credit Card Number must be 16 digits'
// // // // // // //                     }
// // // // // // //                   })}
// // // // // // //                 />
// // // // // // //                 {errors.cardNumber && <div className="error-message">{errors.cardNumber.message}</div>}
// // // // // // //               </div>

// // // // // // //               <div className="form-group">
// // // // // // //                 <label htmlFor="cvv">CVV</label>
// // // // // // //                 <input
// // // // // // //                   type="text"
// // // // // // //                   id="cvv"
// // // // // // //                   {...register('cvv', {
// // // // // // //                     required: 'CVV is required',
// // // // // // //                     pattern: {
// // // // // // //                       value: /^\d{3}$/,
// // // // // // //                       message: 'CVV must be 3 digits'
// // // // // // //                     }
// // // // // // //                   })}
// // // // // // //                 />
// // // // // // //                 {errors.cvv && <div className="error-message">{errors.cvv.message}</div>}
// // // // // // //               </div>
// // // // // // //             </>
// // // // // // //           )}

// // // // // // //           {selectedPayMethod === 'upi' && (
// // // // // // //             <>
// // // // // // //               <div className="form-group">
// // // // // // //                 <label htmlFor="upiId">UPI ID</label>
// // // // // // //                 <input
// // // // // // //                   type="text"
// // // // // // //                   id="upiId"
// // // // // // //                   {...register('upiId', {
// // // // // // //                     required: 'UPI ID is required',
// // // // // // //                     pattern: {
// // // // // // //                       value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/,
// // // // // // //                       message: 'UPI ID must be in the format "username@bankname"'
// // // // // // //                     }
// // // // // // //                   })}
// // // // // // //                 />
// // // // // // //                 {errors.upiId && <div className="error-message">{errors.upiId.message}</div>}
// // // // // // //               </div>
// // // // // // //             </>
// // // // // // //           )}

// // // // // // //           {selectedPayMethod === 'bankTransfer' && (
// // // // // // //             <>
// // // // // // //               <div className="form-group">
// // // // // // //                 <label htmlFor="accountNumber">Bank Account Number</label>
// // // // // // //                 <input
// // // // // // //                   type="text"
// // // // // // //                   id="accountNumber"
// // // // // // //                   {...register('accountNumber', {
// // // // // // //                     required: 'Bank Account Number is required',
// // // // // // //                     pattern: {
// // // // // // //                       value: /^\d{12}$/,
// // // // // // //                       message: 'Bank Account Number must be 12 digits'
// // // // // // //                     }
// // // // // // //                   })}
// // // // // // //                 />
// // // // // // //                 {errors.accountNumber && <div className="error-message">{errors.accountNumber.message}</div>}
// // // // // // //               </div>
// // // // // // //             </>
// // // // // // //           )}

// // // // // // //           <div className="form-group">
// // // // // // //             <label htmlFor="payDate">Payment Date</label>
// // // // // // //             <input
// // // // // // //               type="date"
// // // // // // //               id="payDate"
// // // // // // //               {...register('payDate', { required: 'Payment date is required' })}
// // // // // // //               min={getCurrentDate()} // Set the minimum selectable date to the current date
// // // // // // //             />
// // // // // // //             {errors.payDate && <div className="error-message">{errors.payDate.message}</div>}
// // // // // // //           </div>

// // // // // // //           <button type="submit" disabled={submitting}>
// // // // // // //             {submitting ? 'Processing...' : 'Pay Now'}
// // // // // // //           </button>
// // // // // // //         </form>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default PaymentPage;

// // // // // // import React, { useState } from 'react';
// // // // // // import { useForm } from 'react-hook-form';
// // // // // // import axios from 'axios';
// // // // // // import Swal from 'sweetalert2';
// // // // // // import { useLocation } from 'react-router-dom';
// // // // // // import '../styles/PaymentPage.css';
// // // // // // import ApplicantNavbar from '../components/ApplicantNavbar';

// // // // // // const PaymentPage = () => {
// // // // // //   const { register, handleSubmit, formState: { errors }, watch } = useForm();
// // // // // //   const [submitting, setSubmitting] = useState(false);
// // // // // //   const selectedPayMethod = watch('payMethod');
// // // // // //   const location = useLocation();
// // // // // //   const amount = location.state?.amount || 0; // Get amount from state

// // // // // //   const generateTransactionId = () => {
// // // // // //     return 'TXN' + Math.floor(Math.random() * 1000000);
// // // // // //   };

// // // // // //   const getCurrentDate = () => {
// // // // // //     const today = new Date();
// // // // // //     const yyyy = today.getFullYear();
// // // // // //     const mm = String(today.getMonth() + 1).padStart(2, '0');
// // // // // //     const dd = String(today.getDate()).padStart(2, '0');
// // // // // //     return `${yyyy}-${mm}-${dd}`;
// // // // // //   };

// // // // // //   const onSubmit = async (data) => {
// // // // // //     setSubmitting(true);
// // // // // //     try {
// // // // // //       const applicantId = sessionStorage.getItem('applicantId');
// // // // // //       if (!applicantId) {
// // // // // //         throw new Error('Applicant ID not found in local storage');
// // // // // //       }

// // // // // //       const requestData = {
// // // // // //         ...data,
// // // // // //         applicant: { applicantId },
// // // // // //         status: 'successful',
// // // // // //         amount
// // // // // //       };

// // // // // //       await axios.post('http://localhost:8027/payment', requestData);

// // // // // //       const transactionId = generateTransactionId();

// // // // // //       Swal.fire({
// // // // // //         title: 'Payment Successful!',
// // // // // //         text: `Transaction ID: ${transactionId}`,
// // // // // //         icon: 'success',
// // // // // //       });
// // // // // //     } catch (err) {
// // // // // //       Swal.fire({
// // // // // //         title: 'Payment Error',
// // // // // //         text: err.response?.data?.message || 'An error occurred during payment. Please try again.',
// // // // // //         icon: 'error',
// // // // // //       });
// // // // // //     } finally {
// // // // // //       setSubmitting(false);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div>
// // // // // //       <ApplicantNavbar className="applicant-navbar" />
// // // // // //       <div className="payment-page">
// // // // // //         <h1>Payment Page</h1>
// // // // // //         <form onSubmit={handleSubmit(onSubmit)} className="payment-form">
// // // // // //           <div className="form-group">
// // // // // //             <label htmlFor="amount">Amount</label>
// // // // // //             <input
// // // // // //               type="number"
// // // // // //               id="amount"
// // // // // //               value={amount}
// // // // // //               readOnly
// // // // // //             />
// // // // // //           </div>

// // // // // //           <div className="form-group">
// // // // // //             <label htmlFor="payMethod">Payment Method</label>
// // // // // //             <select id="payMethod" {...register('payMethod', { required: 'Payment method is required' })}>
// // // // // //               <option value="">Select a payment method</option>
// // // // // //               <option value="creditCard">Credit Card</option>
// // // // // //               <option value="upi">UPI</option>
// // // // // //               <option value="bankTransfer">Bank Transfer</option>
// // // // // //             </select>
// // // // // //             {errors.payMethod && <div className="error-message">{errors.payMethod.message}</div>}
// // // // // //           </div>

// // // // // //           {selectedPayMethod === 'creditCard' && (
// // // // // //             <>
// // // // // //               <div className="form-group">
// // // // // //                 <label htmlFor="cardNumber">Credit Card Number</label>
// // // // // //                 <input
// // // // // //                   type="text"
// // // // // //                   id="cardNumber"
// // // // // //                   {...register('cardNumber', {
// // // // // //                     required: 'Credit Card Number is required',
// // // // // //                     pattern: {
// // // // // //                       value: /^\d{16}$/,
// // // // // //                       message: 'Credit Card Number must be 16 digits'
// // // // // //                     }
// // // // // //                   })}
// // // // // //                 />
// // // // // //                 {errors.cardNumber && <div className="error-message">{errors.cardNumber.message}</div>}
// // // // // //               </div>

// // // // // //               <div className="form-group">
// // // // // //                 <label htmlFor="cvv">CVV</label>
// // // // // //                 <input
// // // // // //                   type="text"
// // // // // //                   id="cvv"
// // // // // //                   {...register('cvv', {
// // // // // //                     required: 'CVV is required',
// // // // // //                     pattern: {
// // // // // //                       value: /^\d{3}$/,
// // // // // //                       message: 'CVV must be 3 digits'
// // // // // //                     }
// // // // // //                   })}
// // // // // //                 />
// // // // // //                 {errors.cvv && <div className="error-message">{errors.cvv.message}</div>}
// // // // // //               </div>
// // // // // //             </>
// // // // // //           )}

// // // // // //           {selectedPayMethod === 'upi' && (
// // // // // //             <>
// // // // // //               <div className="form-group">
// // // // // //                 <label htmlFor="upiId">UPI ID</label>
// // // // // //                 <input
// // // // // //                   type="text"
// // // // // //                   id="upiId"
// // // // // //                   {...register('upiId', {
// // // // // //                     required: 'UPI ID is required',
// // // // // //                     pattern: {
// // // // // //                       value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/,
// // // // // //                       message: 'UPI ID must be in the format "username@bankname"'
// // // // // //                     }
// // // // // //                   })}
// // // // // //                 />
// // // // // //                 {errors.upiId && <div className="error-message">{errors.upiId.message}</div>}
// // // // // //               </div>
// // // // // //             </>
// // // // // //           )}

// // // // // //           {selectedPayMethod === 'bankTransfer' && (
// // // // // //             <>
// // // // // //               <div className="form-group">
// // // // // //                 <label htmlFor="accountNumber">Bank Account Number</label>
// // // // // //                 <input
// // // // // //                   type="text"
// // // // // //                   id="accountNumber"
// // // // // //                   {...register('accountNumber', {
// // // // // //                     required: 'Bank Account Number is required',
// // // // // //                     pattern: {
// // // // // //                       value: /^\d{12}$/,
// // // // // //                       message: 'Bank Account Number must be 12 digits'
// // // // // //                     }
// // // // // //                   })}
// // // // // //                 />
// // // // // //                 {errors.accountNumber && <div className="error-message">{errors.accountNumber.message}</div>}
// // // // // //               </div>
// // // // // //             </>
// // // // // //           )}

// // // // // //           <div className="form-group">
// // // // // //             <label htmlFor="payDate">Payment Date</label>
// // // // // //             <input
// // // // // //               type="date"
// // // // // //               id="payDate"
// // // // // //               {...register('payDate', { required: 'Payment date is required' })}
// // // // // //               min={getCurrentDate()}
// // // // // //             />
// // // // // //             {errors.payDate && <div className="error-message">{errors.payDate.message}</div>}
// // // // // //           </div>

// // // // // //           <button type="submit" disabled={submitting}>
// // // // // //             {submitting ? 'Processing...' : 'Pay Now'}
// // // // // //           </button>
// // // // // //         </form>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default PaymentPage;

// // // // // import React, { useState } from 'react';
// // // // // import { useForm } from 'react-hook-form';
// // // // // import axios from 'axios';
// // // // // import Swal from 'sweetalert2';
// // // // // import { useLocation } from 'react-router-dom';
// // // // // import '../styles/PaymentPage.css';
// // // // // import ApplicantNavbar from '../components/ApplicantNavbar';

// // // // // const PaymentPage = () => {
// // // // //   const { register, handleSubmit, formState: { errors }, watch } = useForm();
// // // // //   const [submitting, setSubmitting] = useState(false);
// // // // //   const [amount, setAmount] = useState(0);
// // // // //   const selectedPayMethod = watch('payMethod');
// // // // //   const location = useLocation();
// // // // //   const premiums = location.state?.premiums || []; // Get premiums from state

// // // // //   const [selectedFrequency, setSelectedFrequency] = useState('yearly');

// // // // //   const handleFrequencyChange = (frequency) => {
// // // // //     setSelectedFrequency(frequency);
// // // // //     const selectedPremium = premiums.find(premium => premium[selectedFrequency]);
// // // // //     setAmount(selectedPremium ? selectedPremium[selectedFrequency] : 0);
// // // // //   };

// // // // //   const generateTransactionId = () => {
// // // // //     return 'TXN' + Math.floor(Math.random() * 1000000);
// // // // //   };

// // // // //   const getCurrentDate = () => {
// // // // //     const today = new Date();
// // // // //     const yyyy = today.getFullYear();
// // // // //     const mm = String(today.getMonth() + 1).padStart(2, '0');
// // // // //     const dd = String(today.getDate()).padStart(2, '0');
// // // // //     return `${yyyy}-${mm}-${dd}`;
// // // // //   };

// // // // //   const onSubmit = async (data) => {
// // // // //     setSubmitting(true);
// // // // //     try {
// // // // //       const applicantId = sessionStorage.getItem('applicantId');
// // // // //       if (!applicantId) {
// // // // //         throw new Error('Applicant ID not found in local storage');
// // // // //       }

// // // // //       const requestData = {
// // // // //         ...data,
// // // // //         applicant: { applicantId },
// // // // //         status: 'successful',
// // // // //         amount
// // // // //       };

// // // // //       await axios.post('http://localhost:8027/payment', requestData);

// // // // //       const transactionId = generateTransactionId();

// // // // //       Swal.fire({
// // // // //         title: 'Payment Successful!',
// // // // //         text: `Transaction ID: ${transactionId}`,
// // // // //         icon: 'success',
// // // // //       });
// // // // //     } catch (err) {
// // // // //       Swal.fire({
// // // // //         title: 'Payment Error',
// // // // //         text: err.response?.data?.message || 'An error occurred during payment. Please try again.',
// // // // //         icon: 'error',
// // // // //       });
// // // // //     } finally {
// // // // //       setSubmitting(false);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div>
// // // // //       <ApplicantNavbar className="applicant-navbar" />
// // // // //       <div className="payment-page">
// // // // //         <h1>Payment Page</h1>
// // // // //         <form onSubmit={handleSubmit(onSubmit)} className="payment-form">
// // // // //           <div className="form-group">
// // // // //             <label htmlFor="amount">Amount</label>
// // // // //             <input
// // // // //               type="number"
// // // // //               id="amount"
// // // // //               value={amount}
// // // // //               readOnly
// // // // //             />
// // // // //           </div>

// // // // //           <div className="form-group">
// // // // //             <label>Frequency</label>
// // // // //             <div>
// // // // //               <label>
// // // // //                 <input
// // // // //                   type="radio"
// // // // //                   name="frequency"
// // // // //                   value="monthly"
// // // // //                   checked={selectedFrequency === 'monthly'}
// // // // //                   onChange={() => handleFrequencyChange('monthly')}
// // // // //                 />
// // // // //                 Monthly
// // // // //               </label>
// // // // //               <label>
// // // // //                 <input
// // // // //                   type="radio"
// // // // //                   name="frequency"
// // // // //                   value="quartely"
// // // // //                   checked={selectedFrequency === 'quartely'}
// // // // //                   onChange={() => handleFrequencyChange('quartely')}
// // // // //                 />
// // // // //                 Quarterly
// // // // //               </label>
// // // // //               <label>
// // // // //                 <input
// // // // //                   type="radio"
// // // // //                   name="frequency"
// // // // //                   value="halfly"
// // // // //                   checked={selectedFrequency === 'halfly'}
// // // // //                   onChange={() => handleFrequencyChange('halfly')}
// // // // //                 />
// // // // //                 Half Yearly
// // // // //               </label>
// // // // //               <label>
// // // // //                 <input
// // // // //                   type="radio"
// // // // //                   name="frequency"
// // // // //                   value="yearly"
// // // // //                   checked={selectedFrequency === 'yearly'}
// // // // //                   onChange={() => handleFrequencyChange('yearly')}
// // // // //                 />
// // // // //                 Yearly
// // // // //               </label>
// // // // //             </div>
// // // // //           </div>

// // // // //           <div className="form-group">
// // // // //             <label htmlFor="payMethod">Payment Method</label>
// // // // //             <select id="payMethod" {...register('payMethod', { required: 'Payment method is required' })}>
// // // // //               <option value="">Select a payment method</option>
// // // // //               <option value="creditCard">Credit Card</option>
// // // // //               <option value="upi">UPI</option>
// // // // //               <option value="bankTransfer">Bank Transfer</option>
// // // // //             </select>
// // // // //             {errors.payMethod && <div className="error-message">{errors.payMethod.message}</div>}
// // // // //           </div>

// // // // //           {selectedPayMethod === 'creditCard' && (
// // // // //             <>
// // // // //               <div className="form-group">
// // // // //                 <label htmlFor="cardNumber">Credit Card Number</label>
// // // // //                 <input
// // // // //                   type="text"
// // // // //                   id="cardNumber"
// // // // //                   {...register('cardNumber', {
// // // // //                     required: 'Credit Card Number is required',
// // // // //                     pattern: {
// // // // //                       value: /^\d{16}$/,
// // // // //                       message: 'Credit Card Number must be 16 digits'
// // // // //                     }
// // // // //                   })}
// // // // //                 />
// // // // //                 {errors.cardNumber && <div className="error-message">{errors.cardNumber.message}</div>}
// // // // //               </div>

// // // // //               <div className="form-group">
// // // // //                 <label htmlFor="cvv">CVV</label>
// // // // //                 <input
// // // // //                   type="text"
// // // // //                   id="cvv"
// // // // //                   {...register('cvv', {
// // // // //                     required: 'CVV is required',
// // // // //                     pattern: {
// // // // //                       value: /^\d{3}$/,
// // // // //                       message: 'CVV must be 3 digits'
// // // // //                     }
// // // // //                   })}
// // // // //                 />
// // // // //                 {errors.cvv && <div className="error-message">{errors.cvv.message}</div>}
// // // // //               </div>
// // // // //             </>
// // // // //           )}

// // // // //           {selectedPayMethod === 'upi' && (
// // // // //             <>
// // // // //               <div className="form-group">
// // // // //                 <label htmlFor="upiId">UPI ID</label>
// // // // //                 <input
// // // // //                   type="text"
// // // // //                   id="upiId"
// // // // //                   {...register('upiId', {
// // // // //                     required: 'UPI ID is required',
// // // // //                     pattern: {
// // // // //                       value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/,
// // // // //                       message: 'UPI ID must be in the format "username@bankname"'
// // // // //                     }
// // // // //                   })}
// // // // //                 />
// // // // //                 {errors.upiId && <div className="error-message">{errors.upiId.message}</div>}
// // // // //               </div>
// // // // //             </>
// // // // //           )}

// // // // //           {selectedPayMethod === 'bankTransfer' && (
// // // // //             <>
// // // // //               <div className="form-group">
// // // // //                 <label htmlFor="accountNumber">Bank Account Number</label>
// // // // //                 <input
// // // // //                   type="text"
// // // // //                   id="accountNumber"
// // // // //                   {...register('accountNumber', {
// // // // //                     required: 'Bank Account Number is required',
// // // // //                     pattern: {
// // // // //                       value: /^\d{12}$/,
// // // // //                       message: 'Bank Account Number must be 12 digits'
// // // // //                     }
// // // // //                   })}
// // // // //                 />
// // // // //                 {errors.accountNumber && <div className="error-message">{errors.accountNumber.message}</div>}
// // // // //               </div>
// // // // //             </>
// // // // //           )}

// // // // //           <div className="form-group">
// // // // //             <label htmlFor="payDate">Payment Date</label>
// // // // //             <input
// // // // //               type="date"
// // // // //               id="payDate"
// // // // //               {...register('payDate', { required: 'Payment date is required' })}
// // // // //               min={getCurrentDate()}
// // // // //             />
// // // // //             {errors.payDate && <div className="error-message">{errors.payDate.message}</div>}
// // // // //           </div>

// // // // //           <button type="submit" disabled={submitting}>
// // // // //             {submitting ? 'Processing...' : 'Pay Now'}
// // // // //           </button>
// // // // //         </form>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default PaymentPage;

// // // // import React, { useState, useEffect } from 'react';
// // // // import { useForm } from 'react-hook-form';
// // // // import axios from 'axios';
// // // // import Swal from 'sweetalert2';
// // // // import { useLocation } from 'react-router-dom';
// // // // import '../styles/PaymentPage.css';
// // // // import ApplicantNavbar from '../components/ApplicantNavbar';

// // // // const PaymentPage = () => {
// // // //   const { register, handleSubmit, formState: { errors }, watch } = useForm();
// // // //   const [submitting, setSubmitting] = useState(false);
// // // //   const [amount, setAmount] = useState(0);
// // // //   const [selectedFrequency, setSelectedFrequency] = useState('yearly');
// // // //   const location = useLocation();
// // // //   const premiums = location.state?.premiums || []; // Retrieve premiums from state

// // // //   useEffect(() => {
// // // //     const initialPremium = premiums.find(premium => premium.yearly);
// // // //     setAmount(initialPremium?.yearly || 0);
// // // //   }, [premiums]);

// // // //   const handleFrequencyChange = (event) => {
// // // //     const frequency = event.target.value;
// // // //     setSelectedFrequency(frequency);
// // // //     const selectedPremium = premiums.find(premium => premium[frequency]);
// // // //     setAmount(selectedPremium ? selectedPremium[frequency] : 0);
// // // //   };

// // // //   const generateTransactionId = () => {
// // // //     return 'TXN' + Math.floor(Math.random() * 1000000);
// // // //   };

// // // //   const getCurrentDate = () => {
// // // //     const today = new Date();
// // // //     const yyyy = today.getFullYear();
// // // //     const mm = String(today.getMonth() + 1).padStart(2, '0');
// // // //     const dd = String(today.getDate()).padStart(2, '0');
// // // //     return `${yyyy}-${mm}-${dd}`;
// // // //   };

// // // //   const onSubmit = async (data) => {
// // // //     setSubmitting(true);
// // // //     try {
// // // //       const applicantId = sessionStorage.getItem('applicantId');
// // // //       if (!applicantId) {
// // // //         throw new Error('Applicant ID not found in local storage');
// // // //       }

// // // //       const requestData = {
// // // //         ...data,
// // // //         applicant: { applicantId },
// // // //         status: 'successful',
// // // //         amount
// // // //       };

// // // //       await axios.post('http://localhost:8027/payment', requestData);

// // // //       const transactionId = generateTransactionId();

// // // //       Swal.fire({
// // // //         title: 'Payment Successful!',
// // // //         text: `Transaction ID: ${transactionId}`,
// // // //         icon: 'success',
// // // //       });
// // // //     } catch (err) {
// // // //       Swal.fire({
// // // //         title: 'Payment Error',
// // // //         text: err.response?.data?.message || 'An error occurred during payment. Please try again.',
// // // //         icon: 'error',
// // // //       });
// // // //     } finally {
// // // //       setSubmitting(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <ApplicantNavbar className="applicant-navbar" />
// // // //       <div className="payment-page">
// // // //         <h1>Payment Page</h1>
// // // //         <form onSubmit={handleSubmit(onSubmit)} className="payment-form">
// // // //           <div className="form-group">
// // // //             <label htmlFor="amount">Amount</label>
// // // //             <input
// // // //               type="number"
// // // //               id="amount"
// // // //               value={amount}
// // // //               readOnly
// // // //             />
// // // //           </div>

// // // //           <div className="form-group">
// // // //             <label htmlFor="frequency">Frequency</label>
// // // //             <select
// // // //               id="frequency"
// // // //               value={selectedFrequency}
// // // //               onChange={handleFrequencyChange}
// // // //             >
// // // //               <option value="monthly">Monthly</option>
// // // //               <option value="quartely">Quarterly</option>
// // // //               <option value="halfly">Half Yearly</option>
// // // //               <option value="yearly">Yearly</option>
// // // //             </select>
// // // //           </div>

// // // //           <div className="form-group">
// // // //             <label htmlFor="payMethod">Payment Method</label>
// // // //             <select id="payMethod" {...register('payMethod', { required: 'Payment method is required' })}>
// // // //               <option value="">Select a payment method</option>
// // // //               <option value="creditCard">Credit Card</option>
// // // //               <option value="upi">UPI</option>
// // // //             </select>
// // // //             {errors.payMethod && <div className="error-message">{errors.payMethod.message}</div>}
// // // //           </div>

// // // //           {watch('payMethod') === 'creditCard' && (
// // // //             <>
// // // //               <div className="form-group">
// // // //                 <label htmlFor="cardNumber">Credit Card Number</label>
// // // //                 <input
// // // //                   type="text"
// // // //                   id="cardNumber"
// // // //                   {...register('cardNumber', {
// // // //                     required: 'Credit Card Number is required',
// // // //                     pattern: {
// // // //                       value: /^\d{16}$/,
// // // //                       message: 'Credit Card Number must be 16 digits'
// // // //                     }
// // // //                   })}
// // // //                 />
// // // //                 {errors.cardNumber && <div className="error-message">{errors.cardNumber.message}</div>}
// // // //               </div>

// // // //               <div className="form-group">
// // // //                 <label htmlFor="cvv">CVV</label>
// // // //                 <input
// // // //                   type="text"
// // // //                   id="cvv"
// // // //                   {...register('cvv', {
// // // //                     required: 'CVV is required',
// // // //                     pattern: {
// // // //                       value: /^\d{3}$/,
// // // //                       message: 'CVV must be 3 digits'
// // // //                     }
// // // //                   })}
// // // //                 />
// // // //                 {errors.cvv && <div className="error-message">{errors.cvv.message}</div>}
// // // //               </div>
// // // //             </>
// // // //           )}

// // // //           {watch('payMethod') === 'upi' && (
// // // //             <>
// // // //               <div className="form-group">
// // // //                 <label htmlFor="upiId">UPI ID</label>
// // // //                 <input
// // // //                   type="text"
// // // //                   id="upiId"
// // // //                   {...register('upiId', {
// // // //                     required: 'UPI ID is required',
// // // //                     pattern: {
// // // //                       value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/,
// // // //                       message: 'UPI ID must be in the format "username@bankname"'
// // // //                     }
// // // //                   })}
// // // //                 />
// // // //                 {errors.upiId && <div className="error-message">{errors.upiId.message}</div>}
// // // //               </div>
// // // //             </>
// // // //           )}

          

// // // //           <div className="form-group">
// // // //             <label htmlFor="payDate">Payment Date</label>
// // // //             <input
// // // //               type="date"
// // // //               id="payDate"
// // // //               {...register('payDate', { required: 'Payment date is required' })}
// // // //               min={getCurrentDate()}
// // // //             />
// // // //             {errors.payDate && <div className="error-message">{errors.payDate.message}</div>}
// // // //           </div>

// // // //           <button type="submit" disabled={submitting}>
// // // //             {submitting ? 'Processing...' : 'Pay Now'}
// // // //           </button>
// // // //         </form>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default PaymentPage;


// // // import React, { useState, useEffect } from 'react';
// // // import { useForm } from 'react-hook-form';
// // // import axios from 'axios';
// // // import Swal from 'sweetalert2';
// // // import { useLocation } from 'react-router-dom';
// // // import '../styles/PaymentPage.css';
// // // import ApplicantNavbar from '../components/ApplicantNavbar';

// // // const PaymentPage = () => {
// // //   const { register, handleSubmit, formState: { errors }, watch } = useForm();
// // //   const [submitting, setSubmitting] = useState(false);
// // //   const [amount, setAmount] = useState(0);
// // //   const [selectedFrequency, setSelectedFrequency] = useState('yearly');
// // //   const [premiumId, setPremiumId] = useState(null);
// // //   const location = useLocation();
// // //   const premiums = location.state?.premiums || []; // Retrieve premiums from state

// // //   useEffect(() => {
// // //     const initialPremium = premiums.find(premium => premium.yearly);
// // //     setAmount(initialPremium?.yearly || 0);
// // //     setPremiumId(initialPremium?.premiumId || null);
// // //   }, [premiums]);

// // //   const handleFrequencyChange = (event) => {
// // //     const frequency = event.target.value;
// // //     setSelectedFrequency(frequency);
// // //     const selectedPremium = premiums.find(premium => premium[frequency]);
// // //     setAmount(selectedPremium ? selectedPremium[frequency] : 0);
// // //     setPremiumId(selectedPremium ? selectedPremium.premiumId : null);
// // //   };

// // //   const generateTransactionId = () => {
// // //     return 'TXN' + Math.floor(Math.random() * 1000000);
// // //   };

// // //   const getCurrentDate = () => {
// // //     const today = new Date();
// // //     const yyyy = today.getFullYear();
// // //     const mm = String(today.getMonth() + 1).padStart(2, '0');
// // //     const dd = String(today.getDate()).padStart(2, '0');
// // //     return `${yyyy}-${mm}-${dd}`;
// // //   };

// // //   const onSubmit = async (data) => {
// // //     setSubmitting(true);
// // //     try {
// // //       const applicantId = sessionStorage.getItem('applicantId');
// // //       if (!applicantId) {
// // //         throw new Error('Applicant ID not found in local storage');
// // //       }

// // //       const requestData = {
// // //         ...data,
// // //         applicant: { applicantId },
// // //         status: 'successful',
// // //         amount,
// // //         premiumId // Include the premiumId in the request data
// // //       };

// // //       await axios.post('http://localhost:8027/payment', requestData);

// // //       const transactionId = generateTransactionId();

// // //       Swal.fire({
// // //         title: 'Payment Successful!',
// // //         text: `Transaction ID: ${transactionId}`,
// // //         icon: 'success',
// // //       });
// // //     } catch (err) {
// // //       Swal.fire({
// // //         title: 'Payment Error',
// // //         text: err.response?.data?.message || 'An error occurred during payment. Please try again.',
// // //         icon: 'error',
// // //       });
// // //     } finally {
// // //       setSubmitting(false);
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <ApplicantNavbar className="applicant-navbar" />
// // //       <div className="payment-page">
// // //         <h1>Payment Page</h1>
// // //         <form onSubmit={handleSubmit(onSubmit)} className="payment-form">
// // //           <div className="form-group">
// // //             <label htmlFor="amount">Amount</label>
// // //             <input
// // //               type="number"
// // //               id="amount"
// // //               value={amount}
// // //               readOnly
// // //             />
// // //           </div>

// // //           <div className="form-group">
// // //             <label htmlFor="frequency">Frequency</label>
// // //             <select
// // //               id="frequency"
// // //               value={selectedFrequency}
// // //               onChange={handleFrequencyChange}
// // //             >
// // //               <option value="monthly">Monthly</option>
// // //               <option value="quartely">Quarterly</option>
// // //               <option value="halfly">Half Yearly</option>
// // //               <option value="yearly">Yearly</option>
// // //             </select>
// // //           </div>

// // //           <div className="form-group">
// // //             <label htmlFor="payMethod">Payment Method</label>
// // //             <select id="payMethod" {...register('payMethod', { required: 'Payment method is required' })}>
// // //               <option value="">Select a payment method</option>
// // //               <option value="creditCard">Credit Card</option>
// // //               <option value="upi">UPI</option>
// // //             </select>
// // //             {errors.payMethod && <div className="error-message">{errors.payMethod.message}</div>}
// // //           </div>

// // //           {watch('payMethod') === 'creditCard' && (
// // //             <>
// // //               <div className="form-group">
// // //                 <label htmlFor="cardNumber">Credit Card Number</label>
// // //                 <input
// // //                   type="text"
// // //                   id="cardNumber"
// // //                   {...register('cardNumber', {
// // //                     required: 'Credit Card Number is required',
// // //                     pattern: {
// // //                       value: /^\d{16}$/,
// // //                       message: 'Credit Card Number must be 16 digits'
// // //                     }
// // //                   })}
// // //                 />
// // //                 {errors.cardNumber && <div className="error-message">{errors.cardNumber.message}</div>}
// // //               </div>

// // //               <div className="form-group">
// // //                 <label htmlFor="cvv">CVV</label>
// // //                 <input
// // //                   type="text"
// // //                   id="cvv"
// // //                   {...register('cvv', {
// // //                     required: 'CVV is required',
// // //                     pattern: {
// // //                       value: /^\d{3}$/,
// // //                       message: 'CVV must be 3 digits'
// // //                     }
// // //                   })}
// // //                 />
// // //                 {errors.cvv && <div className="error-message">{errors.cvv.message}</div>}
// // //               </div>
// // //             </>
// // //           )}

// // //           {watch('payMethod') === 'upi' && (
// // //             <>
// // //               <div className="form-group">
// // //                 <label htmlFor="upiId">UPI ID</label>
// // //                 <input
// // //                   type="text"
// // //                   id="upiId"
// // //                   {...register('upiId', {
// // //                     required: 'UPI ID is required',
// // //                     pattern: {
// // //                       value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/,
// // //                       message: 'UPI ID must be in the format "username@bankname"'
// // //                     }
// // //                   })}
// // //                 />
// // //                 {errors.upiId && <div className="error-message">{errors.upiId.message}</div>}
// // //               </div>
// // //             </>
// // //           )}

// // //           <div className="form-group">
// // //             <label htmlFor="payDate">Payment Date</label>
// // //             <input
// // //               type="date"
// // //               id="payDate"
// // //               {...register('payDate', { required: 'Payment date is required' })}
// // //               min={getCurrentDate()}
// // //             />
// // //             {errors.payDate && <div className="error-message">{errors.payDate.message}</div>}
// // //           </div>

// // //           <button type="submit" disabled={submitting}>
// // //             {submitting ? 'Processing...' : 'Pay Now'}
// // //           </button>
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default PaymentPage;

// // import React, { useState, useEffect } from 'react';
// // import { useForm } from 'react-hook-form';
// // import axios from 'axios';
// // import Swal from 'sweetalert2';
// // import { useLocation } from 'react-router-dom';
// // import '../styles/PaymentPage.css';
// // import ApplicantNavbar from '../components/ApplicantNavbar';

// // const PaymentPage = () => {
// //   const { register, handleSubmit, formState: { errors }, watch } = useForm();
// //   const [submitting, setSubmitting] = useState(false);
// //   const [amount, setAmount] = useState(0);
// //   const [selectedFrequency, setSelectedFrequency] = useState('yearly');
// //   const [premiumId, setPremiumId] = useState(null);
// //   const location = useLocation();
// //   const premiums = location.state?.premiums || []; // Retrieve premiums from state

// //   useEffect(() => {
// //     const initialPremium = premiums.find(premium => premium.yearly);
// //     setAmount(initialPremium?.yearly || 0);
// //     setPremiumId(initialPremium?.premiumId || null);
// //   }, [premiums]);

// //   const handleFrequencyChange = (event) => {
// //     const frequency = event.target.value;
// //     setSelectedFrequency(frequency);
// //     const selectedPremium = premiums.find(premium => premium[frequency]);
// //     setAmount(selectedPremium ? selectedPremium[frequency] : 0);
// //     setPremiumId(selectedPremium ? selectedPremium.premiumId : null);
// //   };

// //   const generateTransactionId = () => {
// //     return 'TXN' + Math.floor(Math.random() * 1000000);
// //   };

// //   const getCurrentDate = () => {
// //     const today = new Date();
// //     const yyyy = today.getFullYear();
// //     const mm = String(today.getMonth() + 1).padStart(2, '0');
// //     const dd = String(today.getDate()).padStart(2, '0');
// //     return `${yyyy}-${mm}-${dd}`;
// //   };

// //   const onSubmit = async (data) => {
// //     setSubmitting(true);
// //     try {
// //       const applicantId = sessionStorage.getItem('applicantId');
// //       if (!applicantId) {
// //         throw new Error('Applicant ID not found in local storage');
// //       }

// //       const requestData = {
// //         ...data,
// //         applicant: { applicantId },
// //         status: 'successful',
// //         amount,
// //         premiumId // Include the premiumId in the request data
// //       };

// //       await axios.post('http://localhost:8027/payment', requestData);

// //       const transactionId = generateTransactionId();

// //       Swal.fire({
// //         title: 'Payment Successful!',
// //         text: `Transaction ID: ${transactionId}`,
// //         icon: 'success',
// //       });
// //     } catch (err) {
// //       Swal.fire({
// //         title: 'Payment Error',
// //         text: err.response?.data?.message || 'An error occurred during payment. Please try again.',
// //         icon: 'error',
// //       });
// //     } finally {
// //       setSubmitting(false);
// //     }
// //   };

// //   return (
// //     <div>
// //       <ApplicantNavbar className="applicant-navbar" />
// //       <div className="payment-page">
// //         <h1>Payment Page</h1>
// //         <form onSubmit={handleSubmit(onSubmit)} className="payment-form">
// //           <div className="form-group">
// //             <label htmlFor="amount">Amount</label>
// //             <input
// //               type="number"
// //               id="amount"
// //               value={amount}
// //               readOnly
// //             />
// //           </div>

// //           <div className="form-group">
// //             <label htmlFor="frequency">Frequency</label>
// //             <select
// //               id="frequency"
// //               value={selectedFrequency}
// //               onChange={handleFrequencyChange}
// //             >
// //               <option value="monthly">Monthly</option>
// //               <option value="quartely">Quarterly</option>
// //               <option value="halfly">Half Yearly</option>
// //               <option value="yearly">Yearly</option>
// //             </select>
// //           </div>

// //           <div className="form-group">
// //             <label htmlFor="payMethod">Payment Method</label>
// //             <select id="payMethod" {...register('payMethod', { required: 'Payment method is required' })}>
// //               <option value="">Select a payment method</option>
// //               <option value="creditCard">Credit Card</option>
// //               <option value="upi">UPI</option>
// //             </select>
// //             {errors.payMethod && <div className="error-message">{errors.payMethod.message}</div>}
// //           </div>

// //           {watch('payMethod') === 'creditCard' && (
// //             <>
// //               <div className="form-group">
// //                 <label htmlFor="cardNumber">Credit Card Number</label>
// //                 <input
// //                   type="text"
// //                   id="cardNumber"
// //                   {...register('cardNumber', {
// //                     required: 'Credit Card Number is required',
// //                     pattern: {
// //                       value: /^\d{16}$/,
// //                       message: 'Credit Card Number must be 16 digits'
// //                     }
// //                   })}
// //                 />
// //                 {errors.cardNumber && <div className="error-message">{errors.cardNumber.message}</div>}
// //               </div>

// //               <div className="form-group">
// //                 <label htmlFor="cvv">CVV</label>
// //                 <input
// //                   type="text"
// //                   id="cvv"
// //                   {...register('cvv', {
// //                     required: 'CVV is required',
// //                     pattern: {
// //                       value: /^\d{3}$/,
// //                       message: 'CVV must be 3 digits'
// //                     }
// //                   })}
// //                 />
// //                 {errors.cvv && <div className="error-message">{errors.cvv.message}</div>}
// //               </div>
// //             </>
// //           )}

// //           {watch('payMethod') === 'upi' && (
// //             <>
// //               <div className="form-group">
// //                 <label htmlFor="upiId">UPI ID</label>
// //                 <input
// //                   type="text"
// //                   id="upiId"
// //                   {...register('upiId', {
// //                     required: 'UPI ID is required',
// //                     pattern: {
// //                       value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/,
// //                       message: 'UPI ID must be in the format "username@bankname"'
// //                     }
// //                   })}
// //                 />
// //                 {errors.upiId && <div className="error-message">{errors.upiId.message}</div>}
// //               </div>
// //             </>
// //           )}

// //           <div className="form-group">
// //             <label htmlFor="payDate">Payment Date</label>
// //             <input
// //               type="date"
// //               id="payDate"
// //               {...register('payDate', { required: 'Payment date is required' })}
// //               min={getCurrentDate()}
// //             />
// //             {errors.payDate && <div className="error-message">{errors.payDate.message}</div>}
// //           </div>

// //           <button type="submit" disabled={submitting}>
// //             {submitting ? 'Processing...' : 'Pay Now'}
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default PaymentPage;

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

