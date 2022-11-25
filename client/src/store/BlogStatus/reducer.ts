import {Map} from "immutable"
import * as actionTypes from './constants'
const defaultState = Map({
  blogList:[]
})
export default (state=defaultState,action)=>{
  switch(action.type){
    case actionTypes.CHANGE_BLOG_LIST:
      // return state.set("blogList",action.)
  }
}