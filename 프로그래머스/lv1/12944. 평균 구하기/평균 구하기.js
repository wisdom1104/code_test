// //1
// function solution(arr) {
//   let answer = 0;
//   for(let i=0; i < arr.length; i++){
//       answer += arr[i];       
//   }
//   return answer/arr.length;
// }

// //2
// function solution(arr) {
//   let answer = arr.reduce((a,b)=>a+b,0);
//   return answer/arr.length;
// }


//*3
function solution(arr) {
  return arr.reduce((a,b)=>a+b)/arr.length;
}