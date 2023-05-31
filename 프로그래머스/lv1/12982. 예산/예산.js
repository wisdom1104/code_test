function solution(d, budget) {
    arr=d.sort((a,b)=>a-b)
    let sum = 0;
    let count = 0;
    for (let i = 0; i<arr.length; i++) {
        sum+=arr[i]
        if(sum <= budget){
            count ++
        }
    }
    return count;
}