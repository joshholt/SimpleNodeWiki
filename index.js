module.exports = process.env.WIKI_COV
  ? require('./lib-cov/db.js')
  : require('./lib/db.js');