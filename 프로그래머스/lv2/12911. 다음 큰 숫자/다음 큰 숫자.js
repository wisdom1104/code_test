function solution(n) {
    let arr = n.toString(2).split(''); 
    let count = arr.filter((one)=>one==='1').length;
    let item = 0;
    while(count!==item){ 
        ++n; 
        item = n.toString(2).split('').filter((one)=>one==='1').length; 
    }
    return n;
}