import React from 'react';
// import { Link } from 'react-router-dom';

const NavBar = (props) => {
  const logoutUser = (e) => {
    e.preventDefault();
    props.logout();
  }

  const navbarLinks = () => {
    return props.loggedIn ? (
      <div>
        <ul>
          <li onClick={() => logoutUser}>Log Out</li>
        </ul>
      </div>
    ) : (
      <div>
        <ul>
          <li onClick={() => props.openModal('signup')}>Sign Up</li>
          <li onClick={() => props.openModal('login')}>Log In</li>
        </ul>
      </div>
    )
  }

  return (
    <div>
      <div>Picka Pet</div>
      {navbarLinks()}
    </div>
  )
}

export default NavBar;