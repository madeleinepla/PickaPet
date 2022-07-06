import React from 'react';
import NavBarContainer from '../nav/navbar_container';
import ModalContainer from '../modal/modal_container';
import HomeDog from './home_dog'

// const dog = require('./dog-html-css/dog1/dog.html')

const HomePage = (props) => {
  return (
    <div>

      <div>
        <ModalContainer />
      </div>
      <div className='home-main'>
        <HomeDog />
      </div>

    </div>
  )
}

export default HomePage;