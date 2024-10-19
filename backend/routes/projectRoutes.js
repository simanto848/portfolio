const express = require("express");
const {
  addProject,
  getProjects,
  updateProject,
  deleteProject,
} = require("../controllers/projectControllers");

const router = express.Router();

// Add a project
router.post("/add", addProject);

// Get all projects
router.get("/", getProjects);

// Update a project
router.put("/:id", updateProject);

// Delete a project
router.delete("/:id", deleteProject);

module.exports = router;
