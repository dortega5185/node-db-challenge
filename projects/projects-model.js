const db = require("../data/db-config.js");

module.exports = {
  getProjects,
  findById,
  getListOfTasks,
  getListOfResources,
  addProject,
  addTask,
  addResource,
};

function getProjects() {
  return db("projects");
}

function findById(id) {
  return db("projects").where("id", id).first();
}

function getListOfTasks(id) {
  return db("tasks");
}

function getListOfResources(id) {
  return db("resources");
}

function addProject(project) {
  return db("projects")
    .insert(project, "id")
    .then((ids) => {
      return findById(ids[0]);
    });
}

function addTask(id) {
  return db("tasks");
}

function addResource(id) {}
