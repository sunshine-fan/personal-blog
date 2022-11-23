//引入懒加载
import React from "react"
import { lazy } from "react"
import { Navigate } from "react-router-dom"
const Login = lazy(() => import("../pages/Login"))
const HomePage = lazy(() => import("../pages/HomePage"))
const Detail = lazy(() => import("../pages/Detail"))
const CenterContent = lazy(() => import("../components/CenterContent"))
//后台页面
const BackStage = lazy(() => import("../pages/BackStage"))
const Article = lazy(() => import("../pages/dashboard/Article"))
const Category = lazy(() => import("../pages/dashboard/Category"))
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"))
//404
const NotFound = lazy(() => import("../pages/NotFound"))

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
    path: "/back",
    element: <BackStage />,
    children: [
      {
        path: "/back/article",
        element: <Article />,
      },
      {
        path: "/back/category",
        element: <Category />,
      },
      {
        path: "/back/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/back",
        element: <Navigate to="/back/dashboard" />, //重定向到仪表盘页面
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
    element: <Navigate to="/back" />, //重定向到 /home 页面
  },
  { path: "*", element: <NotFound /> },
]

export default router
