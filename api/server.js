const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');


const { mongoose, VotingTopic } = require('./db');

let port = process.env.PORT || 3000;

app.use(bodyParser.json());


routes(app);


app.listen(port, () => {
  console.log('API Running on Port ' + port);
})
