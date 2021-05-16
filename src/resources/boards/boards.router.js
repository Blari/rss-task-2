const router = require('express').Router();
const Board = require('./boards.model');
const boardsService = require('./boards.service');

router.route('/').get(async (req, res) => {
  const board = await boardsService.getAll();
  res.json(board.map(Board.toResponse));
});

router.route('/').post(async (req, res) => {
  const user = await boardsService.create(req.body);
  res.status(201).send(Board.toResponse(user));
});

router.route('/:id').get(async (req, res) => {
  const user = await boardsService.get(req.params.id);
  if (user) {
    res.status(200).send(Board.toResponse(user));
  } else res.status(404).send(`User with id ${req.params.id} not found`);
});

router.route('/:id').put(async (req, res) => {
  const user = await boardsService.update(req.params.id, req.body);
  if (user) {
    res.status(200).send(Board.toResponse(user));
  } else res.status(400).send(`User with id ${req.params.id} not found`);
});

router.route('/:id').delete(async (req, res) => {
  const user = await boardsService.remove(req.params.id);

  if (user) {
    res.status(204).send('User has been delete');
  } else res.status(404).send(`User with id ${req.params.id} not found`);
});

module.exports = router;
