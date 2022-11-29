//todo 添加文章
import React, { memo, useEffect, useState } from "react"
import "@wangeditor/editor/dist/css/style.css" // 引入 css
import { Editor, Toolbar } from "@wangeditor/editor-for-react"
import { UploadOutlined } from "@ant-design/icons"
import { IDomEditor, IEditorConfig, IToolbarConfig } from "@wangeditor/editor"
import { Button, Input, Select, Upload } from "antd"
import type { UploadFile } from "antd/es/upload/interface"
import { upLoad } from "../../../../services/api"
// import
import "./index.less"
import { useDispatch } from "react-redux"
const fileList: UploadFile[] = [
  // {
  //   uid: "0",
  //   name: "xxx.png",
  //   status: "uploading",
  //   percent: 33,
  // },
  // {
  //   uid: "-1",
  //   name: "yyy.png",
  //   status: "done",
  //   url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  //   thumbUrl:
  //     "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  // },
  // {
  //   uid: "-2",
  //   name: "zzz.png",
  //   status: "error",
  // },
]
const Compile: React.FC = function () {
  const [editor, setEditor] = useState<IDomEditor | null>(null) // TS 语法
  // 编辑器内容
  const [html, setHtml] = useState("<p>hello</p>")
  let dispatch = useDispatch()
  useEffect(() => {
    setTimeout(() => {
      setHtml("<p>hello world</p>")
    }, 1500)
  }, [])
  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = {}
  const editorConfig: Partial<IEditorConfig> = {
    // TS 语法
    // const editorConfig = {                         // JS 语法
    placeholder: "请输入内容...",
  }
  const onStart = (file) => {
    console.log("onStart", file, file.name)
  }
  const onSuccess = (res, file) => {
    console.log("onSuccess", res, file.name)
    // console.log(file)
    fileList.push(file)
    console.log(fileList)
  }
  const onError = (err) => {
    console.log("onError", err)
  }
  const onProgress = ({ percent }, file) => {
    console.log("onProgress", `${percent}%`, file.name)
  }
  const handleChange = (file) => {
    console.log("handleChange方法")
    console.log(file)
  }
  const change = async (file) => {
    console.log("change 方法")
    console.log(file)
  }
  const uploadFile = async (file) => {
    console.log("uploadFile方法")
    console.log(file)

    uploadApi({
      file: file.file,
      onUploadProgress: (ev) => {
        // ev - axios 上传进度实例，上传过程触发多次
        // ev.loaded 当前已上传内容的大小，ev.total - 本次上传请求内容总大小
        console.log(ev)
        const percent = (ev.loaded / ev.total) * 100
        // 计算出上传进度，调用组件进度条方法
        file.onProgress({ percent })
      },
    })
      .then((res) => {
        console.log("上传成功" + res)
        file.onSuccess(res, file)
      })
      .catch((err) => {
        file.onError(err)
      })
  }
  const uploadApi = async ({ file, onUploadProgress }) => {
    console.log("uploadApi方法")
    const fd = new FormData()
    fd.append("file", file)
    const res = await upLoad(fd, onUploadProgress)
    // //上传成功后
    // onSuccess(res.data, file)
    console.log(res)
    // console.log(fileList)
  }
  // 及时销毁 editor ，重要！
  useEffect(() => {
    return () => {
      if (editor == null) return
      editor.destroy()
      setEditor(null)
    }
  }, [editor])
  return (
    <div className="box">
      <div className="content">
        <div className="title">
          文章标题：
          <Input placeholder="请输入文章名称" style={{ width: 240 }} />
        </div>
        <div className="categroy">
          文章分类：
          <Select
            defaultValue="文章专栏选项"
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
        </div>
        <div className="background">
          背景图片：
          <Upload
            action="http://47.95.197.56:3000/upload/rich_editor_upload"
            customRequest={uploadFile}
            listType="picture"
            defaultFileList={[...fileList]}
            onChange={change}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </div>
      </div>
      <div className="btn">
        <div style={{ border: "1px solid #ccc", zIndex: 100 }}>
          <Toolbar
            editor={editor}
            defaultConfig={toolbarConfig}
            mode="default"
            style={{ borderBottom: "1px solid #ccc" }}
          />
          <Editor
            defaultConfig={editorConfig}
            value={html}
            onCreated={setEditor}
            onChange={(editor) => setHtml(editor.getHtml())}
            mode="default"
            style={{ height: "500px", overflowY: "hidden" }}
          />
        </div>
        <div style={{ marginTop: "15px" }}>{html}</div>
      </div>
      <Button
        type="primary"
        // icon={<SearchOutlined />}
        onClick={() => selectblog}
      >
        提交
      </Button>
    </div>
  )
}
export default memo(Compile)
