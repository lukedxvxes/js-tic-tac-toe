import { DEFAULT_BOARD } from '../board.constants';

export const checkIsTied = (currentMoves) => {
  return (
    currentMoves[1].concat(currentMoves[2]).length ===
    DEFAULT_BOARD.flat().length
  );
};
