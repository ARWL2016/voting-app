require('./api/config');

const express = require('express');
const compression = require('compression');
const path = require('path');
const https = require('https');
const bodyParser = require('body-parser');
const routes = require('./api/routes');

const app = express();
app.use(compression());

let port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));

routes(app);

app.listen(port, () => {
  console.log('API Running on Port ' + port);
})

// setInterval(function() {
//   https.get("https://votogo.herokuapp.com/home");
// }, 180000);
