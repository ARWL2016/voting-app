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
  author: {
    type: String, 
    required: true
  }, 
  results: [ResultsSchema]

});

const VotingTopic = mongoose.model('voting-topic', VotingTopicSchema); 

module.exports = VotingTopic; 