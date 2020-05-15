exports.seed = function (knex, Promise) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex("projects").insert([
    { name: "Rock it Out", descriptions: "music app", completed: false },
    { name: "Lakebook", completed: true },
    {
      name: "Trendy",
      descriptions: "show common trends app",
      completed: false,
    },
  ]);
  // add data into insert
};
