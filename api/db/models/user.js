const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true, 
    unique: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true, 
    minlength: 3
  }, 
  tokens: [{
    access: {
      type: String,
      required: true
    }, 
    token: {
      type: String,
      required: true
    }
  }]
});

UserSchema.methods.generateAuthToken = function () {
  const user = this; 
  const access = 'auth';
  const token = jwt.sign({_id: user._id, access: access}, 'some_secret').toString();

  user.tokens.push({access, token});

  return user.save().then(() => {
    return token;
  });
}; 

UserSchema.methods.removeToken = function (token) {
  const user = this; 

  return user.update({
    $pull: {
      tokens: {token}
    }
  });
};

UserSchema.statics.findByToken = function (token) {
  const User = this; 
  let decoded; 

  try {
      decoded = jwt.verify(token, 'some_secret')
  } catch (err) {
      return Promise.reject(); 
  }

  return User.findOne({
    _id: decoded._id, 
    'tokens.token': token, 
    'tokens.access': 'auth'
  })
}

const User = mongoose.model('user', UserSchema);

module.exports = User;
