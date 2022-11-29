const express = require("express")
const router = express.Router()
const fs = require("fs")
const { db, genid } = require("../db/DbUtils")
// editor 上传图片格式
router.post("/rich_editor_upload", async (req, res) => {
  if (!req.files) {
    res.send({
      "errno": 1, // 只要不等于 0 就行
      "message": "失败信息",
    })
    return;
  }

  let files = req.files;
  console.log(files);
  let ret_files = [];

  for (let file of files) {
    //获取文件名字后缀
    let file_ext = file.originalname.substring(file.originalname.lastIndexOf(".") + 1)
    //随机文件名字
    let file_name = genid.NextId() + "." + file_ext

    //修改名字加移动文件
    fs.renameSync(
      process.cwd() + "/public/upload/temp/" + file.filename,
      process.cwd() + "/public/upload/" + file_name
    )
    ret_files.push("/upload/" + file_name)
  }

  res.send({
    "errno": 0, // 注意：值是数字，不能是字符串
    "data": {
      "url": ret_files[0], // 图片 src ，必须
    }
  })

})
// router.post("/rich_upload", async (req, res) => {
//   // if (!req.files) {
//   //   res.send({
//   //     "errno": 1, // 只要不等于 0 就行
//   //     "message": "失败信息",
//   //   })
//   //   return;
//   // }

//   // let files = req.files;
//   // console.log(files);
//   // let ret_files = [];

//   // for (let file of files) {
//   //   //获取文件名字后缀
//   //   let file_ext = file.originalname.substring(file.originalname.lastIndexOf(".") + 1)
//   //   //随机文件名字
//   //   let file_name = genid.NextId() + "." + file_ext

//   //   //修改名字加移动文件
//   //   fs.renameSync(
//   //     process.cwd() + "/public/upload/temp/" + file.filename,
//   //     process.cwd() + "/public/upload/" + file_name
//   //   )
//   //   ret_files.push("/upload/" + file_name)
//   // }
//   const data = req;
//   res.send({
//     "errno": 0, // 注意：值是数字，不能是字符串
//     "data": {
//       "url": data, // 图片 src ，必须
//     }
//   })
// })


module.exports = router