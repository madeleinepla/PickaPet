import { combineReducers } from "redux";
import PetsReducer from "./pets_reducer/pets_reducer";
import UsersReducer from "./users/users_reducer";

const entitiesReducer = combineReducers({
    pets: PetsReducer,
    users: UsersReducer,
});

export default entitiesReducer;