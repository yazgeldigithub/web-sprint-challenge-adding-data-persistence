exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('projects').del()
      .then(function () {
        // Inserts seed entries
        return knex('projects').insert([
          {
            project_name: 'wood box',
            project_description: 'its like minecraft i guess',
            project_completed: 0
          },
          {
            project_name: 'paper crane',
            project_description: 'its a bird... but paper',
            project_completed: 1
          },
          {
            project_name: 'sprint challenge',
            project_description: 'build an api with data persistence ',
            project_completed: 0
          }
        ]);
      });
  };