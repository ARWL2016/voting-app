const DataController = require('../controllers/data-controller');

module.exports = (app) => {
  app.get('/home', (req, res) => {
    res.redirect('/'); 
  })

  app.get('/api/test', DataController.greeting);
  app.get('/api/data', DataController.fetchTopicIndex);
  app.get('/api/data/:id', DataController.fetchTopicById);
  app.post('/api/data/vote/:id', DataController.addVote); 

  app.get('*', (req, res) => {
    res.status(404).send({message: 'Page not found'});
  })

}
