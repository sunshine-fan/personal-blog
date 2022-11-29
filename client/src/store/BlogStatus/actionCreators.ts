import * as actionTypes from "./constants";
import {
  getBlogList,
  AddArticle,
  UpdateArticle,
  deleteArticle,
  
} from "../../services/Article"
//更新文章列表数据
const changeArticleAction = (res) => {
  const data = res.data.rows
  data?.map((item,index)=>{
    item.key = item.title
    item.uuid = index+1
    item.content = item.content+"..."
    //时间戳
    let d = new Date(parseInt(item.create_time))
    item.create_time = `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
    return item 
  })
  console.log(data);
  return {
    type: actionTypes.CHANGE_BLOG_LIST,
    blogList: data
  }
}
//redux-thunk 调用异步请求
export const get=(data)=>{
  return async dispatch=>{
    const res = await getBlogList(data)
    //reducer调用同步,并且更新数据
    dispatch(changeArticleAction(res));
  }
}
// 删除文章
export const del = (id:number) => {
  return async dispatch => {
    await deleteArticle(id)
    const res = await getBlogList({})
    dispatch(changeArticleAction(res))
  }
}
// 修改文章
export const change = (data:{id:number,name:string}) => {
  return async dispatch => {
    await UpdateArticle(data)
    //reducer 调用同步
    // const res = await getBlogList()
    // dispatch(changeCategoryAction(res));
  }
}
//增加文章
export const add = (data:{name:string}) => {
   return async dispatch => {
    await AddArticle(data)
    // const res = await getBlogList()
    // dispatch(changeCategoryAction(res));
  }
}
