import request from '../utils/request';
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