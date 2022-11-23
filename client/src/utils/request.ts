import axios from "axios";
import NProgress from "nprogress";
import { message } from "antd";
// import { store } from "@/store";
// import { setLoadingAction } from "views/sand-box/store/actions";

import { BASE_URL, TIMEOUT } from "../config/request";
declare module "axios" {
    interface AxiosResponse<T = any> {
      rows: any[];
    }
    export function create(config?: AxiosRequestConfig): AxiosInstance;
}
const request = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

request.interceptors.request.use(
  (config) => {
    // 对config做一些处理
    // 1.发送网络请求时, 在界面的中间位置显示Loading的组件
    NProgress.start();
    // store.dispatch(setLoadingAction(true));
    // 2.某一些请求要求用户必须携带token, 如果没有携带, 那么直接跳转到登录页面
    // 3.params/data序列化的操作
    return config;
  },
  (err) => {
    console.log(err);
  }
);

request.interceptors.response.use(
  (res) => {
    NProgress.done();
    // store.dispatch(setLoadingAction(false));
    return res.data;
  },
  (err) => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          console.log("请求错误");
          break;
        case 401:
          console.log("未授权访问");
          break;
        default:
          console.log("其他错误信息");
      }
    }
    message.error("当前网络异常,请稍后重试");
    NProgress.done();
    // store.dispatch(setLoadingAction(false));
    return err;
  }
);
export default request;
