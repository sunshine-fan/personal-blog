import React, { useState, memo } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import "./index.less"
import logo from "../../logo.svg"
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons"
import type { MenuProps } from "antd"
import { Breadcrumb, Layout, Menu } from "antd"

const { Header, Content, Footer, Sider } = Layout

type MenuItem = Required<MenuProps>["items"][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem
}

const items: MenuItem[] = [
  getItem("仪表盘", "/back/dashboard", <PieChartOutlined />),
  getItem("博文", "/back/article", <DesktopOutlined />),
  // getItem("博文分类", "sub1", <UserOutlined />, [
  //   getItem("Tom", "3"),
  //   getItem("Bill", "4"),
  //   getItem("Alex", "5"),
  // ]),
  // getItem("用户管理", "sub2", <TeamOutlined />, [
  //   getItem("Team 1", "6"),
  //   getItem("Team 2", "8"),
  // ]),
  getItem("分类管理", "/back/category", <FileOutlined />),
]

const BackStage: React.FC = function () {
  let navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false)
  const changeItem = (data: { item; key; keyPath; domEvent }) => {
    console.log(data)
    navigate(data.key)
  }
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width="200"
      >
        <div className="logo">
          <img src={logo} alt="" />
          <h1>BLOG-ADMIN</h1>
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={changeItem}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ height: "50px" }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 0, minHeight: 360 }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default BackStage
