function solution(n){
  var answer = 0;
  str= String(n);
  console.log(str);
  for(let i= 0; i<str.length; i++){
      answer+=Number(str[i]);
  }
  return answer;
}