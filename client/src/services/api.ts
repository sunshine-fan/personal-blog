import request from '../utils/request';
// todo 主页接口
/**
 *获取分类列表
 * @returns
 */
export const getCategoryList = async () => {
  return await request.get('/category/list');
};

// todo登录页接口
/**
 * 登录
 * @param data 
 * @returns 
 */
export const login = async (data: {
  account: string|number;
  password: string|number;
}) => {
  return await request.post('/admin/login', data);
};
//todo 详情页面接口
/**
 * 读取文章详情
 * @param id 
 * @returns 
 */
export const loadBlog = async (id:number|string) => {
  return await request.get('/blog/detail?id='+id);
};
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

//todo 分类管理
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
export const AddCategory = async (name:string) => {
  return await request.post("/category/_token/add"+name);
};

/**
 * 
 * @param data 修改分类
 * @returns 
 */
export const updateCategory = async (data:{
  id:string|number,
  name:string
}) => {
  return await request.post("/category/_token/update",data);
};

/**
 * 删除分类
 * @param id 
 * @returns 
 */
export const deleteCategory = async (id:number|string) => {
  return await request.delete(`/category/_token/delete?id=${id}`);
};




