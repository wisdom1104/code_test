//1
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]), b = Number(n[1]);
  for (let i = 0; i < b; i++) {
    let s = "";
    for (let j = 0; j < a; j++) {
      s = s + "*";
    }
    console.log(s);
  }
});

//*2
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const row = '*'.repeat(a)
     //repeat() 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열 반환함.
    for(let i =0; i < b; i++){
        console.log(row)
    }
});
