//1
function solution(price, money, count) {
  var answer = 0;
  let sum=0;
  for (i = 1; i <= count; i++) {
  sum += price * i;
  }
  if (sum<= money) answer=0;
  else{
      answer= sum-money;
  }
  return answer;
}


//2
function solution(price, money, count) {
  let sum = 0;
  for(let i = 1; i <= count; i++) {
      sum += (i * price)
  }
  
  return sum < money ? 0 : sum - money;
}
