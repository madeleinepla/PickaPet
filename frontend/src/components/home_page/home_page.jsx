import React from 'react';
import NavBarContainer from '../nav/navbar_container';
import ModalContainer from '../modal/modal_container';

const HomePage = (props) => {
  return (
    <div>
      <ModalContainer />
      <NavBarContainer />
    </div>
  )
}

export default HomePage;