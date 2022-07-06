import React from "react";


class PetShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // debugger
        this.props.requestPet(this.props.petId);
    }

    showPet() {
        const { pet } = this.props;

        return (
            <div>
                <div>{pet.name}</div>
                <div>{pet.species}</div>
                <div>{pet.breed}</div>
                <div>{pet.birthday}</div>
                <div>{pet.gender}</div>
                {/* <div>{this.description()}</div> */}
            </div>
        )
    }

    // description() {
    //     const { pet } = this.props;
    //     switch (pet.breed) {
    //         case 'Kinkalow':
    //             return (
    //                 <div>This is a Kinkalow</div>
    //             )
    //         case 'Shiba Inu':
    //             return (
    //                 <div>This is a Shiba Inu</div>
    //             )
    //         case 'Corgi':
    //             return (
    //                 <div>This is a Corgi</div>
    //             )
    //         case 'Golden Retriver':
    //             return (
    //                 <div>This is a Golden Retriver</div>
    //             )
    //         case 'British Shorthair':
    //             return (
    //                 <div>This is a British Shorthair</div>
    //             )
    //         case 'Orange Tabby':
    //             return (
    //                 <div>This is a Orange Tabby</div>
    //             )
    //         case 'Exotic Shorthair':
    //             return (
    //                 <div>This is a Exotic Shorthair</div>
    //             )
    //         default:
    //             return (
    //                 <div>Error</div>
    //             )
    //     }
    // }

    render() { 
        // debugger
        // const pet = this.props.pets.filter(pet => pet._id === this.props.ownProps.match.params.petId)
        const { pet } = this.props
        // debugger

        if (!pet) return null;
        return (
            <div>
                {/* <div>Test</div> */}
                <div>{this.showPet()}</div>
            </div>
        );
    }
}
 
export default PetShow;