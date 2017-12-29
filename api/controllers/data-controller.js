
const { VotingTopic } = require('../db');

module.exports = {

  getTopicIndex(req, res) {
    VotingTopic
      .find()
        .then(topics => res.send(topics))
        .catch(e => sendError(e));
  },

  getTopicById(req, res) {
    const {id} = req.params;
    VotingTopic.findById(id)
      .then(topic => res.send(topic))
      .catch(e => sendError(e));
  },

  getTopicsByUser(req, res) {
    const username = req.user.username;
    VotingTopic.find({username})
      .then(topics => res.status(200).send(topics))
      .catch(e => sendError(e));
  },

  create(req, res) {
    const payload = req.body;
    VotingTopic.create(payload)
      .then(topic => res.send(topic))
      .catch(e => sendError(e));
  },

  delete(req, res) {
    const id = req.params.id;

    VotingTopic.findByIdAndRemove(id)
      .then(topic => res.status(202).send(topic))
      .catch(e => sendError(e));

  },

  addVote(req, res) {
    const body = req.body;
    const id = req.params.id;

    VotingTopic.findByIdAndUpdate(id, body)
      .then(() => res.send(200))
      .catch(e => sendError(e));
  },

  sendError() {
    res.status(500).send(e);
  }
};


