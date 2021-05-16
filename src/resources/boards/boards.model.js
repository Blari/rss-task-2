const uuid = require('uuid').v4;

class Board {
  constructor({
    id = uuid(),
    title = 'title',
    columns = [
      {
        columnID: uuid(),
        "columnTitle": "string",
        "order": 0
      }
    ]
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

module.exports = Board;
