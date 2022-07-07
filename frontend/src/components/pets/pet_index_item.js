import React from "react";
import { Link } from "react-router-dom";
import '../../styles/pet.css'
import pin from '../../assets/images/pushpin.png';

class PetIndexItem extends React.Component {
    constructor (props) {
        super(props)
    }
    
    render() { 
        // debugger
        const { pet, currentUser } = this.props;
        // debugger
        // console.log(this.props)
        let dates = pet.birthday.split("T");
        let date = dates[0]
        // let year = pet.birthday.getYear();
        // let month = pet.birthday.getMonth();
        // let bday =  `${month}/${day}/${year}`

        return (
            <div className="pet-index-container">
                <Link to={`/pets/${pet._id}`} style={{textDecoration:'none', color: 'inherit' }}>
                    <div className="pet-box">
                        <img className="pushpin" src={pin} alt="" />
                        {/* <iframe className='pet-profileUrl' src={pet.profileUrl} alt='loading...'></iframe>  */}
                        <div className="pet-index-img">
                            <img src={pet.profileUrl} alt='loading...'/>
                        </div>
                        <div className="pet-index-info">
                            <div>{pet.name}</div>
                            {/* <div>Birthday: {date} </div>
                            <div>Gender: {pet.gender}</div>
                            <div> Breed: {pet.breed}</div> */}
                        </div>
                        {/* <div>{pickapet}</div> */}
                    </div>
                </Link>
            </div>
        );
    }
}

export default PetIndexItem;