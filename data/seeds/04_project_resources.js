exports.seed = function (knex, Promise) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex("project_resources").insert([
    { project_id: 1, resources_id: 1 },
    { project_id: 1, resources_id: 2 },
    { project_id: 1, resources_id: 3 },
    { project_id: 1, resources_id: 4 },
    { project_id: 1, resources_id: 6 },
    { project_id: 1, resources_id: 8 },
    { project_id: 2, resources_id: 1 },
    { project_id: 2, resources_id: 2 },
    { project_id: 2, resources_id: 3 },
    { project_id: 2, resources_id: 5 },
    { project_id: 2, resources_id: 6 },
    { project_id: 2, resources_id: 7 },
    { project_id: 3, resources_id: 1 },
    { project_id: 3, resources_id: 2 },
    { project_id: 3, resources_id: 3 },
    { project_id: 3, resources_id: 8 },
    { project_id: 3, resources_id: 9 },
  ]);
  // add data into insert
};
