import { connect } from "react-redux";
import { requestPet,updatePet } from "../../actions/pet_actions";
import { fetchUser, adoptPet, updateUser } from '../../actions/user_actions';
import PetShow from "./pet_show";


const mSTP = (state, ownProps) => {
    return {
        pet: state.entities.pets.pet,
        petId: ownProps.match.params.petId,
        user: state.entities.users.user,
        currentUser: state.session.user,
        adopted: !!ownProps.match.params.id,
        ownProps: ownProps
        
    }
}

const mDTP = (dispatch) => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        requestPet: (petId) => dispatch(requestPet(petId)),
        adoptPet: (user, petId) => dispatch(adoptPet(user, petId)),
        updateUser: (user) => dispatch(updateUser(user)),
        updatePet:(pet) => dispatch(updatePet(pet)),
    }
}

export default connect(mSTP,mDTP)(PetShow)