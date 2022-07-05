import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  const logoutUser = (e) => {
    e.preventDefault();
    props.logout();
  }

  const navbarLinks = () => {
    return props.loggedIn ? (
      <div className='navbar-links'>
        <ul>
          <li><Link to={`/users/${props.currentUser.id}`}>Profile Page</Link></li>
          <li onClick={logoutUser}>Log Out</li>
        </ul>
      </div>
    ) : (
        <div className='navbar-links'>
        <ul>
          <li onClick={() => props.openModal('signup')}>Sign Up</li>
          <li onClick={() => props.openModal('login')}>Log In</li>
        </ul>
      </div>
    )
  }

  return (
    <div className='navbar'>
      <Link to='/'>Picka Pet</Link>
      {navbarLinks()}
    </div>
  )
}

export default NavBar;