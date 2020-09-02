const mysql = require('mysql')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

// app.use(express.static('public'))
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test',
})

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,OPTIONS")
  next();
})


app.post('/api/registration/NewUser', function (req, res) {

  const username = req.body.username
  const pwd = req.body.password
  const email = req.body.email
  const contact = req.body.contact
  console.log(req.body)
  pool.getConnection(function (err, connection) {
    if (err) throw err
    console.log('Connected successfully to the db test!')

    var sql =
      'INSERT INTO userdata(username,password,email,contact) VALUES(?,?,?,?)'
    connection.query(sql, [username, pwd, email, contact], function (err, data) {
      if (err) {
        console.log(err)
      } else {
        console.log('successfully inserted into db')
        connection.end()
        res.redirect('/api/login')
      }
    })
  })
})

// app.post('/signin', function (req, res) {
//   const userName = req.body.name
//   const pswd = req.body.password

//   pool.getConnection(function (err, connection) {
//     if (err) throw err
//     console.log('Connected successfully to the db test!')

//     var sql = 'SELECT * FROM test WHERE username=?'
//     connection.query(sql, [userName], function (err, rows, fields) {
//       if (err) {
//         console.log(err)
//       } else {
//         if (rows.length != 0) {
//           if (rows[0].password == pswd) {
//             res.redirect('/studentDetails')
//           } else
//             res.send(
//               '<h1 style="text-align:center ; margin-top:30px" >Invalid password</h1>',
//             )
//         } else
//           res.send(
//             '<h1 style="text-align:center ; margin-top:30px" >Invalid username</h1>',
//           )
//       }
//       connection.end()
//     })
//   })
// })

app.listen(3000, function (err) {
  if (err) throw err
  console.log('connected to port 3000')
})
