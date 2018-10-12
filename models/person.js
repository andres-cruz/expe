var mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema({
  name: String,
  surname: String
});

module.exports = mongoose.model('Person', PersonSchema);
