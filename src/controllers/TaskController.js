const Task = require("../models/Task");

const TaskController = {
  async createTask(req, res) {
    try {
      const { id, name, column, client, priority } = req.body;

      const task = new Task({
        id,
        name,
        column,
        client,
        priority,
      });

      await task.save();
      return res.status(201).json(task);
    } catch (error) {
      return res.status(500).json({ error: "Error creating task" });
    }
  },

  async getAllTasks(req, res) {
    try {
      const tasks = await Task.find();
      return res.status(200).json(tasks);
    } catch (error) {
      return res.status(500).json({ error: "Error fetching tasks" });
    }
  },

  async getTaskById(req, res) {
    try {
      const task = await Task.findOne({ id: req.params.id });
      if (!task) {
        return res.status(404).json({ error: "Task not found" });
      }
      return res.status(200).json(task);
    } catch (error) {
      return res.status(500).json({ error: "Error fetching task" });
    }
  },

  async updateTask(req, res) {
    try {
      const { id, name, column, client, priority } = req.body;

      const updatedTask = await Task.findOneAndUpdate(
        { id: req.params.id },
        { id, name, column, client, priority },
        { new: true }
      );

      if (!updatedTask) {
        return res.status(404).json({ error: "Task not found" });
      }

      return res.status(200).json(updatedTask);
    } catch (error) {
      return res.status(500).json({ error: "Error updating task" });
    }
  },

  async deleteTask(req, res) {
    try {
      const deletedTask = await Task.findOneAndRemove({ id: req.params.id });
      if (!deletedTask) {
        return res.status(404).json({ error: "Task not found" });
      }
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: "Error deleting task" });
    }
  },
};

module.exports = TaskController;
