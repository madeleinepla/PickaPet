import React from "react";
import '../../styles/pet.css'


class PetIndexItem extends React.Component {
    constructor (props) {
        super(props)
    }
    
    render() { 
        // debugger
        const { pet } = this.props;
        // console.log(this.props)
        let dates = pet.birthday.split("T");
        let date = dates[0]
        // let year = pet.birthday.getYear();
        // let month = pet.birthday.getMonth();
        // let bday =  `${month}/${day}/${year}`

        return (
            <div className="pet-index-container">
                <div className="pet-box">
                <img className='pet-profileUrl' src={pet.profileUrl} />
                    <div className="pet-name">{pet.name}</div>
                    <div className="pet-age">Birthday: {date} </div>
                    <div className="pet-gender">Gender: {pet.gender}</div>
                    <div className="pet-breed"> Breed: {pet.breed}</div>
                </div>
            </div>
        );
    }
}

export default PetIndexItem;