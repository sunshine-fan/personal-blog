//类型声明文件内 不能够直接使用引入  而是使用import语法
// store.d.ts里面声明action 和 reducers 以及 处理dispatch等类型问题
//todo 话说这里可以直接使用
// 这里绝对是有getstate方法的
interface Window{
  __REDUX_DEVTOOLS_EXTENSION__:Function,
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__:Function
}
interface ActionType{
  type:string,
  val?:number,
  data?:[]
}
type RootState = ReturnType<typeof import("../store").getState>
