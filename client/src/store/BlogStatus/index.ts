import { Map } from "immutable";
import * as actionTypes from './constants'
const defaultState = Map({
  categorys:[],  //分类列表
})
export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_CATEGORY_LIST:
      return state.set("categorys", action.CategoryList);
    default:
      return state;
  }
}

