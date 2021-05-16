const uuid = require('uuid').v4;

class Task {
  constructor({
    taskId = uuid(),
    title = "string",
    order = 0,
    description = "string",
    userId = "string",
    boardId = "string",
    columnId = "string"
  } = {}) {
    this.taskId = taskId;
    this.titke = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static toResponse(tasks){
    const taskCleaned = [];
    tasks.forEach(el => {
      const { id, title, order, description, userId } = el;
      taskCleaned.push({ id, title, order, description, userId })
    })
    return taskCleaned;
  }
}

module.exports = Task;
