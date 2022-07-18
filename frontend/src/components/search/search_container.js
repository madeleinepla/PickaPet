import { connect } from "react-redux"
import { fetchUsers, fetchUser } from "../../actions/user_actions"
import {requestPets} from "../../actions/pet_actions"
import search from "./search"
import { withRouter } from "react-router";

const mSTP = (state, ownProps) => {
    const pets = Object.values(state.entities.pets.all)
    const users = Object.values(state.entities.users.all)
    return {
    users: users,
    pets:pets,
    ownProps: ownProps,
}}
const mDTP = dispatch => ({
    fetchUsers: ()=>dispatch(fetchUsers()),
    requestPets: ()=>dispatch(requestPets()),
    fetchUser:(userId)=>dispatch(fetchUser(userId)),
})
export default withRouter(connect(mSTP, mDTP)(search));