import React, { useEffect, useState } from "react"
import { Layout, Menu } from "antd"
import { Outlet } from "react-router-dom"
import HeadContent from "../../components/HeadContent"
import useWindowSize from "../../utils/useWindowSize"
import MENU_CONTENT from "../../constants"

import SiderLeft from "../../components/SiderLeft"
import SiderRight from "../../components/SiderRight"
//使用路由
import "./index.less"
//通过 useSelector 获取仓库数据（可以直接修改）
import { useDispatch, useSelector } from "react-redux"
const { Header, Content, Footer, Sider } = Layout
const HomePage: React.FC = function () {
  const dispatch: Function = useDispatch()
  // 通过useDispatch修改数据
  const { num } = useSelector((state: RootState) => ({
    num: state.HomePageReducer.num,
  }))
  const [list, useList] = useState({
    page: 1,
    pageSize: 10,
  })
  // const chageNum2 = () => {
  //   dispatch({ type: "add2", val: 3 })
  // }
  const { width } = useWindowSize()
  //header组件中content是否显示 默认PC
  const [isshow, setIsshow] = useState<Boolean>(true)
  useEffect(() => {
    width < 768 ? setIsshow(false) : setIsshow(true)
  }, [width])

  return (
    <Layout className="root-layout">
      <Header
        className="site-layout-sub-header-background"
        style={{ padding: 0 }}
      >
        <HeadContent isshow={isshow}></HeadContent>
      </Header>
      <Layout>
        <Sider
          theme="light"
          className={!isshow ? ".ant-layout-sider-to" : ""}
          breakpoint="md"
          collapsedWidth="0"
          onBreakpoint={(broken) => {}}
          onCollapse={(collapsed, type) => {}}
        >
          <SiderLeft></SiderLeft>
          <div className="logo" />
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={MENU_CONTENT.map((item, index) => ({
              key: String(index + 1),
              label: item.label,
            }))}
          />
        </Sider>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {/*路由占位符*/}
            <Outlet />
          </div>
        </Content>
        {/* trigger={null} 隐藏此tiger的默认设定 */}
        <Sider
          width={300}
          theme="light"
          trigger={null}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {}}
          onCollapse={(collapsed, type) => {}}
        >
          <SiderRight></SiderRight>
          <></>
          <div className="logo" />
        </Sider>
      </Layout>
      <Footer style={{ textAlign: "center" }}>备案号</Footer>
    </Layout>
  )
}
export default HomePage
