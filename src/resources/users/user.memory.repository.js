const User = require('./user.model');

const Users = [
  {
    id: "123",
    name: 'USER1',
    login: 'user',
    password: 'P@55w0rd'
  },
  {
    id: "234",
    name: 'USER2',
    login: 'user',
    password: 'P@55w0rd'
  },
  {
    id: "456",
    name: 'USER3',
    login: 'user',
    password: 'P@55w0rd'
  }
];

const getAll = async () => Users;
const get = async (id) => {
  const userById = Users.find(user => user.id === id);

  // if (!userById) { res.status(404).send(new Error('Нет такого пользователя') )}

  return userById;
};
const create = async (user) => {
  const newUser = new User(user);
  Users.push(newUser)
  return newUser;
};


module.exports = { getAll, get, create };
