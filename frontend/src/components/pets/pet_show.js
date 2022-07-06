import React from "react";
import '../../styles/petshow.css';
import { formatDate } from '../../util/date_util';


class PetShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestPet(this.props.petId);
    }

    render() { 
        const { pet } = this.props
        
        if (!pet) return null;

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