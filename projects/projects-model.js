const db = require("../data/db-config.js");

module.exports = {
  getAll,
};

function getAll() {
  return db("projects");
}
