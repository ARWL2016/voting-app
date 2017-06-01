
const { VotingTopic } = require('../db');

module.exports = {

  fetchTopicIndex(req, res) {
    VotingTopic.find()
      .then(topics => {  
        res.send(topics);
      });
  },

  fetchTopicById(req, res) {
    const id = req.params.id;

    VotingTopic.findById(id)
      .then(topic => {
        res.send(topic);
      })
  },

  addVote(req, res) {
    const payload = req.body; 
    const id = req.params.id; 

    VotingTopic.findByIdAndUpdate(id, payload)
      .then(() => VotingTopic.findById(id))
      .then(topic => res.send(topic)); 
  
  }
};


