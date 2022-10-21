// after the first jump, at position 10 + 30 = 40
// after the second jump, at position 10 + 30 + 30 = 70
// after the third jump, at position 10 + 30 + 30 + 30 = 100

let x = 10;
let y = 110;
let d = 30;

function solution(X, Y, D) {
  return Math.round((Y - X) / D);
}

solution(x, y, d);
