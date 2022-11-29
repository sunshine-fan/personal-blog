import {combineReducers} from "redux-immutable"
import {reducer as categoryReducer} from "./CategoryStatus"
import {reducer as blogReducer} from "./BlogStatus"

export default combineReducers({
  categorylist:categoryReducer,
  bloglist:blogReducer
})