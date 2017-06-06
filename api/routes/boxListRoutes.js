'use strict';
module.exports = function(app) {
  var boxList = require('../controllers/boxListController');


  // todoList Routes
  app.route('/tasks')
    .get(boxList.list_all_tasks)
    .post(boxList.create_a_task);


  app.route('/tasks/:tasksId')
    .get(boxList.read_a_task)
    .put(boxList.update_a_task)
    .delete(boxList.delete_a_task);
};

