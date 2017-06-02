const mongoose = require('mongoose'); 

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String, 
    required: true
  }, 
  lastName: {
    type: String, 
    required: true
  }, 
  username: {
    type: String, 
    required: true
  }, 
  password: {
    type: String, 
    required: true, 
    select: false
  }
  
});

const User = mongoose.model('voting-topic', UserSchema); 

module.exports = User;