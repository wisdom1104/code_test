//1
function solution(s) {
  let answer = true;
  let len = s.length;
  if(len==4||len==6){
      for(i=0; i<len; i++){
          if (isNaN(Number(s[i]))) return false;
      }
  }else return false;
  return answer;
}


//2
function solution(s) {
  var answer = true;
  if (s.length === 4 || s.length === 6) {
    for (let i = 0, len = s.length; i < len; i++) {
      if (!Number.isInteger(parseInt(s[i], 10))) return false;
    }
  } else return false;

  return answer;
}



