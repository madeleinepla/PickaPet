import { connect } from "react-redux";
import { requestPet } from "../../actions/pet_actions";
import { fetchUser, adoptPet } from '../../actions/user_actions';
import PetShow from "./pet_show";


const mSTP = (state, ownProps) => {
    // debugger
    return {
        pets: state.entities.pets.all,
        pet: state.entities.pets.pet,
        user: state.entities.users.user,
        currentUser: state.session.user,
        ownProps,
        
    }
}

const mDTP = (dispatch) => {
    // debugger
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        requestPet: (petId) => dispatch(requestPet(petId)),
        adoptPet: (user, petId) => dispatch(adoptPet(user, petId))
    }
}

export default connect(mSTP,mDTP)(PetShow)