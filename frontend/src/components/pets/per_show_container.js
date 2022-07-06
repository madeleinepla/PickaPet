import { connect } from "react-redux";
import { requestPet } from "../../actions/pet_actions";
import PetShow from "./pet_show";


const mSTP = (state, ownProps) => ({
    pet: state.entities.pets[ownProps.match.params.petId],
    petId: ownProps.match.params.petId,
    currentUser: state.entities.users[state.session.id],
})

const mDTP = (dispatch) =>({
    requestPet: (petId) => dispatch(requestPet(petId)),

})

export default connect(mSTP,mDTP)(PetShow)