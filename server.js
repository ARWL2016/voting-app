const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./api/routes');
const { mongoose, VotingTopic } = require('./api/db');

const app = express();

let port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));

routes(app);

app.listen(port, () => {
  console.log('API Running on Port ' + port);
})
