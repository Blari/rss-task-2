const User = require('./user.model');

const Users = [
  {
    id: '123',
    name: 'USER1',
    login: 'user',
    password: 'P@55w0rd',
  },
  {
    id: '234',
    name: 'USER2',
    login: 'user',
    password: 'P@55w0rd',
  },
  {
    id: '456',
    name: 'USER3',
    login: 'user',
    password: 'P@55w0rd',
  },
];

const getAll = async () => Users;
const get = async (id) => Users.find((user) => user.id === id);
const create = async (user) => {
  const newUser = new User(user);
  Users.push(newUser);
  return newUser;
};
const update = async (id, user) => {
  const oldUser = Users.find((el) => el.id === id);
  const oldUserIndex = Users.indexOf(oldUser);
  const { name, login, password} = user;

  Users[oldUserIndex].name = name;
  Users[oldUserIndex].login = login;
  Users[oldUserIndex].password = password;

  return Users[oldUserIndex];
};
const remove = async (id) => {
  if (Users.find(user => user.id === id)) {
    return id
  }
  return id;
};

module.exports = { getAll, get, create, update, remove };
