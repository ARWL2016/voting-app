
const { VotingTopic } = require('../db');


module.exports = {
  greeting(req, res) {
    res.json({'hello': 'world'});
  },

  fetchTopicIndex(req, res) {
    VotingTopic.find()
      .then(topics => {
        console.log(topics);
        res.set('Access-Control-Allow-Origin', '*');
        res.send(topics);
      });
  },

  fetchTopicById(req, res) {
    let id = req.params.id;
    console.log(req.params.id);
    VotingTopic.findById(id)
      .then(topic => {
        console.log('findbyid results' + topic);
        res.set('Access-Control-Allow-Origin', '*');
        res.send(topic);
      })
  }





};


