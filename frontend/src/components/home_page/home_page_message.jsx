import React from 'react';
import huskie from '../../images/huskie.png';
import shiba from '../../images/shiba.png';
import cockerspaniel from '../../images/cockerspaniel.png';
import corgi from '../../images/corgi.png';
import dalmatian from '../../images/dalmatian.png';
import doberman from '../../images/doberman.png';
import germanshepherd from '../../images/germanshepherd.png';
import goldenretriver from '../../images/goldenretriver.png';
import britishshorthair from '../../images/britishshorthair.png';
import chantillytiffany from '../../images/chantillytiffany.png';
import cheetoh from '../../images/cheetoh.png';
import exoticcat from '../../images/exoticcat.png';
import exoticshorthair from '../../images/exoticshorthair.png';
import kinkalow from '../../images/kinkalow.png';
import orangetabby from '../../images/orangetabby.png';
import tonkinese from '../../images/tonkinese.png';

const HomePageMessage = (props) => {
  return (
    <div>
      <div className="home-welcome-container">
        <div className="home-message-container">
          <h2 className="home-title-message">Welcome to Picka Pet!</h2>
          <div className="animated text">
            <div className="picka-pet-about">~ Picka Pet is a virtual pet simulator ~</div>
            <div className="picka-pet-pet">~ Pick from our many selection of pets ~</div>
            <div className="picka-pet-dog">~ Raise your own virtual dog ~</div>
            <div className="picka-pet-cat">~ Take care of your own virtual cat ~</div>
            <div className="picka-pet-interact">~ Interact with your pet through actions ~</div>
          </div>
        </div>
        <div className="homepage-image-container">
          <div className="dogs">
            <div className="dogs-1">
              <div className="huskie">
                <img className="homepage-image" src={huskie} alt="huskie" />
                <span>Huskie</span>
              </div>
              <div className="shiba">
                <img className="homepage-image" src={shiba} alt="shiba" />
                <span>Shiba</span>
              </div>
              <div className="corgi">
                <img className="homepage-image" src={corgi} alt="corgi" />
                <span>Corgi</span>
              </div>
              <div className="dalmatian">
                <img className="homepage-image" src={dalmatian} alt="dalmatian" />
                <span>Dalmatian</span>
              </div>
            </div>
            <div className="dogs-2">
              <div className="cockerspaniel">
                <img className="homepage-image" src={cockerspaniel} alt="cockerspaniel" />
                <span>Cocker Spaniel</span>
              </div>
              <div className="doberman">
                <img className="homepage-image" src={doberman} alt="doberman" />
                <span>Doberman</span>
              </div>
              <div className="germanshepherd">
                <img className="homepage-image" src={germanshepherd} alt="germanshepherd" />
                <span>German Shepherd</span>
              </div>
              <div className="goldenretriver">
                <img className="homepage-image" src={goldenretriver} alt="goldenretriver" />
                <span>Golden Retriver</span>
              </div>
            </div>
          </div>
          <div className="cats">
            <div className="cats-1">
              <div className="britishshorthair">
                <img className="homepage-image" src={britishshorthair} alt="britishshorthair" />
                <span>British Shorthair</span>
              </div>
              <div className="kinkalow">
                <img className="homepage-image" src={kinkalow} alt="kinkalow" />
                <span>Kinkalow</span>
              </div>
              <div className="orangetabby">
                <img className="homepage-image" src={orangetabby} alt="orangetabby" />
                <span>Orange Tabby</span>
              </div>
              <div className="cheetoh">
                <img className="homepage-image" src={cheetoh} alt="cheetoh" />
                <span>Cheetoh</span>
              </div>
            </div>
            <div className="cats-2">
              <div className="tonkinese">
                <img className="homepage-image" src={tonkinese} alt="tonkinese" />
                <span>Tonkinese</span>
              </div>
              <div className="chantillytiffany">
                <img className="homepage-image" src={chantillytiffany} alt="chantillytiffany" />
                <span>Chantilly Tiffany</span>
              </div>
              <div className="exoticshorthair">
                <img className="homepage-image" src={exoticshorthair} alt="exoticshorthair" />
                <span>Exotic Shorthair</span>
              </div>
              <div className="exoticcat">
                <img className="homepage-image" src={exoticcat} alt="exoticcat" />
                <span>Exotic Cat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageMessage;