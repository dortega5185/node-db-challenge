exports.seed = function (knex, Promise) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex("resources").insert([
    { name: "John Garnett", descriptions: "developer" },
    { name: "computer" },
    { name: "software license" },
    { name: "meeting room" },
    { name: "internet" },
    { name: "Gary Moss", descriptions: "data science student" },
    { name: "Gary Vee", descriptions: "for motivation" },
    { name: "tables" },
    { name: "stress balls", descriptions: "to calm the mind" },
  ]);
  // add data into insert
};
