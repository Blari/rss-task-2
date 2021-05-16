const uuid = require('uuid').v4;

class User {
  constructor({
    taskID = uuid(),
    title = 'task title',
    description = "string",
    userId = "string",
    boardId = "string",
    columnId = "string"
  } = {}) {
    this.taskID = taskID;
    this.title = title;
    this.description = description;
    this.userID = userId;
    this.boardID = boardId;
    this.columnID = columnId;
  }
}

module.exports = User;
