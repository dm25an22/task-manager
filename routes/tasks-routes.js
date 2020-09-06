const { Router } = require("express");
const Task = require("../models/tasks-model");

const router = Router();

router.get(`/`, async (req, res) => {
  try {
    const tasks = await Task.find({});

    res.send(tasks.reverse());
  } catch {
    res.status(500).json({ message: 'something is wrong' })
  }
})

router.post(`/`, async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();

    res.send(newTask);
  } catch {
    res.status(500).json({ message: 'something is wrong' })
  }
})

router.delete(`/:id`, async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);

    res.send(`ok`)
  } catch {
    res.status(500).json({ message: 'something is wrong' })
  }
})

router.put(`/:id`, async (req, res) => {
  try {
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.send(req.body);
  } catch {
    res.status(400).json({ message: 'Bad request' })
  }
})

module.exports = router;