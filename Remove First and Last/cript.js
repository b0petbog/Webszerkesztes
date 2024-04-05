function array(str) {
    const arr = str.split(',');
    const removed = arr.slice(1, -1);
    const result = removed.join(' ');
    return result === '' ? null : result;
}