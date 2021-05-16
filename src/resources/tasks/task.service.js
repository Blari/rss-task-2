const tasksRepo = require('./task.memory.repository');

const getAll = boardID => tasksRepo.getAll(boardID);
const get = (boardID, taskID) => tasksRepo.get(boardID, taskID);
const create = task => tasksRepo.create(task);
const update = (id, user) => tasksRepo.update(id, user);
const remove = (id) => tasksRepo.remove(id);

module.exports = { getAll, get, create, update, remove };
