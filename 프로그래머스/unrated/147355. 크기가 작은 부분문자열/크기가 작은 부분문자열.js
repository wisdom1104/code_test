function solution(t, p) {
    let len = p.length;
    let count = 0
    for(let i=0; i<t.length; i++){
        let a = t.slice(i,i+len)
        if(a.length===len && a<=p){
            count++
        }
    }
    return count;
}