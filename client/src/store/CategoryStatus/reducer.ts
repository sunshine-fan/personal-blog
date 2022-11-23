import HomePage from "./index"
// 管理数据
// dispatch时 会出发下面reducer函数  dispatch 中的参数传递给第二个参数
let reducer = (state = {...HomePage.state},action)=>{
  let newState = JSON.parse(JSON.stringify(state))
  console.log("调用HomePage模块reducer");
  // 每一次写一个方法都不要手动添加case
  for(let key in HomePage.actionNames){
    // console.log(key);
    // console.log(HomePage.actionNames[key]);
    // console.log(action.type);
    // console.log(action.type === HomePage.actionNames[key]);
    if(action.type === HomePage.actionNames[key]){
      HomePage.actions[HomePage.actionNames[key]](newState,action)
      break
    }
  }
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
  //用switch的方法 我们每多加一个switch 都要加一句case。
  return newState
}
export default reducer