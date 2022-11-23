import ArrStatus from "./index"
// 管理数据
// dispatch时 会出发下面reducer函数  dispatch 中的参数传递给第二个参数
let reducer = (state = {...ArrStatus.state},action:ActionType)=>{
  let newState = JSON.parse(JSON.stringify(state))
  console.log("调用ArrStatus模块reducer");
  // 每一次写一个方法都不要手动添加case
  for(let key in ArrStatus.actionNames){
    if(action.type === ArrStatus.actionNames[key]){
      ArrStatus.actions[ArrStatus.actionNames[key]](newState,action)
      break
    }
  }
  return newState
}
export default reducer