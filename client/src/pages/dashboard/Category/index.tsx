import React, { memo, useEffect, useState } from "react"
import {
  Button,
  Space,
  Table,
  Tag,
  Modal,
  Input,
  message,
  Popconfirm,
} from "antd"
import type { SizeType } from "antd/es/config-provider/SizeContext"
import type { ColumnsType } from "antd/es/table"
import { useDispatch, useSelector, shallowEqual } from "react-redux"
import {
  get,
  add,
  change,
  del,
} from "../../../store/CategoryStatus/actionCreators"
// import
import "./index.less"
interface DataType {
  key: string
  id: number
  uuid: number
  title: string
}

const Category: React.FC = function () {
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
          <a onClick={() => showUpdateModal(record)}>修改</a>
          <Popconfirm
            title="确认删除该文章"
            onConfirm={() => delCategory(record)}
            onCancel={() => cancel}
            okText="Yes"
            cancelText="No"
          >
            {/* onClick={() => delCategory(record)} */}
            <a>删除</a>
          </Popconfirm>
        </Space>
      ),
    },
  ]
  // redux
  const state = useSelector(
    (state: any) => ({ categorys: state.getIn(["categorylist", "categorys"]) }),
    shallowEqual
  )

  const confirm = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e)
  }

  const categorys = state.categorys
  const [size, setSize] = useState<SizeType>("small")
  //添加
  const [title, settitle] = useState<string>("")
  //弹出框基本变量
  const [open, setOpen] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  //value值
  const [value, setValue] = useState("")
  //判断是添加还是修改
  const [isupdate, setUpdate] = useState(true)
  //记住修改分类ID
  const [categoryId, setcategoryId] = useState(null)
  /**
   *两种模态框
   */
  const showAddModal = () => {
    setUpdate(false)
    setOpen(true)
  }
  const showUpdateModal = (record) => {
    setValue(record.name)
    //当前状态为修改
    setUpdate(true)
    //记录修改的ID
    setcategoryId(record.id)
    setOpen(true)
  }
  /**
   * 确认状态
   */
  const handleOk = async () => {
    setConfirmLoading(true)
    if (isupdate) {
      const data = {
        id: categoryId,
        name: value,
      }
      await dispatch(change(data))
      message.success("修改后的名称为" + value)
      // 修改接口
    } else {
      if (isName(state["categorys"], value)) {
        message.error("已存在")
        setConfirmLoading(false)
      } else {
        await dispatch(add({ name: value }))
        message.success("添加成功")
        setOpen(false)
        setConfirmLoading(false)
        setValue("")
      }
    }
  }

  //确认删除
  const delCategory = async (record) => {
    await dispatch(del(record.id))
    message.success("删除成功")
  }
  //未删除+ 关闭弹窗
  const cancel = (e: React.MouseEvent<HTMLElement>) => {
    message.error("未删除")
  }
  const handleCancel = () => {
    setValue("")
    setOpen(false)
  }
  //判断是否存在该名称
  const isName = (data, value) => {
    let isBoolean = false
    data.forEach((item) => {
      if (item.name === value) {
        isBoolean = true
      }
    })
    return isBoolean
  }
  let dispatch = useDispatch()
  useEffect(() => {
    console.log(state)
    dispatch(get())
  }, [open, dispatch])

  return (
    <>
      {/* 功能栏 */}
      {/* 添加弹出提示框 */}
      <div className="btn">
        <Button type="primary" size={size} onClick={showAddModal}>
          添加新的分类
        </Button>
      </div>
      {/* 表格 */}
      {/* 编号 名称  操作{ 修改 删除} */}
      <div className="table">
        {/* {data} */}
        <Table columns={columns} dataSource={categorys} />;
      </div>
      {/* 弹出框 */}
      <Modal
        title="添加分类"
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
