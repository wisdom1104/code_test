function solution(s) {
    let answer=''
  let strs = [...s].sort();
  let rts = strs.reverse();
  for(let i=0; i<rts.length; i++){
      answer+=rts[i];        
  }
    return answer;
}