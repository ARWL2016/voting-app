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



  }
}
