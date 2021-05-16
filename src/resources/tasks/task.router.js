const router = require('express').Router();
const User = require('./task.model');
const taskService = require('./task.service');

router.route('/').get(async (req, res) => {
  const boardID = await taskService.getAll(+req.baseUrl.split('/')[2]);
  res.send(boardID);
});

router.route('/').post(async (req, res) => {
  const user = await taskService.create(req.body);
  res.status(201).send(User.toResponse(user));
});

router.route('/:id').get(async (req, res) => {
  const user = await taskService.get(req.params.id);
  if (user) {
    res.status(200).send(User.toResponse(user));
  } else res.status(404).send(`User with id ${req.params.id} not found`);
});

router.route('/:id').put(async (req, res) => {
  const user = await taskService.update(req.params.id, req.body);
  if (user) {
    res.status(200).send(User.toResponse(user));
  } else res.status(400).send(`User with id ${req.params.id} not found`);
});

router.route('/:id').delete(async (req, res) => {
  const user = await taskService.remove(req.params.id);

  if (user) {
    res.status(204).send('User has been delete');
  } else res.status(404).send(`User with id ${req.params.id} not found`);
});

module.exports = router;
