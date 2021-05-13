const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const get = (id, res) => usersRepo.get(id, res);
const create = user => usersRepo.create(user);

module.exports = { getAll, get, create };
