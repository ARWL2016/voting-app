const chalk = require('chalk');
const mongoose = require('mongoose');
// const { MONGO_URI } = require('../config');
const VotingTopic = require('./models/voting-topic');
const User = require('./models/user');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI);
// mongoose.connect(MONGO_URI);
mongoose.connection.on('connected', () => {
  console.log(chalk.green('mongoose connected to: ' + process.env.MONGODB_URI));
  // console.log(chalk.green('mongoose connected to: ' + MONGO_URI));
});

mongoose.connection.on('error', (err) => {
  console.log(chalk.red('mongoose connection error: ' + err));
});

module.exports = {
  mongoose,
  VotingTopic,
  User
}

