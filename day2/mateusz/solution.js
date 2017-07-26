function reverse(string) {
  var o = [];
  for (var i = string.length - 1, j = 0; i >= 0; i--, j++)
    o[j] = string[i];
  return o.join('');
}

function reverse(string) {
  return string.split('').reverse().join('');
}

// I understand more ways to solve this but i don't know if i would write it without help. So those are two which i understand and also can write