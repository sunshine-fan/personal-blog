import React, { memo, useEffect } from "react"
import "./index.less"
interface ChildProcess {
  isshow: Boolean
}
const HeadContent: React.FC<ChildProcess> = function (props) {
  const { isshow } = props
  useEffect(() => {
    console.log(isshow, "移动端适配")
  }, [isshow])
  return (
    <>
      <div className="head_lft">日常分享</div>
      {isshow ? <div className="head_rht">右侧内容在移动端时隐藏</div> : ""}
    </>
  )
}
export default memo(HeadContent)
