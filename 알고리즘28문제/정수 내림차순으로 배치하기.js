function solution(n) {
  var answer = '';
  let str = String(n);
  let strs = [...str].sort();
  let rts = strs.reverse();
  for(let i=0; i<rts.length; i++){
      answer+=(Number(rts[i]));        
  }
  return +answer;
}