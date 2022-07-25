import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search_container';
import ModalContainer from '../modal/modal_container';

const NavBar = (props) => {
  const logoutUser = (e) => {
    e.preventDefault();
    props.logout();
  };

  const clickHandler = (userId) => {
    props.fetchUser(userId);
  }

  const navbarLinks = () => {
    return props.loggedIn ? (
      <div className='dropdown'>
        <button className="nav-btn">
          Welcome, {props.currentUser.username}
        </button>
        <div className="dropdown-content">
          <ul >
            <li><Link to={`/users/${props.currentUser.id}`} onClick={() => clickHandler(props.currentUser.id)}>Profile Page</Link></li>
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
    );
  };

  const navbarSearch = () => {
    return props.loggedIn ? (
      <SearchContainer />
    ) : (
      null
    );
  };

  return (
    <div className='navbar'>
      <div className='empty-on-purpose'></div>

      <div className='navbar-search'>{navbarSearch()}</div>

      <div className='navbar-title'><Link to='/'>Picka Pet</Link></div>

      <ModalContainer />
      <div className='navbar-drop'>{navbarLinks()}</div>

      {
        props.loggedIn ?
          <button className='instruct-btn' onClick={() => props.openModal('instructions')}>i</button> :
          null
      }

    </div>
  );
};

export default NavBar;