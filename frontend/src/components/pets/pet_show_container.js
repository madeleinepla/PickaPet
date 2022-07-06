import { connect } from "react-redux";
import { requestPet } from "../../actions/pet_actions";
import { fetchUsers } from '../../actions/user_actions';
import PetShow from "./pet_show";


const mSTP = (state, ownProps) => {
    // debugger
    return {
        pets: state.entities.pets.all,
        petId: ownProps.match.params.petId,
        pet: state.entities.pets.pet,
        currentUser: state.session.user
    }
}

const mDTP = (dispatch) => {
    // debugger
    return {
        // fetchUsers: () => dispatch(fetchUsers()),
        requestPet: (petId) => dispatch(requestPet(petId)),
    }
}

export default connect(mSTP,mDTP)(PetShow)