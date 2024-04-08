function minSum(arr) {
    arr.sort((a, b) => a - b);
    let sum = 0;
    const length = arr.length;
    for (let i = 0; i < length / 2; i++) {
        sum += arr[i] * arr[length - 1 - i];
    }
    return sum;
}