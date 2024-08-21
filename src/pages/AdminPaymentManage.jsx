
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/AdminPaymentManage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import AdminNavbar from '../components/AdminNavbar';

const AdminPaymentManage = () => {
  const [payments, setPayments] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [amount, setAmount] = useState('');
  const [payMethod, setPayMethod] = useState('');
  const [status, setStatus] = useState('');
  const [payDate, setPayDate] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPayments = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:8027/payment/all');
        setPayments(response.data);
        setError('');
      } catch (error) {
        console.error('Error fetching payments:', error);
        setError('Error fetching payments.');
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  const handleEditPayment = (payment) => {
    setSelectedPayment(payment);
    setAmount(payment.amount);
    setPayMethod(payment.payMethod);
    setStatus(payment.status);
    setPayDate(payment.payDate.slice(0, 10)); // Format date for input
  };

  const handleSaveEdit = async () => {
    if (!selectedPayment || !amount || !payMethod || !status || !payDate) {
      setError('All fields are required.');
      return;
    }

    const updatedPayment = {
      ...selectedPayment,
      amount: parseInt(amount, 10),
      payMethod,
      status,
      payDate: new Date(payDate).toISOString()
    };

    setLoading(true);
    try {
      const response = await axios.put('http://localhost:8027/payment', updatedPayment);
      if (response.data === 'Success') {
        setPayments(payments.map(p => p.payId === selectedPayment.payId ? updatedPayment : p));
        setSelectedPayment(null);
        setAmount('');
        setPayMethod('');
        setStatus('');
        setPayDate('');
        setError('');
      } else {
        setError('Error updating payment.');
      }
    } catch (error) {
      console.error('Error updating payment:', error);
      setError('Error updating payment.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePayment = async (paymentId) => {
    setLoading(true);
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: 'This action cannot be undone!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      });

      if (result.isConfirmed) {
        const response = await axios.delete(`http://localhost:8027/payment/${paymentId}`);
        if (response.data === 'Success') {
          setPayments(payments.filter(payment => payment.payId !== paymentId));
          await Swal.fire('Deleted!', 'The payment has been deleted.', 'success');
        } else {
          setError('Error deleting payment.');
        }
      }
    } catch (error) {
      console.error('Error deleting payment:', error);
      setError('Error deleting payment.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="payment-management">
        <AdminNavbar/>
      <h1>Manage Payments</h1><hr/>
      {error && <p className="error-message">{error}</p>}
      {payments.length > 0 && (
        <div>
        
          <table>
            <thead>
              <tr>
                <th>Payment ID</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>Status</th>
                <th>Payment Date</th>
                <th>Applicant Name</th>
                {/* <th>Total Amount</th> */}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.payId}>
                  <td>{payment.payId}</td>
                  <td>{payment.amount}</td>
                  <td>{payment.payMethod}</td>
                  <td>{payment.status}</td>
                  <td>{new Date(payment.payDate).toLocaleDateString()}</td>
                  <td>{payment.applicant?.applicantName}</td>
                  {/* <td>{payment.premium?.totalAmount}</td> */}
                  <td>
                    
                      <FontAwesomeIcon icon={faTrashAlt} onClick={() => handleDeletePayment(payment.payId)} disabled={loading} style={{color:'red',fontsize:'50px'}}/>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminPaymentManage;
