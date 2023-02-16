//1
function solution(s){
  let str= s.toLowerCase();
  let answer = 0
  for(let i = 0; i <s.length; i++){
      if(str[i]==="p") {
        answer+=1;
      }
      else if(str[i]=== "y") {
        answer-=1;
      }
  }
  if (answer==0){
    return true;
  }else{
    return false;
  }
}


//2
function solution(s){
  let str= s.toLowerCase();
  let answer = 0
  for(let i = 0; i <s.length; i++){
      if(str[i]==="p") count++;
      else if(str[i]=== "y") count--;
  }
  return answer === 0 ? true : false
}