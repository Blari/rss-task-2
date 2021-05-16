

const Tasks = [
  {
    id: 1,
    title: 'title1',
    order: 0,
    description: 'First Task',
    userId: 1,
    boardId: 1,
    columnId: 1
  },
  {
    id: 2,
    title: 'title2',
    order: 1,
    description: 'Second Task',
    userId: 2,
    boardId: 2,
    columnId: 2
  },
  {
    id: 3,
    title: 'title3',
    order: 2,
    description: 'Third Task',
    userId: 2,
    boardId: 2,
    columnId: 1
  },
];

const getAll = async (boardID) => Tasks.filter(el => el.boardId === boardID);
const get = async (boardID, taskID) => Tasks.filter(el => el.boardId === boardID).find(el => el.id === taskID);
// const create = async (user) => {
//   const newUser = new User(user);
//   Users.push(newUser);
//   return newUser;
// };
// const update = async (id, user) => {
//   const oldUser = Users.find((el) => el.id === id);
//   const oldUserIndex = Users.indexOf(oldUser);
//   const { name, login, password} = user;
//
//   Users[oldUserIndex].name = name;
//   Users[oldUserIndex].login = login;
//   Users[oldUserIndex].password = password;
//
//   return Users[oldUserIndex];
// };
// const remove = async (id) => {
//   if (Users.find(user => user.id === id)) {
//     const oldUser = Users.find((el) => el.id === id);
//     const oldUserIndex = Users.indexOf(oldUser);
//     Users.splice(oldUserIndex, 1);
//     return true;
//   }
//   return false;
// };

module.exports = { getAll, get  };
