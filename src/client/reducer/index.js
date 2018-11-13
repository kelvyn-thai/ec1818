import { combineReducers } from "redux";
import HomeReducer from "../modules/Home/redux/reducer";

const reducer = combineReducers({
    home: HomeReducer
})

export default reducer;