// createStore  改版至 legacy_createStore 创建store的方法
//combineReducers 合并抽取出的各个模块 Reducer
import {legacy_createStore,combineReducers,compose, applyMiddleware} from "redux";
import reduxThunk from "redux-thunk"
import ArrStatusReducer from "./ArrStatus/reducer"
import HomePageReducer from "./HomePageStatus/reducer"

//组合各个模块的reducer
const reducers = combineReducers({
  ArrStatusReducer,
  HomePageReducer
})
//第二个参数为 REDUX_DEVTOOLS  
//为了让浏览器正常使用该插件   __REDUX_DEVTOOLS_EXTENSION__  
//增强工具：__REDUX_DEVTOOLS_EXTENSION_COMPSE__ 兼容异步处理  没有这个工具我们就用引入的compose
//applyMiddleware：中间件  reduxThunk：异步处理
// 没有redux-thunk之前的插件版本
// const store = legacy_createStore(reducers ,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())

//判断有没有 __REDUX_DEVTOOLS_EXTENSION_COMPSE__ 这个模块
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
const store = legacy_createStore(reducers ,composeEnhancers(applyMiddleware(reduxThunk)))
export default store;