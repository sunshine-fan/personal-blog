const express = require("express")
const router = express.Router()
const { db, genid } = require("../db/DbUtils")

router.get("/test", async (req, res) => {
  // db.all("select * from `admin`", [], (err, rows) => {
  //     console.log(rows)
  // })

  // db.async.all("select * from `admin`", []).then((res) => {
  //     console.log(res)
  // })

  let out = await db.async.run("select * from `admin`", []);

  res.send({
    id: genid.NextId(),
    out //相当于 out:out
  })
})


module.exports = router