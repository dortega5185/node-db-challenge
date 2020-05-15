const db = require("../data/db-config.js");

module.exports = {
  getProjects,
  findById,
  getListOfTasks,
  getListOfResources,
  addProject,
  addTask,
  addResource,
  tasksOnly,
};

function getProjects() {
  return db("projects");
}

function findById(id) {
  return db("projects").where("id", id).first();
}

function getListOfTasks(id) {
  return db
    .select(
      "projects.name",
      "projects.descriptions",
      "tasks.task_description",
      "tasks.notes",
      "tasks.completed",
      "tasks.project_id"
    )
    .from("projects")
    .join("tasks", "tasks.project_id", "=", "projects.id")
    .where({ "projects.id": id });
}

function tasksOnly(id) {
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

function addTask(tasks, id) {
  const anotherTask = {
    project_id: id,
    task_description: tasks.task_description,
    notes: tasks.notes,
    completed: tasks.completed,
  };
  return db("tasks")
    .insert(anotherTask, id)
    .then((id) => {
      return tasksOnly(anotherTask.id);
    });
}

function addResource(resources, id) {
  const newResource = {
    name: resources.name,
    descriptions: resources.descriptions,
  };
  return (
    db("resources")
      // .select(
      //   "project_resources.project_id",
      //   "resources.name",
      //   "resources.descriptions"
      // )
      // .from("resources")
      // .join(
      //   "project_resources",
      //   "project_resources.resources_id",
      //   "=",
      //   "rescourses.id"
      // )
      // .join("projects", "projects.id", "=", "project_resources.project_id")
      // .where({ "projects.id": id })
      .insert(newResource, id)
      .then((id) => {
        return getListOfResources(newResource.id);
      })
  );
}
