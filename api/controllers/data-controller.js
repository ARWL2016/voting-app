
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
      // .then(()=> res.sendStatus(500))
      .catch(e => sendError(e));
  },

  create(req, res) {
    const payload = req.body;
    VotingTopic.create(payload)
      .then(topic => res.send(topic))
  },

  addVote(req, res) {
    const body = req.body;
    const id = req.params.id;

    VotingTopic.findByIdAndUpdate(id, body)
      .then(() => VotingTopic.findById(id))
      .then(topic => res.send(topic));
  },

  delete(req, res) {
    const id = req.params.id;
    console.log(id);
    VotingTopic.findByIdAndRemove(id)
      .then(topic => res.status(202).send(topic))
      .catch(err => res.status(400).send());
  },

  sendError() {
    res.status(500).send(e);
  }
};


