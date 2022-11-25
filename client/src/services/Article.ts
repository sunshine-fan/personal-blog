import request from '../utils/request';
//todo 文章管理页面
/**
 * 读取博客列表
 * @param data 
 * @returns 
 */
export const BlogList = async (data: {
  page: string|number;
  pageSize: string|number;
}) => {
  return await request.get(`/blog/search?page=${data.page}&pageSize=${data.pageSize}`);
};

/**
 * 添加文章
 * @param data 
 * @returns 
 */
export const AddCategorys = async (data:{
  name:string
}) => {
  return await request.post("/blog/_token/add",data);
};
/**
 * 修改文章？
 * @param id 
 * @returns 
 */
export const toUpdate = async (id:number|string) => {
  return await request.post("/blog/detail?id"+id);
};

export const Update = async (updateArticle:{
  id:number|string,
  title:number|string,
  content:number|string,
  categoryId:number|string,
}) => {
  return await request.put("/blog/_token/update",updateArticle);
};

/**
 * 
 * @param id 删除文章 软删除
 * @returns 
 */
export const UpdateCategorys = async (id:number|string) => {
  return await request.post("/blog/detail?id"+id);
};
