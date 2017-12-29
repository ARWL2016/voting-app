const { User } = require('../db');
const jwt = require('jsonwebtoken');

module.exports = {
  register(req, res) {
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
            res.header('X-Auth', token).send(user);
          })
        }
      }).catch(e => res.status(500).send(e));
  },

  login(req, res) {
    const { username, password } = req.body;

    User.findByCredentials(username, password)
      .then(user => {
        return user.generateAuthToken()
          .then(token => {
            user.password = undefined;
            user.tokens = undefined;
            res.header('X-Auth', token).send(user);
          });
      })
      .catch(e => {
        if (e === false) {
          res.send(401);
        } else {
          res.send(500);
        }
      });
  },

  logout(req, res) {
    req.user.removeToken(req.token).then(() => {
      res.status(200).send();
    })
    .catch(err => res.send(500));
  }
}
