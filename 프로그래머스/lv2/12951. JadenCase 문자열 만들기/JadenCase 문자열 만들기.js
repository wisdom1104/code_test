function solution(s) {
    let answer = '';
    let list = s.split(" ")
    for (let i=0; i<list.length; i++){
        for (let j=0; j<list[i].length; j++){
            if(j===0){
            answer+=list[i][0].toUpperCase()
            }else{
            answer+=list[i][j].toLowerCase()
            }
        }answer += " ";

    }
    answer=answer.slice(0,-1)
    return answer;
}