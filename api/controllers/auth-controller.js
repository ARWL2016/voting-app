const { User } = require('../db');

module.exports = {
  register(req, res) {
    console.log('controller: ', req.body);
    const newUser = req.body;
    const username = newUser.username;

    User.findOne({username: username})
      .then(user => {
        if (user) {
          res.status(409).send("user exists");
        } else {
          User.create(newUser)
            .then(user => res.status(201).send('user created'));
        }
      }).catch(err => res.status(500).send(error));
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
