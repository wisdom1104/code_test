//1
function solution(numbers) {
  let answer = 0;
  for(let i=0; i<=9; i++){
    if(numbers.includes(i)){
      answer+=0;
    }else{
      answer+=i;
    }
  }
  return answer;
}

//2
function solution(numbers) {
  let answer = 0;
  for(let i=0; i<=9; i++){
    if(!numbers.includes(i)) answer += i;
  }
  return answer;
}