const DataController = require('../controllers/data-controller');
const AuthController = require('../controllers/auth-controller');
const {authenticate} = require('../middleware/authenticate');

module.exports = (app) => {
  app.get('/home', (req, res) => {
    res.redirect('/');
  })

  app.get('/api/data/current', authenticate, DataController.getTopicsByUser);
  app.get('/api/data', DataController.getTopicIndex);
  app.get('/api/data/:id', DataController.getTopicById);
  app.put('/api/data/vote/:id', authenticate, DataController.addVote);
  app.post('/api/data', DataController.create);
  app.delete('/api/data/:id', authenticate, DataController.delete);

  app.post('/api/auth/register', AuthController.register);
  app.post('/api/auth/login', AuthController.login);
  app.delete('/api/auth/logout', authenticate, AuthController.logout);

  app.get('*', (req, res) => {
    res.redirect('/');
    // res.status(404).send({message: 'Page not found'});
  })

}
