
let env = process.env.NODE_ENV || 'development';
console.log('ENV: ', env);

if (env === 'development') {
  const config = require('./development.json');
  process.env.JWT_SECRET = config.JWT_SECRET;
  process.env.MONGODB_URI = config.MONGODB_URI;

  console.log(`Database running on ${process.env.MONGODB_URI}`);
}

