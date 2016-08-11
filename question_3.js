function compactArray(input) {
  var output = [],
    i;

  for (i = 0; i < input.length; i++) {
    if (output.indexOf(input[i]) < 0) {
      output.push(input[i]);
    }
  }

  return output;
}