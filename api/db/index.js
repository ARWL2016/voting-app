const chalk = require('chalk'); 
const mongoose = require('mongoose'); 
const { mlabURI } = require('../config'); 
const VotingTopic = require('./models/voting-topic'); 

mongoose.Promise = global.Promise; 
mongoose.connect(mlabURI); 

mongoose.connection.on('connected', () => {
  console.log(chalk.green('mongoose connected to: ' + mlabURI)); 
}); 

mongoose.connection.on('error', (err) => {
  console.log(chalk.red('mongoose connection error: ' + err));
});

module.exports = {
  mongoose, 
  VotingTopic
}

 