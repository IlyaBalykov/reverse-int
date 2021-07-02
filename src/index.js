module.exports = function reverse (n) {
    let result = "";
    let x = n.toString();
    for (let i = x.length - 1; i >= 0 ; i--) {
        if (x[i] !== "-") {
            result += +x[i];
        }
    }
    result = Number(result);
    return result
}
