//1
function solution(s) {
  let answer = '';
  if(s.length%2!=0){
     answer=s[Math.floor(s.length/2)];
  }else{
      answer=s[s.length/2-1]+s[s.length/2];
  }
  return answer;
}

//2
function solution(s) {
  let answer = '';
  s.length%2!=0? answer = s[Math.floor(s.length/2)]
  :answer = s[s.length/2-1]+s[s.length/2];
  return answer;
}