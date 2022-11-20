import React, { memo, useRef } from "react"
import { Carousel } from "antd"
import { useNavigate, Link } from "react-router-dom"
import type { CarouselRef } from "antd/lib/carousel"
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons"
import { Avatar, Card } from "antd"
import "./index.less"
const contentStyle: React.CSSProperties = {
  height: "200px",
  color: "#fff",
  lineHeight: "200px",
  textAlign: "center",
  background: "#364d79",
}
const { Meta } = Card
const CenterContent: React.FC = function () {
  const carousel = useRef<CarouselRef>(null)
  const navigate = useNavigate()
  const button_left = () => {
    carousel.current?.prev()
  }
  const button_right = () => {
    carousel.current?.next()
  }
  const click = () => {
    console.log("nihao")
  }
  // const handleClick = () => {
  //   navigate("/home/detail")
  // }
  return (
    <div className="content_blog">
      {/* 公告 */}
      {/* 轮播图 
      draggable:可以拖动
      arrows：左右箭头出现
      */}
      {/* <button onClick={handleClick}>详情页</button> */}
      <div className="content_button">
        <button onClick={button_left}>{"<"}</button>
        <button onClick={button_right}>{">"}</button>
        <Carousel autoplay draggable ref={carousel}>
          <div>
            <h3 style={contentStyle}>张</h3>
          </div>
          <div>
            <h3 style={contentStyle}>立</h3>
          </div>
          <div>
            <h3 style={contentStyle}>帆</h3>
          </div>
          <div>
            <h3 style={contentStyle}>NB</h3>
          </div>
        </Carousel>
      </div>
      <Link to={"/home/detail"}>文章详细信息</Link>
      <div className="card-tale">
        <Card
          hoverable
          // style={{ width: 1000, height: 300 }}
          // cover={
          //   <img
          //     alt="example"
          //     src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          //   />
          // }
          actions={[
            <SettingOutlined key="setting" onClick={click} />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Card title"
            description="This is the description"
          />
        </Card>
        <Card
          hoverable
          // style={{ width: 1000, height: 300 }}
          // cover={
          //   <img
          //     alt="example"
          //     src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          //   />
          // }
          actions={[
            <SettingOutlined key="setting" onClick={click} />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Card title"
            description="This is the description"
          />
        </Card>
      </div>
      {/* 表格内容 */}

      <p>ilnafz</p>
      <span>emmo中~</span>
    </div>
  )
}
export default memo(CenterContent)
