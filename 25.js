function solution(arr) {

	let answer = [];
	if (arr.length <= 1){
		return [-1]
	} else {
		let minNum = Math.min(arr)
		let idx = arr.indexOf(minNum)
		arr.splice(idx,1)
    	}
    
    return answer;
}