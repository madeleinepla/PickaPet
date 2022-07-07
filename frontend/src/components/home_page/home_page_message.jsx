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
          <div className="animated-text">
            <div className="picka-pet-about">~ Picka Pet is a virtual pet simulator ~</div>
            <div className="picka-pet-pet">~ Pick from our many selection of pets ~</div>
            <div className="picka-pet-dog">~ Raise your own virtual dog ~</div>
            <div className="picka-pet-cat">~ Take care of your own virtual cat ~</div>
            <div className="picka-pet-interact">~ Interact with your pet through actions ~</div>
          </div>
        </div>
        <div className="paw-animation">
          <svg class="paw1" width="76" height="76" xmlns="http://www.w3.org/2000/svg">
            <g transform="rotate(45 38.247 36.923)" fill="#E6DDD0" fill-rule="evenodd">
              <rect transform="rotate(90 7.943 30.163)" x="-3.404" y="22.195" width="22.695" height="15.935" rx="7.967"/>
              <rect transform="rotate(90 27.801 14.228)" x="13.617" y="5.691" width="28.369" height="17.073" rx="8.438"/>
              <rect transform="rotate(90 71.49 30.732)" x="60.142" y="22.195" width="22.695" height="17.073" rx="8.438"/>
              <rect transform="rotate(90 51.064 14.228)" x="36.879" y="5.691" width="28.369" height="17.073" rx="8.438"/>
              <path d="M33.543 33.008h11.78c12.258 0 22.195 9.937 22.195 22.195 0 8.061-6.535 14.596-14.596 14.596-1.101 0-2.2-.124-3.272-.371a44.175 44.175 0 0 0-9.934-1.135c-3.442 0-6.886.403-10.332 1.21-7.898 1.85-15.8-3.053-17.65-10.95a14.687 14.687 0 0 1-.386-3.35c0-12.258 9.937-22.195 22.195-22.195z"/>
            </g>
          </svg>
          <svg class="paw2" width="76" height="76" xmlns="http://www.w3.org/2000/svg">
            <g transform="rotate(130 38.247 36.923)" fill="#E6DDD0" fill-rule="evenodd">
              <rect transform="rotate(90 7.943 30.163)" x="-3.404" y="22.195" width="22.695" height="15.935" rx="7.967"/>
              <rect transform="rotate(90 27.801 14.228)" x="13.617" y="5.691" width="28.369" height="17.073" rx="8.438"/>
              <rect transform="rotate(90 71.49 30.732)" x="60.142" y="22.195" width="22.695" height="17.073" rx="8.438"/>
              <rect transform="rotate(90 51.064 14.228)" x="36.879" y="5.691" width="28.369" height="17.073" rx="8.438"/>
              <path d="M33.543 33.008h11.78c12.258 0 22.195 9.937 22.195 22.195 0 8.061-6.535 14.596-14.596 14.596-1.101 0-2.2-.124-3.272-.371a44.175 44.175 0 0 0-9.934-1.135c-3.442 0-6.886.403-10.332 1.21-7.898 1.85-15.8-3.053-17.65-10.95a14.687 14.687 0 0 1-.386-3.35c0-12.258 9.937-22.195 22.195-22.195z"/>
            </g>
          </svg>
          <svg class="paw3" width="76" height="76" xmlns="http://www.w3.org/2000/svg">
            <g transform="rotate(130 38.247 36.923)" fill="#E6DDD0" fill-rule="evenodd">
              <rect transform="rotate(90 7.943 30.163)" x="-3.404" y="22.195" width="22.695" height="15.935" rx="7.967"/>
              <rect transform="rotate(90 27.801 14.228)" x="13.617" y="5.691" width="28.369" height="17.073" rx="8.438"/>
              <rect transform="rotate(90 71.49 30.732)" x="60.142" y="22.195" width="22.695" height="17.073" rx="8.438"/>
              <rect transform="rotate(90 51.064 14.228)" x="36.879" y="5.691" width="28.369" height="17.073" rx="8.438"/>
              <path d="M33.543 33.008h11.78c12.258 0 22.195 9.937 22.195 22.195 0 8.061-6.535 14.596-14.596 14.596-1.101 0-2.2-.124-3.272-.371a44.175 44.175 0 0 0-9.934-1.135c-3.442 0-6.886.403-10.332 1.21-7.898 1.85-15.8-3.053-17.65-10.95a14.687 14.687 0 0 1-.386-3.35c0-12.258 9.937-22.195 22.195-22.195z"/>
            </g>
          </svg>
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