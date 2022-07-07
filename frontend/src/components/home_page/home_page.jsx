import React from 'react';
// import NavBarContainer from '../nav/navbar_container';
import ModalContainer from '../modal/modal_container';
import HomeDog from './home_dog';
import HomePageMessage from './home_page_message';

// const dog = require('./dog-html-css/dog1/dog.html')

const HomePage = (props) => {
  return (
    <div>

      <div>
        <ModalContainer />
      </div>
      <div className='home-main'>
        <HomeDog />
        <HomePageMessage />
      </div>
    </div>
  )
}

export default HomePage;