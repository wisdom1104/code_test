function solution(s) {
    const list = [];

      for(let i = 0 ; i < s.length ; i++ ){
        if( !list.length || list[list.length-1] !== s[i] ) list.push(s[i]);
          else list.pop();
    }

  return list.length ? 0 : 1;
}