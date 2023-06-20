import './style.scss';
import { renderBoard } from './components/board';
import { DEFAULT_BOARD } from './components/board.constants';
document.querySelector('#app').innerHTML = /*html */ `
  <div>
    <h1>TicTacToe</h1>
    <div id="board"></div>
  </div>
`;
const boardWrapper = document.querySelector('#board');

renderBoard(boardWrapper, DEFAULT_BOARD);
