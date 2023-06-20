export const PLAYERS = {
  player1: 1,
  player2: 2,
};

export const PLAYER_SYM = {
  [PLAYERS.player1]: 'X',
  [PLAYERS.player2]: 'O',
};

export const DEFAULT_BOARD = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

export const WINNING_COMBOS = [
  //horizontal
  ['0,0', '0,1', '0,2'],
  ['1,0', '1,1', '1,2'],
  ['2,0', '2,1', '2,2'],
  //vertical
  ['0,0', '1,0', '2,0'],
  ['0,1', '1,1', '2,1'],
  ['0,2', '1,2', '2,2'],
  //diagonal
  ['0,0', '1,1', '2,2'],
  ['0,2', '1,1', '2,0'],
];
