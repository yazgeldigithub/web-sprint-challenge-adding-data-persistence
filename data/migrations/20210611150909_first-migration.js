exports.up = function(knex) {
    return knex.schema
      .createTable('projects', table => {
          table.increments('project_id')
          table.string('project_name').notNullable()
          table.string('project_description')
          table.integer('project_completed').defaultTo(0)
      })
      .createTable('resources', table => {
          table.increments('resource_id')
          table.string('resource_name').notNullable().unique()
          table.string('resource_description')
      })
      .createTable('tasks', table => {
          table.increments('task_id')
          table.string('task_description').notNullable()
          table.string('task_notes')
          table.integer('task_completed').defaultTo(0)
          table.integer('project_id')
              .unsigned()
              .notNullable()
              .references('project_id')
              .inTable('projects')
              .onDelete('CASCADE')
              .onUpdate('CASCADE')
      })
      .createTable('project_resources', table => {
          table.increments('project_resource_id')
          table.integer('project_id')
              .unsigned()
              .notNullable()
              .references('project_id')
              .inTable('projects')
              .onDelete('CASCADE')
              .onUpdate('CASCADE')
          table.integer('resource_id')
              .unsigned()
              .notNullable()
              .references('resource_id')
              .inTable('resources')
              .onDelete('CASCADE')
              .onUpdate('CASCADE')
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('project_resources')
      .dropTableIfExists('tasks')
      .dropTableIfExists('resources')
      .dropTableIfExists('projects')
  };