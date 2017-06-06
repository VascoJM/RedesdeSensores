'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BoxSchema = new Schema({
  name: {
    type: String,
    Required: 'Name of the Box'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);
