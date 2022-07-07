import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  const logoutUser = (e) => {
    e.preventDefault();
    props.logout();
  }

  const navbarLinks = () => {
    // debugger
    return props.loggedIn ? (
      <div className='dropdown'>
        <button className="nav-btn">
          Welcome, {props.currentUser.username}
        </button>
        <div className="dropdown-content">
          <ul >
            <li><Link to={`/users/${props.currentUser.id}`}>Profile Page</Link></li>
            <li><Link to='/pets'>Pet Store</Link></li>
            <li onClick={logoutUser}>Log Out</li>
          </ul>
        </div>
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
      <div className='empty-on-purpose'></div>

      <div className='navbar-title'><Link to='/'>Picka Pet</Link></div>
      
      <div className='navbar-drop'>{navbarLinks()}</div>
      
    </div>
  )
}

export default NavBar;