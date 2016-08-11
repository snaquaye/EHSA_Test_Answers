function gcm(a, b) {
  return b ? gcm(b, a % b) : Math.abs(a);
}

function lcmOfTwo(a, b) {
  return (a * b) / gcm(a, b);
}

function lcm(input) {
  calculatedLCM = 1;

  input.sort(function (a, b) {
    return a - b;
  });

  for (var i = 0; i < input.length; i++) {
    calculatedLCM = lcmOfTwo(calculatedLCM, input[i]);
  }

  return calculatedLCM;
}