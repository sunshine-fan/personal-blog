import React, { memo } from "react"
import { AntDesignOutlined } from "@ant-design/icons"
import { Avatar } from "antd"
import avatar from "../../assets/云朵.jpeg"
import "./index.less"
const SiderLeft: React.FC = function (props) {
  return (
    <div className="Avatar_blog">
      {/* <img src={avatar} alt="" /> */}
      <Avatar src={avatar} size={90} />
      <p>ilnafz</p>
      <span>emmo中~</span>
    </div>
  )
}
export default memo(SiderLeft)
