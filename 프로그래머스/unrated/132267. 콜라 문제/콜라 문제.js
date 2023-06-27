function solution(a, b, n) {
    var answer = 0;
    let count =0;
    while(n>=a){
        count = Math.floor(n/a)*b;
        answer += count;
        n = count + (n%a);
    }
    return answer;
}