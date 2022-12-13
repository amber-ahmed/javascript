 function fibo(n) {
    if (n == 2 ) return [0, 1];
    else if (n == 1) return [0];
    else {
    var s = fibo(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
    }
}
var n = 5
console.log(fibo(n))