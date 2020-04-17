
exports.seed = function(knex) {
  return knex('resources').truncate()
    .then(function () {
      return knex('resources').insert([
        {resources_name: 'eiou', resources_description: 'zzzzz', project_id: 1},
        {resources_name: 'afdf', resources_description: 'rrrrrr', project_id: 2},
        {resources_name: 'hhghgh', resources_description: 'eeeee', project_id: 3},
        {resources_name: 'erere', resources_description: 'ggggg', project_id: 4},
        {resources_name: 'qwqwq', resources_description: 'zzzz', project_id: 5},
      ]);
    });
};
