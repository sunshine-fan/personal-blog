import React from "react"
// 定义路由规则
import { Routes, Route, Link, NavLink, Navigate } from "react-router-dom" // 路由匹配成功后要渲染的组件
// import Home from './views/Home'
// import About from './views/About'
// import Detail from './views/Detail'
// import Admin from './views/Admin'
// import Welcome from './views/Welcome'
// import User from './views/User'
const App = () => {
  const Admin = () => {
    return (
      <div>
        <h3>后台管理</h3>
        <div>
          {/* 没有默认页 */}
          {/* <NavLink to="/admin/welcome">首页</NavLink> */}
          {/* 显示默认页 */}
          <NavLink to="/admin">首页</NavLink>
          <span> -- </span>
          <NavLink to="/admin/user">用户</NavLink>
        </div>
        <hr />
        {/* Admin组件它是一个父路由渲染的组件，它里面有嵌套路由，需要一个占位 */}
        <Outlet />
      </div>
    )
  }
  export default Admin
  return (
    <div>
      {/* 声明式导航 */}
      <div>
        <NavLink end to="/home" state={{ id: 1000 }}>
          首页
        </NavLink>
        <span> --- </span>
        <NavLink to="/about">关于</NavLink>
        <span> --- </span>
        <NavLink to="/admin">后台</NavLink>
      </div>
      <hr />
      <Routes>
        {/* 嵌套路由，就是把定义规则的Route由单标签更换成双标签就可以,里面还是要定义规则 */}
        <Route path="/admin" element={<Admin />}>
          {/* 嵌套路由 之 默认页 */}
          <Route index element={<Welcome />} />
          {/* path中开头不要写 / 就可以 ,它会自动把父组件中的path拼接过来 /admin/welcome */}
          {/* 非默认页，需要点击导航跳转 */}
          {/* <Route path="welcome" element={<Welcome />} /> */}
          {/* 重定向到欢迎页，重定向生效需要上一句代码 */}
          {/* <Route index element={<Navigate to="/admin/welcome" replace />} /> */}
          <Route path="user" element={<User />} />
        </Route>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* 动态路由参数定义 */}
        <Route path="/detail/:id" element={<Detail />} />
        {/* 重定向 */}
        {/* Navigate重定向  to跳转到url地址  replace是否可以回退 */}
        <Route path="/" element={<Navigate to="/home" replace={false} />} />
        {/* 404页面处理 */}
        <Route path="*" element={<div>没有页面</div>} />
      </Routes>
    </div>
  )
}
export default App
