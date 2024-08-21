
// // import React from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import Swal from 'sweetalert2';

// // const Logout = ({ role }) => {
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     // Remove specific role's token/session
// //     localStorage.removeItem(`${role}Token`);
    
// //     Swal.fire({
// //       icon: 'success',
// //       title: 'Logged out successfully',
// //       timer: 2000,
// //       showConfirmButton: false,
// //     });

// //     navigate(`/${role}-login`);
// //   };

// //   return (
// //     <button onClick={handleLogout}>Logout</button>
// //   );
// // };

// // export default Logout;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';

// // const Logout = ({ role }) => {
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     // Remove token from localStorage based on role
// //     localStorage.removeItem(`${role}Token`);

// //     Swal.fire({
// //       icon: 'success',
// //       title: 'Logged out successfully',
// //       timer: 2000,
// //       showConfirmButton: false,
// //     });

// //     navigate(`/${role}-login`);
// //   };

// //   return (
// //     <button onClick={handleLogout}>Logout</button>
// //   );
// // };
// const Logout = ({ role }) => {
//     const navigate = useNavigate();
  
//     const handleLogout = () => {
//       // Remove specific role's token/session
//       localStorage.removeItem(`${role}Token`);
      
//       Swal.fire({
//         icon: 'success',
//         title: 'Logged out successfully',
//         timer: 2000,
//         showConfirmButton: false,
//       }).then(() => {
//         navigate(`/${role}-login`);
//       });
//     };
  
//     return (
//       <button onClick={handleLogout}>Logout</button>
//     );
//   };
  

// export default Logout;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Logout = ({ role }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove authentication token from local storage
    sessionStorage.clear();
    localStorage.clear(); // Use a single key if your backend uses a generic token
    
    Swal.fire({
      icon: 'success',
      title: 'Logged out successfully',
      timer: 2000,
      showConfirmButton: false,
    }).then(() => {
      // Redirect to the appropriate login page based on the role
      if (role === 'admin') {
        navigate('/admin-login');
      } else if (role === 'applicant') {
        navigate('/applicant-login');
      } 
      else{
        navigate('/applicant-login');
      }
    });
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;

