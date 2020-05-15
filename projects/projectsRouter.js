const express = require("express");

const Projects = require("./projects-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.getAll()
    .then((projects) => {
      res.json(projects);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get projects" });
    });
});

router.get("/:id/tasks", (req, res) => {
  const { id } = req.params;

  Projects.getListOfTasks(id)
    .then((tasks) => {
      if (tasks) {
        res.json(tasks);
      } else {
        res
          .status(404)
          .json({ message: "Could not find tasks with given id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get your tasks" });
    });
});

router.get("/:id/resources", (req, res) => {
  const { id } = req.params;

  Projects.getListOfResources(id)
    .then((resources) => {
      if (resources) {
        res.json(resources);
      } else {
        res
          .status(404)
          .json({ message: "Could not find resources with given id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get your resources" });
    });
});

router.post("/", (req, res) => {
  const project = req.body;

  Projects.add(project)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new project" });
    });
});

router.post("/:id/tasks", (req, res) => {
  const task = req.body;

  Projects.add(task)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new task" });
    });
});

router.post("/:id/resources", (req, res) => {
  const resources = req.body;

  Projects.add(resources)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new resource" });
    });
});

module.exports = router;
