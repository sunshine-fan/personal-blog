import request from '../utils/request';
//todo 分类管理
/**
 *获取分类列表
 * @returns
 */
export const getCategoryList = async () => {
  return await request.get('/category/list');
};
/**
 * 获取分类列表
 * @returns 
 */
export const CategoryList = async () => {
  return await request.get("/category/list");
};
/**
 * 添加分类
 * @param name 
 * @returns 
 */
export const AddCategory = async (data:{name:string}) => {
  return await request.post("/category/_token/add",data);
};

/**
 * 
 * @param data 修改分类
 * @returns 
 */
export const updateCategory = async (data:{
  id:number,
  name:string
}) => {
  return await request.put("/category/_token/update",data);
};

/**
 * 删除分类
 * @param id 
 * @returns 
 */
export const deleteCategory = async (id:number|string) => {
  return await request.delete(`/category/_token/delete?id=${id}`);
};
