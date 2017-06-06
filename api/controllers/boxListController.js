'use strict';


var mongoose = require('mongoose'),
  Box = mongoose.model('Boxs');

exports.list_all_boxs = function(req, res) {
  Box.find({}, function(err, box) {
    if (err)
      res.send(err);
    res.json(box);
  });
};




exports.create_a_box = function(req, res) {
  var new_box = new Box(req.body);
  new_box.save(function(err, box) {
    if (err)
      res.send(err);
    res.json(box);
  });
};


exports.read_a_box = function(req, res) {
  Box.findById(req.params.boxId, function(err, box) {
    if (err)
      res.send(err);
    res.json(box);
  });
};


exports.update_a_box = function(req, res) {
  Box.findOneAndUpdate(req.params.boxId, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(box);
  });
};


exports.delete_a_box = function(req, res) {


  Box.remove({
    _id: req.params.boxId
  }, function(err, box) {
    if (err)
      res.send(err);
    res.json({ message: 'Box successfully deleted' });
  });
};
