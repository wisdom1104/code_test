function solution(s, n) {
    let arr = s.split('')
    let a = [];
    let sum = [];
    let list = [];
    for(let i = 0; i<arr.length; i++){
            a.push(arr[i].charCodeAt())
        if(a[i]!==32){
                if(a[i]>64&&a[i]<91&&
                    a[i]+n>90
                   || a[i]+n>122){
                sum.push(a[i]+n-26)
                }else{
                    sum.push(a[i]+n)
                }
        }else if(a[i]===32){
            sum.push(a[i])
        }
    list.push(String.fromCharCode(sum[i]))
    }
    
    return list.join("");
}