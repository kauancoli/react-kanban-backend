const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: String,
  column: String,
  client: String,
  priority: String,
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
