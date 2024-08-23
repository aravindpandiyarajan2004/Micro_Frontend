

// import React from 'react';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import '../styles/Navbar.css';

// function NavigationBar() {
//   return (
//     <Navbar className="navbar" expand="lg" fixed="top">
//       <Navbar.Brand as={Link} to="/" className='text-light'>
//         <img
//           src="https://i.pinimg.com/236x/83/1e/85/831e85e0f7a0e9232fc05d7b0f7bb790.jpg"
//           width="50"
//           height="50"
//           className="navbar-logo-img"
//           alt="Health Insurance Logo"
//         />
//         Health Insurance
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ml-auto">
//           <NavDropdown title="Login" id="basic-nav-dropdown">
//             <NavDropdown.Item as={Link} to="/applicant-login">Applicant Login</NavDropdown.Item>
//             <NavDropdown.Item as={Link} to="/admin-login">Admin Login</NavDropdown.Item>
//           </NavDropdown>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default NavigationBar;
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Make sure this file is correctly referenced and exists

function NavigationBar() {
  return (
    <Navbar className="landnavbar" expand="lg" fixed="top" style={{backgroundColor:'#0056b3'}}>
      <Navbar.Brand as={Link} to="/" className="text-light">
        <img
          src="https://i.pinimg.com/236x/83/1e/85/831e85e0f7a0e9232fc05d7b0f7bb790.jpg"
          width="50"
          height="50"
          className="navbar-logo-img"
          alt="Health Insurance Logo"
        />
        Health Insurance
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={{marginLeft:'900px'}}>
          <NavDropdown title="Login" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/applicant-login">
              Applicant Login
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/admin-login">
              Admin Login
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;


