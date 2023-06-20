import { PLAYERS, WINNING_COMBOS } from '../board.constants';

export const checkHasWon = (currentMoves) => {
  const player1 = WINNING_COMBOS.some((combo) =>
    combo.every((move) => currentMoves[PLAYERS.player1].includes(move))
  );

  const player2 = WINNING_COMBOS.some((combo) =>
    combo.every((move) => currentMoves[PLAYERS.player2].includes(move))
  );

  if (player1) {
    return 1;
  } else if (player2) {
    return 2;
  }

  return 0;
};
