import { connect } from "react-redux";
import { requestPet } from "../../actions/pet_actions";
import { fetchUsers, fetchUser } from '../../actions/user_actions';
import PetShow from "./pet_show";


const mSTP = (state, ownProps) => {
    // debugger
    return {
        pets: state.entities.pets.all,
        petId: ownProps.match.params.petId,
        pet: state.entities.pets.pet,
        user: state.entities.users.user,
        // currentUser: state.session.user,
        currentUser: state.entities.users.user,
        // currentUser: state.entities.users[state.session.id],
        ownProps,
        
    }
}

const mDTP = (dispatch) => {
    // debugger
    return {
        fetchUsers: () => dispatch(fetchUsers()),
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        requestPet: (petId) => dispatch(requestPet(petId)),
    }
}

export default connect(mSTP,mDTP)(PetShow)