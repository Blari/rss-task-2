const TaskModel = require('./task.model');

const Tasks = [

];

const getAll = async (boardID) => Tasks.filter(el => el.boardId === boardID);
const get = async (boardID, taskID) => Tasks.filter(el => el.boardId === boardID).find(el => el.id === taskID);
const create = async (task) => {
  const newTask = new TaskModel(task);
  Tasks.push(newTask);
  return newTask;
};
const update = async (boardID, taskID, body) => {
  const oldTask = Tasks.find((el) => el.id === taskID);
  const taskIndex = Tasks.indexOf(oldTask);
  const { title, order, description, userId, boardId, columnId} = body;

  Tasks[taskIndex].title = title;
  Tasks[taskIndex].order = order;
  Tasks[taskIndex].description = description;
  Tasks[taskIndex].userId = userId;
  Tasks[taskIndex].boardId = boardId;
  Tasks[taskIndex].columnId = columnId;

  return Tasks[taskIndex];
};
const remove = async (boardID, taskID) => {
  if (Tasks.find(task => task.id === taskID)) {
    const oldTask = Tasks.find((el) => el.id === taskID);
    const oldTaskIndex = Tasks.indexOf(oldTask);
    Tasks.splice(oldTaskIndex, 1);
    return true;
  }
  return false;
};

module.exports = { getAll, get, update, remove, create, Tasks  };
