//Product of two numbers
function prod(x, y) {
    if (y == 0) return 0
    return (x + prod(x, y - 1))
}
console.log(prod(5, 4))
console.log("Robot")
//Robot
function robot(n, a, b) {
    if (n <= 0) { return; }
    robot(n - 1, b, b + n)
    console.log(n, a, b)
    robot(n - 1, b, a + n)
}
robot(3, 5, 3)
console.log("Dec to Binary")
// Decimal to Binary
function f(n) {
    if (n == 0) return;
    console.log(n % 2)
    f(Math.floor(n / 2))
}
f(15)