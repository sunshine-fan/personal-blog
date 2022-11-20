const GenId = require("../utils/SnowFlake")


var mysql = require('mysql')
var db = mysql.createConnection({
  host: 'localhost',
  user: 'blog',
  password: '123456',
  database: 'blog'
})

db.connect() //连接
const genid = new GenId({ WorkerId: 1 })

db.async = {}

db.async.run = (sql, params) => {
  return new Promise((resolve, reject) => {
    db.query(sql, params, (err, rows) => {
      resolve({ err, rows })
    })
  })
}
module.exports = { db, genid }