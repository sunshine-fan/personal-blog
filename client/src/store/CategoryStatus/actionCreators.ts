import * as actionTypes from "./constants";
import {
  getCategoryList,
  deleteCategory,
  updateCategory,
  AddCategory
} from "../../services/Category"
//更新分裂列表数据
const changeCategoryAction = (res) => {
  const data = res.rows
  data?.map((item,index)=>{
    item.key = item.name
    item.uuid = index+1
    return item 
  })
  return {
    type: actionTypes.CHANGE_CATEGORY_LIST,
    CategoryList: data
  }
}
//redux-thunk 调用异步请求
export const get=()=>{
  return async dispatch=>{
    const res = await getCategoryList()
    console.log("是否拿到数据");
    console.log(res);
    
    //reducer调用同步,并且更新数据
    dispatch(changeCategoryAction(res));
  }
}
// 删除分类
export const del = (id:number) => {
  return async dispatch => {
    await deleteCategory(id)
    const res = await getCategoryList()
    dispatch(changeCategoryAction(res))
  }
}
// 修改分类
export const change = (data:{id:number,name:string}) => {
  return async dispatch => {
    await updateCategory(data)
    //reducer 调用同步
    const res = await getCategoryList()
    dispatch(changeCategoryAction(res));
  }
}
//增加分类
export const add = (data:{name:string}) => {
   return async dispatch => {
    await AddCategory(data)
    const res = await getCategoryList()
    dispatch(changeCategoryAction(res));
  }
}
