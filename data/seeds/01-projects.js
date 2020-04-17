
exports.seed = function(knex) {
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {projects_name: 'Complete this project', projects_description: 'Make this project completed as proof it works', projects_completed: true},
        {projects_name: 'aaaaaaaaaa', projects_description: 'wasddfdsgf', projects_completed: false},
        {projects_name: 'jjjj', projects_description: 'aaaaaaaaadafdsgdsg', projects_completed: false},
        {projects_name: 'eeeeeeeeeeeeeeeee', projects_description: 'aaaaaaaaaaa', projects_completed: false},
        {projects_name: 'aeiou', projects_description: 'blah blah blah', projects_completed: false},
      ]);
    });
};
