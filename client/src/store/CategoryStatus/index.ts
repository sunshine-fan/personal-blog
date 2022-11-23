import {getCategoryList,BlogList,AddCategory} from "../../services/api"
//管理当前页面的状态
const store = {
  state:{
    num:20,
    Category:null,
    BlogList:null
  },
  actions:{
     //放同步方法
    add1(newState,action){
      newState.num++
    },
    add2(newState,action){
      newState.num+=action.val
    },
    //获取博文分类列表
    getCategoryList(newState,action){
      console.log(action.data);
      newState.Category = action.data
      console.log(newState);
    },
    //获取文章列表
    getBlogdata(newState,action){
      newState.BlogList = action.data.rows
    }
  },
  //名字进行统一管理
  actionNames:{},
  //优化redux-thunk 的异步方法（模仿vuex的写法）
  asyncActions:{
    //获取分类列表
    async getCategoryList(dispatch:Function){
       const data = await getCategoryList()
       const list =data.rows.map((item,index)=>{
        item.key =item.name
        item.uuid = index+1
        return item 
       })
       dispatch({type:"getCategoryList",data:list})
    },
    //添加分类
    addCategoryList(name){
        console.log("是否执行");
        console.log(name);
        // AddCategory(name)
     }, 
    async getBlogList(dispatch:Function){
      // console.log("是否经过这里",list);
      const data = await BlogList({page:1,pageSize:10})
      console.log(data);
      dispatch({type:"getBlogdata",data:data})
    }
  }
}

// 我们想做actionNames自动生成,不需要我们每一次添加一个方法,都要在actionName手动添加键值对,这样很麻烦
let actionNames = {}
// actionNames里面有多少键值对,取决于action里面有多少个函数,所以便利store.actions,给actionNamees添加键值对
for(let key in store.actions){
  actionNames[key] = key 
}
store.actionNames = actionNames
export default store