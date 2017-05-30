const DataController = require('../controllers/data-controller');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send('API root');
  })

  app.get('/api/test', DataController.greeting);

  app.get('*', (req, res) => {
    res.status(404).send({message: 'Page not found'});
  })

}
