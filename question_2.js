//O(N*N)
function find_chars(string1, string2) {
  var commonCharacters = '',
    firstStringLength = string1.length,
    secondStringLength = string2.length,
    i, j;

  for (i = 0; i <= firstStringLength - 1; i++) {
    for (j = 0; j <= secondStringLength - 1; j++) {
      commonCharacters += string1.charAt(i) === string2.charAt(j) ? string1.charAt(i) : '';
    }
  }

  return commonCharacters;
}

//O(N)
function find_chars_N(string1, string2) {
  var commonCharacters = '',
    firstStringLength = string1.length,
    i, j;

  for (i = 0; i <= firstStringLength - 1; i++) {
    commonCharacters += string2.search(string1.charAt(i)) >= 0 ? string1.charAt(i) : '';
  }

  return commonCharacters;
}