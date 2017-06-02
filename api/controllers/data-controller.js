
const { VotingTopic } = require('../db');

module.exports = {

  getTopicIndex(req, res) {
    VotingTopic.find()
      .then(topics => res.send(topics));
  },

  getTopicById(req, res) {
    const id = req.params.id;

    VotingTopic.findById(id)
      .then(topic => res.send(topic));
  },

  create(req, res) {
    const payload = req.body;
    VotingTopic.create(payload)
      .then(topic => res.send(topic))
  },

  addVote(req, res) {
    const payload = req.body;
    const id = req.params.id;

    VotingTopic.findByIdAndUpdate(id, payload)
      .then(() => VotingTopic.findById(id))
      .then(topic => res.send(topic));
  },

  delete(req, res) {
    const id = req.params.id; 

    VotingTopic.findByIdAndRemove(id)
      .then(topic => res.status(202).send(topic)); 
  }
};


