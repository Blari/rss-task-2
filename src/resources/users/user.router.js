const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/').post(async (req, res) => {
  const user = await usersService.create(req.body);
  res.status(200).send(User.toResponse(user));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.get(req.params.id);
  if (user) {
    res.status(200).send(User.toResponse(user));
  } else res.status(404).send(`User with id ${req.params.id} not found`);
});

router.route('/:id').put(async (req, res) => {
  const user = await usersService.update(req.params.id, req.body);
  if (user) {
    res.status(200).send(User.toResponse(user));
  } else res.status(404).send(`User with id ${req.params.id} not found`);
});

router.route('/:id').delete(async (req, res) => {
  const user = await usersService.remove(req.params.id);

  if (user) {
    res.status(200).send(User.toResponse(user));
  } else res.status(404).send(`User with id ${req.params.id} not found`);
});

module.exports = router;
