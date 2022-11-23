import React, { memo, useState } from "react"
import { SmileOutlined } from "@ant-design/icons"
import { Avatar, List, Tabs, Timeline } from "antd"
import "./index.less"
const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
]
const SiderRight: React.FC = function () {
  const [type, setType] = useState(true)
  const onChange = (key: string) => {
    if (key === "1") {
      setType(true)
    } else {
      setType(false)
    }
  }
  return (
    <>
      {/* 顶部选项卡 */}
      <Tabs
        defaultActiveKey="1"
        centered
        onChange={onChange}
        items={[
          {
            label: `时间轴`,
            key: "1",
            children: "",
          },
          {
            label: `近期动态`,
            key: "2",
            children: "",
          },
        ]}
      />
      {/* 内容栏 */}
      <div className={`${!type ? "isshow" : ""} ${"Timeline"}`}>
        <Timeline>
          <Timeline.Item color="green">
            Create a services site 2015-09-01
          </Timeline.Item>
          <Timeline.Item color="green">
            Create a services site 2015-09-01
          </Timeline.Item>
          <Timeline.Item color="red">
            <p>Solve initial network problems 1</p>
            <p>Solve initial network problems 2</p>
            <p>Solve initial network problems 3 2015-09-01</p>
          </Timeline.Item>
          <Timeline.Item>
            <p>Technical testing 1</p>
            <p>Technical testing 2</p>
            <p>Technical testing 3 2015-09-01</p>
          </Timeline.Item>
          <Timeline.Item color="gray">
            <p>Technical testing 1</p>
            <p>Technical testing 2</p>
            <p>Technical testing 3 2015-09-01</p>
          </Timeline.Item>
          <Timeline.Item color="#00CCFF" dot={<SmileOutlined />}>
            <p>Custom color testing</p>
          </Timeline.Item>
        </Timeline>
      </div>
      <div className={`${type ? "isshow" : ""} ${"Timeline2"}`}>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
          )}
        />
      </div>
    </>
  )
}
export default memo(SiderRight)
