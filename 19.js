function solution(n) {
    var answer = 0;
    const root = Math.root(n);
    if (root % 1 !== 0) { 
        answer = -1;
    } else {
        answer = Math.pow(root+1,2); 
    }
    return answer
}