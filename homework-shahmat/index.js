let column = [];
let row = 8;
let turn = 8;

for (let a = 0; a < turn; a++) {
  column[a] = [];
  for (let b = 0; b < row; b++) {
    if ((a % 2 == 0 && b % 2 == 0) || (a % 2 != 0 && b % 2 != 0)) {
      column[a][b] = "black";
    } else {
      column[a][b] = "white";
    }
  }
}
console.log(column);
