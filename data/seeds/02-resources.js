exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('resources').del()
      .then(function () {
        // Inserts seed entries
        return knex('resources').insert([
          {
            resource_name: 'wood',
            resource_description: 'a piece of wood'
          },
          {
            resource_name: 'nails',
            resource_description: 'pokey metal thing'
          },
          {
            resource_name: 'hammer',
            resource_description: 'use to hit pokey metal thing'
          },
          {
            resource_name: 'paper',
            resource_description: 'squished tree'
          },
          {
            resource_name: 'computer',
            resource_description: 'beep beep boop'
          },
          {
            resource_name: 'knowledge',
            resource_description: 'gotta be smart'
          }
        ]);
      });
  };