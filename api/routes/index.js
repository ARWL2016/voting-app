const DataController = require('../controllers/data-controller');

module.exports = (app) => {
  app.get('/home', (req, res) => {
    res.redirect('/'); 
  })

  app.get('/api/data', DataController.getTopicIndex);
  app.get('/api/data/:id', DataController.getTopicById);
  app.put('/api/data/vote/:id', DataController.addVote); 

  app.get('*', (req, res) => {
    res.redirect('/'); 
    // res.status(404).send({message: 'Page not found'});
  })

}
