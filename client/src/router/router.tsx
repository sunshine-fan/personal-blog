//引入懒加载
import React from "react"
import { lazy } from "react"
import { Navigate } from "react-router-dom"
//引入组件
// import Login from "../pages/Login"
// import HomePage from "../pages/HomePage"
const Login = lazy(() => import("../pages/Login"))
const HomePage = lazy(() => import("../pages/HomePage"))
const Detail = lazy(() => import("../pages/Detail"))
const CenterContent = lazy(() => import("../components/CenterContent"))
//后台页面
// const Article = lazy(() => import("../pages/dashboard/Article"))
// const Category = lazy(() => import("../pages/dashboard/Category"))
// const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"))
//404
const NotFound = lazy(() => import("../pages/NotFound"))
// * 导入所有router
// const metaRouters = import.meta.globEager("./modules/*.tsx")
interface RouteObject {
  caseSensitive?: boolean
  children?: RouteObject[]
  element?: React.ReactNode
  path?: string
  auth?: boolean
}

const router: RouteObject[] = [
  {
    path: "/home",
    element: <HomePage />,
    children: [
      {
        path: "/home/detail",
        element: <Detail />,
      },
      {
        path: "/home/content",
        element: <CenterContent />,
      },
      {
        path: "/home",
        element: <Navigate to="/home/content" />, //重定向到 /home 页面
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    //配置默认路由
    path: "/",
    element: <Navigate to="/home" />, //重定向到 /home 页面
  },
  { path: "*", element: <NotFound /> },
]

export default router
