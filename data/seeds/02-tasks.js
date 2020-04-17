
exports.seed = function(knex) {
  return knex('tasks').truncate()
    .then(function () {
      return knex('tasks').insert([
        {tasks_description: 'eeee', notes: 'aaaaa', tasks_completed: true, project_id: 1},
        {tasks_description: 'ffff', notes: 'uuuuuu', tasks_completed: false, project_id: 2},
        {tasks_description: 'gggg', notes: 'ggggggggg', tasks_completed: false, project_id: 3},
        {tasks_description: 'vvvvvv', notes: 'hhhhhh', tasks_completed: false, project_id: 4},
        {tasks_description: 'zzzzz', notes: 'jjjjjjj', tasks_completed: false, project_id: 5},
      ]);
    });
};
