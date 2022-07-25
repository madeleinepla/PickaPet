import React from "react";
import { Link } from "react-router-dom";
import '../../styles/pet.css'
import pin from '../../assets/images/pushpin.png';

class PetIndexItem extends React.Component {
    render() { 
        const { pet, ownProps} = this.props;

        return (
            <div className="pet-index-container">
                <Link to={{ pathname: `/pets/${pet._id}`, state: { prevPath: ownProps.history.location.pathname } }}>
                    
                    <div className="pet-box">
                        <img className="pushpin" src={pin} alt="" />

                        <div className="pet-index-img">
                            <img src={pet.profileUrl} alt='loading...'/>
                        </div>

                        <div className="pet-index-info">
                            <div>{pet.name}</div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default PetIndexItem;