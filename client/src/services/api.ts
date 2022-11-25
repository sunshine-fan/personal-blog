import request from '../utils/request';

//todo 详情页面接口
/**
 * 读取文章详情
 * @param id 
 * @returns 
 */
export const loadBlog = async (id:number|string) => {
  return await request.get('/blog/detail?id='+id);
};





