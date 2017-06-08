const { User } = require('../db');

module.exports = {
  register(req, res) {
    console.log('controller: ', req.body);
    const body = req.body;
    const {username} = req.body;

    User.findOne({username})
      .then(user => {
        if (user) {
          res.status(409).send("user exists");
        } else {
          const user = new User(body); 
          user.save().then(() => {
            return user.generateAuthToken(); 
          }).then((token) => {
            user.password = undefined;
            user.tokens = undefined; 
            res.header('x-auth', token).send(user); 
          })
        }
      }).catch(err => res.status(400).send(err));
  },

  login(req, res) {
    const payload = req.body;
    const { username, password } = req.body;
    console.log(username, password);

    // find one with same username
    // check if passwords match
    // if wrong, send 401
    // if correct, send 200 OK and the user object with ID
    // if user not found, send 401
    User.findOne({username: username})
      .then(user => {
        console.log(user);
        if (user) {
          // check password
          if (user.password === password) {
            user.password = undefined;
            res.status(200).send(user);
          } else {
            res.status(401).send('Password incorrect');
          }
        } else {
          res.status(401).send('User not found');
        }
      })
  }
}
