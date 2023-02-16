//1
function solution(phone_number) {
  let answer = '';
  let hidden = "*".repeat(phone_number.length-4);
  let number = phone_number.slice(phone_number.length-4);
  return hidden+number;
}


//2
function solution(phone_number) {
  let answer = "*".repeat(phone_number.length-4)
                +phone_number.slice(-4);
  return answer;
}