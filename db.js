//connecting db
var mongoose = require('mongoose');
var {Schema} = mongoose;

function db(){
  try{
    mongoose.set('strictQuery', false);
    const DB =process.env.DB_URL
    console.log(DB)
    mongoose.connect(DB,{ useNewUrlParser: true, useUnifiedTopology: true  })
    .then(() => console.log('Connected!'))
    .catch(err=> console.log(err));

  }catch{
    console.log('error')

  }
  
}
module.exports = db;
