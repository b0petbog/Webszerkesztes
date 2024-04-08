function repeats(arr) {
    const singles = arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num));
    return singles.reduce((sum, num) => sum + num, 0);
}