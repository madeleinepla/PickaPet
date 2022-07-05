import React from "react";


class PetIndexItem extends React.Component {
    constructor (props) {
        super(props)
    }

    
    render() { 
        const { pet } = this.props;
        return (
            <div>
                {pet.name}
                {pet.age}
                {pet.gender}
            </div>
        );
    }
}

export default PetIndexItem;