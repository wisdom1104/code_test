function solution(a, b) {
  let answer = '';
  let Week = ["THU","FRI","SAT","SUN","MON","TUE","WED"];
  let month =[31,29,31,30,31,30,31,31,30,31,30,31];
  let sum = 0;
  for(var i =0;i<a-1;i++){
      sum += month[i];
  }
  sum += b;
  let day = (sum % 7);
  answer = Week[day];
  return answer;
}