/**
"multer"
"sqlite3"
"uuid"
 */
const express = require("express")
const multer = require("multer")
const path = require("path")
const app = express();
const { db, genid } = require("./db/DbUtils")
const port = 3000

//开放跨域请求
app.use(function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "*");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  if (req.method == "OPTIONS") res.sendStatus(200); //让options尝试请求快速结束
  else next();
});

app.use(express.json())
const update = multer({
  dest: "./public/upload/temp"
})
app.use(update.any())
//指定静态资源路径  前端打包时的静态资源存放目录
app.use(express.static(path.join(__dirname, "public")))

//category/_token/add
const ADMIN_TOKEN_PATH = "/_token"
app.all("*", async (req, res, next) => {
  if (req.path.indexOf(ADMIN_TOKEN_PATH) > -1) {

    let { token } = req.headers;

    let admin_token_sql = "SELECT * FROM `admin` WHERE `token` = ?"
    let adminResult = await db.async.run(admin_token_sql, [token])
    if (adminResult.err != null || adminResult.rows.length == 0) {
      res.send({
        code: 403,
        msg: "请先登录"
      })
      return
    } else {
      next()
    }
  } else {
    next()
  }
})

app.use("/test", require("./routers/TestRouter"))
app.use("/admin", require("./routers/AdminRouter"))
app.use("/category", require("./routers/CategoryRouter"))
app.use("/blog", require("./routers/BlogRouter"))
app.use("/upload", require("./routers/UploadRouter"))

app.get("/", (req, res) => {
  res.send("hello world");
})

app.listen(port, () => {
  console.log(`启动成功 : http://localhost:${port}/`)
})

