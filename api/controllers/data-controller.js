
const { VotingTopic } = require('../db');


module.exports = {
  greeting(req, res) {
    // res.set('Access-Control-Allow-Origin', '*');
    res.json({'hello': 'world'});
  },

  fetchTopicIndex(req, res) {
    VotingTopic.find()
      .then(topics => {
        console.log(topics);
        // res.set('Access-Control-Allow-Origin', '*');
        res.send(topics);
      });
  },

  fetchTopicById(req, res) {
    let id = req.params.id;
    console.log(req.params.id);
    VotingTopic.findById(id)
      .then(topic => {
        console.log('findbyid results' + topic);
        // res.set('Access-Control-Allow-Origin', '*');
        res.send(topic);
      })
  },

  addVote(req, res) {
    console.log('vote controller');
    // res.set('Access-Control-Allow-Origin', '*');
    res.json({'hello': 'vote'});
    // res.json({'hello': 'vote'});
    // use topic id to get correct vote
    //     topic.results.forEach(result => {
    //   if (result.option === option) {
    //     result.votes += 1;
    //   }
    // });
  }

};


