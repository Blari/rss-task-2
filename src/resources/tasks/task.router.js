const router = require('express').Router();
const Task = require('./task.model');
const taskService = require('./task.service');

router.route('/').get(async (req, res) => {
  const boardID = await taskService.getAll(+req.baseUrl.split('/')[2]);
  if (boardID.length > 0) {
    res.status(200).send(Task.toResponse(boardID));
  } else {
    res.status(401).send('Tasks not found');
  }
});

router.route('/').post(async (req, res) => {
  const task = await taskService.create(req.body);
  res.status(201).send(task);
});

router.route('/:id').get(async (req, res) => {
  const taskID = +req.params.id;
  const boardID = +req.baseUrl.split('/')[2];
  const task = await taskService.get(boardID, taskID);

  if (task) {
    res.status(200).send(task);
  } else res.status(404).send(`Task with id ${req.params.id} not found`);
});

router.route('/:id').put(async (req, res) => {
  const user = await taskService.update(req.params.id, req.body);
  if (user) {
    res.status(200).send(Task.toResponse(user));
  } else res.status(400).send(`User with id ${req.params.id} not found`);
});

router.route('/:id').delete(async (req, res) => {
  const user = await taskService.remove(req.params.id);

  if (user) {
    res.status(204).send('User has been delete');
  } else res.status(404).send(`User with id ${req.params.id} not found`);
});

module.exports = router;
