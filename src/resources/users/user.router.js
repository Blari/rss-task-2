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
  const user = await usersService.get(req.params.id, res);
  res.status(200).send(User.toResponse(user));
});

module.exports = router;
