import './board.scss';
import { generateAndAppendTile } from './utils/generateAndAppendTile';
import { checkHasWon } from './utils/checkHasWon';
import { PLAYERS } from './board.constants';
import { endGame } from './utils/endGame';
import { checkIsTied } from './utils/checkIsTied';
import { updateBoard } from './utils/updateBoard';

let currentPlayer = PLAYERS.player1;

const currentMoves = {
  [PLAYERS.player1]: [],
  [PLAYERS.player2]: [],
};

const handleClick = (e) => {
  const target = e.target;
  if (target.innerHTML !== '') return;

  updateBoard(target, currentPlayer, currentMoves);

  const playerHasWon = checkHasWon(currentMoves);
  const gameIsTied = checkIsTied(currentMoves);

  if (playerHasWon) {
    console.log(`player ${playerHasWon} has won!`);
    endGame();
  } else if (gameIsTied) {
    console.log('game is tied, no one wins');
    endGame();
  } else {
    currentPlayer =
      currentPlayer === PLAYERS.player1 ? PLAYERS.player2 : PLAYERS.player1;
  }
};

export const renderBoard = (wrapperEl, defaultBoard, row = -1) => {
  for (const [i, item] of defaultBoard.entries()) {
    if (Array.isArray(item)) {
      row++;
      renderBoard(wrapperEl, item, row);
    } else {
      //   console.log({ i, item, row });
      generateAndAppendTile({
        row,
        column: i,
        eventHandler: handleClick,
        wrapperEl,
      });
    }
  }
};
