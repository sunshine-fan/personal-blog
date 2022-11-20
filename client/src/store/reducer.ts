import HomePage from "./HomePageStatus"
import ArrStatus from "./ArrStatus"
//todo 此模块已经被抽离 无作用 !!用于回顾reducer 模块化拆分
// 管理数据
const defaultState ={
  ...HomePage.state,
  ...ArrStatus.state
}
// dispatch时 会出发下面reducer函数  dispatch 中的参数传递给第二个参数
// 如果抽离为 模块则无效
let reducer = (state = defaultState,action:ActionType)=>{
  console.log("总的reducer 不被调用 而是被分化成了各个模块");
  let newState = JSON.parse(JSON.stringify(state))
  // switch(action.type){
  //   case HomePage.add1:
  //   HomePage.actions[HomePage.add1](newState,action);
  //   break
  //   case HomePage.add2:
  //   HomePage.actions[HomePage.add2](newState,action);
  //   break
  //   default:
  //   break
  // }
  return newState
}
export default reducer