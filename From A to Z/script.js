function generateLetterRange(range) {
    const [start, end] = range.split('-');
    const startCharCode = start.charCodeAt(0);
    const endCharCode = end.charCodeAt(0);
    let result = '';
    for (let charCode = startCharCode; charCode <= endCharCode; charCode++) {
        result += String.fromCharCode(charCode);
    }
    return result;
}