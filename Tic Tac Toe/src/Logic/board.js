import { WINNER_COMBOS } from "../Constants";

export const checkWinnerFrom = (boardToCheck) => {
  for (const combos of WINNER_COMBOS) {
    const [a, b, c] = combos;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[b] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  return null;
};

export const checkGameEnd = (newBoard) => {
  return newBoard.every((square) => square !== null);
};
