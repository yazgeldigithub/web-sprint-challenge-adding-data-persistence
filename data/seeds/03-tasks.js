exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('tasks').del()
      .then(function () {
        // Inserts seed entries
        return knex('tasks').insert([
          {
            task_description: 'arrange wood into cube shape',
            task_notes: 'kinda like a box',
            task_completed: 0,
            project_id: 1
          },
          {
            task_description: 'hammer nails into wood',
            task_notes: 'dont hit fingies',
            task_completed: 0,
            project_id: 1
          },
          {
            task_description: 'hope it stays together',
            task_notes: '',
            task_completed: 0,
            project_id: 1
          },
          {
            task_description: 'find paper',
            task_notes: '',
            task_completed: 1,
            project_id: 2
          },
          {
            task_description: 'find instructions for paper crane',
            task_notes: '',
            task_completed: 1,
            project_id: 2
          },
          {
            task_description: 'follow those instructions',
            task_notes: '',
            task_completed: 1,
            project_id: 2
          },
          {
            task_description: 'celebrate',
            task_notes: 'calls for champagne',
            task_completed: 1,
            project_id: 2
          },
          {
            task_description: 'get computer',
            task_notes: '$$$',
            task_completed: 0,
            project_id: 3
          },
          {
            task_description: 'use your knowledge',
            task_notes: 'commit code frequently',
            task_completed: 0,
            project_id: 3
          },
          {
            task_description: 'push code',
            task_notes: 'hope Gabe approves',
            task_completed: 0,
            project_id: 3
          }
        ]);
      });
  };