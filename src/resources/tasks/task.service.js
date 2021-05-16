const tasksRepo = require('./task.memory.repository');

const getAll = boardID => tasksRepo.getAll(boardID);
const get = (boardID, taskID) => tasksRepo.get(boardID, taskID);
const create = task => tasksRepo.create(task);
const update = (boardID, taskID, body) => tasksRepo.update(boardID, taskID, body);
const remove = (boardID, taskID) => tasksRepo.remove(boardID, taskID);

module.exports = { getAll, get, create, update, remove };
