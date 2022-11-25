import React, { memo, useState } from "react"
import { Button, Space, Table, Tag } from "antd"
import type { SizeType } from "antd/es/config-provider/SizeContext"
import type { ColumnsType } from "antd/es/table"
import "./index.less"
const columns: ColumnsType<DataType> = [
  {
    title: "序号",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "分类",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "标题",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green"
          if (tag === "loser") {
            color = "volcano"
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          )
        })}
      </>
    ),
  },
  {
    title: "创建时间",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "操作",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a onClick={() => reviseblog}>Invite </a>
        <a onClick={() => delblog}>Delete</a>
      </Space>
    ),
  },
]

const data: DataType[] = [
  {
    key: 1,
    id: 1,
    category_id: 99,
    title: "好文分享",
    create_time: 2022,
    content: "内容",
    tags: ["nice", "developer"],
  },
  {
    key: 2,
    id: 2,
    category_id: 99,
    title: "好文分享",
    create_time: 2022,
    content: "内容",
    tags: ["nice", "developer"],
  },
  // {
  //   key: "3",
  //   name: "Joe Black",
  //   age: 32,
  //   address: "Sidney No. 1 Lake Park",
  //   tags: ["cool", "teacher"],
  // },
]
interface DataType {
  key: number | string
  id: number
  category_id: number
  title: string
  create_time: number
  content: string
  tags: string[]
}
const addblog = (name: string) => {
  console.log("添加文章")
}
const reviseblog = () => {
  console.log("修改文章")
}
const delblog = () => {
  console.log("删除文章")
}
const selectblog = () => {
  console.log("查找博文")
}
const Article: React.FC = function () {
  const [size, setSize] = useState<SizeType>("small")
  return (
    <>
      <div className="btn">
        <Button type="primary" size={size} onClick={() => addblog}>
          添加
        </Button>
        <Button type="primary" size={size} onClick={() => selectblog}>
          查询
        </Button>
      </div>
      <div className="table">
        <Table columns={columns} dataSource={data} />;
      </div>
    </>
  )
}
export default memo(Article)
