const express = require("express");
const router = express.Router();
const TaskController = require("./src/controllers/TaskController");

router.post("/tasks", TaskController.createTask);
router.get("/tasks", TaskController.getAllTasks);
router.get("/tasks/:id", TaskController.getTaskById);
router.put("/tasks/:id", TaskController.updateTask);
router.delete("/tasks/:id", TaskController.deleteTask);

module.exports = router;
