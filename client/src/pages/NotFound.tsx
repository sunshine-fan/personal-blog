import React, { memo } from "react"
import { Result, Button } from "antd"
import { Link } from "react-router-dom"
const App: React.FC = function () {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary">
          <Link to="/">回到首页</Link>
        </Button>
      }
    ></Result>
  )
}
export default memo(App)
