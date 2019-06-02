export class Utils {
  static isGameOver(grid) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    const flatGrid = [...grid[0], ...grid[1], ...grid[2]];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (flatGrid[a] && flatGrid[a] === flatGrid[b] && flatGrid[a] === flatGrid[c]) {
        return true;
      }
    }
    return false;
  }
}