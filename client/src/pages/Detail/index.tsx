//文章详情
import React, { memo } from "react"
import { Divider, Typography } from "antd"
import { Link as NavLink } from "react-router-dom"
const { Title, Paragraph, Text, Link } = Typography
const blockContent = `AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、不限可能的数据可视化最佳实践。得益于丰富的业务场景和用户需求挑战，AntV 经历多年积累与不断打磨，已支撑整个阿里集团内外 20000+ 业务系统，通过了日均千万级 UV 产品的严苛考验。
我们正在基础图表，图分析，图编辑，地理空间可视化，智能可视化等各个可视化的领域耕耘，欢迎同路人一起前行。`
const App: React.FC = function (props) {
  return (
    <>
      <Typography>
        <NavLink to="/home/content">首页</NavLink>
        <Title>Introduction</Title>
        <Paragraph>
          In the process of internal desktop applications development, many
          different design specs and implementations would be involved, which
          might cause designers and developers difficulties and duplication and
          reduce the efficiency of development.
        </Paragraph>
        <Paragraph>
          After massive project practice and summaries, Ant Design, a design
          language for background applications, is refined by Ant UED Team,
          which aims to{" "}
          <Text strong>
            uniform the user interface specs for internal background projects,
            lower the unnecessary cost of design differences and implementation
            and liberate the resources of design and front-end development
          </Text>
          .
        </Paragraph>
        <Title level={2}>Guidelines and Resources</Title>
        <Paragraph>
          We supply a series of design principles, practical patterns and high
          quality design resources (<Text code>Sketch</Text> and{" "}
          <Text code>Axure</Text>), to help people create their product
          prototypes beautifully and efficiently.
        </Paragraph>
      </Typography>
    </>
  )
}
export default memo(App)
