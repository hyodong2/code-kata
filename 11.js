function average(arr) {
    if (arr.length === 0) return 0;
    let sum = arr.reduce((a, b) => a + b, 0);
    return sum / arr.length;
}