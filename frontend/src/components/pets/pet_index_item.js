import React from "react";
import { Link } from "react-router-dom";
import '../../styles/pet.css'



class PetIndexItem extends React.Component {
    constructor (props) {
        super(props)
    }
    
    render() { 
        const { pet, currentUser } = this.props;
        // debugger
        // console.log(this.props)
        let dates = pet.birthday.split("T");
        let date = dates[0]
        // let year = pet.birthday.getYear();
        // let month = pet.birthday.getMonth();
        // let bday =  `${month}/${day}/${year}`

        // let userPets = currentUser.pets
        // let pickaPet = (userPets.length !== 0 && userPets.includes(pet._id)) ? (
        //     <div>Already have</div>
        // ) : ( 
        //     <div>Pick</div>
        // )


        return (
            <div className="pet-index-container">
                <Link to={`/pets/${pet.id}`} style={{textDecoration:'none', color: 'inherit' }}>
                    <div className="pet-box">
                        {/* <iframe className='pet-profileUrl' src={pet.profileUrl} alt='loading...'></iframe>  */}
                    <img className='pet-profileUrl' src={pet.profileUrl} alt='loading...'/>
                        <div className="pet-name">{pet.name}</div>
                        <div className="pet-age">Birthday: {date} </div>
                        <div className="pet-gender">Gender: {pet.gender}</div>
                        <div className="pet-breed"> Breed: {pet.breed}</div>
                        {/* <div>{pickapet}</div> */}
                    </div>
                </Link>
            </div>
        );
    }
}

export default PetIndexItem;