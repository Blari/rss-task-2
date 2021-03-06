const boardsRepo = require('./boards.memory.repository');

const getAll = () => boardsRepo.getAll();
const get = (id) => boardsRepo.get(id);
const create = board => boardsRepo.create(board);
const update = (id, board) => boardsRepo.update(id, board);
const remove = (id) => boardsRepo.remove(id);

module.exports = { getAll, get, create, update, remove };
