function rotateArray(input, n) {
  var rotatedArray;

  rotatedArray = input.slice(-1 * n);
  
  for (i = 0; i < input.length - n; i++) {
    rotatedArray.push(input[i]);
  }

  return rotatedArray;
}