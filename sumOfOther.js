function sumOfOther(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr.reduce((a, b) => a + b, 0)-arr[i]);
    }
    return result;
}