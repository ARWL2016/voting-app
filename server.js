require('./api/config');

const express = require('express');
const compression = require('compression');
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require("helmet");
const ms = require('ms');

const routes = require('./api/routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(helmet.referrerPolicy({ policy: 'same-origin' }));
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-eval'"],
    styleSrc: ["'self'", 'https://fonts.googleapis.com', "'unsafe-inline'"],
    imgSrc: ["'self'"],
    fontSrc: ["'self'", 'https://fonts.gstatic.com'],
    formAction: ["'self'"],
    frameAncestors: ["'none'"]
  }
}));
app.use(compression());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist'), {maxAge: ms('1y')}));

routes(app);

app.listen(port, () => {
  console.log('API Running on Port ' + port);
});


