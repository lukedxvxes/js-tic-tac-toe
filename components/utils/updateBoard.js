import { PLAYER_SYM } from '../board.constants';

export const updateBoard = (target, currentPlayer, currentMoves) => {
  const row = target.getAttribute('data-row');
  const col = target.getAttribute('data-column');
  target.innerHTML = PLAYER_SYM[currentPlayer];

  currentMoves[currentPlayer].push(`${row},${col}`);
};
