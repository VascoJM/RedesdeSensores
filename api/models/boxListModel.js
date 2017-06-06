'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BoxSchema = new Schema({
  id: {
    type: String,
    Required: 'Kindly enter the name of the Box'
  },
  name: {
    type: String,
    Required: 'Kindly enter the name of the Box'
  }
});

module.exports = mongoose.model('Boxs', BoxSchema);