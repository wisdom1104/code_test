function solution(sizes) {
    let biggerSideMax = 0;
    let smallSideMax = 0;

    for (let len of sizes) {
        if(len[0] > len[1]){
            if (biggerSideMax<len[0]) biggerSideMax = len[0];
            if(smallSideMax < len [1]) smallSideMax = len[1];
        }else{
            if (biggerSideMax<len[1]) biggerSideMax = len[1];
            if(smallSideMax < len [0]) smallSideMax = len[0];
        }
    };

    return biggerSideMax*smallSideMax;
}