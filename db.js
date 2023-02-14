//connecting db
var mongoose = require('mongoose');
var {Schema} = mongoose;

function db(){
  // mongoose.set('strictQuery', false);
  const DB =process.env.DB_URL
  mongoose.connect(DB,{ useNewUrlParser: true, useUnifiedTopology: true  })
  .then(() => console.log('Connected!'))
  .catch(err=> console.log(err));
}
module.exports = db;
