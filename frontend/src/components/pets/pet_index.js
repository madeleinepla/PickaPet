import React from "react";
import PetIndexItem from "./pet_index_item";
import { withRouter } from 'react-router-dom';
import '../../styles/pet.css';

// import {sample} from '../../util/random_util'

class PetIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestPets();
        this.props.fetchUser(this.props.currentUser.id);
    }

    render() {
        const { pets, user } = this.props;

        if (Object.keys(user).length === 0 || pets.length === 0) return null;

        const availPets = pets.filter((pet) => {
            return !user.pets.includes(pet._id)
        })

        function shuffle(array) {
            let currentIndex = array.length, randomIndex;
            while (currentIndex != 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]];
            }
            return array;
        }

        const randPets = shuffle(availPets).slice(0, 6);

        if (randPets.length === 0) {
            return null;
        } else {
            return (
                <div className="pet-boxes">
                    
                    {randPets.map((pet) => (
                        <PetIndexItem
                            pet={pet}
                            key={pet._id}
                            ownProps={this.props.ownProps}
                        />
                    ))}
                </div>
            );
        }
    }
}

export default withRouter(PetIndex);