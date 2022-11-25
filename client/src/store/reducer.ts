import {combineReducers} from "redux-immutable"
import {reducer as categoryReducer} from "./CategoryStatus"

export default combineReducers({
  categorylist:categoryReducer,
})