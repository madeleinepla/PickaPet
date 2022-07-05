import React from "react";
import PetIndexItem from "./pet_index_item";

class PetIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.requestPets()
    }

    render() { 

        const { pets } = this.props

        return (
            <div>
                {pets.map((pet)=> (
                    <PetIndexItem
                        pet = { pet }
                        key = { pet.id }
                        />
                ))}
            </div>
        );
    }
}

export default PetIndex;