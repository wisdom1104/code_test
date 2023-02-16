//1
function solution(x, n) {
  var answer = [];
  let add = x;
  for (let i = 0; i < n; i++) {
    answer.push(x);
    x += add;
  }
  return answer;
}


//2
function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x*i);
  }
  return answer;
}
