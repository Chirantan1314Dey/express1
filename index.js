const express = require('express')
const app = express()
const port = 7000
const con = require('./connection')
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.get('/', (req, res) => {
  res.sendFile(__dirname +'/register.html')
})
app.post('/', (req, res) => {
   var name = req.body.name;
   var email = req.body.email;
   var mno = req.body.mno;

   con.connect(function(error){
    if (error) throw error;

    var sql = "INSERT INTO `students` ( `name`, `email`, `mno`) VALUES ( '"+name+"', '"+email+"', '"+mno+"')";
    con.query(sql,function(error,result){
    if (error) throw error;
        res.send("hi")
    })
   })
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})