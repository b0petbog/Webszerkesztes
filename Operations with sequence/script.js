function calc(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = arr[i] * arr[i];
        }
        if ((i + 1) % 3 === 0) {
            arr[i] = arr[i] * 3;
        }
        if ((i + 1) % 5 === 0) {
            arr[i] = arr[i] * -1;
        }
        sum += arr[i];
    }
    return sum;
}