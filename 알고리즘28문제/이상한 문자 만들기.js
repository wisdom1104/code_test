function solution(s) {
  var answer = '';
  let t = s.split(' ');
  for (let i = 0; i<t.length; i++){
      for (let j = 0; j<t[i].length; j++){
          if(j%2==0){
              answer += t[i][j].toUpperCase();
          } else answer += t[i][j];
      } answer += " ";
  }
  answer=answer.slice(0, -1);
  return answer;
}