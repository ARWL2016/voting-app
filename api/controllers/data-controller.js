module.exports = {
  greeting(req, res) {
    console.log('api/data');
    res.set('Access-Control-Allow-Origin', '*');
    res.json({'hello': 'world'});
  }
};
