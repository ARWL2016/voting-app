const mongoose = require('mongoose');
const ResultsSchema = require('./results');

const VotingTopicSchema = new mongoose.Schema({
  topicTitle: {
    type: String,
    required: true
  },
  topicQuestion: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  voters: [{
    type: String,
    required: false
  }],
  results: [ResultsSchema]

});

const VotingTopic = mongoose.model('voting-topic', VotingTopicSchema);

module.exports = VotingTopic;
