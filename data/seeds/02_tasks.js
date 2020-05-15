exports.seed = function (knex, Promise) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex("tasks").insert([
    { descriptions: "build a database", notes: "almost done", project_id: 1 },
    {
      descriptions: "build the sign up and login component",
      completed: true,
      project_id: 2,
    },
    {
      descriptions: "apply machine learning to app",
      notes: "need a ds student",
      project_id: 1,
    },
    {
      descriptions: "make a music dashboard",
      notes: "need to make it pretty",
      project_id: 1,
    },
    {
      descriptions: "provide a list of music for client on click",
      notes: "use dark colors for the titles",
      project_id: 1,
    },
    {
      descriptions: "provide a list of trends for client on click",
      project_id: 3,
    },
    {
      descriptions: "make it responsive",
      notes: "you know",
      project_id: 3,
    },
  ]);
  // add data into insert
};
