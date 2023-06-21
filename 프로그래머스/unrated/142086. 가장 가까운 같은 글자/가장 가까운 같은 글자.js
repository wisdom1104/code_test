function solution(s) {
    let answer = [];
    for(let i =0 ; i< s.length ; i++){
        let arr = s.slice(0,i)
        if(arr.lastIndexOf(s[i])===-1){
            answer.push(-1)
        }else{
             answer.push(i-arr.lastIndexOf(s[i]))
        }
    }    
    return answer;
}