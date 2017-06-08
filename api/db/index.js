const chalk = require('chalk');
const mongoose = require('mongoose');
const { mlabURI, mongoLocal } = require('../config');
const VotingTopic = require('./models/voting-topic');
const User = require('./models/user');

mongoose.Promise = global.Promise;

mongoose.connect(mongoLocal);
mongoose.connection.on('connected', () => {
  console.log(chalk.green('mongoose connected to: ' + mongoLocal));
});

mongoose.connection.on('error', (err) => {
  console.log(chalk.red('mongoose connection error: ' + err));
});

module.exports = {
  mongoose,
  VotingTopic,
  User
}

