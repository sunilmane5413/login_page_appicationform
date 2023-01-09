var express = require('express');
var router = express.Router();
var mysql = require('mysql2')
var bodyparser = require('body-parser');
const e = require('express');
const { rawListeners } = require('../app');


// database connections 

const connections = mysql.createConnection({
   port:3306,
   host:'localhost',
   user:'root',
   password:'Pass@5413',
   database:'fullstackpatheyaASSIGNMENT'
})

connections.connect((error)=>{
  if(error){
    console.error(error)
  }else{
    console.log('connected to the database "fullstackpatheyaASSIGNMENT" succesfully')
  }
})

// database connection is done

// get method 
router.get('/',(req,res)=>{
  res.redirect('form.html')
})

// post method for when user fill some data that data shoul be store in databse for this we use post method

// router.post('/data',(req,res)=>
router.post('/data',(req,res)=>{
  console.log(req.body)
  const email = req.body.email
  const password = req.body.password
try {
  connections.query('insert into fullstackpatheyaassignment.logindata(email,password) values(?,?)',[email,password],(error,result)=>{
    if(error){
      console.error(error)
    }
    else{
    console.log(result)
    }
  })

} catch (error) {
  console.error(error)
}
})

//  post method for form data 
router.post('/formfill',(req,res)=>{
  console.log(req.body)
  const name = req.body.name
  const address = req.body.address
  const gender = req.body.gender
  const city = req.body.city
  const email = req.body.email
  const HQ = req.body.HQ
  const number = req.body.number

  connections.query('insert into fullstackpatheyaassignment.formdata(name,address,gender,city,email,qualification,marks) values(?,?,?,?,?,?,?)',[name,address,gender,city,email,HQ,number],(error,result)=>{
    if(error){
      console.error(error)
    }else{
     console.log(result)
    }
  })
})


module.exports = router;
