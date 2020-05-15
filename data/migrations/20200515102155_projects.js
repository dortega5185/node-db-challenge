exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (projects) => {
      projects.increments();

      projects.string("name", 255).notNullable();
      projects.string("descriptions", 255);
      projects.boolean("completed").defaultTo(false);
    })
    .createTable("tasks", (tasks) => {
      tasks.increments();

      tasks.string("descriptions").notNullable();
      tasks.string("notes", 255);
      tasks.boolean("completed").defaultTo(false);

      tasks
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id") // or .references('orders.id') then remove .inTable()
        .inTable("projects")
        .onUpdate("CASCADE") // RESTRICT, DO NOTHING, SET NULL, CASCADE
        .onDelete("RESTRICT");
    })
    .createTable("resources", (resources) => {
      resources.increments();

      resources.string("name", 255).notNullable().unique();
      resources.string("descriptions", 255);
    })
    .createTable("project_resources", (project_resources) => {
      project_resources.increments();

      project_resources
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");

      project_resources
        .integer("resources_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects");
};
