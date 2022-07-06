import React from "react";
import '../../styles/petshow.css';
import { formatDate } from '../../util/date_util';


class PetShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = "show"
    }

    componentDidMount() {
        this.props.fetchUser(this.props.ownProps.match.params.id)
        // this.props.fetchUser(this.props.user.id)
        this.props.requestPet(this.props.petId);
    }

    handleFeed(){
        
    }

    render() { 
        const { pet, user } = this.props
        console.log(this.props)
        console.log(this.state)
        // if (!pet) return null;
        if (Object.values(user).length === 0) return null;
        if (Object.values(pet).length === 0) return null;
        if (Object.values(user.pets) ===0 ) return null;
        // debugger
        let pickaPet = (user.pets.length !== 0 && user.pets.includes(pet._id)) ? (
            <div>
                 
           
                 <div><button>Feed</button></div>
                 <div><button>Play</button></div>
                 <div><button>Pat</button></div>
                 <div><button>Shower</button></div>
            </div>
        ) : ( 
            <div><button>Pick this Pet</button></div>
        )

        return (
            <div className="pet-show-container">
                <div className="pet-show-info-container-1">
                    <div className="pet-show-information">
                        <div className="pet-info"><span>Name:</span> {pet.name}</div>
                        <div className="pet-info"><span>Species:</span> {pet.species}</div>
                        <div className="pet-info"><span>Breed:</span> {pet.breed}</div>
                        <div className="pet-info"><span>Birthday:</span> {formatDate(pet.birthday)}</div>
                        <div className="pet-info"><span>Gender:</span> {pet.gender}</div>
                    </div>
                    <div className="image-container">
                        <img className="pet-show-image" src={pet.showGif}/>
                    </div>
                    <div className="pet-show-button">
                        {pickaPet}
                    </div>
                </div>
                <div className="pet-show-info-container-2">
                    <div className="pet-show-description">
                        <div className="pet-info-description"><span>Description:</span> {pet.description}</div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default PetShow;