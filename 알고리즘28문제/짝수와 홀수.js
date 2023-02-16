//1
function solution(num) {
  let answer = '';
  if (num%2===0){
      answer+= "Even";
  }else{
      answer+= "Odd";
  }
  return answer;
}

//2
function solution(num) {
  let answer = '';
  return num%2===0?"Even":answer+= "Odd";
}