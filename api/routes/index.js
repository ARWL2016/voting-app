const DataController = require('../controllers/data-controller');
const AuthController = require('../controllers/auth-controller');

module.exports = (app) => {
  app.get('/home', (req, res) => {
    res.redirect('/');
  })

  app.get('/api/data', DataController.getTopicIndex);
  app.get('/api/data/:id', DataController.getTopicById);
  app.put('/api/data/vote/:id', DataController.addVote);
  app.post('/api/data', DataController.create);
  app.delete('/api/data/:id', DataController.delete);

  app.post('/api/auth/register', AuthController.register);
  app.post('/api/auth/login', AuthController.login);

  app.get('*', (req, res) => {
    res.redirect('/');
    // res.status(404).send({message: 'Page not found'});
  })

}
