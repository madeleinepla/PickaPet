import React from "react";
import PetIndexItem from "./pet_index_item";
import { withRouter } from 'react-router-dom';
import '../../styles/pet.css';
// import {sample} from '../../util/random_util'

class PetIndex extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     pets: []
        // }
    }

    componentDidMount() {
        this.props.requestPets();
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
        // console.log(this.props)
        // console.log(this.state)
        const { pets, currentUser } = this.props;
        // debugger
        const i = Math.floor(Math.random() * (pets.length/2)) // 0-3
        const j = Math.floor(Math.random() * (pets.length/2)+4) //4-7
        // console.log(i)
        // console.log(j)
        const randPets = pets.slice(i, i+4) //if want just random pets without fixed number replace i+4 to j.

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
                            currentUser={currentUser}
                        />
                    ))}
                </div>
            );
        }
    }
}

export default withRouter(PetIndex);