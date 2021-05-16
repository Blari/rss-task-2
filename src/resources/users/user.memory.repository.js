const User = require('./user.model');
const Tasks = require('../tasks/task.memory.repository');

const Users = [
  {
    id: '1',
    name: 'USER1',
    login: 'user',
    password: 'P@55w0rd',
  },
  {
    id: '2',
    name: 'USER2',
    login: 'user',
    password: 'P@55w0rd',
  },
  {
    id: '3',
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
    const oldUser = Users.find((el) => el.id === id);
    const index = Users.indexOf(oldUser);
    Users.splice(index, 1);

    const tasksToRemove = Tasks.Tasks.filter(task => task.userId === id);

    if (tasksToRemove.length > 0) {
      tasksToRemove.forEach(task => {
        // eslint-disable-next-line no-param-reassign
        task.userId = null;
      })
    }
    return true;
  }
  return false;
};

module.exports = { getAll, get, create, update, remove };
