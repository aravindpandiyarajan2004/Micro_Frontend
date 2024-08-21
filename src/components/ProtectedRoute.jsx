// // import React from 'react';
// // import { Navigate } from 'react-router-dom';

// // const ProtectedRoute = ({ element, role, ...rest }) => {
// //   const isAuthenticated = !!localStorage.getItem(role);
  
// //   return isAuthenticated ? element : <Navigate to={`/${role}-login`} />;
// // };

// // export default ProtectedRoute;

// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ element, role, ...rest }) => {
//   const isAuthenticated = !!localStorage.getItem(role);

//   return isAuthenticated ? element : <Navigate to={`/${role}-login`} />;
// };


// export default ProtectedRoute;

import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, role }) => {
  const isAuthenticated = sessionStorage.getItem('isLoginAdmin') || sessionStorage.getItem('isLoginUser'); // Check for the generic token

  return isAuthenticated ? element : <Navigate to={`/${role}-login`} />;
};

export default ProtectedRoute;
