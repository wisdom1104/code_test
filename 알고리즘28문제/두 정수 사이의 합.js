//1
function solution(a, b) {
  let answer = 0;
  if(a<=b){
    for(let i=a; i<=b;i++){
        answer += i;
    }
  }
  else{
      for(let j=b; j<=a; j++){
          answer += j;
      }
  }
  return answer;
}

//2
function solution(a, b) {
  let answer = 0;
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  for (let i=min; i<=max; i++){
    answer+=i;
  }
  return answer;
}