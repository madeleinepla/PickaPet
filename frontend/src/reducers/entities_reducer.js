import { combineReducers } from "redux";
import PetsReducer from "./pets_reducer/pets_reducer";

const entitiesReducer = combineReducers({
    pets: PetsReducer,
});

export default entitiesReducer;