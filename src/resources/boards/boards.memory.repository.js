const BoardModel = require('./boards.model');

const Boards = [
  {
    id: '123',
    title: 'Works',
    columns: [
      {
        columnID: 1231,
        title: 'UI',
        order: 0
      },
      {
        columnID: 1232,
        title: 'UX',
        order: 1
      },
    ]
  },
  {
    id: '234',
    title: 'Hobby',
    columns: [
      {
        columnID: 2341,
        title: 'Programming',
        order: 0
      },
      {
        columnID: 2342,
        title: 'Gaming',
        order: 1
      },
    ]
  },
  {
    id: '345',
    title: 'Family',
    columns: [
      {
        columnID: 3451,
        title: 'Wife',
        order: 0
      },
      {
        columnID: 3452,
        title: 'Children',
        order: 1
      },
    ]
  }
];

const getAll = async () => Boards;
const get = async (id) => Boards.find((board) => board.id === id);
const create = async (board) => {
  const newBoard = new BoardModel(board);
  Boards.push(newBoard);
  return newBoard;
};
const update = async (id, board) => {
  const oldBoard = Boards.find((el) => el.id === id);
  const oldUBoardIndex = Boards.indexOf(oldBoard);

  Boards[oldUBoardIndex].title = board.title;
  Boards[oldUBoardIndex].columns = board.columns;

  return Boards[oldUBoardIndex];
};
const remove = async (id) => {
  if (Boards.find(board => board.id === id)) {
    const oldUser = Boards.find((el) => el.id === id);
    const oldUserIndex = Boards.indexOf(oldUser);
    Boards.splice(oldUserIndex, 1);
    return true;
  }
  return false;
};

module.exports = { getAll, get, create, remove, update, Boards };
