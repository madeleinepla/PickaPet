import React from "react";
import PetIndexItem from "./pet_index_item";
import { withRouter } from 'react-router-dom';
import "./pet.css"

class PetIndex extends React.Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     pets: []
        // }
    }

    componentDidMount(){
        this.props.requestPets()

    }

    render() { 
        // debugger
        // console.log(this.props)
        // console.log(this.state)
        const { pets } = this.props
        if (pets.length === 0 ) {
            return null
        }  else {
        return (
            <div className="pet-boxes">
                {pets.map((pet)=> (
                    <PetIndexItem
                        pet = { pet }
                        key = { pet.id }
                        />
                ))}
            </div>
        );
    }  }
}

export default withRouter(PetIndex);