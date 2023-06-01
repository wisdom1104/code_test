function solution(s){
const list = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            list.push("(");
        } else if (s[i] === ")") {
            if (list.length === 0) {
                return false;
            }
            list.pop();
        }
    }

    return list.length === 0;
}