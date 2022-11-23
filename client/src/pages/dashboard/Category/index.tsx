import React, { memo, useEffect, useState } from "react"
import { Button, Space, Table, Tag, Modal, Input } from "antd"
import type { SizeType } from "antd/es/config-provider/SizeContext"
import type { ColumnsType } from "antd/es/table"
import { useDispatch, useSelector } from "react-redux"
import HomePageStatus from "../../../store/CategoryStatus"
// import
import "./index.less"
interface DataType {
  key: string
  id: number
  uuid: number
  title: string
}
const columns: ColumnsType<DataType> = [
  {
    key: "uuid",
    title: "序号",
    dataIndex: "uuid",
  },
  {
    title: "编号",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "文章标题",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "操作",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a onClick={reviseCategory}>修改</a>
        <a onClick={delCategory}>删除</a>
      </Space>
    ),
  },
]

// const data: DataType[] = []
const addCategory = (name: string) => {
  console.log("添加分类")
}
const reviseCategory = () => {
  console.log("修改分类")
}
const delCategory = () => {
  console.log("删除分类")
}
const Category: React.FC = function () {
  const [size, setSize] = useState<SizeType>("small")
  //添加
  const [title, settitle] = useState<string>("")

  //弹出框基本变量
  const [open, setOpen] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  //value值
  const [value, setValue] = useState("")
  //打开模态框
  const showModal = () => {
    setOpen(true)
  }
  const handleOk = async () => {
    setConfirmLoading(true)
    //通过redux-thunk 调用异步函数  在使用reducer获取数据
    await dispatch(() => {})
    setOpen(false)
    setConfirmLoading(false)
  }
  const handleCancel = () => {
    console.log("Clicked cancel button")
    setOpen(false)
  }
  const { data } = useSelector((state: RootState) => ({
    data: state.HomePageReducer.Category,
  }))
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(HomePageStatus.asyncActions.getCategoryList)
  }, [open])

  return (
    <>
      {/* 功能栏 */}
      {/* 添加弹出提示框 */}
      <div className="btn">
        <Button type="primary" size={size} onClick={showModal}>
          添加新的分类
        </Button>
      </div>
      {/* 表格 */}
      {/* 编号 名称  操作{ 修改 删除} */}
      <div className="table">
        <Table columns={columns} dataSource={data} />;
      </div>
      {/* 弹出框 */}
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Input
          placeholder="输入要添加分类的名称"
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
          }}
        />
      </Modal>
    </>
  )
}
export default memo(Category)
