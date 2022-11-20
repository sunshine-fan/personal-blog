import React, { memo, Suspense } from "react"
import "./App.less"
import { useRoutes, Link } from "react-router-dom"
import router from "./router/router"

const App: React.FC = function () {
  const element = useRoutes(router)
  return (
    <>
      {/* <Link to={"/home/content"}>home</Link> */}
      {/* 解决路由懒加载问题  未加载为loading*/}
      {/* {element} */}
      <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>
    </>
  )
}
export default memo(App)
