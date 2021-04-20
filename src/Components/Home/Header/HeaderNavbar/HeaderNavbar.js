import React from "react";
import './HeaderNavbar.css'
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../../App";

const HeaderNavbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  return (
    <Navbar sticky="top" collapseOnSelect expand="md" style={{background: 'rgba(96, 42, 122, .6)'}}>
      <div className="container">
        <Navbar.Brand href="/home">
        <img src="https://i.ibb.co/QMgMRGt/logo-white.png" alt=""/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className='text-white' as={Link} to="/home">Home</Nav.Link>
            <Nav.Link className='text-white' as={Link} to="/aboutUs">About Us</Nav.Link>
            <Nav.Link className='text-white' as={Link} to="/contact">Contact </Nav.Link>
            <Nav.Link className='text-white' as={Link} to="/dashboard">Dashboard</Nav.Link>
            { loggedInUser.email  ? <button onClick={ () => setLoggedInUser(!loggedInUser.isSignIn)} className='btn btn-danger'>LogOut</button> : <Link to='/login'><button className='btn btn-danger'>Login</button></Link>
            }
            
              
            
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default HeaderNavbar;
