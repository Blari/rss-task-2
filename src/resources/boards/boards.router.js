const router = require('express').Router();
const boardsService = require('./boards.service');

router.route('/').get(async (req, res) => {
  const board = await boardsService.getAll();
  res.status(200).json(board);
});

router.route('/').post(async (req, res) => {
  const board = await boardsService.create(req.body);
  if (board) {
    return res.status(201).send(board);
  }
  return res.status(404).send('Bad request');
});

router.route('/:id').get(async (req, res) => {
  const board = await boardsService.get(req.params.id);
  if (board) {
    res.status(200).send(board);
  } else res.status(404).send(`Board with id ${req.params.id} not found`);
});

router.route('/:id').put(async (req, res) => {
  const board = await boardsService.update(req.params.id, req.body);
  if (board) {
    res.status(200).send(board);
  } else res.status(400).send(`Board with id ${req.params.id} not found`);
});

router.route('/:id').delete(async (req, res) => {
  const board = await boardsService.remove(req.params.id);

  if (board) {
    res.status(204).send('Board has been deleted');
  } else res.status(404).send(`Board with id ${req.params.id} not found`);
});

module.exports = router;
