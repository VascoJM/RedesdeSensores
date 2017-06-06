'use strict';
module.exports = function(app) {
  var boxList = require('../controllers/boxListController');


  // todoList Routes
  app.route('/boxs')
    .get(boxList.list_all_boxs)
    .post(boxList.create_a_box);


  app.route('/boxs/:boxsId')
    .get(boxList.read_a_box)
    .put(boxList.update_a_box)
    .delete(boxList.delete_a_box);
};

