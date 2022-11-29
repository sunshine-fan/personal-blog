import {Map} from "immutable"
import * as actionTypes from './constants'
const defaultState = Map({
  blogList:[]
})
export default (state=defaultState,action)=>{
  switch(action.type){
    case actionTypes.CHANGE_BLOG_LIST:
      console.log("这里是否执行");
      return state.set("blogList",action.blogList)
    default:
      return state;
  }
}