function solution (N) {
  let binary = N.toString(2);
  let maxGap = 0;
  let currentGap = 0;

  for(let digit of binary) {
    if(digit === '0') {
      currentGap++;
    } else {
      maxGap = Math.max(currentGap, maxGap)
      currentGap = 0;
    }
  }

  console.log(binary)

  return maxGap;
}