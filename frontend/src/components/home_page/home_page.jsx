import React from 'react';
import HomeDog from './home_dog';
import HomePageMessage from './home_page_message';
import Footer from './footer';

const HomePage = (props) => {
  return (
    <div>
      <div>
      </div>
      <div className='home-main'>
        <HomeDog />
        <HomePageMessage />
      </div>
      <div className="block"></div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default HomePage;