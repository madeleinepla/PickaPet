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

    // sample(arr, req) {
    //     let i = 0,
    //         randArr = [],
    //         randItem = arr[Math.floor(Math.random() * (arr.length))];
    //     while (i < req && !(randArr.includes(randItem))) {
    //         randArr.push(randItem);
    //         ++i;
    //     }
    //     return randArr;
    // }

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

        const randPets = shuffle(availPets);

        // const i = Math.floor(Math.random() * (pets.length/2)) // 0-3
        // const j = Math.floor(Math.random() * (pets.length/2)+4) //4-7
        
        // const randPets = availPets.slice(i, i+6) //if want just random pets without fixed number replace i+4 to j.
        // sample(pets, 4){
        //     let i = 0,
        //         randPets = [],
        //         randItem = pets[Math.floor(Math.random() * (pets.length))];
        //     while (i < req && !(randPets.includes(randItem))) {
        //         randPets.push(randItem);
        //         ++i;
        //     }
        //     return randPets;
        // }

        // const randPets = sample(pets, 4)
        // debugger
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