const uuid = require('uuid').v4;

class Column {
  constructor({
    id = uuid(),
    title = 'Column Title',
    order = 0
  } = {}) {
    this.columnID = id;
    this.title = title;
    this.order = order;
  }
}

module.exports = Column;
