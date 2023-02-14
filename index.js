const express = require('express')
var bodyParser = require('body-parser'); 
var jwt = require('jsonwebtoken'); // for user authentication 
var dotenv = require('dotenv').config();
const bcrypt = require('bcrypt'); // for password encryption 
var cookieParser = require('cookie-parser')
const db = require('./db.js') // importing moongoose connection module 
var User = require('./models/User.js') // importing mongoose schema 
const app = express()
const port = process.env.PORT || 500
const cors = require('cors');
// app.use(cors({ origin: true })); // using cors for fetching the data from fetch api easily
// app.use(cors({origin: 'http://localhost:3000',credentials: true,optionsSuccessStatus: 200}))
// app.use(cors({credentials:true}))
app.use(cookieParser())

db()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json())

app.get('/',function(req,res){
  User.find(function(err,result){
    if(err){
      console.log(err)
      return res.send('err')
    }
    res.json({result,sucess:'sucess'})
  })
})
app.get('/user',function(req,res){
  res.send('working')
})



app.listen(port)