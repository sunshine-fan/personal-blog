//数组状态的处理
const store = {
  state:{
    arr:[1,2,3,4]
  },
  actions:{
    push1(newState:{arr:number[]},action:{type:string,val:number}){
      newState.arr.push(action.val)
    }
  },
  actionNames:{}
}
// 我们想做actionNames自动生成,不需要我们每一次添加一个方法,都要在actionName手动添加键值对,这样很麻烦
let actionNames = {}
// actionNames里面有多少键值对,取决于action里面有多少个函数,所以便利store.actions,给actionNamees添加键值对
for(let key in store.actions){
  actionNames[key] = key 
}
store.actionNames = actionNames
export default store