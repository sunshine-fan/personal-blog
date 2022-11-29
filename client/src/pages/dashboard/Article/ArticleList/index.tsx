//todo 文章列表
import React, { memo, useEffect, useState } from "react"
import {
  Button,
  Space,
  Table,
  Tag,
  Select,
  Input,
  Popconfirm,
  message,
} from "antd"
import { UserOutlined, SearchOutlined } from "@ant-design/icons"
import type { SizeType } from "antd/es/config-provider/SizeContext"
import type { ColumnsType } from "antd/es/table"
import {
  get,
  add,
  change,
  del,
} from "../../../../store/BlogStatus/actionCreators"
// import
import "./index.less"
import { shallowEqual, useDispatch, useSelector } from "react-redux"

interface DataType {
  key: number | string
  id: number
  category_id: number
  title: string
  create_time: number
  content: string
  tags: string[]
}
interface SearchType {
  page?: number | string
  pageSize?: number
  keyword?: string
  categoryId?: number | null
}
const addblog = (name: string) => {
  console.log("添加文章")
}

const selectblog = () => {
  console.log("查找博文")
}
const Article: React.FC = function () {
  const columns: ColumnsType<DataType> = [
    {
      title: "序号",
      dataIndex: "uuid",
      key: "uuid",
    },
    {
      title: "编号",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "文章专栏",
      dataIndex: "category_name",
      key: "category_name",
    },
    {
      title: "标题",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "专栏ID",
      dataIndex: "category_id",
      key: "category_id",
    },
    {
      title: "创建时间",
      dataIndex: "create_time",
      key: "create_time",
    },
    {
      title: "文章内容",
      dataIndex: "content",
      key: "content",
    },
    {
      title: "操作",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => reviseblog(record)}>修改</a>
          <Popconfirm
            title="确认删除该文章"
            onConfirm={() => delblog(record)}
            onCancel={() => cancel}
            okText="Yes"
            cancelText="No"
          >
            <a>删除</a>
          </Popconfirm>
        </Space>
      ),
    },
  ]

  // const [size, setSize] = useState<SizeType>("")
  const [serach, Setserach] = useState<SearchType>({
    page: 1,
    pageSize: 10,
    keyword: "",
    categoryId: null,
  })
  const state = useSelector(
    (state: any) => ({
      bloglist: state.getIn(["bloglist", "blogList"]),
    }),
    shallowEqual
  )
  const bloglist = state.bloglist
  const reviseblog = (record) => {
    console.log(record)
  }
  /**
   * 删除文章
   * @param record
   */
  const delblog = async (record) => {
    console.log(record.id)
    await dispatch(del(record.id, serach))
    // message.success("删除成功")
  }
  const cancel = (e: React.MouseEvent<HTMLElement>) => {
    message.error("未删除")
  }
  //SELECT选择器
  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
  }

  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(get(serach))
    console.log("打印一下吧")
    console.log(state)
    console.log(bloglist)
  }, [0])
  return (
    <>
      <div className="select">
        <Input
          placeholder="请输入要搜索的内容"
          prefix={<SearchOutlined />}
          style={{ width: 240 }}
        />
        <Select
          defaultValue="lucy"
          style={{ width: 240 }}
          onChange={handleChange}
          options={[
            {
              value: "jack",
              label: "Jack",
            },
            {
              value: "lucy",
              label: "Lucy",
            },
            {
              value: "disabled",
              disabled: true,
              label: "Disabled",
            },
            {
              value: "Yiminghe",
              label: "yiminghe",
            },
          ]}
        />
        <Button
          type="primary"
          // icon={<SearchOutlined />}
          onClick={() => selectblog}
        >
          查询
        </Button>
      </div>
      <div className="table">
        <Table columns={columns} dataSource={bloglist} />;
      </div>
    </>
  )
}
export default memo(Article)
