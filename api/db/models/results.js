const mongoose = require('mongoose');

const ResultsSchema = new mongoose.Schema({
  option: {
    type: String, 
    required: true
  }, 
  votes: {
    type: String, 
    required: true
  }
}); 

module.exports = ResultsSchema; 