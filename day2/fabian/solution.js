// 1. Write a function:
//     function solution(S);
// that, given a string S, returns a string that represents the reverse of that string.
// For example, given S = "welcome" your function should return "emoclew"

function solution(S) {
  return S.split("").reverse().join("");
}

function solution(S) {
  for (var i = S.length - 1, o = ''; i >= 0; o += S[i--]) { }
  return o;
}
