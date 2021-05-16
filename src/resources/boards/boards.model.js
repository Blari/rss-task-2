const uuid = require('uuid').v4;
const Column = require('../helpers/column.model')

class Board {
  constructor({
    id = uuid(),
    title = 'title',
    columns = [{}],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = new Column(...columns);
  }
}

module.exports = Board;
